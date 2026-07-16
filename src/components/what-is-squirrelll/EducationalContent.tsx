import React from 'react';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; kicker?: string }> = ({
  id,
  title,
  children,
  kicker,
}) => (
  <section id={id} className="py-14 md:py-20 border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        {kicker && (
          <p className="text-xs uppercase tracking-widest text-fintech-mint mb-3">{kicker}</p>
        )}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{title}</h2>
        <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const EducationalContent: React.FC = () => {
  return (
    <>
      <Section id="understanding" kicker="The Platform" title="Understanding Squirrelll.ing">
        <p>
          <strong>Squirrelll.ing</strong> is a community-focused micro-financing platform that helps
          people build savings through small, consistent contributions. It is designed for
          individuals who want a simple, low-friction way to set money aside — without complex
          products, high minimums, or investment risk.
        </p>
        <p>
          The platform brings together two ideas that have existed in communities for centuries:
          personal micro-savings and pooled community contributions. It exists because traditional
          financial tools often overlook people who save in small amounts, and because saving is
          easier when it is shared with others.
        </p>
        <p>
          Squirrelll.ing organises this around two mechanisms — <strong>Savings Pods</strong> for
          personal goals and the <strong>Daily Pool</strong> for community participation. Both are
          practical expressions of a broader behavioural concept known as <em>Squirrelling</em>.
        </p>
      </Section>

      <Section id="meaning" kicker="The Concept" title="The Meaning of Squirrelling">
        <p>
          <strong>Squirrelling</strong> refers to the behaviour of consistently setting aside small
          amounts of a resource for future use. The term draws on the observable habit of squirrels
          storing food across many locations over long periods, prioritising steady accumulation
          over any single large action.
        </p>
        <p>Applied to personal finance, Squirrelling reflects four principles:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Preparedness</strong> — building a buffer before it is needed.</li>
          <li><strong>Delayed gratification</strong> — choosing future benefit over immediate consumption.</li>
          <li><strong>Consistency</strong> — small, repeated actions rather than occasional large ones.</li>
          <li><strong>Resilience</strong> — reducing the impact of financial shocks over time.</li>
        </ul>
      </Section>

      <Section id="history" kicker="History" title="A Practice Older Than Modern Banking">
        <p>
          Squirrelling predates modern banking. Households have stored grain, preserved food, and
          set aside coins for generations, long before formal savings accounts existed. Early
          agricultural societies developed granaries as a communal form of stored surplus, and
          many cultures maintained household reserves for illness, poor harvests, or family
          milestones.
        </p>
        <p>
          Communal finance emerged in parallel. Groups of neighbours, traders, and workers formed
          informal arrangements to pool resources and support one another. These arrangements
          were not investment schemes; they were mechanisms for stability and mutual assistance.
        </p>
      </Section>

      <Section id="global" kicker="Global Practice" title="Squirrelling Around the World">
        <p>
          Similar practices exist across cultures under different names. Although the terminology
          varies, the underlying behaviour is remarkably consistent: small, regular contributions
          from a group of participants, distributed in turn.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-white/5 text-white/90">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Name</th>
                <th className="text-left px-4 py-3 font-semibold">Region</th>
                <th className="text-left px-4 py-3 font-semibold">Core Idea</th>
              </tr>
            </thead>
            <tbody className="text-white/75">
              <tr className="border-t border-white/10"><td className="px-4 py-3">Susu</td><td className="px-4 py-3">West Africa & Caribbean</td><td className="px-4 py-3">Rotating savings among trusted members.</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3">Chit Funds</td><td className="px-4 py-3">South Asia</td><td className="px-4 py-3">Structured group contributions with periodic payouts.</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3">Tandas</td><td className="px-4 py-3">Mexico & Latin America</td><td className="px-4 py-3">Fixed contributions distributed on a rotating schedule.</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3">Arisan</td><td className="px-4 py-3">Indonesia</td><td className="px-4 py-3">Community gatherings combined with pooled savings.</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3">ROSCAs</td><td className="px-4 py-3">Global (general term)</td><td className="px-4 py-3">Rotating Savings and Credit Associations.</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3">Friendly Societies</td><td className="px-4 py-3">United Kingdom & Commonwealth</td><td className="px-4 py-3">Mutual aid through pooled member contributions.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          These practices developed independently across continents, which suggests that
          Squirrelling reflects a widely shared human response to financial uncertainty.
        </p>
      </Section>

      <Section id="behavioral" kicker="Behavioural Economics" title="Squirrelling in Behavioural Economics">
        <p>
          Behavioural economics studies why people struggle to save even when they intend to.
          Several concepts help explain why Squirrelling — small, automatic, repeated saving —
          tends to be more effective than relying on willpower alone.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Habit formation</strong> — repeated small actions become automatic and require less deliberation.</li>
          <li><strong>Delayed gratification</strong> — the capacity to forgo immediate reward for a greater later benefit.</li>
          <li><strong>Mental accounting</strong> — treating separate pots of money differently based on their purpose.</li>
          <li><strong>Consistency</strong> — steady progress reduces the cognitive load of decision-making.</li>
          <li><strong>Present bias</strong> — the tendency to overvalue immediate rewards, which small automatic contributions help counteract.</li>
        </ul>
        <p>
          Richard Thaler, a Nobel laureate in economics, has argued that structuring savings so
          they happen by default — rather than by conscious choice each time — significantly
          improves outcomes. Squirrelling aligns with this principle.
        </p>
      </Section>

      <Section id="references" kicker="Resources" title="References &amp; Further Reading">
        <p>
          The concepts referenced in this article draw on established literature in behavioural
          economics, development finance, and the history of communal savings. Citations will be
          expanded over time.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Thaler, R. H., &amp; Sunstein, C. R. — Nudge: Improving Decisions About Health, Wealth,
            and Happiness. [Placeholder citation]
          </li>
          <li>
            Thaler, R. H. — Mental Accounting Matters, Journal of Behavioral Decision Making.
            [Placeholder citation]
          </li>
          <li>
            Ardener, S. — The Comparative Study of Rotating Credit Associations. [Placeholder citation]
          </li>
          <li>
            Rutherford, S. — The Poor and Their Money. [Placeholder citation]
          </li>
          <li>
            World Bank — Reports on informal savings groups and financial inclusion. [Placeholder citation]
          </li>
        </ul>
        <p className="text-white/50 text-sm mt-8 italic">
          This page is intended as an educational resource. It does not constitute financial advice.
        </p>
      </Section>

      <Section id="apply" kicker="Back to the Platform" title="How Squirrelll.ing Applies These Principles">
        <p>
          Squirrelll.ing translates the concept of Squirrelling into two practical tools:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Savings Pods</strong> apply the principles of consistency and mental
            accounting. Each Pod is a distinct pot with its own goal, funded automatically at a
            chosen interval.
          </li>
          <li>
            <strong>The Daily Pool</strong> applies the principle of community-based
            micro-contribution — the same underlying idea behind Susu, Tandas, and ROSCAs — in a
            regionally scoped, transparent digital format.
          </li>
        </ul>
        <p>
          The purpose is not to replace banking, investing, or budgeting. It is to make the
          long-standing practice of Squirrelling accessible in a modern, everyday form.
        </p>
      </Section>
    </>
  );
};

export default EducationalContent;
