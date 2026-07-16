import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What is the difference between Squirrelll.ing and Squirrelling?',
    a: 'Squirrelll.ing is the platform. Squirrelling is the underlying behavioural and micro-financing concept — the practice of setting aside small amounts consistently for future use. The platform is one modern application of the concept.',
  },
  {
    q: 'Is Squirrelling investing?',
    a: 'No. Squirrelling is a savings behaviour, not an investment strategy. It does not involve market exposure, returns, or capital appreciation. It focuses on consistent accumulation.',
  },
  {
    q: 'Is Squirrelling budgeting?',
    a: 'Squirrelling is related to budgeting but distinct from it. Budgeting allocates income across categories, while Squirrelling specifically refers to the habit of consistently setting aside small amounts for future needs.',
  },
  {
    q: 'Is Squirrelll.ing a bank?',
    a: 'No. Squirrelll.ing is a micro-financing platform, not a bank. It does not issue accounts, lend money, or provide banking services.',
  },
  {
    q: 'Is the Daily Pool required?',
    a: 'No. Participation in the Daily Pool is optional. Members can use Savings Pods on their own without contributing to the Daily Pool.',
  },
  {
    q: 'Can I only use Savings Pods?',
    a: 'Yes. Savings Pods can be used independently of the Daily Pool if you prefer to focus solely on personal goal-based saving.',
  },
  {
    q: 'How is Squirrelll.ing different from traditional savings apps?',
    a: 'Traditional savings apps typically focus on individual accounts. Squirrelll.ing combines individual Savings Pods with a community-oriented Daily Pool, drawing on long-standing communal savings practices.',
  },
  {
    q: 'Can I stop using the Daily Pool?',
    a: 'Yes. Daily Pool participation can be paused or stopped at any time without affecting your Savings Pods or account.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue/90 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-fintech-mint mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Common Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-white/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
export { faqs };
