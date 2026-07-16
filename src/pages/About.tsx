import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import { Heart, Users, Shield, TrendingUp, Sprout, Globe } from 'lucide-react';

const About: React.FC = () => {
  const url = 'https://squirrelll.ing/about';

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#aboutpage`,
    url,
    name: 'About Squirrelll.ing — Our Mission & Story',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    about: { '@id': 'https://squirrelll.ing/#organization' },
    mainEntity: { '@id': 'https://squirrelll.ing/#organization' },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: 'https://squirrelll.ing/uploads/og-image.jpg',
    description:
      'Squirrelll.ing was built to bring people together through community-based micro-finance — a place where small contributions create real financial support for those who need it most.',
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    inLanguage: 'en',
    datePublished: '2025-06-26',
    dateModified: '2026-07-16',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://squirrelll.ing/#organization',
    name: 'Aurora Fintech Glow LLC',
    legalName: 'Aurora Fintech Glow LLC',
    url: 'https://squirrelll.ing',
    logo: 'https://squirrelll.ing/logo.svg',
    foundingDate: '2025-06-26',
    founder: { '@type': 'Organization', name: 'Aurora Fintech Glow LLC' },
    description:
      'Aurora Fintech Glow LLC operates Squirrelll.ing, a community-based micro-fintech platform that helps everyday people earn extra income and support one another through small, consistent contributions.',
    brand: { '@id': 'https://squirrelll.ing/#brand' },
    knowsAbout: [
      'Community micro-finance',
      'Rotating savings and credit associations',
      'Micro-savings',
      'Susu',
      'Tandas',
      'Daily Pool',
    ],
    slogan: 'Nobody loses. Many can gain a lot.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: url },
    ],
  };

  const howItHelpsSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name: 'How Squirrelll.ing helps its community',
    description:
      'A simple three-step model showing how community members contribute a tiny amount, join a shared regional pool, and take turns receiving meaningful financial support.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contribute a Tiny Amount',
        text: 'Set a small daily contribution — less than the cost of a snack — once, and forget it. No pressure and no large commitments.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Stay in the Daily Pool',
        text: 'Your contribution joins a regional community pot. Every day, one member of that region receives the full pool.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Give and Receive',
        text: 'On your day the community supports you. On other days your small contribution supports someone else. Everyone wins over time.',
      },
    ],
  };

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description:
        'We believe financial progress is stronger when it is shared. Every contribution joins a collective effort that can lift someone up today — and you tomorrow.',
    },
    {
      icon: Shield,
      title: 'No One Loses',
      description:
        'Our model is designed so no participant walks away empty-handed forever. You give a little, you stay in the pool, and the community gives back in turn.',
    },
    {
      icon: Heart,
      title: 'Built for Those in Need',
      description:
        'Whether it is an unexpected bill, a small business push, or simply a hard month, Squirrelll.ing exists to be the gentle nudge that helps people keep going.',
    },
    {
      icon: TrendingUp,
      title: 'Small Steps, Real Growth',
      description:
        'You do not need large capital to participate. Tiny, consistent contributions are the foundation — because small habits create lasting change.',
    },
    {
      icon: Sprout,
      title: 'Accessible to Everyone',
      description:
        'We built this for people with small investment goals and limited means. No complex products, no steep barriers — just a simple path to a little extra.',
    },
    {
      icon: Globe,
      title: 'Local Impact, Global Mindset',
      description:
        'Pools are organized by region so support stays close to home. But the idea is universal: when people help each other, everyone rises.',
    },
  ];

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="About Squirrelll.ing — Our Mission, Story & Community Purpose"
        description="Learn why Squirrelll.ing was created: a community micro-fintech platform designed to help people earn extra money, support each other, and grow together without anyone losing."
        path="/about"
        type="website"
        jsonLd={[aboutSchema, breadcrumbSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fintech-mint/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-fintech-mint/10 text-fintech-mint text-sm font-medium mb-6">
              Why We Exist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built for the Community,{' '}
              <span className="text-fintech-mint">Powered by Small Steps</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Squirrelll.ing was created with a single purpose: to give everyday people a
              real chance to earn a little extra, support one another, and build financial
              momentum — without anyone risking what they cannot afford to give.
            </p>
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Platform Born from a Simple Belief
              </h2>
              <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  We started with one question: what if financial help did not have to come
                  from a bank, a loan, or a lucky break? What if it could come from the
                  community itself — small contributions from many people, pooled together
                  to create meaningful support for one person at a time?
                </p>
                <p>
                  That question became Squirrelll.ing. We built a micro-fintech space where
                  people with small investment goals or limited ability to save can still
                  participate, contribute, and benefit. It is not about getting rich quick.
                  It is about keeping one more option open in an economy that often feels
                  impossible.
                </p>
                <p>
                  Every day, members add a tiny amount to a shared pool. One member receives
                  the collective pot — a real financial push that can cover a bill, start a
                  project, or simply bring relief. The next day, the cycle continues. The
                  community gives, the community gains.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-fintech-mint/20 to-fintech-amber/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                  “No one should have to face a hard economy alone. We wanted to build
                  something where nobody loses, but many can gain a lot.”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fintech-mint to-fintech-amber flex items-center justify-center text-fintech-darkBlue font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-white">Aurora Fintech Glow LLC</p>
                    <p className="text-sm text-white/50">Founder of Squirrelll.ing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-fintech-darkBlue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">What We Stand For</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our values shape every feature, every message, and every decision we make.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-fintech-mint/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-fintech-mint/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-fintech-mint" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                A Little Extra, When It Matters Most
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                The economy is hard. Savings are thin. Opportunities feel out of reach.
                Squirrelll.ing is designed to be one open door.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-fintech-mint mb-3">01</div>
                <h3 className="text-xl font-bold mb-3">Contribute a Tiny Amount</h3>
                <p className="text-white/60">
                  Less than the cost of a snack. Set it once and forget it. No pressure, no
                  large commitments.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-fintech-amber mb-3">02</div>
                <h3 className="text-xl font-bold mb-3">Stay in the Daily Pool</h3>
                <p className="text-white/60">
                  Your contribution joins the community pot. Every day, one member receives
                  the full pool for that region.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-fintech-gold mb-3">03</div>
                <h3 className="text-xl font-bold mb-3">Give and Receive</h3>
                <p className="text-white/60">
                  On your day, the community supports you. On other days, your small gift
                  supports someone else. Everyone wins over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-fintech-darkBlue/30 to-fintech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join a Movement Where{' '}
              <span className="text-fintech-mint">Nobody Is Left Behind</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
              Squirrelll.ing is more than an app. It is a community agreement: we help each
              other a little, so that any of us can be helped a lot. If you are looking for
              one honest option to earn extra money, build a savings habit, or simply be
              part of something meaningful, you are welcome here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Back to Home
              </a>
              <a
                href="/what-is-squirrelll.ing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-fintech-mint text-fintech-mint font-semibold text-lg hover:bg-fintech-mint/10 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
