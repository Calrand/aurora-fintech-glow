
# Repositioning Report: Squirrellling Philosophy

This is a read-only report. Nothing on the live site changes unless you approve implementation later.

Three layers to establish everywhere:
- **Squirrellling** — the concept / habit / philosophy
- **Squirrelll.ing** — the platform that enables it
- **Daily Pool** — the flagship experience

---

## 1. Global — Navigation & Header

**File:** `src/components/Navbar.tsx`

Today the navbar shows only a logo + a single "What is Squirrelll.ing?" / "Back to Home" button. To match the new priority order it would need a real nav with:

1. What is Squirrellling?  → `/what-is-squirrelll.ing` (rename H1 to "Squirrellling" concept, keep URL)
2. Daily Pool → new dedicated page `/daily-pool`
3. Ask Squirrelll.ing → `/ask`
4. Money Guides → `/money-guides`
5. Concepts → `/concepts`
6. Research → `/research`
7. About → `/about`

Mobile menu (same file) needs the same list. Light/dark theme logo logic stays.

---

## 2. Homepage — `src/pages/Index.tsx` + child components

Current order: Hero → HeroHighlight → Concept → HowItWorks → Download → FAQ → Waitlist → Footer.

Philosophy-first order would become:

1. **Hero (philosophy-led)** — `src/components/HeroSection.tsx` + `src/i18n/locales/*.json` (`hero.*`)
   - New title: "Money should work quietly."
   - Sub: "Set it once. Let it work in the background. Small daily actions. Background financial progress."
   - Primary CTA: "Start Squirrellling" → scrolls to Daily Pool section (not Download).
   - Remove the "Download Now" framing from the hero.
2. **What is Squirrellling? (concept teaser)** — new section or repurpose `HeroHighlightSection.tsx`. Short definition + link to `/what-is-squirrelll.ing`.
3. **Daily Pool (flagship)** — new large section (new component, e.g. `src/components/DailyPoolSection.tsx`) explaining: fixed small regional contribution, one member/region wins pool minus 12% fee, any day could be your day. CTA → `/daily-pool`.
4. **The Platform (Squirrelll.ing)** — repurpose `ConceptSection`/`HowItWorksSection` to frame the app as "the platform that enables Squirrellling," with Savings Pods demoted to a supporting card, not co-equal.
5. **Knowledge entry points** — cards linking to Ask / Guides / Concepts / Research.
6. **Download** — keep, but reframed as "Begin Squirrellling" not "Download the app."
7. **FAQ + Waitlist + Footer** — keep.

Copy/translation impact: every string in `src/i18n/locales/en.json` (and de/es/fr) under `hero`, plus new keys for the Daily Pool and concept sections.

---

## 3. SEO / Metadata rewrites

**Files:** `src/pages/Index.tsx` (SEO block), `index.html`, `vite.config.ts` (`ROUTE_META` in `staticSeoPlugin`), `src/components/SEO.tsx` (no code change, just inputs).

- Homepage `<title>`: e.g. "Squirrelll.ing — The Home of Squirrellling"
- Homepage description: philosophy-led, mentions Daily Pool as flagship.
- Update matching entries in `ROUTE_META` so prerendered `dist/index.html` and `dist/**/index.html` reflect the new positioning.
- Update JSON-LD in `index.html`:
  - `Organization.description` → philosophy language
  - `WebSite.description` → same
  - New `DefinedTerm` for "Squirrellling" surfaced site-wide (already exists on `/what-is-squirrelll.ing`; promote it globally).
  - FAQPage: refresh answers so the Daily Pool is the lead answer.

---

## 4. New page — `/daily-pool` (flagship)

**New file:** `src/pages/DailyPool.tsx` + route in `src/App.tsx`.

Content sections:
- Concise summary (1–2 sentences)
- Main concept: "What is the Daily Pool?"
- How it works: regional pool, fixed small contribution, one recipient/day, 12% fee
- Why it exists (philosophy tie-in)
- Related Questions / Guides / Concepts / Research (auto-linked from `src/data/knowledge.ts`)
- FAQ block with FAQPage schema
- CTA → Download

SEO: add to `ROUTE_META` in `vite.config.ts`, `scripts/generate-sitemap.ts` (auto if route registered — verify), `scripts/generate-llms.ts`, and `public/llms.txt` regen.

---

## 5. `/what-is-squirrelll.ing` — reframe as the concept home

**Files:** `src/pages/WhatIsSquirrelll.tsx`, `src/components/what-is-squirrelll/HeroSection.tsx`, `ConceptSection.tsx`, `EducationalContent.tsx`, `EcosystemSection.tsx`, `DownloadSection.tsx`, `FAQSection.tsx`.

- Shift H1 and hero copy from "What is Squirrelll.ing?" (platform) to "What is Squirrellling?" (philosophy/habit). Keep the URL.
- Restructure into: Philosophy → History (Susu/Tanda/ROSCA — already present) → Behavioural economics (already present) → How Squirrelll.ing enables it → Daily Pool as flagship → CTA.
- Update the article JSON-LD `headline`, `description`, and `DefinedTerm` accordingly.

