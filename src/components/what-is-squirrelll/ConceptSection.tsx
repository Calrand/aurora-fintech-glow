import React from 'react';
import { Check } from "lucide-react";
const ConceptSection: React.FC = () => {
  return <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card bg-white/80 shadow-lg p-8 md:p-12 rounded-2xl mb-12">
          <p className="text-lg mb-8">
            Squirrelll is not a modern invention—it's rooted in one of the oldest economic practices: setting aside small amounts for future use. Just like squirrels stash food bit by bit for winter, squirrelling in finance means building stability, habits, and wealth through consistent micro-savings over time.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">The Squirrelll.ing Platform</h2>
          <p className="text-lg mb-12">
            Squirrelll.ing is a savings and micro-engagement platform that brings this timeless concept into the digital age. It helps users form daily saving habits by turning micro-deposits into both a savings tool and an engaging daily pool with fun, interactive challenges.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">How It Works</h2>
          <ol className="space-y-8 mb-12">
            <li className="flex gap-5">
              <div className="bg-gradient-to-r from-fintech-amber to-fintech-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Contribute Daily</h3>
                <p className="text-fintech-darkBlue/80">Choose a small amount to deposit daily—$0.50, $1, or $2. It's simple, customizable, and adds up quickly.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-gradient-to-r from-fintech-amber to-fintech-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Join the Daily Pool</h3>
                <p className="text-fintech-darkBlue/80">Each day, a micro deposit goes into a shared reward pool. One user is randomly selected to win the pool. This is separated from your savings tool.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-gradient-to-r from-fintech-amber to-fintech-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Win by Engagement</h3>
                <p className="text-fintech-darkBlue/80">To claim the reward, the selected user completes a short, skill-based game before being able to participate in the Daily Pool.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-gradient-to-r from-fintech-amber to-fintech-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">4</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Save or Withdraw</h3>
                <p className="text-fintech-darkBlue/80">If you win, you can either withdraw the reward or move it into your personal savings inside the app.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-gradient-to-r from-fintech-amber to-fintech-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">5</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Set Goals</h3>
                <p className="text-fintech-darkBlue/80">You can also use Squirrelll.ing as a pure savings tool. Set a goal (e.g., "Trip Fund" or "Emergency Savings"), and choose how much you want to deposit daily or weekly. Everything is customizable—from the amount to the timeline.</p>
              </div>
            </li>
          </ol>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Two Tools, One App</h2>
          <ol className="space-y-8 mb-12">
            <li className="flex gap-5">
              <div className="bg-fintech-mint rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md"><Check size={22} /></div>
              <div>
                <h3 className="font-bold text-xl mb-2">Daily Pool (Gamified)</h3>
                <p className="text-fintech-darkBlue/80">A micro-deposit gives you access to the country/region-based Daily Pool. A winner is selected randomly each day and must complete a skill-based game to claim the reward. The cycle runs from 12 PM to 12 PM local time every day.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-fintech-amber rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md"><Check size={22} /></div>
              <div>
                <h3 className="font-bold text-xl mb-2">Savings Tool (Goal-Based)</h3>
                <p className="text-fintech-darkBlue/80">You choose a goal, deposit schedule (daily or weekly), and amount. Over time, you build up your savings without pressure. You can also transfer rewards from the Daily Pool into this savings balance for better growth.</p>
              </div>
            </li>
          </ol>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">The Ecosystem of Squirrelling</h2>
          <p className="mb-6 text-fintech-darkBlue/80">The core concept of Squirrelll has inspired several platforms globally:</p>
          <ul className="space-y-4 mb-12 pl-6">
            <li className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-fintech-darkBlue/80">Acorns – Micro-investments using spare change</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1.5"><Check size={18} className="text-fintech-amber stroke-[3]" /></div>
              <span className="text-fintech-darkBlue/80">Stash – Simple investment tools and auto-saving</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
              <span className="text-fintech-darkBlue/80">Qapital – Goal-based saving with automation</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1.5"><Check size={18} className="text-fintech-amber stroke-[3]" /></div>
              <span className="text-fintech-darkBlue/80">Raiz – Australian micro-investment and saving app</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1.5"><Check size={18} className="text-fintech-gold stroke-[3]" /></div>
              <span className="text-fintech-darkBlue/80">Squirrelll.ing – Combining micro-savings with daily community engagement and games</span>
            </li>
          </ul>
          <p className="mb-6 text-fintech-darkBlue/80">These platforms all reflect the power of consistent, small-scale financial actions—the heart of Squirrelling.</p>
        </div>
      </div>
    </section>;
};
export default ConceptSection;