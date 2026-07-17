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
    a: "Squirrelll.ing is a community-based micro-fintech platform built around one simple idea: small amounts pooled together daily become something real — for someone today, and for you another day. Contribute to a shared Daily Pool or you can also save toward your own goals with micro-financed Savings Pods.",
  },
  {
    q: "What is Squirrelling? (The Concept)",
    a: "Squirrelling is not a modern invention—it's rooted in one of the oldest economic practices: setting aside small amounts for future use. Just like how squirrels stash food bit by bit for winter, squirrelll.ing in micro-finance means building stability, habits, and wealth through consistent micro-savings over time. Known as \"Susu\" in West Africa, people contribute a fixed amounts and receive big sums in rotating basis. In Mexico, they call it \"tandas\" where they contribute and save small amounts in a routine contribution. In different communities, the name and the goal might be different, but the concept is always the same to gather bigger with small amounts.",
  },
  {
    q: "What is the Daily Pool?",
    a: "The Daily Pool is a shared community pot. Every member contributes a small fixed amount each day. One member per region is randomly selected to receive the full pool — minus a 12% platform fee — to accelerate their financial goals. The more members in your region, the bigger and more impactful the pool becomes for everyone.",
  },
  {
    q: "What are Savings Pods?",
    a: "Savings Pods are goal-based auto-deposit accounts. Set a savings goal, choose a fixed amount, pick a daily or weekly schedule, and Squirrelll.ing handles the deposits automatically until you reach your goal or your set time is up. You can run multiple Pods for different goals. It helps you to integrate micro-finance in your daily life savings strategy.",
  },
  {
    q: "Can I make money with Squirrelll.ing?",
    a: "Squirrelll.ing is not an investment platform, but any day could be your day to receive the full Daily Pool from your community. You contribute a small fixed amount daily — less than most people spend on coffee — and one regional member receives the entire pool each day. Set it up once and let it run silently in the background. No effort, no significant cost, and a real daily chance to receive a meaningful amount to help towards your financial goals.",
  },
  {
    q: "Is Squirrelll.ing a good side hustle?",
    a: "Squirrelll.ing works best as a silent financial tool running alongside whatever else you do. Contribute a tiny daily amount, stay in the pool, and any day could be your day to receive the community pot. No work required after setup — just a small daily contribution with a real daily chance of return. And the days you don't, you helped someone just like you.",
  },
  {
    q: "What if I never receive the Daily Pool?",
    a: "Every day you contribute, you have a real chance of receiving the full community pool. On the days someone else receives it, your contribution helped someone in your community who needed it just as much as you do — someone in the same position you're in. That's not a loss. That's the whole point of Squirrelll.ing.",
  },
  {
    q: "Is Squirrelll.ing crypto or a traditional savings platform?",
    a: "Squirrelll.ing is a traditional micro-savings and community engagement platform. It is not a cryptocurrency product. Your money sits in regulated payment rails.",
  },
  {
    q: "Is the daily pool gambling?",
    a: "No. There's no betting or risking money. You contribute an amount which is insignificant to you and doesn't bother you. Our platform is designed to ensure that none of its features promote obsessive or addictive behavior in users, nor cause any significant financial loss. The tool works for both gaining and helping others.",
  },
  {
    q: "Can I withdraw my money?",
    a: "Yes. You can withdraw both your savings and pool money whenever it suits you.",
  },
  {
    q: "What are the fees and charges?",
    a: "A 3% withdrawal fee applies only when withdrawing from your Savings Pod. A 12% platform fee is deducted from the total Daily Pool amount before it is added to the recipient's wallet. No hidden charges.",
  },
  {
    q: "Is the Daily Pool global or local?",
    a: "The Daily Pool is region/country-based, and runs on a 24-hour cycle that resets at 12 PM local time every day.",
  },
  {
    q: "How can I get help or support?",
    a: "We offer live chat and email support directly inside the app, anytime you need assistance.",
  },
  {
    q: "Where can I download Squirrelll.ing?",
    a: "Squirrelll.ing is live on both Google Play Store for Android and App Store for iOS. Search Squirrelll.ing in the stores, or download from the website.",
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
    <p>Community finance where everyone gives — and everyone gets. Save and grow your money effortlessly.</p>
  </header>
  <section>
    <p>Your spare change doesn't feel like much. But pooled daily with your community, it becomes something real — for someone today, and for you another day. Set it up once. Contribute a small amount daily. Any day could be your day to receive the full community pool. And on the days it's not? You just helped someone who needed it as much as you do. No regrets.</p>
  </section>
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
      <li><strong>Daily Pool:</strong> contribute a small fixed amount daily into a shared regional pot. One member receives the full community pool each day — any day could be yours. More members means a bigger, more impactful pool for everyone.</li>
      <li><strong>Savings Pods:</strong> set a savings goal, choose a fixed amount and schedule (daily or weekly), and auto-deposits run until you get there.</li>
      <li><strong>Region-based:</strong> each region runs its own Daily Pool so the community stays local.</li>
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
    <p>You contribute a fixed insignificant small amount (e.g., $0.20-$1) into the Daily Pool. The amount is determined by your region's currency, so it's insignificant to all. The total pool depends on the amount of users in total. Everyone has to contribute only the small insignificant amount. No more, no less. One person from your region will receive the entire pool (minus our 12% platform fee) to help them towards their goals. If you don't receive it today, you are still helping another until your day comes. Every region has its own separate pool.</p>
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

const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Squirrelll.ing",
  url: SITE,
  logo: `${SITE}/logo.svg`,
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.squirrelll.ing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Squirrelll.ing",
  url: SITE,
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Squirrelll.ing",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.squirrelll.ing",
  description:
    "A community-based micro-fintech platform integrating micro-savings, round-ups, and a Daily Pool into your everyday life.",
};

