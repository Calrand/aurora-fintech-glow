
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";
import { Link } from 'react-router-dom';
import FooterSection from '@/components/FooterSection';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const WhatIsSquirrelll: React.FC = () => {
  const scrollToDownload = () => {
    document.getElementById('download-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/5 blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/fa0255ac-ff2d-4248-904b-e3e46f5db299.png" 
                alt="Squirrelll Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What is Squirrelll.ing?</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-fintech-darkBlue/80 mb-10">
              A Smarter Way to Save, One Small Step at a Time
            </p>
          </div>
        </div>
      </section>
      
      {/* Concept Section */}
      <section className="py-16 md:py-20">
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
            <ol className="space-y-6 mb-12">
              <li className="flex gap-5">
                <div className="bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Contribute Daily</h3>
                  <p>Choose a small amount to deposit daily—$0.50, $1, or $2. It's simple, customizable, and adds up quickly.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Join the Daily Pool</h3>
                  <p>Each day, a micro deposit goes into a shared reward pool. One user is randomly selected to win the pool. This is separated from your savings tool.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Win by Engagement</h3>
                  <p>To claim the reward, the selected user completes a short, skill-based game before being able to participate in the Daily Pool.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Save or Withdraw</h3>
                  <p>If you win, you can either withdraw the reward or move it into your personal savings inside the app.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md">5</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Set Goals</h3>
                  <p>You can also use Squirrelll.ing as a pure savings tool. Set a goal (e.g., "Trip Fund" or "Emergency Savings"), and choose how much you want to deposit daily or weekly. Everything is customizable—from the amount to the timeline.</p>
                </div>
              </li>
            </ol>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Two Tools, One App</h2>
            <ol className="space-y-6 mb-12">
              <li className="flex gap-5">
                <div className="bg-fintech-mint rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md"><Check size={20} /></div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Daily Pool (Gamified)</h3>
                  <p>A micro-deposit gives you access to the country/region-based Daily Pool. A winner is selected randomly each day and must complete a skill-based game to claim the reward. The cycle runs from 12 PM to 12 PM local time every day.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-fintech-amber rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-fintech-darkBlue font-bold shadow-md"><Check size={20} /></div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Savings Tool (Goal-Based)</h3>
                  <p>You choose a goal, deposit schedule (daily or weekly), and amount. Over time, you build up your savings without pressure. You can also transfer rewards from the Daily Pool into this savings balance for better growth.</p>
                </div>
              </li>
            </ol>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">The Ecosystem of Squirrelling</h2>
            <p className="mb-4">The core concept of Squirrelll has inspired several platforms globally:</p>
            <ul className="space-y-4 mb-12 pl-6">
              <li className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
                <span>Acorns – Micro-investments using spare change</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
                <span>Stash – Simple investment tools and auto-saving</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
                <span>Qapital – Goal-based saving with automation</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
                <span>Raiz – Australian micro-investment and saving app</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-fintech-mint/20 rounded-full p-1.5"><Check size={18} className="text-fintech-mint stroke-[3]" /></div>
                <span>Squirrelll.ing – Combining micro-savings with daily community engagement and games</span>
              </li>
            </ul>
            <p className="mb-6">These platforms all reflect the power of consistent, small-scale financial actions—the heart of Squirrelling.</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-fintech-mint/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Is this a savings app or a game?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  Both. Squirrelll.ing encourages saving through daily deposits and enhances motivation with fun, skill-based daily challenges.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  What is the Daily Pool exactly?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  It's a daily micro-saving challenge. You contribute a small fixed amount, complete a quick skill game, and one person from your country wins the full pool at 12 PM daily.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Do I have to play the game to save money?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  No. You can simply use the platform as a smart savings tool without participating in the daily pool.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Is this gambling?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  No. There's no betting or risking money. Rewards are based on random selection and a skill-based game—not pure chance or wagering.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Can I withdraw my money?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  Yes. You can withdraw both your savings and rewards. However, there's a small fee (explained below).
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Can I set my own savings goal?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  Yes. You choose the amount, frequency (daily/weekly), and the goal you're saving toward. The system helps you stay consistent.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  What are the fees and charges?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-center">
                      <div className="bg-fintech-mint/20 rounded-full p-1 flex-shrink-0"><Check size={14} className="text-fintech-mint stroke-[3]" /></div>
                      <span>A 3% transaction fee is applied when adding funds, charged by our secure payment partner Checkout.com.</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="bg-fintech-mint/20 rounded-full p-1 flex-shrink-0"><Check size={14} className="text-fintech-mint stroke-[3]" /></div>
                      <span>A 12% platform fee is taken from the total Daily Pool amount before the winner is rewarded.</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="bg-fintech-mint/20 rounded-full p-1 flex-shrink-0"><Check size={14} className="text-fintech-mint stroke-[3]" /></div>
                      <span>A 5% withdrawal fee applies only when withdrawing from your savings.</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="bg-fintech-mint/20 rounded-full p-1 flex-shrink-0"><Check size={14} className="text-fintech-mint stroke-[3]" /></div>
                      <span>If your rewards are added to your savings, they can be withdrawn without the 5% fee.</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="bg-fintech-mint/20 rounded-full p-1 flex-shrink-0"><Check size={14} className="text-fintech-mint stroke-[3]" /></div>
                      <span>No hidden charges.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Is my money safe?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  Yes. All transactions are secure and your funds are held with regulated financial partners. We are partnered with Checkout.com to ensure safe, secure, and transparent payment processing.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  Is the Daily Pool global or local?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  The Daily Pool is region/country-based, and runs on a 24-hour cycle that resets at 12 PM local time every day.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10" className="glass-card bg-white/80 rounded-xl border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold">
                  How can I get help or support?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  We offer live chat and email support directly inside the app, anytime you need assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section id="download-section" className="py-20 md:py-28 bg-gradient-to-b from-fintech-mint/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 gradient-text">Start Squirrelll.ing Today</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Make saving a daily habit. Build real financial momentum. Whether you're here to stay consistent or just make saving more fun—Squirrelll.ing makes the journey simple, social, and satisfying.
            </p>
            
            <Button 
              onClick={scrollToDownload} 
              size="lg" 
              className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-darkBlue font-medium flex gap-2 mx-auto shadow-md"
            >
              <Download size={18} />
              Download App Squirrelll.ing
            </Button>
            
            <Link to="/" className="mt-8 inline-block text-fintech-mint hover:underline">Back to Home</Link>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default WhatIsSquirrelll;
