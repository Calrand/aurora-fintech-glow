import React from 'react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Squirrelll.ing',
    description: 'Global Micro FinTech Platform for savings and investment',
    website: 'https://squirrelll.ing/',
    key: 'squirrelll',
  },
  {
    name: 'Acorns',
    description: 'Rounds up your purchases and invests the spare change',
    website: 'https://www.acorns.com/',
    key: 'acorns',
  },
  {
    name: 'Stash',
    description: 'Offers fractional shares of stocks and ETFs',
    website: 'https://www.stash.com/',
    key: 'stash',
  },
  {
    name: 'Qapital',
    description: 'Uses rules to trigger saving based on daily behavior',
    website: 'https://www.qapital.com/',
    key: 'qapital',
  },
  {
    name: 'Raiz',
    description: 'Australian-based micro-investment app',
    website: 'https://raizinvest.com.au/',
    key: 'raiz',
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-darkBlue relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">
            The Ecosystem of Squirrelll.ing
          </h2>
          <p className="text-lg text-white/80 mb-8 text-center">
            How we compare to other micro-saving solutions in the market:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-medium text-fintech-mint">Platform</th>
                  <th className="py-4 px-4 font-medium text-fintech-mint">Core Concept</th>
                  <th className="py-4 px-4 font-medium text-fintech-mint hidden md:table-cell">Website</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform) => (
                  <tr key={platform.key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium">{platform.name}</td>
                    <td className="py-4 px-4 text-white/80">{platform.description}</td>
                    <td className="py-4 px-4 hidden md:table-cell">
                      <a
                        href={platform.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fintech-mint hover:underline flex items-center gap-1"
                      >
                        Visit <ExternalLink size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-white/60 text-sm mt-8">
            Unlike traditional savings apps, Squirrelll.ing blends community engagement, gamification, and daily rewards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
