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
    description:
      "How Squirrelll.ing collects, uses, stores, and protects your personal and financial data across the mobile app and website. GDPR, CCPA, LGPD, and COPPA aligned.",
    h1: "Privacy Policy",
    bodyHtml: `
      <header><h1>Privacy Policy</h1><p>At Squirrelll.ing, your privacy is our priority. This policy explains what we collect, why we collect it, how we use it, and the controls you have over your information when you use the Squirrelll.ing mobile app and website.</p></header>
      <section><h2>1. Information we collect</h2>
        <p><strong>Personal information:</strong> name, email, phone number, location, and payment-related details you provide when creating an account or transacting.</p>
        <p><strong>Usage data:</strong> activity logs, Daily Pool participation, savings behavior, wallet activity, and transaction history.</p>
        <p><strong>Device information:</strong> IP address, device type, operating system, browser type, diagnostics, crash logs, and device identifiers.</p>
      </section>
      <section><h2>2. How we use your information</h2>
        <ul>
          <li>To process daily contributions, savings goals, wallet activity, and Daily Pool participation.</li>
          <li>To create, manage, and secure your account.</li>
          <li>To send important account, transaction, security, and product updates.</li>
          <li>To improve app performance, diagnose issues, and maintain reliability.</li>
          <li>To comply with legal, financial, fraud prevention, and security requirements.</li>
        </ul>
      </section>
      <section><h2>3. Sharing your information</h2><p>We do not sell your personal information. We share limited data only with trusted service providers (such as payment processors and analytics partners) under strict confidentiality, and with authorities when legally required.</p></section>
      <section><h2>4. Data security</h2><p>We use encryption in transit and at rest, tokenization for payment data, and continuous monitoring to keep your information safe.</p></section>
      <section><h2>5. Your rights</h2><p>Depending on your region (GDPR, CCPA, LGPD, COPPA and others), you may access, correct, export, or delete your data, and object to certain processing. Contact us to exercise these rights.</p></section>
      <section><h2>6. Contact</h2><p>For privacy questions or requests, contact the Squirrelll.ing team via the in-app support or the contact details on our website.</p></section>
    `,
  },
  "/terms-of-service": {
    title: "Terms of Service | Squirrelll.ing",
    description:
      "The rules for using Squirrelll.ing — eligibility, the Daily Pool, the Smart Savings tool, fees, refunds, and your responsibilities as a user.",
    h1: "Terms of Service",
    bodyHtml: `
      <header><h1>Terms of Service</h1><p>Welcome to Squirrelll.ing. By accessing or using our platform you agree to these Terms of Service.</p></header>
      <section><h2>1. Eligibility</h2><p>You must be 16 years or older to create an account and participate in financial transactions. To keep the community fair, each individual may open only one account.</p></section>
      <section><h2>2. Services offered</h2><p>Squirrelll.ing offers two financial tools:</p>
        <ul>
          <li><strong>Daily Pool:</strong> users contribute a small fixed amount, and one participant from the region is selected each day to receive the total pool.</li>
          <li><strong>Smart Savings Tool:</strong> automate daily or weekly deposits toward personal savings goals through Savings Pods.</li>
        </ul>
        <p>Participation in the Daily Pool is optional and requires completion of a skill-based step; outcomes are not guaranteed.</p>
      </section>
      <section><h2>3. Payments and fees</h2><p>All transactions are securely processed. A 12% platform fee applies to Daily Pool payouts before disbursement. A 5% fee applies to savings withdrawals.</p></section>
      <section><h2>4. Refunds</h2><p>Deposits to the Daily Pool are non-refundable once processed, unless a technical or unauthorized issue is verified. Deposits to Savings Pods can be withdrawn anytime from your wallet, subject to the withdrawal fee.</p></section>
      <section><h2>5. Account termination</h2><p>We may suspend or terminate accounts that violate these terms, including fraud, abuse, or misuse of the platform.</p></section>
      <section><h2>6. Limitation of liability</h2><p>Squirrelll.ing is not liable for indirect or consequential damages arising from the use or inability to use the platform.</p></section>
      <section><h2>7. Updates to these terms</h2><p>We may update these Terms of Service from time to time. Users will be notified, and continued use of the platform constitutes acceptance.</p></section>
    `,
  },
  "/payment-security": {
    title: "Payment Security | Squirrelll.ing",
    description:
      "How Squirrelll.ing keeps your payments safe: PCI DSS Level 1 processing via Stripe, end-to-end encryption, tokenization, 3D Secure authentication, and active fraud detection.",
    h1: "Payment Security",
    bodyHtml: `
      <header><h1>Payment Security</h1><p>Your financial security is non-negotiable. All Squirrelll.ing payments are processed through Stripe, a PCI DSS Level 1 certified provider — the highest standard for secure payment systems.</p></header>
      <section><h2>How we keep you safe</h2>
        <ul>
          <li><strong>End-to-end encryption:</strong> your data is encrypted in transit and at rest.</li>
          <li><strong>Tokenization:</strong> sensitive card information is tokenized so your actual card details are never stored on our servers.</li>
          <li><strong>Fraud detection:</strong> Stripe's advanced systems actively protect against unauthorized transactions.</li>
          <li><strong>Secure authentication:</strong> we use industry-standard 3D Secure (3DS) to verify payments.</li>
        </ul>
      </section>
      <section><h2>What this means for you</h2><p>Squirrelll.ing never sees or stores your raw card number. Deposits to the Daily Pool and Savings Pods, plus withdrawals from your wallet, are all handled inside Stripe's secure environment, so your money and your data stay protected.</p></section>
    `,
  },
  "/verify-email": {
    title: "Verify Email | Squirrelll.ing",
    description:
      "Verify your email address to activate your Squirrelll.ing account and start saving with round-ups, the Daily Pool, and Savings Pods.",
    h1: "Verify your email",
    bodyHtml: `
      <header><h1>Verify your email</h1><p>Confirm your email address to activate your Squirrelll.ing account. Verification protects your wallet, secures your Daily Pool participation, and lets us send you transaction and security updates.</p></header>
      <section><h2>Didn't get the email?</h2><p>Check your spam or promotions folder, make sure you used the correct address, and request a new verification link from inside the Squirrelll.ing app if needed.</p></section>
    `,
  },
  "/delete-account": {
    title: "Delete Account | Squirrelll.ing",
    description:
      "Request permanent deletion of your Squirrelll.ing account and associated data. Learn what gets removed, what is retained for legal reasons, and how long it takes.",
    h1: "Delete your account",
    bodyHtml: `
      <header><h1>Delete your account</h1><p>You can request permanent deletion of your Squirrelll.ing account at any time. Submitting a deletion request closes your account, cancels active Savings Pods, and removes your personal profile data.</p></header>
      <section><h2>What gets deleted</h2><ul><li>Your profile information (name, email, phone, location).</li><li>Your saved preferences, notifications, and device identifiers.</li><li>Your wallet history visible inside the app.</li></ul></section>
      <section><h2>What we may retain</h2><p>Some transaction records and identity data are retained for legal, accounting, fraud-prevention, and regulatory compliance reasons, as required by applicable financial regulations.</p></section>
      <section><h2>Before you delete</h2><p>Withdraw any remaining balance from your wallet and complete or close out active Savings Pods. Once deletion is processed, your account cannot be restored.</p></section>
    `,
  },
  "/budget-calculator": {
    title: "Free Budget Calculator | Squirrelll.ing",
    description:
      "Plan your monthly budget with Squirrelll.ing's free 50/30/20 budget calculator. See how much to spend on needs, wants, and savings — and how Squirrellling can grow that savings bucket effortlessly.",
    h1: "Free Budget Calculator",
    bodyHtml: `
      <header><h1>Free Budget Calculator</h1><p>Plan your monthly income, expenses, and savings in seconds with the Squirrelll.ing Budget Calculator. Enter what you earn and what you spend, and see exactly how much room you have left to save.</p></header>
      <section><h2>The 50/30/20 rule</h2><p>A simple budgeting framework: spend roughly <strong>50% on needs</strong> (rent, groceries, utilities, transport), <strong>30% on wants</strong> (eating out, subscriptions, entertainment), and put <strong>20% toward savings</strong> and debt repayment. The calculator shows your current split and where you can adjust.</p></section>
      <section><h2>How to use it</h2><ol><li>Enter your monthly take-home income.</li><li>Add your fixed and variable expenses by category.</li><li>Review your remaining cash flow and savings rate.</li><li>Open a Savings Pod in Squirrelll.ing to automate the savings portion daily or weekly.</li></ol></section>
      <section><h2>Why pair it with Squirrelll.ing</h2><p>A budget only works if you act on it. Squirrelll.ing turns your savings target into automatic micro-deposits, adds spare-change round-ups on everyday purchases, and gives you a shot at the community Daily Pool — so the savings line of your budget actually fills up.</p></section>
    `,
  },
  "/round-up-calculator": {
    title: "Round-Up Savings Calculator | Squirrelll.ing",
    description:
      "See how much spare change you could save each month and year by rounding up everyday purchases with Squirrelll.ing — coffees, groceries, fuel, and more.",
    h1: "Round-Up Savings Calculator",
    bodyHtml: `
      <header><h1>Round-Up Savings Calculator</h1><p>Estimate how much spare change you could save by rounding every purchase up to the nearest whole unit. Enter your typical weekly transactions and see the monthly and yearly total Squirrelll.ing would tuck away for you.</p></header>
      <section><h2>How round-ups work</h2><p>Every time you spend, Squirrelll.ing rounds the total up to the next whole dollar (or your local currency) and moves the difference into your Savings Pod. A $3.40 coffee saves $0.60. A $27.15 grocery run saves $0.85. Individually tiny, collectively meaningful.</p></section>
      <section><h2>What the calculator shows</h2><ul><li>Average round-up per transaction.</li><li>Estimated monthly and annual savings.</li><li>How long it would take to hit a savings goal at that pace.</li></ul></section>
      <section><h2>From estimate to real savings</h2><p>Once you see the number, download Squirrelll.ing on Google Play, link a payment method, and let round-ups, Savings Pods, and the Daily Pool do the work in the background.</p></section>
    `,
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
