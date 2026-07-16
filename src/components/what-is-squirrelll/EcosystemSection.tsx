import React from 'react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Acorns',
    tagline: 'Micro-investments using spare change',
    description:
      'Rounds up everyday card purchases and invests the difference into diversified portfolios — pioneering effortless micro-investing in the US.',
    website: 'https://www.acorns.com/',
    region: 'United States',
  },
  {
    name: 'Stash',
    tagline: 'Simple investment tools and auto-saving',
    description:
      'Combines fractional share investing with automated saving rules, making stock ownership approachable for first-time investors.',
    website: 'https://www.stash.com/',
    region: 'United States',
  },
  {
    name: 'Qapital',
    tagline: 'Goal-based saving with behavioural rules',
    description:
      'Uses behavioural triggers ("if this, then save that") to tie saving to everyday habits and specific personal goals.',
    website: 'https://www.qapital.com/',
    region: 'United States',
  },
  {
    name: 'Raiz',
    tagline: 'Micro-investment and round-ups',
    description:
      'Australia and Southeast Asia\'s take on round-up investing, giving users diversified exposure from very small contributions.',
    website: 'https://raizinvest.com.au/',
    region: 'Australia / SEA',
  },
  {
    name: 'Plum',
    tagline: 'AI-driven saving and investing',
    description:
      'A European app that analyses spending patterns and automatically sets aside small amounts you can afford to save.',
    website: 'https://withplum.com/',
    region: 'United Kingdom / EU',
  },
  {
    name: 'Squirrelll.ing',
    tagline: 'Community micro-savings + daily engagement',
    description:
      'Blends consistent Squirrelling with a community Daily Pool and personal Savings Pods — turning small, regional contributions into shared momentum.',
    website: 'https://squirrelll.ing/',
    region: 'Global',
    highlighted: true,
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              The Ecosystem of Squirrelling
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Squirrelling has inspired a global wave of modern apps that make
              small, consistent financial action easy. Here's how Squirrelll.ing
              sits alongside other well-known platforms shaping micro-finance today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-6 rounded-xl block transition-all hover:-translate-y-1 hover:shadow-lg group ${
                  p.highlighted ? 'ring-1 ring-fintech-mint/50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`text-xl font-semibold ${
                      p.highlighted ? 'text-fintech-mint' : 'text-white'
                    }`}
                  >
                    {p.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-white/40 group-hover:text-white/80 transition-colors mt-1"
                  />
                </div>
                <p className="text-sm text-fintech-amber mb-2">{p.tagline}</p>
                <p className="text-sm text-white/70 mb-4">{p.description}</p>
                <span className="text-xs uppercase tracking-wide text-white/50">
                  {p.region}
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-white/70 mt-10 max-w-2xl mx-auto">
            These platforms all reflect the same underlying principle — that
            consistent, small-scale financial action compounds into meaningful
            progress. Squirrelll.ing extends that principle with a community-first,
            regional model.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
