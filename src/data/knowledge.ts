// Data-driven knowledge library for the Squirrelll.ing knowledge platform.
// Five node types form a semantic graph: Ask · Guide · Research · Concept · Platform.
// New articles = append an entry. Related links are curated + auto-filled by category.

export type SectionKey = 'ask' | 'guide' | 'research' | 'concept' | 'platform';

export type Category = {
  slug: string;
  name: string;
  description: string;
  /** Which sections this category applies to. */
  scopes: SectionKey[];
  /** Legacy field — retained for existing filters on Ask/Guide pages. */
  scope?: 'ask' | 'guide' | 'both';
};

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type NodeRef = {
  section: SectionKey;
  slug: string;
};

/** Shared fields present on every content node. */
type BaseNode = {
  slug: string;
  title: string;
  /** Primary category slug. */
  category: string;
  /** Optional additional categories the node belongs to. */
  categories?: string[];
  difficulty?: Difficulty;
  updated: string; // ISO
  /** Curated cross-links. Auto-fill picks up the slack. */
  related?: NodeRef[];
  /** Optional short bullet list surfaced as "Key Takeaways". */
  keyTakeaways?: string[];
};

export type AskArticle = BaseNode & {
  question: string;
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
  definedTerm?: { name: string; description: string };
  relatedSearches?: string[];
};

export type Guide = BaseNode & {
  problem: string;
  whyItHappens: string;
  practicalSteps: string[];
  longTermHabits: string[];
  helpfulTools: string[];
  whereSquirrelllHelps?: string;
  faqs: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
};

export type ResearchSummary = BaseNode & {
  summary: string; // Quick Answer equivalent
  sections: { heading: string; body: string }[];
  citations: { title: string; authors?: string; year?: number; url?: string }[];
  faqs?: { q: string; a: string }[];
};

export type Concept = BaseNode & {
  term: string;
  shortDefinition: string;
  longDefinition: string;
  alsoKnownAs?: string[];
  examples?: string[];
  sections?: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
};

export type PlatformDoc = BaseNode & {
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
};

// -----------------------------------------------------------------------------
// Categories (expanded taxonomy)
// -----------------------------------------------------------------------------

export const CATEGORIES: Category[] = [
  { slug: 'saving-money', name: 'Saving Money', description: 'Practical ways to keep more of what you earn.', scope: 'both', scopes: ['ask', 'guide', 'concept', 'research'] },
  { slug: 'budgeting', name: 'Budgeting', description: 'Simple budgeting frameworks that actually stick.', scope: 'both', scopes: ['ask', 'guide', 'concept'] },
  { slug: 'investing', name: 'Investing', description: 'Foundations of long-term wealth building.', scope: 'ask', scopes: ['ask', 'concept'] },
  { slug: 'microfinance', name: 'Microfinance', description: 'Small amounts, big impact — the mechanics explained.', scope: 'both', scopes: ['ask', 'concept', 'research'] },
  { slug: 'behavioral-economics', name: 'Behavioral Economics', description: 'Why we act the way we do with money.', scope: 'ask', scopes: ['ask', 'concept', 'research'] },
  { slug: 'financial-psychology', name: 'Financial Psychology', description: 'The mental side of money decisions.', scope: 'ask', scopes: ['ask', 'concept', 'research'] },
  { slug: 'community-finance', name: 'Community Finance', description: 'How groups pool money to help each other.', scope: 'both', scopes: ['ask', 'guide', 'concept', 'research', 'platform'] },
  { slug: 'passive-income', name: 'Passive Income', description: 'Near-passive ways to grow financial slack.', scope: 'guide', scopes: ['ask', 'guide'] },
  { slug: 'emergency-funds', name: 'Emergency Funds', description: 'Build the buffer that prevents crises from spiraling.', scope: 'guide', scopes: ['ask', 'guide', 'concept'] },
  { slug: 'apps', name: 'Apps', description: 'Digital tools for personal finance.', scope: 'ask', scopes: ['ask', 'platform'] },
  { slug: 'financial-wellness', name: 'Financial Wellness', description: 'Health-of-money frameworks and habits.', scope: 'both', scopes: ['ask', 'guide', 'concept'] },
  { slug: 'money-habits', name: 'Money Habits', description: 'Tiny routines that reshape your money life.', scope: 'both', scopes: ['ask', 'guide', 'concept'] },
  { slug: 'side-hustles', name: 'Side Hustles', description: 'Realistic ways to grow income without burning out.', scope: 'guide', scopes: ['ask', 'guide'] },
  { slug: 'financial-education', name: 'Financial Education', description: 'Foundational literacy for lifelong money decisions.', scope: 'both', scopes: ['ask', 'guide', 'concept'] },
  // Platform categories
  { slug: 'savings-pods', name: 'Savings Pods', description: 'Goal-based automatic savings, explained.', scope: 'both', scopes: ['ask', 'platform'] },
  { slug: 'daily-pool', name: 'Daily Pool', description: 'How the community Daily Pool works.', scope: 'ask', scopes: ['ask', 'platform', 'concept'] },
  { slug: 'round-up-savings', name: 'Round-Up Savings', description: 'Turning spare change into real savings.', scope: 'ask', scopes: ['ask', 'platform'] },
  { slug: 'trust-and-security', name: 'Trust & Security', description: 'How the platform protects your money and data.', scope: 'ask', scopes: ['platform', 'ask'] },
  // Guide-only
  { slug: 'financial-habits', name: 'Financial Habits', description: 'Tiny routines that reshape your money life.', scope: 'both', scopes: ['ask', 'guide'] },
  { slug: 'getting-started', name: 'Getting Started', description: 'First steps toward financial control.', scope: 'guide', scopes: ['guide'] },
  { slug: 'financial-stress', name: 'Financial Stress', description: 'When money feels overwhelming — do this.', scope: 'guide', scopes: ['guide'] },
  { slug: 'emergency-planning', name: 'Emergency Planning', description: 'Prepare for the unexpected without panic.', scope: 'guide', scopes: ['guide', 'ask'] },
  { slug: 'building-wealth', name: 'Building Wealth', description: 'Long-term thinking, small daily moves.', scope: 'guide', scopes: ['guide', 'ask'] },
];

// -----------------------------------------------------------------------------
// Ask Articles
// -----------------------------------------------------------------------------

