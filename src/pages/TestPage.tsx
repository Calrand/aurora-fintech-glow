import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, PiggyBank, BookOpen, HelpCircle, FlaskConical, Info } from 'lucide-react';

const nav = [
  { label: 'What is Squirrellling?', to: '/test-page#what-is-squirrellling', icon: Sparkles },
  { label: 'Daily Pool', to: '/test-page#daily-pool', icon: Users },
  { label: 'Ask Squirrelll.ing', to: '/ask', icon: HelpCircle },
  { label: 'Money Guides', to: '/money-guides', icon: BookOpen },
  { label: 'Concepts', to: '/concepts', icon: BookOpen },
  { label: 'Research', to: '/research', icon: FlaskConical },
  { label: 'About', to: '/about', icon: Info },
];

const philosophy = [
  'Money should work quietly.',
  'Set it once. Let it work in the background.',
  'Turn it on. Get on with life.',
  'Small daily actions. Background financial progress.',
  'Runs quietly. Works consistently. Connects communities.',
];

const relatedQuestions = [
  { q: 'What is Squirrellling?', to: '/ask' },
  { q: 'How does the Daily Pool work?', to: '/ask' },
  { q: 'Is Squirrellling the same as saving?', to: '/ask' },
];
const relatedGuides = [
  { q: 'Start Squirrellling in 5 minutes', to: '/money-guides' },
  { q: 'Automating small daily contributions', to: '/money-guides' },
];
const relatedConcepts = [
  { q: 'Micro-finance', to: '/concepts' },
  { q: 'Rotating savings (Susu, Tandas)', to: '/concepts' },
  { q: 'Behavioral automation', to: '/concepts' },
];
const relatedResearch = [
  { q: 'Why small consistent actions beat big infrequent ones', to: '/research' },
];

const TestPage: React.FC = () => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Squirrellling — the quiet financial philosophy',
      url: 'https://squirrelll.ing/test-page',
      description:
        'Squirrellling is a financial philosophy of small, consistent, automated actions. Squirrelll.ing is the platform that enables it. The Daily Pool is where you begin.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Squirrellling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Squirrellling is a financial philosophy built around small, consistent, automated actions that quietly improve financial wellbeing over time.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Squirrelll.ing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Squirrelll.ing is the platform that enables people to practice Squirrellling — set once, run in the background, connect with community.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Daily Pool?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Daily Pool is the flagship Squirrellling experience: everyone in a region contributes a small daily amount, and one member receives the full pool that day.',
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="Squirrellling — the quiet financial philosophy | Squirrelll.ing"
        description="Squirrellling is small, consistent, automated financial actions. Squirrelll.ing is the platform. The Daily Pool is where you begin."
        path="/test-page"
        noindex
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Section nav — reflects the new IA */}
      <div className="pt-24 md:pt-28">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="px-3 py-1.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-fintech-mint/60 transition"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Hero — philosophy first */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[120px] -z-10" />
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.25em] text-fintech-mint/80 text-xs mb-5">
              A quiet financial philosophy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Squirrellling</span>
              <span className="block text-white/90 mt-2 text-2xl md:text-3xl font-medium">
                Small daily actions. Background financial progress.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8">
              Money should work quietly. Set it once. Get on with life.
              Squirrellling is a way of handling money that stays in the background — and Squirrelll.ing is the platform that makes it effortless.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#daily-pool">
                <Button className="bg-fintech-mint text-fintech-dark hover:opacity-90 h-11 px-6">
                  Start with the Daily Pool <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#what-is-squirrellling">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-11 px-6">
                  What is Squirrellling?
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Three layers */}
      <section className="py-14 md:py-20 border-t border-white/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            One idea. Three layers.
          </h2>
          <p className="text-center text-white/60 max-w-2xl mx-auto mb-12">
            Squirrellling → Squirrelll.ing → Daily Pool. The philosophy, the platform, and the experience where most people begin.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tag: 'The philosophy',
                title: 'Squirrellling',
                body: 'A habit of small, consistent, automated financial actions. Not a product. A way of handling money that quietly compounds into wellbeing.',
                icon: Sparkles,
              },
              {
                tag: 'The platform',
                title: 'Squirrelll.ing',
                body: 'The place where Squirrellling becomes practical. Turn it on, and it runs in the background — no dashboards to babysit, no decisions to repeat.',
                icon: PiggyBank,
              },
              {
                tag: 'The experience',
                title: 'Daily Pool',
                body: 'The flagship reason people start. Everyone contributes a small daily amount. One person in your region receives the full pool that day. Any day could be yours.',
                icon: Users,
              },
            ].map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fintech-mint via-fintech-amber to-fintech-mint" />
                <c.icon className="h-6 w-6 text-fintech-mint mb-4" />
                <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{c.tag}</p>
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-white/75 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What is Squirrellling */}
      <section id="what-is-squirrellling" className="py-14 md:py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-fintech-mint mb-3">The concept</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">What is Squirrellling?</h2>
            <p className="text-white/60 mb-8">
              <strong className="text-white/90">Summary:</strong> Squirrellling is the practice of setting aside small amounts, consistently and automatically, so financial progress happens in the background of everyday life.
            </p>

            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">The main idea</h3>
              <p className="text-white/80 leading-relaxed">
                Most financial advice asks people to think harder, budget tighter, or wait for the "right" moment. Squirrellling asks the opposite: decide once, automate it, and let small actions do the work over time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {philosophy.map((p) => (
                <div key={p} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Daily Pool */}
      <section id="daily-pool" className="py-14 md:py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-fintech-amber mb-3">The flagship experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">The Daily Pool</h2>
            <p className="text-white/60 mb-8">
              <strong className="text-white/90">Summary:</strong> Everyone contributes a small daily amount to a regional pool. One member receives the full pool that day. It's the simplest way to start Squirrellling.
            </p>

            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-lg font-semibold mb-3">How it works</h3>
              <ol className="space-y-3 text-white/80 list-decimal list-inside">
                <li>Contribute a fixed small daily amount, set by your regional currency.</li>
                <li>Everyone in your region contributes the same — no more, no less.</li>
                <li>One member per region receives the full pool (minus a 12% platform fee).</li>
                <li>If today isn't your day, your contribution helped someone in the same position you're in.</li>
                <li>Set it once. It runs quietly, day after day.</li>
              </ol>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/download">
                <Button className="bg-fintech-mint text-fintech-dark hover:opacity-90 h-11 px-6">
                  Start Squirrellling
                </Button>
              </Link>
              <Link to="/ask">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-11 px-6">
                  Ask a question
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Savings Pods — supporting */}
      <section className="py-14 md:py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Supporting feature</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Savings Pods</h2>
            <p className="text-white/75 leading-relaxed">
              Savings Pods sit alongside the Daily Pool for people who want to Squirrellling toward a specific goal — a trip, a device, a rainy-day cushion. Same philosophy: set the amount once, choose a cadence, and let it run.
            </p>
          </div>
        </Container>
      </section>

      {/* Related — knowledge-page pattern */}
      <section className="py-14 md:py-20 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Related Questions', items: relatedQuestions },
              { title: 'Related Guides', items: relatedGuides },
              { title: 'Related Concepts', items: relatedConcepts },
              { title: 'Related Research', items: relatedResearch },
            ].map((block) => (
              <div key={block.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((i) => (
                    <li key={i.q}>
                      <Link to={i.to} className="text-white/80 hover:text-fintech-mint transition">
                        → {i.q}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-10">
            References available on individual knowledge pages.
          </p>
        </Container>
      </section>

      <FooterSection />
    </div>
  );
};

export default TestPage;
