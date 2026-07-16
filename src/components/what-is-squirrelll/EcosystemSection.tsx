import React from 'react';
import { Check } from 'lucide-react';

const platforms = [
  { name: 'Acorns', description: 'Micro-investments using spare change' },
  { name: 'Stash', description: 'Simple investment tools and auto-saving' },
  { name: 'Qapital', description: 'Goal-based saving with automation' },
  { name: 'Raiz', description: 'Australian micro-investment and saving app' },
  { name: 'Plum', description: 'AI-driven saving and investing across the UK and EU' },
  {
    name: 'Squirrelll.ing',
    description:
      'Combining micro-savings with daily community engagement and games',
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">
            The Ecosystem of Squirrelling
          </h2>
          <p className="text-lg text-white/80 mb-8 text-center">
            The core concept of Squirrelling has inspired several platforms globally:
          </p>

          <ul className="space-y-4 mb-8 pl-0 md:pl-6">
            {platforms.map((p) => (
              <li key={p.name} className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0">
                  <Check size={18} className="text-fintech-mint stroke-[3]" />
                </div>
                <span className="text-white/80">
                  <span className="font-semibold text-white">{p.name}</span>
                  {' – '}
                  {p.description}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-white/70 text-center">
            These platforms all reflect the power of consistent, small-scale
            financial actions — the heart of Squirrelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
