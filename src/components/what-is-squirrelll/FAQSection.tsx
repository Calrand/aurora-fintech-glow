import React from 'react';
import { Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-fintech-dark to-fintech-darkBlue/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-0"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What is Squirrelll.ing?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelll.ing is a community-based micro-fintech platform built
                around one simple idea: small amounts pooled together daily become
                something real — for someone today, and for you another day.
                Contribute to a shared Daily Pool or you can also save toward your
                own goals with micro-financed Savings Pods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-1"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What is Squirrelling? (The Concept)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelling is not a modern invention—it's rooted in one of the
                oldest economic practices: setting aside small amounts for future
                use. Just like how squirrels stash food bit by bit for winter,
                squirrelll.ing in micro-finance means building stability, habits,
                and wealth through consistent micro-savings over time. &nbsp;&nbsp;
                Known as "Susu" in West Africa, people contribute a fixed amounts
                and receive big sums in rotating basis. In Mexico, they call it
                "tandas" where they contribute and save small amounts in a
                routine contribution. &nbsp;&nbsp; In different communities, the
                name and the goal might be different, but the concept is always
                the same to gather bigger with small amounts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What is the Daily Pool?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                The Daily Pool is a shared community pot. Every member contributes
                a small fixed amount each day. One member per region is randomly
                selected to receive the full pool — minus a 12% platform fee — to
                accelerate their financial goals. The more members in your region,
                the bigger and more impactful the pool becomes for everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What are Savings Pods?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Savings Pods are goal-based auto-deposit accounts. Set a savings
                goal, choose a fixed amount, pick a daily or weekly schedule, and
                Squirrelll.ing handles the deposits automatically until you reach
                your goal or your set time is up. You can run multiple Pods for
                different goals. It helps you to integrate micro-finance in your
                daily life savings startegy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Can I make money with Squirrelll.ing?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelll.ing is not an investment platform, but any day could be
                your day to receive the full Daily Pool from your community. You
                contribute a small fixed amount daily — less than most people spend
                on coffee — and one regional member receives the entire pool each
                day. Set it up once and let it run silently in the background. No
                effort, no significant cost, and a real daily chance to receive a
                meaningful amount to help towards your financial goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is Squirrelll.ing a good side hustle?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelll.ing works best as a silent financial tool running
                alongside whatever else you do. Contribute a tiny daily amount,
                stay in the pool, and any day could be your day to receive the
                community pot. No work required after setup — just a small daily
                contribution with a real daily chance of return. And they days
                you don't, you helped someone just like you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What if I never receive the Daily Pool?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Every day you contribute, you have a real chance of receiving the
                full community pool. On the days someone else receives it, your
                contribution helped someone in your community who needed it just
                as much as you do — someone in the same position you're in. That's
                not a loss. That's the whole point of Squirrelll.ing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is Squirrelll.ing crypto or a traditional savings platform?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelll.ing is a traditional micro-savings and community
                engagement platform. It is not a cryptocurrency product. Your money
                sits in regulated payment rails.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is the daily pool gambling?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                No. There's no betting or risking money. You contribute an amount
                which is insignificant to you and doesn't bother you. &nbsp;&nbsp;
                Our platform is designed to ensure that none of its features
                promote obsessive or addictive behavior in users, nor cause any
                significant financial loss. The tool works for both gaining and
                helping others.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Can I withdraw my money?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Yes. You can withdraw both your savings and pool money whenever it
                suits you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                What are the fees and charges?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                <ul className="space-y-3 mt-2">
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0">
                      <Check
                        size={16}
                        className="text-fintech-mint stroke-[3]"
                      />
                    </div>
                    <span>
                      A 3% withdrawal fee applies only when withdrawing from your
                      savings.
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0">
                      <Check
                        size={16}
                        className="text-fintech-mint stroke-[3]"
                      />
                    </div>
                    <span>
                      A 12% platform fee is taken from the total Daily Pool amount
                      before the amount is added to the users wallet.
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0">
                      <Check
                        size={16}
                        className="text-fintech-mint stroke-[3]"
                      />
                    </div>
                    <span>
                      If your Daily Pool gains are added to your savings, they can
                      be withdrawn without the 5% fee.
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="bg-fintech-mint/20 rounded-full p-1.5 flex-shrink-0">
                      <Check
                        size={16}
                        className="text-fintech-mint stroke-[3]"
                      />
                    </div>
                    <span>No hidden charges.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Is the Daily Pool global or local?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                The Daily Pool is region/country-based, and runs on a 24-hour cycle
                that resets at 12 PM local time every day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-12"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                How can I get help or support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                We offer live chat and email support directly inside the app,
                anytime you need assistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-13"
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-white hover:text-white/90">
                Where can I download Squirrelll.ing?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-white/80">
                Squirrelll.ing is live on both Google Play Store for Android and
                App Store for iOS. Search Squirrelll.ing in the stores, or
                download from the website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
