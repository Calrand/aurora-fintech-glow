import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
const ConceptSection: React.FC = () => {
  const platforms = [{
    name: "Squirrelll.ing",
    description: "Global Micro FinTech Platform for savings and investment",
    website: "https://squirrelll.ing/",
    key: "squirrelll"
  }, {
    name: "Acorns",
    description: "Rounds up your purchases and invests the spare change",
    website: "https://www.acorns.com/",
    key: "acorns"
  }, {
    name: "Stash",
    description: "Offers fractional shares of stocks and ETFs",
    website: "https://www.stash.com/",
    key: "stash"
  }, {
    name: "Qapital",
    description: "Uses rules to trigger saving based on daily behavior",
    website: "https://www.qapital.com/",
    key: "qapital"
  }, {
    name: "Raiz",
    description: "Australian-based micro-investment app",
    website: "https://raizinvest.com.au/",
    key: "raiz"
  }];
  return <section className="py-16 md:py-24 bg-fintech-darkBlue relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">The Platform</h2>
            <p className="text-lg text-white/80 mb-8 text-center">Squirrelll.ing is a savings and micro-engagement platform that brings this timeless concept into the digital age.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-fintech-mint">The Daily Pool</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">You contribute a fixed insignificant small amount (e.g., $0.20-$1) into the Daily Pool</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">The total pool depends on the amount of users in total. Everyone has to contribute only the small insigficant amount. No more no less.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">One person from your region will receive the total amount to help them towards their squirrelling savings goal</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">They receive the entire pool (minus our 12% platform fee)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">Every region has it's own separate pool</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-fintech-amber">Savings Pods</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">You set your savings goal and schedule (daily or weekly)</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">We automatically deposit your chosen small amount on schedule, like a subscription</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">If you win a Daily Pool, you can withdraw or add it to your savings</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">You can track progress and celebrate milestones</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">Once you have reached your goal, you can withdraw the amount.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">You can have multiple Savings Pods for different goals and milestones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">The Ecosystem of Squirrelll.ing</h2>
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
                  {platforms.map(platform => <tr key={platform.key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">{platform.name}</td>
                      <td className="py-4 px-4 text-white/80">{platform.description}</td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <a href={platform.website} target="_blank" rel="noopener noreferrer" className="text-fintech-mint hover:underline flex items-center gap-1">
                          Visit <ExternalLink size={14} />
                        </a>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-white/60 text-sm mt-8">Unlike traditional savings apps, Squirrelling platforms blends community engagement, nurture squirrelling habit and helps reach your financial goals without any burden.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ConceptSection;