export const ASK_ARTICLES: AskArticle[] = [
  {
    slug: 'what-is-squirrellling',
    title: 'What is Squirrellling?',
    question: 'What is Squirrellling?',
    category: 'community-finance',
    categories: ['saving-money', 'money-habits'],
    quickAnswer:
      'Squirrellling is the practice of setting aside small amounts of money consistently — often as part of a community — to build financial stability. It draws on centuries-old traditions like Susu in West Africa and Tandas in Mexico, updated for a digital, daily-contribution model.',
    sections: [
      { heading: 'The idea in one line', body: 'Small amounts, saved daily, pooled with others, become something meaningful — for someone today, and for you another day.' },
      { heading: 'Why it works', body: 'Consistency beats magnitude. A tiny daily habit compounds into a real balance and, when combined with community, into shared safety nets. Traditional ROSCAs (Rotating Savings and Credit Associations) have used this logic for over a century across dozens of cultures.' },
      { heading: 'Squirrellling in the Squirrelll.ing app', body: 'Inside the app, Squirrellling shows up as two features: the Daily Pool (community rotation) and Savings Pods (personal goal-based auto-deposits). Both are optional and both are built on the same idea: micro contributions, real outcomes.' },
    ],
    keyTakeaways: [
      'Saving is a habit, not a heroic act.',
      'Community rotation makes small savings meaningful faster.',
      'Automation removes willpower from the loop.',
    ],
    faqs: [
      { q: 'Is Squirrellling the same as saving?', a: 'It includes saving, but it also includes the community rotation aspect — everyone contributes, one person receives at a time.' },
      { q: 'Do I need a lot of money to start?', a: 'No. The whole point is that contributions are small enough to feel insignificant to any one person.' },
    ],
    definedTerm: { name: 'Squirrellling', description: 'The habit of setting aside small amounts of money regularly, often within a community pool, to build long-term financial stability.' },
    references: [
      { title: 'Ardener, S. — The Comparative Study of Rotating Credit Associations' },
      { title: 'Thaler, R. — Nudge: Improving Decisions About Health, Wealth, and Happiness' },
    ],
    related: [
      { section: 'concept', slug: 'rosca' },
      { section: 'concept', slug: 'microfinance' },
      { section: 'platform', slug: 'daily-pool' },
      { section: 'research', slug: 'save-more-tomorrow' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'how-can-i-save-money',
    title: 'How can I save money?',
    question: 'How can I save money when everything feels expensive?',
    category: 'saving-money',
    categories: ['money-habits', 'financial-wellness'],
    quickAnswer:
      "Start ridiculously small. Automate a tiny recurring transfer — even $1 a day — into a separate account you don't touch. Then cut one recurring cost this week. Motivation is unreliable; automation and friction (making saving easy and spending harder) do the real work.",
    sections: [
      { heading: 'Automate before you optimize', body: 'The single highest-leverage move is a scheduled auto-transfer on payday. If saving depends on your willpower each week, it will lose to life. Set it once, forget it.' },
      { heading: 'Cut one thing, not everything', body: 'Trying to overhaul your whole budget usually fails. Pick one recurring cost this week — an unused subscription, a delivery habit, a fee — and redirect it.' },
      { heading: 'Use a separate account', body: 'Savings you can see in your everyday balance rarely survive the month. A separate pod or account creates friction that protects the money from your own future self.' },
    ],
    keyTakeaways: [
      'Automate the first dollar, then raise it slowly.',
      'One cancelled subscription beats a whole-budget overhaul.',
      'Distance between saving and spending is protection.',
    ],
    faqs: [
      { q: 'How much should I save?', a: 'Start with any amount you will not miss. The habit matters more than the number in the first 60 days.' },
      { q: 'What if my income is irregular?', a: 'Save a percentage of each incoming payment (even 2–5%) instead of a fixed amount.' },
    ],
    related: [
      { section: 'guide', slug: 'cant-save-money' },
      { section: 'concept', slug: 'compound-interest' },
      { section: 'research', slug: 'mental-accounting' },
      { section: 'platform', slug: 'savings-pods' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'can-saving-small-amounts-grow',
    title: 'Can saving $1 a day make a difference?',
    question: 'Can saving small amounts actually grow into something meaningful?',
    category: 'saving-money',
    categories: ['behavioral-economics'],
    quickAnswer:
      'Yes. $1 a day is $365 a year — an emergency-buffer starter. More importantly, the habit itself is what compounds: once daily saving is automatic, raising it to $2 or $5 costs nothing psychologically.',
    sections: [
      { heading: 'The math nobody shows you', body: '$1/day = $365/year. $3/day = $1,095/year. Add a modest 4% annual return over 10 years and $3/day becomes roughly $13,400. The number is real; the behavior is the hard part.' },
      { heading: 'Why small amounts win', body: 'Small commitments avoid the "all-or-nothing" trap. Behavioral research (Thaler, Benartzi) shows people stick to plans they barely notice, and quit plans that hurt.' },
    ],
    faqs: [
      { q: "Isn't inflation eating this?", a: 'Inflation reduces purchasing power, but zero savings is worse than modest savings. Small savings also unlock better financial options later (avoiding late fees, overdrafts).' },
    ],
    related: [
      { section: 'concept', slug: 'compound-interest' },
      { section: 'research', slug: 'save-more-tomorrow' },
      { section: 'guide', slug: 'emergency-fund' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'what-is-a-rosca',
    title: 'What is a ROSCA?',
    question: 'What is a ROSCA, Susu, or Tanda?',
    category: 'community-finance',
    categories: ['microfinance', 'financial-education'],
    quickAnswer:
      "A ROSCA (Rotating Savings and Credit Association) is a group of people who each contribute a fixed amount to a shared pot at regular intervals. Each cycle, one member receives the full pot. Everyone gets a turn. It's known as Susu in West Africa, Tanda in Mexico, Chit fund in India, and dozens of other names worldwide.",
    sections: [
      { heading: 'How a ROSCA works', body: 'Members agree on the amount, frequency, and rotation order. On each round, one member receives the pool. The cycle repeats until every member has received once.' },
      { heading: 'Why they persist across cultures', body: 'ROSCAs work because they combine forced saving, community accountability, and access to lump sums without formal credit. Cited in economic research from Ardener (1964) onward.' },
      { heading: 'How Squirrelll.ing modernizes the model', body: 'The Daily Pool takes the ROSCA idea and adapts it: contributions are tiny and daily, selection is random per region, and everything is automated.' },
    ],
    faqs: [
      { q: 'Is a ROSCA the same as gambling?', a: 'No. In a ROSCA every member eventually receives (or in the Daily Pool, everyone has a fair, daily chance without needing to "bet").' },
    ],
    definedTerm: { name: 'ROSCA', description: 'Rotating Savings and Credit Association — a group where members contribute equally to a pot that is distributed to one member per cycle.' },
    related: [
      { section: 'concept', slug: 'rosca' },
      { section: 'concept', slug: 'microfinance' },
      { section: 'platform', slug: 'daily-pool' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'how-do-savings-pods-work',
    title: 'How do Savings Pods work?',
    question: 'What is a Savings Pod and how do I use one?',
    category: 'savings-pods',
    categories: ['apps'],
    quickAnswer:
      'A Savings Pod is a goal-based auto-deposit account inside Squirrelll.ing. You set a target (e.g. $500 for a laptop), choose a fixed amount, pick daily or weekly, and the app moves the money automatically until you hit the goal. You can run multiple Pods at once.',
    sections: [
      { heading: 'Set it once, forget it', body: 'Pods are subscription-style: define the goal and let automation handle the discipline.' },
      { heading: 'Multiple goals in parallel', body: 'Run separate Pods for rent buffer, travel, gifts, or emergencies. Each Pod tracks its own progress.' },
      { heading: "Withdraw when you're ready", body: 'When your goal is reached (or your set time is up) you can withdraw. A 3% fee applies to savings withdrawals.' },
    ],
    faqs: [
      { q: 'Can I pause a Pod?', a: 'Yes — Pods are flexible and can be paused or adjusted.' },
      { q: 'Is my money locked?', a: 'No. You retain control and can withdraw when it suits you.' },
    ],
    related: [
      { section: 'platform', slug: 'savings-pods' },
      { section: 'concept', slug: 'emergency-fund' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'is-the-daily-pool-gambling',
    title: 'Is the Daily Pool gambling?',
    question: 'Is the Daily Pool considered gambling?',
    category: 'daily-pool',
    categories: ['community-finance', 'trust-and-security'],
    quickAnswer:
      "No. There is no betting, no odds you can buy into, and no risk of losing money in the gambling sense. You contribute a small daily amount you have already decided is insignificant to you, and one member from your region receives the pool each day.",
    sections: [
      { heading: "Why it isn't gambling", body: "Gambling risks money you value in hopes of winning more. The Daily Pool asks for an amount you've deemed insignificant, and on the days you don't receive, your contribution helps someone in your community who does." },
      { heading: 'Design that prevents addictive behavior', body: 'Contributions are fixed and small. There is no way to "bet more" to increase odds. The 24-hour cycle and regional pool structure make the mechanic predictable and community-oriented, not thrill-driven.' },
    ],
    faqs: [
      { q: 'Can I contribute more to increase my chance?', a: 'No — every member contributes the same fixed regional amount.' },
      { q: 'What if I never receive?', a: 'Your contributions supported people in your community. You can withdraw savings and stop contributing at any time.' },
    ],
    related: [
      { section: 'platform', slug: 'daily-pool' },
      { section: 'concept', slug: 'rosca' },
    ],
    updated: '2026-07-17',
  },
];

// -----------------------------------------------------------------------------
// Guides
// -----------------------------------------------------------------------------

export const GUIDES: Guide[] = [
  {
    slug: 'im-broke',
    title: "I'm Broke. What Should I Do?",
    category: 'financial-stress',
    categories: ['getting-started', 'emergency-planning'],
    problem: 'You have little to no money, bills are looming, and every option feels blocked. This is one of the most common financial situations, and it is recoverable.',
    whyItHappens: "Being broke is rarely one bad decision — it's usually the compound result of low income, rising costs, unexpected shocks, and financial systems that punish people who have the least. Understanding that removes the shame; the next steps remove the paralysis.",
    practicalSteps: [
      'Triage: list every bill by consequence (eviction / utility shutoff / late fee) and pay in that order, not in date order.',
      'Contact every creditor before missing a payment. Almost all offer hardship plans if you call first.',
      'Cancel every recurring charge you can live without this month — you can re-add later.',
      'Find $20 fast: sell one unused item, pick up one gig shift, or claim any benefit you qualify for.',
      'Start a $1/day Savings Pod. Symbolic, but it rebuilds a sense of control.',
    ],
    longTermHabits: [
      'Build a $500 starter emergency fund before anything else — it prevents the next crisis from spiraling.',
      'Track only two numbers weekly: money in, money out. Skip complicated budgets while stabilizing.',
      'Set one automatic transfer, however tiny, the day you get paid.',
    ],
    helpfulTools: [
      'A separate savings account or Savings Pod for the emergency starter fund.',
      'A simple weekly money check-in (15 minutes, same day each week).',
    ],
    whereSquirrelllHelps: "A $1/day Savings Pod rebuilds the habit without pressure. If your region's Daily Pool contribution is genuinely insignificant to you, participating gives you a real daily chance at a meaningful lump sum without changing anything else.",
    faqs: [
      { q: 'Should I use credit cards to get through?', a: 'Only for essentials you cannot delay, and only if you have a specific repayment plan. Otherwise call the creditor first.' },
      { q: "What if I can't save anything?", a: "Focus on the triage list first. Saving comes back online the moment you're out of crisis mode." },
    ],
    related: [
      { section: 'concept', slug: 'emergency-fund' },
      { section: 'ask', slug: 'how-can-i-save-money' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'paycheck-to-paycheck',
    title: 'Living Paycheck to Paycheck',
    category: 'financial-stress',
    problem: 'Money comes in and money goes out — with nothing left over. Even a small unexpected expense sends the whole month sideways.',
    whyItHappens: 'Paycheck-to-paycheck living is a system problem, not a discipline problem. Costs rise faster than wages, subscriptions quietly stack, and every dollar has a destination before it arrives.',
    practicalSteps: [
      "Audit every subscription and recurring charge — cancel anything you didn't use in the last 30 days.",
      "Move payday automation forward: transfer savings the day money lands, not at month's end.",
      'Negotiate one fixed cost this month (internet, insurance, phone). A 15-minute call often saves $10–$40/month.',
      'Give every dollar a job before the week starts (zero-based weekly plan).',
    ],
    longTermHabits: [
      'Build a one-week income buffer, then a one-month buffer. Stop at each milestone and celebrate.',
      'Raise your automated saving by $5 every time you get a raise or bonus.',
    ],
    helpfulTools: [
      'A Savings Pod set to move money automatically on payday.',
      'A single weekly review to catch drift early.',
    ],
    whereSquirrelllHelps: 'A payday-triggered Savings Pod is the cleanest way to break the paycheck-to-paycheck cycle: the money leaves before you see it.',
    faqs: [
      { q: 'How do I start if I have zero slack?', a: 'Start with 1% of income, not a dollar amount. It grows automatically as you grow.' },
    ],
    related: [
      { section: 'concept', slug: 'pay-yourself-first' },
      { section: 'platform', slug: 'savings-pods' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'cant-save-money',
    title: "I Can't Save Money",
    category: 'saving-money',
    problem: 'You want to save. You mean to save. But at the end of every month, there is nothing left over.',
    whyItHappens: "Saving from what's \"left over\" almost never works — spending expands to fill available money (Parkinson's Law for finance). Saving needs to happen before spending, not after.",
    practicalSteps: [
      'Flip the order: automate saving on the day income arrives.',
      'Start with an amount so small you feel silly — $1/day, $5/week. Prove the mechanism first.',
      'Put savings in a different place (separate account, Pod). Out of sight, out of spending.',
      'Add one "friction" step to your top impulse-spending channel (delete the app, remove the saved card).',
    ],
    longTermHabits: [
      'Raise the auto-save amount every 60 days — small enough to not notice, frequent enough to compound.',
      'Name every Pod with the goal ("emergency", "laptop"). Named money is harder to spend.',
    ],
    helpfulTools: [
      'Savings Pods with a schedule.',
      'A recurring calendar block for a 10-minute weekly money review.',
    ],
    whereSquirrelllHelps: 'Savings Pods are built exactly for this: they enforce "pay yourself first" without requiring willpower each week.',
    faqs: [
      { q: 'Is $5 a week worth it?', a: 'Yes — the amount is not the point yet. The mechanism is. Amount grows once the habit is real.' },
    ],
    related: [
      { section: 'concept', slug: 'pay-yourself-first' },
      { section: 'research', slug: 'save-more-tomorrow' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'emergency-fund',
    title: 'I Need Emergency Savings',
    category: 'emergency-planning',
    problem: 'One car repair, one medical bill, or one lost shift would break your budget. You need a buffer, fast.',
    whyItHappens: "Most households don't have $500 available for an emergency. It's not a moral failing — it's a structural one. But it's also fixable in weeks, not years.",
    practicalSteps: [
      'Set a first target of $500. Not $1,000, not three months — $500. This is the target research shows breaks the crisis-loop.',
      'Automate a daily or weekly transfer into a Pod named "Emergency".',
      'Redirect one specific windfall (tax refund, bonus, gift) entirely to the fund.',
      'Sell 3 unused items this month; every dollar goes in the Pod.',
    ],
    longTermHabits: [
      'After $500, aim for one month of essential expenses (rent + food + utilities + transport).',
      'Refill the fund immediately after any use.',
    ],
    helpfulTools: ['A dedicated Emergency Savings Pod, kept separate from goal-based Pods.'],
    whereSquirrelllHelps: 'A dedicated Emergency Pod with automatic weekly deposits is the fastest, most boring way to hit $500.',
    faqs: [
      { q: 'Why $500 first, not $1,000?', a: 'Research (Financial Health Network) finds $500 covers ~65% of surprise expenses and dramatically reduces financial stress.' },
    ],
    related: [
      { section: 'concept', slug: 'emergency-fund' },
      { section: 'ask', slug: 'how-can-i-save-money' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'no-time-for-second-job',
    title: "I Don't Have Time For Another Job",
    category: 'building-wealth',
    problem: "You need more financial room but adding hours to your week isn't realistic. You need passive or near-passive levers.",
    whyItHappens: 'The classic "get a second job" advice ignores caregivers, exhausted workers, and anyone already at capacity. Passive income for regular people usually means small, automated tools stacked over time.',
    practicalSteps: [
      'Automate savings so at least part of your income compounds without effort.',
      'Cancel one recurring cost — this recovers money without adding time.',
      'Set up any employer match or benefit you qualify for (retirement, HSA, transit).',
      'Join a low-effort community finance mechanism (like a ROSCA or the Daily Pool) that runs in the background.',
    ],
    longTermHabits: [
      'Redirect every raise or benefit gain into automated saving before adjusting lifestyle.',
      'Treat time-saving purchases (better commute, easier meals) as investments if they free you for higher-value work.',
    ],
    helpfulTools: [
      'A Savings Pod running silently in the background.',
      'Daily Pool participation, if the regional contribution is genuinely insignificant to you.',
    ],
    whereSquirrelllHelps: 'This is exactly the use case Squirrelll.ing was built for: silent, low-effort financial tools that run without demanding more of your time.',
    faqs: [
      { q: 'Is the Daily Pool a guaranteed income stream?', a: "No. It's a real daily chance to receive a meaningful lump sum. Any given day could be your day." },
    ],
    related: [{ section: 'platform', slug: 'daily-pool' }],
    updated: '2026-07-17',
  },
  {
    slug: 'better-financial-habits',
    title: 'I Want Better Financial Habits',
    category: 'financial-habits',
    problem: "You're not in crisis — but your money life feels reactive. You want systems, not stress.",
    whyItHappens: 'Good financial habits are less about knowledge and more about environment design. Most people know what to do; the friction of doing it is the real barrier.',
    practicalSteps: [
      'Set one weekly money check-in on a recurring calendar block (15 minutes, same day).',
      'Automate every predictable thing: saving, bills, transfers.',
      'Introduce friction on impulse spend: delete shopping apps, remove saved cards.',
      'Use named accounts and named Pods so every dollar has a purpose.',
    ],
    longTermHabits: [
      'Raise auto-saves after every income change.',
      'Review named goals quarterly and retire ones that no longer matter.',
    ],
    helpfulTools: [
      'Named Savings Pods per goal.',
      "A single dashboard view — either your bank's or a simple spreadsheet.",
    ],
    faqs: [
      { q: 'How long until habits stick?', a: 'Behavioral research suggests 60–90 days of low-friction repetition. Design for that window, not for willpower.' },
    ],
    related: [
      { section: 'research', slug: 'mental-accounting' },
      { section: 'concept', slug: 'pay-yourself-first' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'passive-financial-improvement',
    title: 'I Want Passive Ways To Improve My Finances',
    category: 'building-wealth',
    problem: "You don't want another side hustle or spreadsheet. You want your money life to improve while you focus on everything else.",
    whyItHappens: 'Most personal finance advice assumes unlimited attention. The realistic path for busy people is a small stack of automated tools that quietly do the work.',
    practicalSteps: [
      'Automate one savings transfer per pay cycle.',
      "Cancel one recurring cost you don't actively use.",
      "Enroll in any employer match or benefit you're currently leaving on the table.",
      'Join one background community finance mechanism if it fits (Daily Pool, ROSCA, credit union round-up).',
    ],
    longTermHabits: [
      'Every income increase → automatic saving bump before lifestyle change.',
      'Yearly 20-minute review: cancel unused, raise auto-saves, name new goals.',
    ],
    helpfulTools: [
      'Savings Pods running on schedule.',
      'A single monthly summary email or notification instead of daily checking.',
    ],
    whereSquirrelllHelps: 'Silent by design: Pods and the Daily Pool run in the background so improvement compounds without daily attention.',
    faqs: [
      { q: 'Is truly passive income realistic for regular people?', a: 'Fully passive is rare; near-passive (automated, low-attention) is very achievable and the more useful goal.' },
    ],
    related: [{ section: 'concept', slug: 'compound-interest' }],
    updated: '2026-07-17',
  },
  {
    slug: 'need-extra-money',
    title: 'I Need Extra Money',
    category: 'building-wealth',
    problem: 'Your income covers the basics but nothing more. You need realistic ways to increase what comes in without burning out.',
    whyItHappens: 'Wages have not kept pace with the cost of essentials for most households. "Just work harder" is not a plan — the real levers are small, stackable income sources plus recovering money you\'re already losing to fees, unused subscriptions, and missed benefits.',
    practicalSteps: [
      'Recover money first: cancel one unused subscription and negotiate one recurring bill this week.',
      'Claim every benefit or match you qualify for (employer match, tax credits, transit, HSA).',
      'Pick one low-friction income lever: a weekend gig, selling unused items, or a paid skill you already have.',
      "Automate any new income directly into a Pod so lifestyle doesn't absorb it.",
    ],
    longTermHabits: [
      'Treat any raise, bonus, or windfall as "already saved" — automate before it hits your spending account.',
      'Build one repeatable income skill (writing, design, tutoring, a trade) rather than chasing new hustles.',
    ],
    helpfulTools: [
      'A dedicated Savings Pod that captures side income automatically.',
      'A weekly 15-minute review to track new income and recovered costs.',
    ],
    whereSquirrelllHelps: 'Routing every side-income deposit into a Pod means the extra money actually accumulates instead of quietly disappearing into daily spending.',
    faqs: [
      { q: 'Do I have to start a second job?', a: "No. Recovering money you're already losing (subscriptions, fees, unclaimed benefits) usually beats a second job in the first month." },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'saving-for-first-home',
    title: "I'm Saving for My First Home",
    category: 'building-wealth',
    problem: 'A first home feels years away and the down-payment number keeps moving. You need a repeatable system that turns a huge goal into something you can act on this month.',
    whyItHappens: 'Big goals fail when they stay abstract. "Save for a house" is not a plan; "$200/week into a Home Pod for 36 months" is. The path is boring, automated, and measured in months — not motivation.',
    practicalSteps: [
      'Set a target down-payment number (region-specific) and divide by your realistic monthly saving to get an honest timeline.',
      'Open a dedicated "Home" Savings Pod, separate from your emergency fund and everyday spending.',
      'Automate the transfer on payday, before any discretionary spending.',
      'Redirect windfalls (tax refund, bonus, gift) 100% to the Home Pod for at least the first year.',
      'Protect your credit: pay every bill on time, keep card utilization low, avoid opening new credit lines close to applying.',
    ],
    longTermHabits: [
      'Raise the auto-transfer amount every time your income increases, before lifestyle adjusts.',
      'Review the target every 6 months against local prices and interest rates — adjust the plan, not the goal.',
      'Keep the emergency fund fully funded in parallel — buying a home with $0 buffer is the fastest way to lose it.',
    ],
    helpfulTools: [
      'A dedicated Home Savings Pod with a fixed weekly or bi-weekly deposit.',
      'A separate high-yield account for the down payment (kept out of daily view).',
      'A first-time buyer assistance program in your region — most people leave grants on the table.',
    ],
    whereSquirrelllHelps: 'A named Home Pod keeps the down payment separate from spending money and makes the progress visible every week — which is the single strongest predictor of sticking with a long-horizon goal.',
    faqs: [
      { q: 'Should I invest the down payment in stocks to grow it faster?', a: 'Generally no if you plan to buy within ~3 years. Short-horizon money belongs in a high-yield savings or money-market account, not the stock market.' },
      { q: 'How big should the down payment be?', a: 'It depends on region and loan type, but a larger down payment lowers monthly costs and often removes mortgage insurance. Even 3–5% is enough to start for many first-time buyer programs.' },
    ],
    updated: '2026-07-17',
  },
];

// -----------------------------------------------------------------------------
// Research summaries (seed content — 2 anchors, framework proof)
// -----------------------------------------------------------------------------

export const RESEARCH: ResearchSummary[] = [
  {
    slug: 'save-more-tomorrow',
    title: 'Save More Tomorrow (Thaler & Benartzi, 2004)',
    category: 'behavioral-economics',
    categories: ['saving-money'],
    difficulty: 'Intermediate',
    summary:
      'A landmark behavioral-economics program that increased employee savings rates from 3.5% to 13.6% over 40 months by asking workers to pre-commit future pay raises to their retirement plan. The mechanism: pre-commitment plus automatic escalation removes the pain of saving today.',
    sections: [
      { heading: 'The core insight', body: 'People are willing to save more later, even when they resist saving more now. Present-bias makes cutting today\'s consumption feel painful; committing tomorrow\'s (not-yet-owned) raise doesn\'t.' },
      { heading: 'The mechanism', body: 'Employees opted in once. Contribution rates then rose automatically with every raise until reaching a cap. Because take-home pay never dropped, no active decision to sacrifice was ever required.' },
      { heading: 'Why it matters to Squirrelll.ing', body: 'The same principle drives Savings Pods: commit once, let automation escalate, remove the moment of pain. The Daily Pool applies the same logic at the community level.' },
    ],
    keyTakeaways: [
      'Pre-commitment + automation beats willpower.',
      'Present-bias is the enemy; scheduling is the fix.',
      'Small default increases compound into large behavioral change.',
    ],
    citations: [
      { title: 'Save More Tomorrow: Using Behavioral Economics to Increase Employee Saving', authors: 'Thaler, R. H. & Benartzi, S.', year: 2004, url: 'https://www.journals.uchicago.edu/doi/10.1086/380085' },
    ],
    related: [
      { section: 'concept', slug: 'pay-yourself-first' },
      { section: 'ask', slug: 'how-can-i-save-money' },
      { section: 'guide', slug: 'cant-save-money' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'mental-accounting',
    title: 'Mental Accounting Matters (Thaler, 1999)',
    category: 'behavioral-economics',
    categories: ['financial-psychology', 'money-habits'],
    difficulty: 'Intermediate',
    summary:
      'Richard Thaler shows that people treat money differently depending on which mental "account" it sits in — a windfall, a paycheck, a savings jar — even though a dollar is a dollar. Labelling and separating money changes how it gets spent.',
    sections: [
      { heading: 'What mental accounting is', body: 'People assign money to categories (rent, entertainment, "fun money") and evaluate gains and losses within each category, not across their whole portfolio. This is economically irrational but psychologically universal.' },
      { heading: 'Practical consequences', body: 'A tax refund gets spent more freely than the same amount from a paycheck. A named "vacation" jar is protected from grocery raids. A separate account is functionally different from a labelled row in one account.' },
      { heading: 'How it powers Squirrelll.ing', body: 'Named Savings Pods exploit this deliberately. A Pod labelled "Emergency" or "Home" is psychologically off-limits in a way that generic savings is not — turning a bias into a tool.' },
    ],
    keyTakeaways: [
      'Named money is harder to spend than unnamed money.',
      'Separating accounts is more effective than tagging within one.',
      'Behavioral biases can be enlisted, not just resisted.',
    ],
    citations: [
      { title: 'Mental Accounting Matters', authors: 'Thaler, R. H.', year: 1999, url: 'https://onlinelibrary.wiley.com/doi/10.1002/(SICI)1099-0771(199909)12:3%3C183::AID-BDM318%3E3.0.CO;2-F' },
    ],
    related: [
      { section: 'concept', slug: 'pay-yourself-first' },
      { section: 'platform', slug: 'savings-pods' },
      { section: 'guide', slug: 'better-financial-habits' },
    ],
    updated: '2026-07-17',
  },
];

// -----------------------------------------------------------------------------
// Concepts (seed content — 6 anchors)
// -----------------------------------------------------------------------------

export const CONCEPTS: Concept[] = [
  {
    slug: 'microfinance',
    term: 'Microfinance',
    title: 'Microfinance',
    category: 'microfinance',
    categories: ['community-finance', 'financial-education'],
    shortDefinition:
      'Financial services — savings, credit, insurance, and payments — delivered in very small amounts to people traditionally excluded from formal banking.',
    longDefinition:
      'Microfinance covers any banking-style service designed around micro-scale transactions. It emerged formally in the 1970s with the Grameen Bank in Bangladesh, but the underlying practices — pooled community savings, small rotating loans, informal credit — are centuries old. Modern microfinance blends these traditions with digital delivery.',
    alsoKnownAs: ['Microcredit', 'Micro-savings', 'Inclusive finance'],
    examples: [
      'ROSCAs (Susu, Tanda, Chit funds)',
      'Grameen Bank group lending',
      'Mobile money savings groups (M-Pesa)',
      'Digital daily-contribution pools (like the Squirrelll.ing Daily Pool)',
    ],
    keyTakeaways: [
      'Micro-scale is a design choice, not a limitation.',
      'Community accountability substitutes for collateral.',
      'Digital delivery lets historical models scale globally.',
    ],
    faqs: [
      { q: 'Is microfinance the same as charity?', a: 'No. Microfinance is financial service delivery — participants save and often repay. Charity is a one-way transfer.' },
    ],
    references: [
      { title: 'Yunus, M. — Banker to the Poor' },
      { title: 'Ardener, S. — The Comparative Study of Rotating Credit Associations' },
    ],
    related: [
      { section: 'concept', slug: 'rosca' },
      { section: 'ask', slug: 'what-is-a-rosca' },
      { section: 'platform', slug: 'daily-pool' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'rosca',
    term: 'ROSCA',
    title: 'ROSCA (Rotating Savings and Credit Association)',
    category: 'community-finance',
    categories: ['microfinance'],
    shortDefinition:
      'A group where members contribute a fixed amount to a shared pot at set intervals, and one member receives the full pot each cycle until everyone has received.',
    longDefinition:
      'ROSCAs appear across cultures under different names: Susu (West Africa), Tanda (Mexico), Chit fund (India), Hui (China), Arisan (Indonesia), Ekub (Ethiopia). They combine forced saving, community accountability, and access to lump sums without formal credit — which is why they persist even alongside modern banking.',
    alsoKnownAs: ['Susu', 'Tanda', 'Chit fund', 'Hui', 'Arisan', 'Ekub'],
    examples: [
      '10 people contribute $50/month; each month one receives $500.',
      'Digital variants automate contribution and selection (e.g. the Squirrelll.ing Daily Pool).',
    ],
    references: [
      { title: 'Ardener, S. (1964) — The Comparative Study of Rotating Credit Associations' },
    ],
    related: [
      { section: 'concept', slug: 'microfinance' },
      { section: 'ask', slug: 'what-is-a-rosca' },
      { section: 'platform', slug: 'daily-pool' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'compound-interest',
    term: 'Compound Interest',
    title: 'Compound Interest',
    category: 'investing',
    categories: ['financial-education', 'saving-money'],
    shortDefinition: 'Interest earned on both the original principal and on the interest that has already accumulated.',
    longDefinition:
      'Compound interest is why time is the most powerful lever in personal finance. Each period\'s interest joins the principal, so the base grows exponentially rather than linearly. Small, consistent contributions started early routinely outperform large, late ones.',
    examples: [
      '$100/month at 6% for 10 years ≈ $16,470 (contributions: $12,000).',
      '$100/month at 6% for 30 years ≈ $100,450 (contributions: $36,000).',
    ],
    keyTakeaways: [
      'Time matters more than amount.',
      'Consistency beats one-off deposits.',
      'The same math works against you with high-interest debt.',
    ],
    related: [
      { section: 'ask', slug: 'can-saving-small-amounts-grow' },
      { section: 'concept', slug: 'pay-yourself-first' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'emergency-fund',
    term: 'Emergency Fund',
    title: 'Emergency Fund',
    category: 'emergency-funds',
    categories: ['financial-wellness', 'saving-money'],
    shortDefinition: 'Cash set aside specifically to cover unexpected expenses without borrowing, ideally kept separate from everyday spending.',
    longDefinition:
      'An emergency fund is the single most protective personal-finance instrument. Research from the Financial Health Network finds a $500 buffer covers roughly 65% of surprise expenses and materially reduces financial stress. Typical long-term targets are 1–6 months of essential expenses.',
    examples: [
      'A $500 starter fund for immediate resilience.',
      'One month of rent + utilities + food + transport for medium security.',
    ],
    keyTakeaways: [
      'Start at $500, not $10,000. The first target is behavioral.',
      'Keep it separate from goal savings and daily spending.',
      'Refill immediately after any use.',
    ],
    related: [
      { section: 'guide', slug: 'emergency-fund' },
      { section: 'platform', slug: 'savings-pods' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'pay-yourself-first',
    term: 'Pay Yourself First',
    title: 'Pay Yourself First',
    category: 'money-habits',
    categories: ['saving-money', 'financial-psychology'],
    shortDefinition: 'The practice of automating savings on the day income arrives — before any discretionary spending.',
    longDefinition:
      'Pay-yourself-first inverts the default order (spend, then save what\'s left) into save first, then spend what remains. Behavioral research consistently shows this order change alone increases savings rates more than any budgeting technique.',
    keyTakeaways: [
      'Order matters more than amount.',
      'Automation removes the decision from every pay cycle.',
      'Works at 1% of income as well as at 20%.',
    ],
    related: [
      { section: 'research', slug: 'save-more-tomorrow' },
      { section: 'guide', slug: 'cant-save-money' },
      { section: 'platform', slug: 'savings-pods' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'daily-pool',
    term: 'Daily Pool',
    title: 'Daily Pool',
    category: 'daily-pool',
    categories: ['community-finance', 'microfinance'],
    shortDefinition: 'A digital, regional community-finance mechanism where every member contributes a small fixed daily amount and one member from that region receives the pool each day.',
    longDefinition:
      'The Daily Pool is a modern, automated adaptation of the ROSCA model. Contributions are small enough to feel insignificant to any individual member, contributions and receipts run on a 24-hour cycle, and pools are scoped per region so amounts stay appropriate to local purchasing power.',
    keyTakeaways: [
      'It is community finance, not gambling — contributions are fixed and small.',
      'Every contribution helps another member on days you don\'t receive.',
      'Regional scoping keeps contribution amounts fair.',
    ],
    related: [
      { section: 'concept', slug: 'rosca' },
      { section: 'platform', slug: 'daily-pool' },
      { section: 'ask', slug: 'is-the-daily-pool-gambling' },
    ],
    updated: '2026-07-17',
  },
];

// -----------------------------------------------------------------------------
// Platform docs (seed content — 3 anchors)
// -----------------------------------------------------------------------------

export const PLATFORM_DOCS: PlatformDoc[] = [
  {
    slug: 'daily-pool',
    title: 'Daily Pool — How it works',
    category: 'daily-pool',
    categories: ['community-finance'],
    quickAnswer:
      'You contribute a small fixed amount each day, sized to your region so it feels insignificant. All contributions in your region combine into one pool. Each day, one member from your region receives the pool minus a 12% platform fee. Every region has its own separate pool.',
    sections: [
      { heading: 'Contribution rules', body: 'Everyone in a region contributes the same amount. There is no way to contribute more to increase your chance of receiving.' },
      { heading: 'Selection', body: 'One member per region receives per 24-hour cycle. If today is not your day, your contribution helped someone in your community.' },
      { heading: 'Fees', body: 'A 12% platform fee is deducted from the pool before distribution. No fees are charged on individual contributions.' },
      { heading: 'Opting in and out', body: 'Participation is optional. You can pause contributions at any time and continue using other Squirrelll.ing features (like Savings Pods) independently.' },
    ],
    faqs: [
      { q: 'Is this gambling?', a: 'No. Contributions are fixed, small, and cannot be increased for better odds. See "Is the Daily Pool gambling?" for detail.' },
      { q: 'What happens if I never receive?', a: 'Your contributions supported your community, and you can stop at any time. Any savings held elsewhere in the app are separate and remain yours.' },
    ],
    keyTakeaways: [
      'Small, fixed daily contribution.',
      'One receiver per region per day.',
      '12% platform fee on the distributed pool.',
    ],
    related: [
      { section: 'concept', slug: 'daily-pool' },
      { section: 'ask', slug: 'is-the-daily-pool-gambling' },
      { section: 'concept', slug: 'rosca' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'savings-pods',
    title: 'Savings Pods — How they work',
    category: 'savings-pods',
    categories: ['apps'],
    quickAnswer:
      'A Savings Pod is a named, goal-based automatic-deposit account inside Squirrelll.ing. You define the goal (target amount and timeline), set a recurring transfer, and the app moves the money automatically. Run as many Pods in parallel as you want.',
    sections: [
      { heading: 'Setting up a Pod', body: 'Name the goal, choose the target, set the recurring amount and frequency (daily or weekly). The Pod runs until you hit the goal or pause it.' },
      { heading: 'Multiple goals', body: 'Common pattern: one Emergency Pod, one Home Pod, one lifestyle Pod (travel, gifts). Named separation is a proven behavioral tool.' },
      { heading: 'Withdrawals & fees', body: 'You can withdraw when your goal is reached (or earlier). A 3% fee applies to savings withdrawals.' },
    ],
    faqs: [
      { q: 'Can I pause or change a Pod?', a: 'Yes — Pods are flexible and can be paused or adjusted at any time.' },
      { q: 'Is my money locked in?', a: 'No. You retain full control.' },
    ],
    related: [
      { section: 'ask', slug: 'how-do-savings-pods-work' },
      { section: 'concept', slug: 'pay-yourself-first' },
      { section: 'research', slug: 'mental-accounting' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'fees',
    title: 'Fees & Charges',
    category: 'trust-and-security',
    categories: ['apps'],
    quickAnswer:
      'Squirrelll.ing keeps fees simple and visible: no fee on individual contributions, a 12% platform fee taken from the Daily Pool before distribution, and a 3% fee on Savings Pod withdrawals. No monthly subscription, no account fees.',
    sections: [
      { heading: 'Daily Pool fee', body: '12% is deducted from the daily pool before it is distributed to the receiving member. It funds platform operations, payment infrastructure, and support.' },
      { heading: 'Savings Pod withdrawal fee', body: '3% is charged when you withdraw savings from a Pod. Contributions to Pods are free.' },
      { heading: 'What we do not charge', body: 'No monthly subscription. No account-opening fee. No fee on individual daily contributions.' },
    ],
    keyTakeaways: [
      '12% platform fee on the Daily Pool.',
      '3% fee on Savings Pod withdrawals.',
      'No subscription or hidden charges.',
    ],
    related: [
      { section: 'platform', slug: 'daily-pool' },
      { section: 'platform', slug: 'savings-pods' },
    ],
    updated: '2026-07-17',
  },
];

// -----------------------------------------------------------------------------
// Section metadata
// -----------------------------------------------------------------------------

export const SECTIONS: Record<SectionKey, { key: SectionKey; label: string; path: string; description: string }> = {
  ask: { key: 'ask', label: 'Ask', path: '/ask', description: 'Answers to individual questions.' },
  guide: { key: 'guide', label: 'Money Guides', path: '/money-guides', description: 'Action plans for real-life financial situations.' },
  research: { key: 'research', label: 'Research', path: '/research', description: 'Summaries of academic and behavioral finance research.' },
  concept: { key: 'concept', label: 'Concepts', path: '/concepts', description: 'Evergreen definitions of financial ideas.' },
  platform: { key: 'platform', label: 'Squirrelll.ing', path: '/squirrelll', description: 'Everything about the Squirrelll.ing platform.' },
};

export const sectionPath = (section: SectionKey, slug?: string) =>
  slug ? `${SECTIONS[section].path}/${slug}` : SECTIONS[section].path;

// -----------------------------------------------------------------------------
// Lookups
// -----------------------------------------------------------------------------

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const getAsk = (slug: string) => ASK_ARTICLES.find((a) => a.slug === slug);
export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const getResearch = (slug: string) => RESEARCH.find((r) => r.slug === slug);
export const getConcept = (slug: string) => CONCEPTS.find((c) => c.slug === slug);
export const getPlatformDoc = (slug: string) => PLATFORM_DOCS.find((p) => p.slug === slug);

export function getNode(ref: NodeRef): BaseNode | undefined {
  switch (ref.section) {
    case 'ask': return getAsk(ref.slug);
    case 'guide': return getGuide(ref.slug);
    case 'research': return getResearch(ref.slug);
    case 'concept': return getConcept(ref.slug);
    case 'platform': return getPlatformDoc(ref.slug);
  }
}

const nodeCategories = (n: BaseNode): string[] => [n.category, ...(n.categories ?? [])];

// -----------------------------------------------------------------------------
// Category filters (per section)
// -----------------------------------------------------------------------------

export const askByCategory = (cat: string) =>
  ASK_ARTICLES.filter((a) => nodeCategories(a).includes(cat));
export const guidesByCategory = (cat: string) =>
  GUIDES.filter((g) => nodeCategories(g).includes(cat));
export const researchByCategory = (cat: string) =>
  RESEARCH.filter((r) => nodeCategories(r).includes(cat));
export const conceptsByCategory = (cat: string) =>
  CONCEPTS.filter((c) => nodeCategories(c).includes(cat));
export const platformByCategory = (cat: string) =>
  PLATFORM_DOCS.filter((p) => nodeCategories(p).includes(cat));

export function nodesInCategory(cat: string) {
  return {
    ask: askByCategory(cat),
    guides: guidesByCategory(cat),
    research: researchByCategory(cat),
    concepts: conceptsByCategory(cat),
    platform: platformByCategory(cat),
  };
}

// -----------------------------------------------------------------------------
// Graph — auto-fill related links across sections
// -----------------------------------------------------------------------------

type RelatedBucket = {
  ask: AskArticle[];
  guides: Guide[];
  research: ResearchSummary[];
  concepts: Concept[];
  platform: PlatformDoc[];
};

function fillByCategory<T extends BaseNode>(
  pool: T[],
  currentSlug: string,
  cats: string[],
  limit: number,
  exclude: Set<string>,
): T[] {
  const inCat = pool.filter(
    (n) => n.slug !== currentSlug && !exclude.has(n.slug) && nodeCategories(n).some((c) => cats.includes(c)),
  );
  const rest = pool.filter((n) => n.slug !== currentSlug && !exclude.has(n.slug) && !inCat.includes(n));
  return [...inCat, ...rest].slice(0, limit);
}

export function getRelated(node: BaseNode, section: SectionKey): RelatedBucket {
  const cats = nodeCategories(node);
  const bucket: RelatedBucket = { ask: [], guides: [], research: [], concepts: [], platform: [] };

  // 1. Manual curated links first
  for (const ref of node.related ?? []) {
    const target = getNode(ref);
    if (!target) continue;
    switch (ref.section) {
      case 'ask': bucket.ask.push(target as AskArticle); break;
      case 'guide': bucket.guides.push(target as Guide); break;
      case 'research': bucket.research.push(target as ResearchSummary); break;
      case 'concept': bucket.concepts.push(target as Concept); break;
      case 'platform': bucket.platform.push(target as PlatformDoc); break;
    }
  }

  // 2. Auto-fill remaining slots by category
  const seen = (b: BaseNode[]) => new Set(b.map((n) => n.slug));
  const limits = { ask: 6, guides: 4, research: 3, concepts: 4, platform: 3 };

  bucket.ask = [...bucket.ask, ...fillByCategory(ASK_ARTICLES, section === 'ask' ? node.slug : '', cats, limits.ask - bucket.ask.length, seen(bucket.ask))].slice(0, limits.ask);
  bucket.guides = [...bucket.guides, ...fillByCategory(GUIDES, section === 'guide' ? node.slug : '', cats, limits.guides - bucket.guides.length, seen(bucket.guides))].slice(0, limits.guides);
  bucket.research = [...bucket.research, ...fillByCategory(RESEARCH, section === 'research' ? node.slug : '', cats, limits.research - bucket.research.length, seen(bucket.research))].slice(0, limits.research);
  bucket.concepts = [...bucket.concepts, ...fillByCategory(CONCEPTS, section === 'concept' ? node.slug : '', cats, limits.concepts - bucket.concepts.length, seen(bucket.concepts))].slice(0, limits.concepts);
  bucket.platform = [...bucket.platform, ...fillByCategory(PLATFORM_DOCS, section === 'platform' ? node.slug : '', cats, limits.platform - bucket.platform.length, seen(bucket.platform))].slice(0, limits.platform);

  return bucket;
}

// -----------------------------------------------------------------------------
// Legacy relatedAsk / relatedGuides (kept — used by existing pages)
// -----------------------------------------------------------------------------

export function relatedAsk(exceptSlug: string, category?: string, limit = 6): AskArticle[] {
  const sameCat = ASK_ARTICLES.filter((a) => a.slug !== exceptSlug && (!category || nodeCategories(a).includes(category)));
  const rest = ASK_ARTICLES.filter((a) => a.slug !== exceptSlug && !sameCat.includes(a));
  return [...sameCat, ...rest].slice(0, limit);
}

export function relatedGuides(exceptSlug: string, category?: string, limit = 4): Guide[] {
  const sameCat = GUIDES.filter((g) => g.slug !== exceptSlug && (!category || nodeCategories(g).includes(category)));
  const rest = GUIDES.filter((g) => g.slug !== exceptSlug && !sameCat.includes(g));
  return [...sameCat, ...rest].slice(0, limit);
}

// -----------------------------------------------------------------------------
// Reading time helpers
// -----------------------------------------------------------------------------

export function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
export function askReadingTime(a: AskArticle): number {
  return estimateReadingTime([a.quickAnswer, ...a.sections.map((s) => s.body), ...a.faqs.map((f) => f.q + ' ' + f.a)].join(' '));
}
export function guideReadingTime(g: Guide): number {
  return estimateReadingTime([g.problem, g.whyItHappens, ...g.practicalSteps, ...g.longTermHabits, ...g.helpfulTools, g.whereSquirrelllHelps ?? '', ...g.faqs.map((f) => f.q + ' ' + f.a)].join(' '));
}
export function researchReadingTime(r: ResearchSummary): number {
  return estimateReadingTime([r.summary, ...r.sections.map((s) => s.body), ...(r.faqs ?? []).map((f) => f.q + ' ' + f.a)].join(' '));
}
export function conceptReadingTime(c: Concept): number {
  return estimateReadingTime([c.shortDefinition, c.longDefinition, ...(c.sections ?? []).map((s) => s.body), ...(c.examples ?? []), ...(c.faqs ?? []).map((f) => f.q + ' ' + f.a)].join(' '));
}
export function platformReadingTime(p: PlatformDoc): number {
  return estimateReadingTime([p.quickAnswer, ...p.sections.map((s) => s.body), ...(p.faqs ?? []).map((f) => f.q + ' ' + f.a)].join(' '));
}

export function relatedSearches(a: AskArticle, limit = 5): string[] {
  if (a.relatedSearches?.length) return a.relatedSearches.slice(0, limit);
  return relatedAsk(a.slug, a.category, limit).map((r) => r.question || r.title);
}
export function guideContinueLearning(g: Guide, limit = 6): AskArticle[] {
  return relatedAsk(g.slug, g.category, limit);
}

// -----------------------------------------------------------------------------
// Global search index
// -----------------------------------------------------------------------------

export type SearchResult = {
  section: SectionKey;
  slug: string;
  title: string;
  snippet: string;
  category?: string;
};

function toResult<T extends BaseNode>(section: SectionKey, n: T, snippet: string): SearchResult {
  return { section, slug: n.slug, title: n.title, snippet, category: n.category };
}

export function searchAll(query: string): Record<SectionKey, SearchResult[]> & { categories: Category[] } {
  const q = query.trim().toLowerCase();
  const empty = { ask: [] as SearchResult[], guide: [] as SearchResult[], research: [] as SearchResult[], concept: [] as SearchResult[], platform: [] as SearchResult[], categories: [] as Category[] };
  if (!q) return empty;

  const match = (haystack: string) => haystack.toLowerCase().includes(q);

  const askR = ASK_ARTICLES.filter((a) => match(a.title) || match(a.question) || match(a.quickAnswer)).map((a) => toResult('ask', a, a.quickAnswer.slice(0, 130) + '…'));
  const guideR = GUIDES.filter((g) => match(g.title) || match(g.problem)).map((g) => toResult('guide', g, g.problem.slice(0, 130) + '…'));
  const researchR = RESEARCH.filter((r) => match(r.title) || match(r.summary)).map((r) => toResult('research', r, r.summary.slice(0, 130) + '…'));
  const conceptR = CONCEPTS.filter((c) => match(c.term) || match(c.title) || match(c.shortDefinition) || match(c.longDefinition) || (c.alsoKnownAs?.some(match) ?? false)).map((c) => toResult('concept', c, c.shortDefinition));
  const platformR = PLATFORM_DOCS.filter((p) => match(p.title) || match(p.quickAnswer)).map((p) => toResult('platform', p, p.quickAnswer.slice(0, 130) + '…'));
  const catR = CATEGORIES.filter((c) => match(c.name) || match(c.description));

  return { ask: askR, guide: guideR, research: researchR, concept: conceptR, platform: platformR, categories: catR };
}
