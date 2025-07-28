import React from 'react';
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection: React.FC = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-0" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What is Squirrelling? (The Concept)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelling is not a modern invention—it's rooted in one of the oldest economic practices: setting aside small amounts for future use. Just like how squirrels stash food bit by bit for winter, squirrelling in micro-finance means building stability, habits, and wealth through consistent micro-savings over time.
&nbsp;&nbsp;
Known as "Susu" in West Africa, people contribute a fixed amounts and receive big sums in rotating basis. In Mexico, they call it "tandas" where they contribute and save small amounts in a routine contribution. 
&nbsp;&nbsp;
In different communities, the name and the goal might be different, but the concept is always the same to gather bigger with small amounts.
              </AccordionContent>
            </AccordionItem>
            
  
            
            <AccordionItem value="item-2" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What is the Daily Pool exactly?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                It's a daily micro-contribution act. You contribute a small fixed amount and one person (including you) from your region/country receives the total pool at 12 PM. Which can help you and others to help towards their financial goal or milestone. The pool happens daily.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Do I have to play the game to save money?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                No. You can simply use the platform as a smart savings tool without participating in the daily pool.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is this gambling?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                No. There's no betting or risking money. You save/contribute an amount which is insignificant to you and doesn't bother you.
&nbsp;&nbsp;
Our platform is designed to ensure that none of its features promote obsessive or addictive behavior in users.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Can I withdraw my money?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Yes. You can withdraw both your savings and pool money whenever it suits you. However, there's a small fee (explained below).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Can I set my own savings goal?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Yes. You choose the amount, frequency (daily/weekly), and the goal you're saving toward. The system helps you stay consistent.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What are the fees and charges?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                <ul className="space-y-3 mt-2">
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>A 5% withdrawal fee applies only when withdrawing from your savings.</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0"><Check size={16} className="text-fintech-mint stroke-[3]" /></div>
                    <span>A 12% platform fee is taken from the total Daily Pool amount before the winner is rewarded.</span>
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
            
            {/* </AccordionContent><AccordionItem value="item-8" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is my money safe?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Yes. All transactions are secure and your funds are held with regulated financial partners. We are partnered with Stripe.com to ensure safe, secure, and transparent payment processing.
              </AccordionContent>
            </AccordionItem> */}
            
            <AccordionItem value="item-9" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is the Daily Pool global or local?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                The Daily Pool is region/country-based, and runs on a 24-hour cycle that resets at 12 PM local time every day.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                How can I get help or support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                We offer live chat and email support directly inside the app, anytime you need assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;