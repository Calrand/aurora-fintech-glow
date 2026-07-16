import React from 'react';

const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-14 md:py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-fintech-mint mb-3">Further Reading</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">References & Further Reading</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            The concepts referenced in this article draw on established literature in behavioural
            economics, development finance, and the history of communal savings. Citations will be
            expanded over time.
          </p>
          <ul className="space-y-3 text-white/75 list-disc pl-6">
            <li>Thaler, R. H., &amp; Sunstein, C. R. — <em>Nudge: Improving Decisions About Health, Wealth, and Happiness</em>. [Placeholder citation]</li>
            <li>Thaler, R. H. — <em>Mental Accounting Matters</em>, Journal of Behavioral Decision Making. [Placeholder citation]</li>
            <li>Ardener, S. — <em>The Comparative Study of Rotating Credit Associations</em>. [Placeholder citation]</li>
            <li>Rutherford, S. — <em>The Poor and Their Money</em>. [Placeholder citation]</li>
            <li>World Bank — Reports on informal savings groups and financial inclusion. [Placeholder citation]</li>
          </ul>
          <p className="text-white/50 text-sm mt-8 italic">
            This page is intended as an educational resource. It does not constitute financial
            advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
