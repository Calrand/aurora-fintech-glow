import React from 'react';
import { Check } from 'lucide-react';

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">The Ecosystem of Squirrelling</h2>
          <p className="mb-4 text-white/80">The core concept of Squirrelll has inspired several platforms globally:</p>
          <ul className="space-y-4 mb-12 pl-6">
            <li className="flex gap-4 items-center">
              <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-white/80">Acorns – Micro-investments using spare change</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-white/80">Stash – Simple investment tools and auto-saving</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-white/80">Qapital – Goal-based saving with automation</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-white/80">Raiz – Australian micro-investment and saving app</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-white/80">Squirrelll.ing – Combining micro-savings with daily community engagement and games</span>
            </li>
          </ul>
          <p className="mb-6 text-white/80">These platforms all reflect the power of consistent, small-scale financial actions—the heart of Squirrelling.</p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
