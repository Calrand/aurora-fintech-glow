// Data-driven knowledge library for /ask and /money-guides.
// Adding new articles/money-guides = append an entry here. Related links are auto-computed by category.

export type Category = {
  slug: string;
  name: string;
  description: string;
  scope: 'ask' | 'guide' | 'both';
};

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type AskArticle = {
  slug: string;
  title: string;
  question: string;
  category: string; // category slug
  difficulty?: Difficulty;
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
  definedTerm?: { name: string; description: string };
  /** Optional curated "People also search for" prompts. Falls back to related question titles. */
  relatedSearches?: string[];
  updated: string; // ISO — kept internal only, not surfaced in UI
};


export type Guide = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  whyItHappens: string;
  practicalSteps: string[];
  longTermHabits: string[];
  helpfulTools: string[];
  whereSquirrelllHelps?: string;
  faqs: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
  updated: string;
};

export const CATEGORIES: Category[] = [
  { slug: 'saving-money', name: 'Saving Money', description: 'Practical ways to keep more of what you earn.', scope: 'both' },
  { slug: 'budgeting', name: 'Budgeting', description: 'Simple budgeting frameworks that actually stick.', scope: 'both' },
  { slug: 'community-finance', name: 'Community Finance', description: 'How groups pool money to help each other.', scope: 'both' },
  { slug: 'microfinance', name: 'Microfinance', description: 'Small amounts, big impact — the mechanics explained.', scope: 'both' },
  { slug: 'financial-habits', name: 'Financial Habits', description: 'Tiny routines that reshape your money life.', scope: 'both' },
  { slug: 'behavioral-economics', name: 'Behavioral Economics', description: 'Why we act the way we do with money.', scope: 'ask' },
  { slug: 'savings-pods', name: 'Savings Pods', description: 'Goal-based automatic savings, explained.', scope: 'both' },
  { slug: 'daily-pool', name: 'Daily Pool', description: 'How the community Daily Pool works.', scope: 'ask' },
  { slug: 'round-up-savings', name: 'Round-Up Savings', description: 'Turning spare change into real savings.', scope: 'ask' },
  { slug: 'getting-started', name: 'Getting Started', description: 'First steps toward financial control.', scope: 'guide' },
  { slug: 'financial-stress', name: 'Financial Stress', description: 'When money feels overwhelming — do this.', scope: 'guide' },
  { slug: 'emergency-planning', name: 'Emergency Planning', description: 'Prepare for the unexpected without panic.', scope: 'guide' },
  { slug: 'building-wealth', name: 'Building Wealth', description: 'Long-term thinking, small daily moves.', scope: 'guide' },
];

