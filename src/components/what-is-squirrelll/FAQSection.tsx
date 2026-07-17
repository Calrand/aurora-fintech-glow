import React from 'react';
import { Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQ = { q: string; a: React.ReactNode };

const faqs: FAQ[] = [
  {
    q: 'What is Squirrelll.ing?',
    a: 'Squirrelll.ing is a community-based micro-fintech platform built around one simple idea: small amounts pooled together daily become something real — for someone today, and for you another day. Contribute to a shared Daily Pool or you can also save toward your own goals with micro-financed Savings Pods.',
  },
  {
    q: 'What is Squirrelling? (The Concept)',
    a: (
      <>
        <p>
          Squirrelling is not a modern invention—it's rooted in one of the oldest economic practices: setting aside small amounts for future use. Just like how squirrels stash food bit by bit for winter, squirrelll.ing in micro-finance means building stability, habits, and wealth through consistent micro-savings over time.
        </p>
        <p className="mt-3">
          Known as "Susu" in West Africa, people contribute a fixed amounts and receive big sums in rotating basis. In Mexico, they call it "tandas" where they contribute and save small amounts in a routine contribution.
        </p>
        <p className="mt-3">
          In different communities, the name and the goal might be different, but the concept is always the same to gather bigger with small amounts.
        </p>
      </>
    ),
  },
  {
    q: 'What is the Daily Pool?',
    a: 'The Daily Pool is a shared community pot. Every member contributes a small fixed amount each day. One member per region is randomly selected to receive the full pool — minus a 12% platform fee — to accelerate their financial goals. The more members in your region, the bigger and more impactful the pool becomes for everyone.',
  },
  {
    q: 'What are Savings Pods?',
    a: 'Savings Pods are goal-based auto-deposit accounts. Set a savings goal, choose a fixed amount, pick a daily or weekly schedule, and Squirrelll.ing handles the deposits automatically until you reach your goal or your set time is up. You can run multiple Pods for different goals. It helps you to integrate micro-finance in your daily life savings strategy.',
  },
  {
    q: 'Can I make money with Squirrelll.ing?',
    a: 'Squirrelll.ing is not an investment platform, but any day could be your day to receive the full Daily Pool from your community. You contribute a small fixed amount daily — less than most people spend on coffee — and one regional member receives the entire pool each day. Set it up once and let it run silently in the background. No effort, no significant cost, and a real daily chance to receive a meaningful amount to help towards your financial goals.',
  },
  {
    q: 'Is Squirrelll.ing a good side hustle?',
    a: "Squirrelll.ing works best as a silent financial tool running alongside whatever else you do. Contribute a tiny daily amount, stay in the pool, and any day could be your day to receive the community pot. No work required after setup — just a small daily contribution with a real daily chance of return. And the days you don't, you helped someone just like you.",
  },
  {
    q: 'What if I never receive the Daily Pool?',
    a: "Every day you contribute, you have a real chance of receiving the full community pool. On the days someone else receives it, your contribution helped someone in your community who needed it just as much as you do — someone in the same position you're in. That's not a loss. That's the whole point of Squirrelll.ing.",
  },
  {
    q: 'Is Squirrelll.ing crypto or a traditional savings platform?',
    a: 'Squirrelll.ing is a traditional micro-savings and community engagement platform. It is not a cryptocurrency product. Your money sits in regulated payment rails.',
  },
  {
    q: 'Is the daily pool gambling?',
    a: "No. There's no betting or risking money. You contribute an amount which is insignificant to you and doesn't bother you. Our platform is designed to ensure that none of its features promote obsessive or addictive behavior in users, nor cause any significant financial loss. The tool works for both gaining and helping others.",
  },
  {
    q: 'Can I withdraw my money?',
    a: 'Yes. You can withdraw both your savings and pool money whenever it suits you.',
  },
  {
    q: 'What are the fees and charges?',
    a: (
      <ul className="space-y-3">
        {[
          'A 3% withdrawal fee applies only when withdrawing from your Savings Pod.',
          'A 12% platform fee is deducted from the total Daily Pool amount before it is added to the recipient\'s wallet.',
          'No hidden charges.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-fintech-mint/20 text-fintech-mint flex items-center justify-center">
              <Check className="w-3 h-3" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: 'Is the Daily Pool global or local?',
    a: 'The Daily Pool is region/country-based, and runs on a 24-hour cycle that resets at 12 PM local time every day.',
  },
  {
    q: 'How can I get help or support?',
    a: 'We offer live chat and email support directly inside the app, anytime you need assistance.',
  },
  {
    q: 'Where can I download Squirrelll.ing?',
    a: 'Squirrelll.ing is live on both Google Play Store for Android and App Store for iOS. Search Squirrelll.ing in the stores, or download from the website. The App Store link will be added shortly.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue/90 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">FAQs</h2>
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
