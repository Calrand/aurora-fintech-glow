import React from 'react';
const ConceptSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-darkBlue relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">
              The Platform
            </h2>
            <p className="text-lg text-white/80 mb-8 text-center">
              Squirrelll.ing is a savings and community engagement platform
              that brings this timeless concept into the digital age.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-fintech-mint">
                  The Daily Pool
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      You contribute a fixed insignificant small amount (e.g.,
                      $0.20-$1) into the Daily Pool. The amount is determined by
                      your region's currency, so it's insignificant to all.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      The total pool depends on the amount of users in total.
                      Everyone has to contribute only the small insignificant
                      amount. No more, no less.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      One person from your region will receive the entire pool
                      (minus our 12% platform fee) to help them towards their
                      goals.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      If you don't receive it today, you are still helping
                      another until your day comes.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-mint rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      Every region has its own separate pool.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-fintech-amber">
                  Savings Pods
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      You set your savings goal and schedule (daily or weekly)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      We automatically deposit your chosen small amount on
                      schedule, like a subscription
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      If you win a Daily Pool, you can withdraw or add it to
                      your savings
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      You can track progress and celebrate milestones
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      Once you have reached your goal, you can withdraw the
                      amount.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="bg-fintech-amber/20 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-fintech-amber rounded-full"></div>
                    </div>
                    <span className="text-white/80">
                      You can have multiple Savings Pods for different goals and
                      milestones
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default ConceptSection;
