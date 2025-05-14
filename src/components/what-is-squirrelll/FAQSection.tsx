
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-fintech-mint/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Is this a savings app or a game?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                Both. Squirrelll.ing encourages saving through daily deposits and enhances motivation with fun, skill-based daily challenges.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                What is the Daily Pool exactly?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                It's a daily micro-saving challenge. You contribute a small fixed amount, complete a quick skill game, and one person from your country wins the full pool at 12 PM daily.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Do I have to play the game to save money?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                No. You can simply use the platform as a smart savings tool without participating in the daily pool.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Is this gambling?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                No. There's no betting or risking money. Rewards are based on random selection and a skill-based game—not pure chance or wagering.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Can I withdraw my money?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                Yes. You can withdraw both your savings and rewards. However, there's a small fee (explained below).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Can I set my own savings goal?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                Yes. You choose the amount, frequency (daily/weekly), and the goal you're saving toward. The system helps you stay consistent.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                What are the fees and charges?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                <ul className="space-y-3 mt-2">
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>A 3% transaction fee is applied when adding funds, charged by our secure payment partner Checkout.com.</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>A 12% platform fee is taken from the total Daily Pool amount before the winner is rewarded.</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>A 5% withdrawal fee applies only when withdrawing from your savings.</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>If your rewards are added to your savings, they can be withdrawn without the 5% fee.</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>No hidden charges.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Is my money safe?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                Yes. All transactions are secure and your funds are held with regulated financial partners. We are partnered with Checkout.com to ensure safe, secure, and transparent payment processing.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                Is the Daily Pool global or local?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
                The Daily Pool is region/country-based, and runs on a 24-hour cycle that resets at 12 PM local time every day.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="bg-white rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-fintech-darkBlue hover:text-fintech-darkBlue/80">
                How can I get help or support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-fintech-darkBlue/80">
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
