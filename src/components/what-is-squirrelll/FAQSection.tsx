
import React from 'react';
import { Check } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
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
  );
};

export default FAQSection;