---

## 6. Knowledge platform — enforce the standard block on every article

**Files:** `src/data/knowledge.ts`, `src/components/knowledge/KnowledgeArticle.tsx`, `src/components/knowledge/KnowledgeUI.tsx`, plus `src/pages/Ask*.tsx`, `Guides.tsx`, `GuideArticle.tsx`, `Concepts.tsx`, `ConceptArticle.tsx`, `Research.tsx`, `ResearchArticle.tsx`, `Platform.tsx`, `PlatformArticle.tsx`, `CategoryLanding.tsx`.

Every article page must render, in this order:
1. Breadcrumbs (present)
2. Concise summary (present as "Quick Answer" / "At a Glance" — audit that all articles have both)
3. Main question / concept H1
4. Clear explanation body
5. **Related Questions** (from `/ask`)
6. **Related Guides** (from `/money-guides`)
7. **Related Concepts** (from `/concepts`)
8. **Related Research** (from `/research`)
9. References (where applicable — already exists on some)
10. FAQ block with FAQPage schema (currently only on some pages)

Data model change in `src/data/knowledge.ts`: add explicit `relatedQuestions[]`, `relatedGuides[]`, `relatedConcepts[]`, `relatedResearch[]`, `faqs[]`, `references[]` fields per article (some exist, coverage is uneven). Auto-linking logic in `KnowledgeArticle.tsx` should read these instead of guessing.

Prerender impact: `staticSeoPlugin` in `vite.config.ts` already emits article bodies; extend it to include the Related blocks and FAQ JSON-LD so crawlers see them without JS.

---

## 7. Copy audit — replace feature-first language site-wide

Find/replace pass across:
- `src/i18n/locales/en.json` (+ de/es/fr)
- All section components in `src/components/` and `src/components/what-is-squirrelll/`
- `src/pages/About.tsx`, `Download.tsx`, `Index.tsx`
- `index.html` meta + JSON-LD
- `vite.config.ts` `ROUTE_META`
- `public/llms.txt` (auto — regenerates from `scripts/generate-llms.ts`, but the generator's static intro strings need updating)

Language patterns to introduce:
- "Money should work quietly."
- "Set it once."
- "Runs quietly. Works consistently. Connects communities."
- "Background finance."
- "Small daily actions."

Language patterns to remove/soften:
- "Micro-savings app" as the lead descriptor.
- "Download now" as the hero CTA.
- Savings Pods positioned equal to the Daily Pool.

---

## 8. Footer, About, Download

- **`src/components/FooterSection.tsx`**: reorder resource links to match new nav priority; add "Daily Pool" and "What is Squirrellling?" links.
- **`src/pages/About.tsx`**: rewrite mission around the philosophy (quiet, background, community) rather than product features.
- **`src/pages/Download.tsx`**: reframe as "Begin Squirrellling" — the philosophy tie-in above the store buttons.

---

## 9. Sitemap, llms.txt, robots

- `scripts/generate-sitemap.ts` — auto-picks up the new `/daily-pool` route once registered; verify.
- `scripts/generate-llms.ts` — add Daily Pool to the featured section; refresh the intro paragraph with philosophy language.
- `public/robots.txt` — no change.
- `vite.config.ts` `ROUTE_META` — add `/daily-pool` entry so it's prerendered.

---

## 10. Assets

Optional (not required for repositioning, but consistent with "quiet" brand):
- Softer, calmer imagery in the hero (current: app screenshot + "Collection Successful $2,854" card). The success card reads transactional — consider replacing with a "Runs quietly in the background" visual.
- No logo change needed.

---

## Summary of files touched if you approve implementation

Components: `Navbar.tsx`, `HeroSection.tsx`, `HeroHighlightSection.tsx`, `ConceptSection.tsx`, `HowItWorksSection.tsx`, `DownloadSection.tsx` (both), `FooterSection.tsx`, `what-is-squirrelll/*`, `knowledge/KnowledgeArticle.tsx`, `knowledge/KnowledgeUI.tsx`, new `DailyPoolSection.tsx`.

Pages: `Index.tsx`, `WhatIsSquirrelll.tsx`, `About.tsx`, `Download.tsx`, `Ask.tsx`, `AskArticle.tsx`, `Guides.tsx`, `GuideArticle.tsx`, `Concepts.tsx`, `ConceptArticle.tsx`, `Research.tsx`, `ResearchArticle.tsx`, `Platform.tsx`, `PlatformArticle.tsx`, `CategoryLanding.tsx`, new `DailyPool.tsx`.

Data / config: `src/data/knowledge.ts`, `src/i18n/locales/{en,de,es,fr}.json`, `src/App.tsx`, `index.html`, `vite.config.ts`, `scripts/generate-llms.ts`, `public/llms.txt` (regenerated).

No backend changes required. No dependency changes required.
