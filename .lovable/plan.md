## Why GSC still sees old metas

Two compounding bugs in the build. Crawlers (Googlebot's initial fetch, GSC's URL Inspection "crawled page" view, ChatGPT, social scrapers) only see the static HTML the server returns. `react-helmet-async` updates the DOM client-side, so it does **not** affect what these crawlers ingest on first fetch.

**Bug 1 — prerender regex silently no-ops.**
`vite.config.ts` → `staticSeoPlugin` builds each route's HTML by regex-replacing `<title>`, `<meta name="description">`, `<meta property="og:title">`, `og:description`, `og:url`, `twitter:title`, `twitter:description` in `dist/index.html`. In the previous cleanup we removed those placeholder tags from `index.html`, so every `.replace()` matches nothing and writes the file unchanged. The prerendered per-route pages ship with **no title and no description** — GSC keeps showing whatever it previously cached.

**Bug 2 — only 4 routes are prerendered.**
`ROUTE_META` only covers `/`, `/what-is-squirrelll.ing`, `/privacy-policy`, `/terms-of-service` (plus a few similar). Every other route (`/about`, `/download`, `/ask`, `/money-guides`, `/research`, `/concepts`, `/about-squirrelll.ing`, all article + category pages) falls through `.htaccess` to the root `index.html`, which also has no per-route tags. Crawlers see the homepage meta (or nothing) for those URLs.

## Fix

Restore placeholder tags in `index.html` so the regex replacement lands, then also make the plugin insert-if-missing so future removals don't silently break SEO again. Then extend the prerender to cover every real route — reusing the same SEO copy that `src/components/SEO.tsx` renders — so GSC's next crawl gets correct static metas for every URL.

### Technical steps

1. **`index.html`** — add fallback tags inside `<head>` (kept generic; the plugin overwrites them per route):
   - `<title>Squirrelll.ing</title>`
   - `<meta name="description" content="…">`
   - `<link rel="canonical" href="https://squirrelll.ing/">`
   - `<meta property="og:title">`, `og:description`, `og:url`, `og:image` (points at `/uploads/og-image.jpg`)
   - `<meta name="twitter:title">`, `twitter:description`, `twitter:image`

2. **`vite.config.ts` — `staticSeoPlugin`**
   - Change each `.replace(regex, tag)` to: if the regex matches → replace, else → insert before `</head>`. Prevents another silent breakage.
   - Add `keywords`, `twitter:image`, `og:image` handling to the writer (mirrors what `SEO.tsx` outputs).
   - Emit a proper `<link rel="canonical">` by replacing the existing one instead of appending a second one (currently a duplicate can slip in).

3. **`vite.config.ts` — extend `ROUTE_META`** with static entries for all main routes so each gets its own prerendered HTML. Titles/descriptions/keywords copied verbatim from the `<SEO>` props already set in each page:
   - `/about`, `/download`, `/payment-security`, `/delete-account`
   - `/ask`, `/money-guides`, `/research`, `/concepts`, `/about-squirrelll.ing`
   - `/budget-calculator`, `/round-up-calculator`
   - Article + category routes: generate entries programmatically from `src/data/knowledge.ts` (`ASK_ARTICLES`, `GUIDES`, `RESEARCH`, `CONCEPTS`, `PLATFORM_DOCS`, `CATEGORIES`) — same source `generate-sitemap.ts` already uses.
   - Each entry provides `title`, `description`, minimal `bodyHtml` (h1 + summary + quick answer where available), and article/breadcrumb JSON-LD.

4. **Verify after build** — spot-check `dist/index.html`, `dist/ask/index.html`, `dist/money-guides/index.html`, and a couple article pages for correct `<title>`, `<meta name="description">`, `<link rel="canonical">`, and `og:*` tags before publishing.

### After deploy

- Publish, then in GSC use **URL Inspection → Test live URL → View crawled page** on `/`, `/about`, and one article — confirm the new `<title>` and description appear in the rendered HTML.
- Click **Request Indexing** on the key URLs to speed recrawl. GSC's normal cache refresh otherwise takes days to weeks.
- Social scrapers (LinkedIn, Facebook, Slack) cache aggressively — use each platform's debugger to force a refresh if previews look stale.

### Not changing

- `SEO.tsx` and per-page `<SEO>` usage stay as-is (still useful for in-app tab titles + JS-executing crawlers).
- No layout, styling, or component changes.
- No new dependencies; no move to Next.js.
