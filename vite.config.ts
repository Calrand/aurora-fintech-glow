import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://squirrelll.ing";

type RouteMeta = {
  title: string;
  description: string;
  h1: string;
  bodyHtml: string;
  jsonLd?: Record<string, unknown>[];
};

const FAQS = [
  {
    q: "What is Squirrelll.ing?",
    a: "Squirrelll.ing is a community-based micro-fintech platform that helps you save and invest small amounts every day. It combines round-ups on everyday purchases, a shared Daily Pool, and goal-based Savings Pods so building wealth feels effortless.",
  },
  {
    q: "What is the Daily Pool?",
    a: "The Daily Pool is a shared community pot. Every user contributes a tiny fixed amount (for example $0.20-$1) each day. One member from your region receives the total pool (minus a 12% platform fee) to push them toward their savings goal. Each region has its own separate pool.",
  },
  {
    q: "How do round-ups work?",
    a: "When you make a purchase, Squirrelll.ing rounds the amount up to the nearest whole unit and squirrels away the spare change automatically into your Savings Pod. Small amounts add up quickly without changing how you spend.",
  },
  {
    q: "What are Savings Pods?",
    a: "Savings Pods are goal-based mini accounts. You set a target and a schedule (daily or weekly) and we auto-deposit the chosen amount like a subscription. You can run multiple Pods for different goals and withdraw once you reach them.",
  },
  {
    q: "Is Squirrelll.ing crypto or traditional savings?",
    a: "Squirrelll.ing is a traditional micro-savings and community engagement platform. It is not a cryptocurrency product. Your money sits in regulated payment rails.",
  },
  {
    q: "Where can I download Squirrelll.ing?",
    a: "Squirrelll.ing is live on the Google Play Store for Android. The iOS App Store version is coming soon — join the waitlist on the site to be notified at launch.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    name: "Download the App",
    text: "Download Squirrelll.ing from Google Play (Android) or join the iOS waitlist for the App Store launch.",
  },
  {
    name: "Connect Your Payment Method",
    text: "Securely link a payment method so round-ups and scheduled deposits can run automatically.",
  },
  {
    name: "Start Squirrellling",
    text: "Set a Savings Pod goal, opt into the Daily Pool, and let small daily habits grow into real savings.",
  },
];

const homeBody = `
  <header>
    <h1>Squirrelll.ing — Community-Based Micro-Fintech Platform</h1>
    <p>Squirrelll.ing helps you save and invest without thinking about it. We turn spare change from everyday purchases into real savings through automatic round-ups, a shared community <strong>Daily Pool</strong>, and goal-based <strong>Savings Pods</strong>. Available now on Google Play for Android, with iOS coming soon.</p>
  </header>
  <section>
    <h2>How Squirrellling works</h2>
    <ol>
      ${HOW_IT_WORKS_STEPS.map(
        (s, i) => `<li><strong>${i + 1}. ${s.name}.</strong> ${s.text}</li>`,
      ).join("")}
    </ol>
  </section>
  <section>
    <h2>Why people Squirrellll</h2>
    <ul>
      <li><strong>Round-ups:</strong> spare change from every purchase quietly saved.</li>
      <li><strong>Daily Pool:</strong> a tiny daily contribution gives one regional member the full pot (minus a 12% platform fee) to accelerate their goal.</li>
      <li><strong>Savings Pods:</strong> goal-based auto-deposits on a daily or weekly schedule.</li>
      <li><strong>Region-based:</strong> each region runs its own Daily Pool so wins stay local.</li>
    </ul>
  </section>
  <section>
    <h2>Frequently asked questions</h2>
    ${FAQS.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join("")}
  </section>
`;

const whatIsBody = `
  <header>
    <h1>What is Squirrellling?</h1>
    <p>Squirrellling is the simple habit of tucking away small amounts — spare change, a daily dollar, a weekly few — and letting them compound into something meaningful. Squirrelll.ing is the app that automates that habit.</p>
  </header>
  <section>
    <h2>The idea in one paragraph</h2>
    <p>Most people can't save big amounts on demand, but almost everyone can spare a few cents a day. Squirrelll.ing combines three lightweight mechanics — automatic <strong>round-ups</strong> on everyday purchases, a community <strong>Daily Pool</strong> that gives one regional member the full pot each day, and goal-based <strong>Savings Pods</strong> with scheduled auto-deposits — so saving and small-stakes investing become effortless and even a little fun.</p>
  </section>
  <section>
    <h2>The Daily Pool</h2>
    <p>Every participating user contributes a fixed, insignificant amount (for example $0.20-$1) into the Daily Pool. The pool's size scales with the community. One member from your region wins the entire pool that day, minus our 12% platform fee, and can withdraw it or roll it into their Savings Pod. Every region runs its own separate pool, so wins stay close to home.</p>
  </section>
  <section>
    <h2>Savings Pods</h2>
    <p>Set a goal, pick a schedule (daily or weekly), choose a small amount, and Squirrelll.ing will auto-deposit on your schedule like a subscription. Track progress, celebrate milestones, run multiple Pods for different goals, and withdraw the moment you hit your target. If you also win a Daily Pool, you can stack the prize on top of a Pod.</p>
  </section>
  <section>
    <h2>How it compares</h2>
    <p>Round-up apps like Acorns, Stash, Qapital, and Raiz pioneered micro-investing. Squirrelll.ing adds the community Daily Pool on top — a shared, low-stakes way to accelerate someone's goal every single day — so saving stops feeling like a solo grind.</p>
  </section>
  <section>
    <h2>Frequently asked questions</h2>
    ${FAQS.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join("")}
  </section>
`;