export const ASK_ARTICLES: AskArticle[] = [
  {
    slug: 'what-is-squirrellling',
    title: 'What is Squirrellling?',
    question: 'What is Squirrellling?',
    category: 'community-finance',
    quickAnswer:
      'Squirrellling is the practice of setting aside small amounts of money consistently — often as part of a community — to build financial stability. It draws on centuries-old traditions like Susu in West Africa and Tandas in Mexico, updated for a digital, daily-contribution model.',
    sections: [
      {
        heading: 'The idea in one line',
        body: 'Small amounts, saved daily, pooled with others, become something meaningful — for someone today, and for you another day.',
      },
      {
        heading: 'Why it works',
        body: 'Consistency beats magnitude. A tiny daily habit compounds into a real balance and, when combined with community, into shared safety nets. Traditional ROSCAs (Rotating Savings and Credit Associations) have used this logic for over a century across dozens of cultures.',
      },
      {
        heading: 'Squirrellling in the Squirrelll.ing app',
        body: 'Inside the app, Squirrellling shows up as two features: the Daily Pool (community rotation) and Savings Pods (personal goal-based auto-deposits). Both are optional and both are built on the same idea: micro contributions, real outcomes.',
      },
    ],
    faqs: [
      { q: 'Is Squirrellling the same as saving?', a: 'It includes saving, but it also includes the community rotation aspect — everyone contributes, one person receives at a time.' },
      { q: 'Do I need a lot of money to start?', a: 'No. The whole point is that contributions are small enough to feel insignificant to any one person.' },
    ],
    definedTerm: {
      name: 'Squirrellling',
      description: 'The habit of setting aside small amounts of money regularly, often within a community pool, to build long-term financial stability.',
    },
    references: [
      { title: 'Ardener, S. — The Comparative Study of Rotating Credit Associations' },
      { title: 'Thaler, R. — Nudge: Improving Decisions About Health, Wealth, and Happiness' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'how-can-i-save-money',
    title: 'How can I save money?',
    question: 'How can I save money when everything feels expensive?',
    category: 'saving-money',
    quickAnswer:
      'Start ridiculously small. Automate a tiny recurring transfer — even $1 a day — into a separate account you don\'t touch. Then cut one recurring cost this week. Motivation is unreliable; automation and friction (making saving easy and spending harder) do the real work.',
    sections: [
      {
        heading: 'Automate before you optimize',
        body: 'The single highest-leverage move is a scheduled auto-transfer on payday. If saving depends on your willpower each week, it will lose to life. Set it once, forget it.',
      },
      {
        heading: 'Cut one thing, not everything',
        body: 'Trying to overhaul your whole budget usually fails. Pick one recurring cost this week — an unused subscription, a delivery habit, a fee — and redirect it.',
      },
      {
        heading: 'Use a separate account',
        body: 'Savings you can see in your everyday balance rarely survive the month. A separate pod or account creates friction that protects the money from your own future self.',
      },
    ],
    faqs: [
      { q: 'How much should I save?', a: 'Start with any amount you will not miss. The habit matters more than the number in the first 60 days.' },
      { q: 'What if my income is irregular?', a: 'Save a percentage of each incoming payment (even 2–5%) instead of a fixed amount.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'can-saving-small-amounts-grow',
    title: 'Can saving $1 a day make a difference?',
    question: 'Can saving small amounts actually grow into something meaningful?',
    category: 'saving-money',
    quickAnswer:
      'Yes. $1 a day is $365 a year — an emergency-buffer starter. More importantly, the habit itself is what compounds: once daily saving is automatic, raising it to $2 or $5 costs nothing psychologically.',
    sections: [
      {
        heading: 'The math nobody shows you',
        body: '$1/day = $365/year. $3/day = $1,095/year. Add a modest 4% annual return over 10 years and $3/day becomes roughly $13,400. The number is real; the behavior is the hard part.',
      },
      {
        heading: 'Why small amounts win',
        body: 'Small commitments avoid the "all-or-nothing" trap. Behavioral research (Thaler, Benartzi) shows people stick to plans they barely notice, and quit plans that hurt.',
      },
    ],
    faqs: [
      { q: 'Isn\'t inflation eating this?', a: 'Inflation reduces purchasing power, but zero savings is worse than modest savings. Small savings also unlock better financial options later (avoiding late fees, overdrafts).' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'what-is-a-rosca',
    title: 'What is a ROSCA?',
    question: 'What is a ROSCA, Susu, or Tanda?',
    category: 'community-finance',
    quickAnswer:
      'A ROSCA (Rotating Savings and Credit Association) is a group of people who each contribute a fixed amount to a shared pot at regular intervals. Each cycle, one member receives the full pot. Everyone gets a turn. It\'s known as Susu in West Africa, Tanda in Mexico, Chit fund in India, and dozens of other names worldwide.',
    sections: [
      {
        heading: 'How a ROSCA works',
        body: 'Members agree on the amount, frequency, and rotation order. On each round, one member receives the pool. The cycle repeats until every member has received once.',
      },
      {
        heading: 'Why they persist across cultures',
        body: 'ROSCAs work because they combine forced saving, community accountability, and access to lump sums without formal credit. Cited in economic research from Ardener (1964) onward.',
      },
      {
        heading: 'How Squirrelll.ing modernizes the model',
        body: 'The Daily Pool takes the ROSCA idea and adapts it: contributions are tiny and daily, selection is random per region, and everything is automated.',
      },
    ],
    faqs: [
      { q: 'Is a ROSCA the same as gambling?', a: 'No. In a ROSCA every member eventually receives (or in the Daily Pool, everyone has a fair, daily chance without needing to "bet").' },
    ],
    definedTerm: {
      name: 'ROSCA',
      description: 'Rotating Savings and Credit Association — a group where members contribute equally to a pot that is distributed to one member per cycle.',
    },
    updated: '2026-07-17',
  },
  {
    slug: 'how-do-savings-pods-work',
    title: 'How do Savings Pods work?',
    question: 'What is a Savings Pod and how do I use one?',
    category: 'savings-pods',
    quickAnswer:
      'A Savings Pod is a goal-based auto-deposit account inside Squirrelll.ing. You set a target (e.g. $500 for a laptop), choose a fixed amount, pick daily or weekly, and the app moves the money automatically until you hit the goal. You can run multiple Pods at once.',
    sections: [
      {
        heading: 'Set it once, forget it',
        body: 'Pods are subscription-style: define the goal and let automation handle the discipline.',
      },
      {
        heading: 'Multiple goals in parallel',
        body: 'Run separate Pods for rent buffer, travel, gifts, or emergencies. Each Pod tracks its own progress.',
      },
      {
        heading: 'Withdraw when you\'re ready',
        body: 'When your goal is reached (or your set time is up) you can withdraw. A 3% fee applies to savings withdrawals.',
      },
    ],
    faqs: [
      { q: 'Can I pause a Pod?', a: 'Yes — Pods are flexible and can be paused or adjusted.' },
      { q: 'Is my money locked?', a: 'No. You retain control and can withdraw when it suits you.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'is-the-daily-pool-gambling',
    title: 'Is the Daily Pool gambling?',
    question: 'Is the Daily Pool considered gambling?',
    category: 'daily-pool',
    quickAnswer:
      'No. There is no betting, no odds you can buy into, and no risk of losing money in the gambling sense. You contribute a small daily amount you have already decided is insignificant to you, and one member from your region receives the pool each day.',
    sections: [
      {
        heading: 'Why it isn\'t gambling',
        body: 'Gambling risks money you value in hopes of winning more. The Daily Pool asks for an amount you\'ve deemed insignificant, and on the days you don\'t receive, your contribution helps someone in your community who does.',
      },
      {
        heading: 'Design that prevents addictive behavior',
        body: 'Contributions are fixed and small. There is no way to "bet more" to increase odds. The 24-hour cycle and regional pool structure make the mechanic predictable and community-oriented, not thrill-driven.',
      },
    ],
    faqs: [
      { q: 'Can I contribute more to increase my chance?', a: 'No — every member contributes the same fixed regional amount.' },
      { q: 'What if I never receive?', a: 'Your contributions supported people in your community. You can withdraw savings and stop contributing at any time.' },
    ],
    updated: '2026-07-17',
  },
];

export const GUIDES: Guide[] = [
  {
    slug: 'im-broke',
    title: "I'm Broke. What Should I Do?",
    category: 'financial-stress',
    problem:
      'You have little to no money, bills are looming, and every option feels blocked. This is one of the most common financial situations, and it is recoverable.',
    whyItHappens:
      'Being broke is rarely one bad decision — it\'s usually the compound result of low income, rising costs, unexpected shocks, and financial systems that punish people who have the least. Understanding that removes the shame; the next steps remove the paralysis.',
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
    whereSquirrelllHelps:
      'A $1/day Savings Pod rebuilds the habit without pressure. If your region\'s Daily Pool contribution is genuinely insignificant to you, participating gives you a real daily chance at a meaningful lump sum without changing anything else.',
    faqs: [
      { q: 'Should I use credit cards to get through?', a: 'Only for essentials you cannot delay, and only if you have a specific repayment plan. Otherwise call the creditor first.' },
      { q: 'What if I can\'t save anything?', a: 'Focus on the triage list first. Saving comes back online the moment you\'re out of crisis mode.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'paycheck-to-paycheck',
    title: 'Living Paycheck to Paycheck',
    category: 'financial-stress',
    problem:
      'Money comes in and money goes out — with nothing left over. Even a small unexpected expense sends the whole month sideways.',
    whyItHappens:
      'Paycheck-to-paycheck living is a system problem, not a discipline problem. Costs rise faster than wages, subscriptions quietly stack, and every dollar has a destination before it arrives.',
    practicalSteps: [
      'Audit every subscription and recurring charge — cancel anything you didn\'t use in the last 30 days.',
      'Move payday automation forward: transfer savings the day money lands, not at month\'s end.',
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
    whereSquirrelllHelps:
      'A payday-triggered Savings Pod is the cleanest way to break the paycheck-to-paycheck cycle: the money leaves before you see it.',
    faqs: [
      { q: 'How do I start if I have zero slack?', a: 'Start with 1% of income, not a dollar amount. It grows automatically as you grow.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'cant-save-money',
    title: "I Can't Save Money",
    category: 'saving-money',
    problem:
      'You want to save. You mean to save. But at the end of every month, there is nothing left over.',
    whyItHappens:
      'Saving from what\'s "left over" almost never works — spending expands to fill available money (Parkinson\'s Law for finance). Saving needs to happen before spending, not after.',
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
    whereSquirrelllHelps:
      'Savings Pods are built exactly for this: they enforce "pay yourself first" without requiring willpower each week.',
    faqs: [
      { q: 'Is $5 a week worth it?', a: 'Yes — the amount is not the point yet. The mechanism is. Amount grows once the habit is real.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'emergency-fund',
    title: 'I Need Emergency Savings',
    category: 'emergency-planning',
    problem:
      'One car repair, one medical bill, or one lost shift would break your budget. You need a buffer, fast.',
    whyItHappens:
      'Most households don\'t have $500 available for an emergency. It\'s not a moral failing — it\'s a structural one. But it\'s also fixable in weeks, not years.',
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
    helpfulTools: [
      'A dedicated Emergency Savings Pod, kept separate from goal-based Pods.',
    ],
    whereSquirrelllHelps:
      'A dedicated Emergency Pod with automatic weekly deposits is the fastest, most boring way to hit $500.',
    faqs: [
      { q: 'Why $500 first, not $1,000?', a: 'Research (Financial Health Network) finds $500 covers ~65% of surprise expenses and dramatically reduces financial stress.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'no-time-for-second-job',
    title: "I Don't Have Time For Another Job",
    category: 'building-wealth',
    problem:
      'You need more financial room but adding hours to your week isn\'t realistic. You need passive or near-passive levers.',
    whyItHappens:
      'The classic "get a second job" advice ignores caregivers, exhausted workers, and anyone already at capacity. Passive income for regular people usually means small, automated tools stacked over time.',
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
    whereSquirrelllHelps:
      'This is exactly the use case Squirrelll.ing was built for: silent, low-effort financial tools that run without demanding more of your time.',
    faqs: [
      { q: 'Is the Daily Pool a guaranteed income stream?', a: 'No. It\'s a real daily chance to receive a meaningful lump sum. Any given day could be your day.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'better-financial-habits',
    title: 'I Want Better Financial Habits',
    category: 'financial-habits',
    problem:
      'You\'re not in crisis — but your money life feels reactive. You want systems, not stress.',
    whyItHappens:
      'Good financial habits are less about knowledge and more about environment design. Most people know what to do; the friction of doing it is the real barrier.',
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
      'A single dashboard view — either your bank\'s or a simple spreadsheet.',
    ],
    faqs: [
      { q: 'How long until habits stick?', a: 'Behavioral research suggests 60–90 days of low-friction repetition. Design for that window, not for willpower.' },
    ],
    updated: '2026-07-17',
  },
  {
    slug: 'passive-financial-improvement',
    title: 'I Want Passive Ways To Improve My Finances',
    category: 'building-wealth',
    problem:
      'You don\'t want another side hustle or spreadsheet. You want your money life to improve while you focus on everything else.',
    whyItHappens:
      'Most personal finance advice assumes unlimited attention. The realistic path for busy people is a small stack of automated tools that quietly do the work.',
    practicalSteps: [
      'Automate one savings transfer per pay cycle.',
      'Cancel one recurring cost you don\'t actively use.',
      'Enroll in any employer match or benefit you\'re currently leaving on the table.',
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
    whereSquirrelllHelps:
      'Silent by design: Pods and the Daily Pool run in the background so improvement compounds without daily attention.',
    faqs: [
      { q: 'Is truly passive income realistic for regular people?', a: 'Fully passive is rare; near-passive (automated, low-attention) is very achievable and the more useful goal.' },
    ],
    updated: '2026-07-17',
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const getAsk = (slug: string) => ASK_ARTICLES.find((a) => a.slug === slug);
export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

export function relatedAsk(exceptSlug: string, category?: string, limit = 6): AskArticle[] {
  const sameCat = ASK_ARTICLES.filter((a) => a.slug !== exceptSlug && (!category || a.category === category));
  const rest = ASK_ARTICLES.filter((a) => a.slug !== exceptSlug && a.category !== category);
  return [...sameCat, ...rest].slice(0, limit);
}

export function relatedGuides(exceptSlug: string, category?: string, limit = 4): Guide[] {
  const sameCat = GUIDES.filter((g) => g.slug !== exceptSlug && (!category || g.category === category));
  const rest = GUIDES.filter((g) => g.slug !== exceptSlug && g.category !== category);
  return [...sameCat, ...rest].slice(0, limit);
}

export function askByCategory(cat: string) {
  return ASK_ARTICLES.filter((a) => a.category === cat);
}
export function guidesByCategory(cat: string) {
  return GUIDES.filter((g) => g.category === cat);
}

/** Estimate reading time in minutes for arbitrary text (200 wpm). Minimum 1 min. */
export function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function askReadingTime(a: AskArticle): number {
  const text = [a.quickAnswer, ...a.sections.map((s) => s.body), ...a.faqs.map((f) => f.q + ' ' + f.a)].join(' ');
  return estimateReadingTime(text);
}

export function guideReadingTime(g: Guide): number {
  const text = [
    g.problem,
    g.whyItHappens,
    ...g.practicalSteps,
    ...g.longTermHabits,
    ...g.helpfulTools,
    g.whereSquirrelllHelps ?? '',
    ...g.faqs.map((f) => f.q + ' ' + f.a),
  ].join(' ');
  return estimateReadingTime(text);
}

/** "People also search for" — curated list if provided, else related article questions. */
export function relatedSearches(a: AskArticle, limit = 5): string[] {
  if (a.relatedSearches?.length) return a.relatedSearches.slice(0, limit);
  return relatedAsk(a.slug, a.category, limit).map((r) => r.question || r.title);
}

/** Suggested Ask questions related to a Guide, for "Continue Learning". */
export function guideContinueLearning(g: Guide, limit = 6): AskArticle[] {
  return relatedAsk(g.slug, g.category, limit);
}

