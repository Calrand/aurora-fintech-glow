
# AI-First Knowledge Platform — Framework Build

Goal: keep the current UI, expand the information architecture, internal linking, metadata, and scalability so the site becomes a semantic knowledge graph across five sections. No mass content generation — I build the framework and seed each section with a few high-quality anchor articles, ready for you to grow in topical clusters.

## Sections

1. `/ask` — one question per page (exists, keep)
2. `/money-guides` — life-situation action plans (exists, keep)
3. `/research` — new. Academic + behavioral finance summaries with citations
4. `/concepts` — new. Neutral evergreen definitions (Microfinance, ROSCA, Susu, Compound Interest, etc.)
5. `/squirrelll` — new. Platform knowledge hub (Daily Pool, Pods, Round-Ups, Fees, Security, Trust)

Each section: index page + article template + category landing pages.

## Unified data model (`src/data/knowledge.ts`)

Add three new content types alongside `AskArticle` and `Guide`:

```text
ResearchSummary  { slug, title, summary, sections[], citations[], categories[], relatedAsk[], relatedGuides[], relatedConcepts[] }
Concept          { slug, term, shortDefinition, longDefinition, examples[], alsoKnownAs[], categories[], relatedAsk[], relatedGuides[], relatedResearch[] }
PlatformDoc      { slug, title, quickAnswer, sections[], faqs[], categories[], relatedAsk[], relatedConcepts[] }
```

Shared fields on every node: `slug, title, quickAnswer/summary, updated, difficulty, categories[], relatedIds[]`. This is what enables the cross-linking.

Expand `CATEGORIES` with the taxonomy you listed (Saving Money, Budgeting, Investing, Microfinance, Behavioral Economics, Financial Psychology, Community Finance, Passive Income, Emergency Funds, Apps, Financial Wellness, Money Habits, Side Hustles, Financial Education). Each category gets a `scope: ('ask'|'guide'|'research'|'concept'|'platform')[]` so it can appear in multiple section indexes.

Add a graph helper:

```text
getRelated(nodeId): { ask[], guides[], concepts[], research[], platform[] }
```

It resolves manual `relatedIds` first, then fills remaining slots by shared categories. Every article page uses this — no page is ever isolated.

## Shared article template

Extract the current AskArticle layout into `<KnowledgeArticle>` so all five sections render identically:

- Breadcrumb: Home → Section → Category → Article
- H1 + Quick Answer card (50–100 words)
- At-a-glance strip: reading time, difficulty, category, last reviewed
- Auto-generated TOC from sections
- Body sections
- Key Takeaways (new — bullet list block)
- FAQs
- References / Citations
- Continue Learning: **Related Questions · Related Guides · Related Concepts · Related Research · Related Platform Features** (grouped, not one flat list)
- Related Searches (Ask only)

Reused by Ask, Guide, Research, Concept, Platform pages.

## Category landing pages

New route `/:section/category/:slug` renders every node in that category across all five types, grouped by type. Header shows category description + node count. Linked from every article's category chip.

## Search

Upgrade the current `/ask` search into a global `/search?q=` page that indexes all five content types and groups results:

```text
Questions (Ask) · Guides · Concepts · Research · Platform · Categories
```

Filters: type, category, difficulty. Client-side (all content is static data) — supports 5k+ nodes fine with a prebuilt index.

## Routes added

```text
/research                       index
/research/:slug                 article
/concepts                       index (A–Z + by category)
/concepts/:slug                 article
/squirrelll                     platform hub
/squirrelll/:slug               platform article
/:section/category/:slug        category landing (ask|money-guides|research|concepts|squirrelll)
/search                         global search
```

## SEO / AI optimization

Every article auto-emits: title, description, canonical, og/twitter, Article + BreadcrumbList + FAQPage schema, plus DefinedTerm on Concept pages and ScholarlyArticle citations on Research pages. Semantic HTML (`<article>`, `<section>`, proper h1/h2/h3). Sitemap generator + `llms.txt` updated to list every node.

## Seed content (framework proof, not bulk)

I'll ship 2–3 anchor articles per new section so linking works end-to-end and you have templates to copy:

- Research: "Save More Tomorrow (Thaler & Benartzi)", "Mental Accounting Matters"
- Concepts: Microfinance, ROSCA, Susu, Daily Pool, Compound Interest, Emergency Fund
- Platform: Daily Pool, Savings Pods, Fees, Security

Existing Ask + Guide articles get `relatedResearch` / `relatedConcepts` / `relatedPlatform` links wired up.

## Out of scope

- No visual redesign — reuse existing tokens, components, spacing
- No auto-generated bulk articles
- No CMS backend — content stays in `src/data/knowledge.ts` (splittable per section later)

## Technical details

- Types + graph helpers live in `src/data/knowledge.ts`; may split into `src/data/knowledge/{ask,guides,research,concepts,platform,categories,graph}.ts` if the file grows past ~1k lines
- `KnowledgeArticle` in `src/components/knowledge/KnowledgeArticle.tsx`; existing `AskArticle` / `GuideArticle` pages become thin wrappers
- Category landing = one shared `CategoryPage` component keyed by section
- Global search = one `SearchPage` component + `buildSearchIndex()` in `knowledge.ts`
- Sitemap script iterates all node arrays; no manual URL lists

Confirm and I'll build it.
