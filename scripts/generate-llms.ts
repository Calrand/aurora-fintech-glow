// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/llms.txt.
// Keeps the LLM-facing site index in sync with routes and knowledge content.
import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  ASK_ARTICLES,
  GUIDES,
  RESEARCH,
  CONCEPTS,
  PLATFORM_DOCS,
} from "../src/data/knowledge";

const lines: string[] = [];
const p = (s = "") => lines.push(s);

p("# Squirrelll.ing");
p();
p("> Community-based micro-fintech platform that helps people earn, save, and");
p("> grow money in small daily steps — through the Daily Pool and Savings Pods.");
p();
p('Squirrelll.ing (pronounced "squirrel-ing") is a micro-fintech app built for people with small investment goals or abilities who are looking to earn money online, find a side hustle, build passive income, invest small or large amounts, or use a simple budgeting and savings app. The platform turns tiny daily contributions into real outcomes: automated savings, community rewards, and a real chance to receive the full Daily Pool in your region.');
p();
p("The core idea is simple: small amounts pooled together daily become something real — for someone today, and for you another day. You can contribute to a shared Daily Pool, save toward personal goals with Savings Pods, and use budgeting tools that make consistent saving and earning feel effortless.");
p();
p("## Who Squirrelll.ing is for");
p();
p("- People with small investment goals or abilities who want to start building wealth.");
p("- People looking to earn money online or through a side hustle.");
p("- People interested in passive income and micro-reward opportunities.");
p("- People who want to invest small amounts or start with bigger investments.");
p("- People searching for a budgeting app or savings app to manage daily money.");
p("- Anyone who believes small daily habits can build real financial stability.");
p();
p("## Pages");
p();
p("- [Home](/): Product overview, hero, features, how it works, FAQs, waitlist signup, and download links.");
p("- [What is Squirrellling](/what-is-squirrelll.ing): Long-form explainer of the Squirrellling concept, mechanics, and FAQs.");
p("- [About](/about): Why Squirrelll.ing exists, our mission, and the community-first values behind the platform.");
p("- [Download](/download): Get the Squirrelll.ing app on Google Play (Android) or the App Store (iOS), with device requirements and highlights.");
p("- [Ask Squirrelll.ing](/ask): Searchable, evergreen answers to real financial questions — saving, budgeting, community finance, microfinance, and the Daily Pool.");
p("- [Money Guides](/money-guides): Practical, problem-first guides for real-life money challenges (broke, paycheck-to-paycheck, emergency savings, better habits).");
p("- [Research](/research): Summaries of academic and behavioral-finance research on saving, money habits, and community finance.");
p("- [Concepts](/concepts): Evergreen definitions of core financial ideas — microfinance, ROSCA, compound interest, emergency fund, and more.");
p("- [Squirrelll.ing Platform](/about-squirrelll.ing): Documentation for platform features — Daily Pool, Savings Pods, fees, security.");
p("- [Search](/search): Global search across the knowledge base.");
p();
p("## Tools");
p();
p("- [Budget Calculator](/budget-calculator): Plan monthly budgets across income, expenses, and savings goals.");
p("- [Round-Up Calculator](/round-up-calculator): Estimate how spare-change round-ups add up over time.");
p();

function section(title: string, base: string, items: { slug: string; title: string; summary?: string }[]) {
  p(`## ${title}`);
  p();
  for (const it of items) {
    const desc = it.summary ? `: ${it.summary}` : "";
    p(`- [${it.title}](${base}/${it.slug})${desc}`);
  }
  p();
}

section(
  "Ask Squirrelll.ing",
  "/ask",
  ASK_ARTICLES.map((a) => ({ slug: a.slug, title: a.title, summary: (a as any).summary ?? (a as any).quickAnswer })),
);

section(
  "Money Guides",
  "/money-guides",
  GUIDES.map((g) => ({ slug: g.slug, title: g.title, summary: (g as any).summary ?? (g as any).quickAnswer })),
);

section(
  "Concepts",
  "/concepts",
  CONCEPTS.map((c) => ({ slug: c.slug, title: c.title, summary: (c as any).summary ?? (c as any).quickAnswer })),
);

section(
  "Research",
  "/research",
  RESEARCH.map((r) => ({ slug: r.slug, title: r.title, summary: (r as any).summary })),
);

section(
  "Platform Documentation",
  "/about-squirrelll.ing",
  PLATFORM_DOCS.map((d) => ({ slug: d.slug, title: d.title, summary: (d as any).summary ?? (d as any).quickAnswer })),
);

p("## Core Features");
p();
p("- **Daily Pool**: Contribute a small fixed amount each day (e.g., $0.20–$1, set by your region's currency) into a regional community pool. One participant from your region is randomly selected to receive the entire pool each day, minus a 12% platform fee. Every region has its own separate pool. Participation is optional. The pool runs on a 24-hour cycle that resets at 12 PM local time every day.");
p("- **Savings Pods**: Set personal savings goals and schedules (daily or weekly). Automatic deposits work like a subscription. Track progress, celebrate milestones, and withdraw once you reach your goal. Multiple pods are supported.");
p("- **Regional Pools**: Each region runs its own Daily Pool so the community stays local and impactful.");
p();
p("## Legal & Trust");
p();
p("- [Privacy Policy](/privacy-policy): How user data is collected, used, and protected.");
p("- [Terms of Service](/terms-of-service): User agreement and platform rules.");
p("- [Payment Security](/payment-security): Encryption, PCI posture, and how payments are safeguarded.");
p();
p("## Optional");
p();
p("- [Sitemap](/sitemap.xml): Full machine-readable URL list.");
p(`- Last updated: ${new Date().toISOString().slice(0, 10)}`);
p();

writeFileSync(resolve("public/llms.txt"), lines.join("\n"));
console.log(`llms.txt written (${ASK_ARTICLES.length + GUIDES.length + CONCEPTS.length + RESEARCH.length + PLATFORM_DOCS.length} knowledge entries)`);