const simpleBody = (h1: string, desc: string) => `
  <header><h1>${h1}</h1><p>${desc}</p></header>
`;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to start Squirrellling",
  description:
    "Get started saving with Squirrelll.ing in three steps: download, connect, and squirrell.",
  step: HOW_IT_WORKS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Squirrelll.ing - Community Based Micro-Fintech Platform",
    description:
      "Squirrelll.ing turns spare change and small daily habits into real savings through round-ups, a community Daily Pool, and goal-based Savings Pods. On Google Play now.",
    h1: "Squirrelll.ing — Community-Based Micro-Fintech Platform",
    bodyHtml: homeBody,
    jsonLd: [faqJsonLd, howToJsonLd],
  },
  "/what-is-squirrelling": {
    title: "What is Squirrellling? A Smarter Way to Save, One Step at a Time",
    description:
      "Learn how Squirrellling works: automatic round-ups, a community Daily Pool that pays out daily, and goal-based Savings Pods that make saving effortless.",
    h1: "What is Squirrellling?",
    bodyHtml: whatIsBody,
    jsonLd: [faqJsonLd, howToJsonLd],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Squirrelll.ing",
    description: "How Squirrelll.ing collects, uses, and protects your data.",
    h1: "Privacy Policy",
    bodyHtml: simpleBody(
      "Privacy Policy",
      "How Squirrelll.ing collects, uses, and protects your personal and financial data.",
    ),
  },
  "/terms-of-service": {
    title: "Terms of Service | Squirrelll.ing",
    description: "The terms governing your use of Squirrelll.ing.",
    h1: "Terms of Service",
    bodyHtml: simpleBody(
      "Terms of Service",
      "The terms that govern your use of the Squirrelll.ing app and website.",
    ),
  },
  "/payment-security": {
    title: "Payment Security | Squirrelll.ing",
    description:
      "How Squirrelll.ing keeps your payments and financial data secure.",
    h1: "Payment Security",
    bodyHtml: simpleBody(
      "Payment Security",
      "How Squirrelll.ing safeguards your payments, deposits, and financial data end-to-end.",
    ),
  },
  "/verify-email": {
    title: "Verify Email | Squirrelll.ing",
    description: "Verify your email address for your Squirrelll.ing account.",
    h1: "Verify Email",
    bodyHtml: simpleBody(
      "Verify Email",
      "Confirm your email address to activate your Squirrelll.ing account.",
    ),
  },
  "/delete-account": {
    title: "Delete Account | Squirrelll.ing",
    description: "Request deletion of your Squirrelll.ing account.",
    h1: "Delete Account",
    bodyHtml: simpleBody(
      "Delete Account",
      "Request permanent deletion of your Squirrelll.ing account and associated data.",
    ),
  },
  "/budget-calculator": {
    title: "Free Budget Calculator | Squirrelll.ing",
    description:
      "Plan your monthly budget with our free, easy-to-use budget calculator.",
    h1: "Budget Calculator",
    bodyHtml: simpleBody(
      "Budget Calculator",
      "Plan your monthly income, expenses, and savings with our free budget calculator.",
    ),
  },
  "/round-up-calculator": {
    title: "Round-Up Savings Calculator | Squirrelll.ing",
    description:
      "See how much you could save by rounding up everyday purchases with Squirrelll.ing.",
    h1: "Round-Up Savings Calculator",
    bodyHtml: simpleBody(
      "Round-Up Savings Calculator",
      "Estimate how much spare change you could save each month by rounding up your everyday purchases.",
    ),
  },
};

function staticSeoPlugin(): Plugin {
  return {
    name: "static-seo-routes",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const baseHtml = fs.readFileSync(indexPath, "utf8");

      for (const [route, meta] of Object.entries(ROUTE_META)) {
        const canonical = `${SITE}${route === "/" ? "/" : route}`;
        let html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
          .replace(
            /<meta\s+name="description"[^>]*>/,
            `<meta name="description" content="${meta.description}">`,
          )
          .replace(
            /<meta\s+property="og:title"[^>]*>/,
            `<meta property="og:title" content="${meta.title}">`,
          )
          .replace(
            /<meta\s+name="twitter:title"[^>]*>/,
            `<meta name="twitter:title" content="${meta.title}">`,
          )
          .replace(
            /<meta\s+property="og:description"[^>]*>/,
            `<meta property="og:description" content="${meta.description}">`,
          )
          .replace(
            /<meta\s+name="twitter:description"[^>]*>/,
            `<meta name="twitter:description" content="${meta.description}">`,
          )
          .replace(
            /<meta\s+property="og:url"[^>]*>/,
            `<meta property="og:url" content="${canonical}">`,
          );

        const jsonLdTags = (meta.jsonLd ?? [])
          .map(
            (data) =>
              `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
          )
          .join("");

        html = html.replace(
          "</head>",
          `<link rel="canonical" href="${canonical}" />${jsonLdTags}</head>`,
        );

        // Crawler-visible content inside #root. React will replace this on mount
        // for real users; crawlers and AI tools read the static copy.
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root"><div style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">${meta.bodyHtml}</div></div>`,
        );

        if (route === "/") {
          fs.writeFileSync(indexPath, html);
        } else {
          const outDir = path.join(distDir, route.replace(/^\//, ""));
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(path.join(outDir, "index.html"), html);
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && staticSeoPlugin(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist", emptyOutDir: true },
}));
