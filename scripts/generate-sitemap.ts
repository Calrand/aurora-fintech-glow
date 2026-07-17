// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  ASK_ARTICLES,
  GUIDES,
  RESEARCH,
  CONCEPTS,
  PLATFORM_DOCS,
  CATEGORIES,
} from "../src/data/knowledge";

const BASE_URL = "https://squirrelll.ing";

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/what-is-squirrelll.ing", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/download", changefreq: "monthly", priority: "0.9" },
  { path: "/ask", changefreq: "weekly", priority: "0.9" },
  { path: "/money-guides", changefreq: "weekly", priority: "0.9" },
  { path: "/research", changefreq: "monthly", priority: "0.8" },
  { path: "/concepts", changefreq: "monthly", priority: "0.8" },
  { path: "/squirrelll", changefreq: "monthly", priority: "0.8" },
  { path: "/budget-calculator", changefreq: "monthly", priority: "0.8" },
  { path: "/round-up-calculator", changefreq: "monthly", priority: "0.8" },
  { path: "/payment-security", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/delete-account", changefreq: "yearly", priority: "0.2" },
];

const articleEntries: SitemapEntry[] = [
  ...ASK_ARTICLES.map((a) => ({ path: `/ask/${a.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
  ...GUIDES.map((g) => ({ path: `/money-guides/${g.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
  ...RESEARCH.map((r) => ({ path: `/research/${r.slug}`, changefreq: "yearly" as const, priority: "0.7" })),
  ...CONCEPTS.map((c) => ({ path: `/concepts/${c.slug}`, changefreq: "yearly" as const, priority: "0.7" })),
  ...PLATFORM_DOCS.map((p) => ({ path: `/squirrelll/${p.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
];

// Category landings — one per section per category with content
const sectionPaths = [
  { key: "ask", path: "/ask" },
  { key: "guide", path: "/money-guides" },
  { key: "research", path: "/research" },
  { key: "concept", path: "/concepts" },
  { key: "platform", path: "/squirrelll" },
] as const;

const categoryEntries: SitemapEntry[] = [];
for (const c of CATEGORIES) {
  for (const s of sectionPaths) {
    if (c.scopes.includes(s.key)) {
      categoryEntries.push({ path: `${s.path}/category/${c.slug}`, changefreq: "monthly", priority: "0.5" });
    }
  }
}

const entries = [...staticEntries, ...articleEntries, ...categoryEntries];
const today = new Date().toISOString().slice(0, 10);

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