const webAppCalc = (name: string) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Squirrelll.ing - Community Based Micro-Fintech Platform",
    description:
      "Squirrelll.ing turns spare change and small daily habits into real savings through round-ups, a community Daily Pool, and goal-based Savings Pods. On Google Play now.",
    h1: "Squirrelll.ing — Community-Based Micro-Fintech Platform",
    bodyHtml: homeBody,
    jsonLd: [orgJsonLd, websiteJsonLd, softwareAppJsonLd, faqJsonLd, howToJsonLd],
  },
  "/what-is-squirrelll.ing": {
    title: "What is Squirrellling? A Smarter Way to Reach Your Financial Goals, One Small Step at a Time",
    description:
      "Learn how Squirrellling works: automatic round-ups, a community Daily Pool that pays out daily, and goal-based Savings Pods that make saving effortless.",
    h1: "What is Squirrellling?",
    bodyHtml: whatIsBody,
    jsonLd: [
      faqJsonLd,
      howToJsonLd,
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "What is Squirrellling", path: "/what-is-squirrelll.ing" },
      ]),
    ],
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
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]),
    ],
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
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Terms of Service", path: "/terms-of-service" },
      ]),
    ],
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
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Payment Security", path: "/payment-security" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Squirrelll.ing process payments securely?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All payments are processed by Stripe, a PCI DSS Level 1 certified provider. Card details are tokenized, transmitted over end-to-end encryption, and verified with 3D Secure where applicable.",
            },
          },
          {
            "@type": "Question",
            name: "Does Squirrelll.ing store my card number?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Card numbers are tokenized by Stripe and never stored on Squirrelll.ing servers.",
            },
          },
        ],
      },
    ],
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
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Verify Email", path: "/verify-email" },
      ]),
    ],
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
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Delete Account", path: "/delete-account" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to delete your Squirrelll.ing account",
        step: [
          { "@type": "HowToStep", position: 1, name: "Email support", text: "Email support@squirrelll.ing from your registered address." },
          { "@type": "HowToStep", position: 2, name: "Include your username", text: "Include your username and clearly state you are requesting account deletion." },
          { "@type": "HowToStep", position: 3, name: "Wait for processing", text: "Our team will process your request within 3–5 business days." },
        ],
      },
    ],
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
    jsonLd: [
      webAppCalc("Squirrelll.ing Budget Calculator"),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Budget Calculator", path: "/budget-calculator" },
      ]),
    ],
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
    jsonLd: [
      webAppCalc("Squirrelll.ing Round-Up Calculator"),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Round-Up Calculator", path: "/round-up-calculator" },
      ]),
    ],
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

        // Crawler-visible content inside #root. React replaces this on mount
        // for real users. Kept on-screen (not off-screen with -9999px) so
        // search engines and AI crawlers don't treat it as cloaked/hidden text.
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root"><div data-prerender="true">${meta.bodyHtml}</div></div>`,
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
