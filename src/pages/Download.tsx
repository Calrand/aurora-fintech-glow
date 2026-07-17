import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Download as DownloadIcon, Shield, Zap, Users, CheckCircle2, Smartphone } from 'lucide-react';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.squirrelll.ing';
const APP_STORE_URL = '#';

const Download: React.FC = () => {
  const url = 'https://squirrelll.ing/download';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: 'Download Squirrelll.ing — Available on Google Play & App Store',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    about: { '@id': 'https://squirrelll.ing/#organization' },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    description:
      'Download the Squirrelll.ing app for Android on Google Play and for iOS on the App Store. Join the Daily Pool, start Savings Pods, and squirrell small amounts every day.',
    inLanguage: 'en',
    primaryImageOfPage: 'https://squirrelll.ing/uploads/og-image.jpg',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'Download', item: url },
    ],
  };

  const androidAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `${url}#android-app`,
    name: 'Squirrelll.ing',
    operatingSystem: 'Android',
    applicationCategory: 'FinanceApplication',
    downloadUrl: GOOGLE_PLAY_URL,
    installUrl: GOOGLE_PLAY_URL,
    url: GOOGLE_PLAY_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    brand: { '@id': 'https://squirrelll.ing/#brand' },
    description:
      'Squirrelll.ing for Android — join a regional Daily Pool, run Savings Pods, and build small daily financial habits.',
  };

  const iosAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `${url}#ios-app`,
    name: 'Squirrelll.ing',
    operatingSystem: 'iOS',
    applicationCategory: 'FinanceApplication',
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    url: APP_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    brand: { '@id': 'https://squirrelll.ing/#brand' },
    description:
      'Squirrelll.ing for iOS — community micro-fintech with a Daily Pool and Savings Pods, live on the App Store.',
  };

  const highlights = [
    { icon: Users, title: 'Community Daily Pool', text: 'A regional pot where one member receives the full pool every day.' },
    { icon: Zap, title: 'Automatic Savings Pods', text: 'Goal-based auto-deposits on a daily or weekly schedule.' },
    { icon: Shield, title: 'Regulated Payment Rails', text: 'Traditional micro-savings — not crypto. Withdraw whenever you like.' },
    { icon: Smartphone, title: 'Runs Silently', text: 'Set it once. Tiny daily contribution, real daily chance to receive.' },
  ];

  const requirements = [
    'Android 8.0 or later (Google Play)',
    'iOS 14 or later (App Store)',
    'Free download — no subscription to install',
    'Available in supported regions with local currency',
  ];

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="Download Squirrelll.ing — Android & iOS Micro-Fintech App"
        description="Download the Squirrelll.ing app on Google Play (Android) or the App Store (iOS). Join the Daily Pool, start Savings Pods, and build small daily money habits."
        path="/download"
        type="website"
        jsonLd={[webPageSchema, breadcrumbSchema, androidAppSchema, iosAppSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fintech-mint/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fintech-mint/10 text-fintech-mint text-sm font-medium mb-6 border border-fintech-mint/20">
              <span className="w-1.5 h-1.5 bg-fintech-mint rounded-full" />
              Live on Google Play & App Store
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Download <span className="gradient-text">Squirrelll.ing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
              Get the app on your phone in seconds. Join the Daily Pool, set up Savings
              Pods, and start squirrellling small amounts every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              <Button
                asChild
                className="h-14 bg-gradient-to-r from-fintech-amber to-fintech-gold hover:opacity-90 text-fintech-dark font-semibold text-base"
              >
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon size={18} />
                  Google Play
                </a>
              </Button>
              <Button
                asChild
                className="h-14 bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/10"
              >
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store (link coming soon)"
                >
                  <DownloadIcon size={18} />
                  App Store
                </a>
              </Button>
            </div>
            <p className="text-white/40 text-sm mt-4">
              Free to download. No account needed to browse.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5 md:gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-fintech-mint/10 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-5 h-5 text-fintech-mint" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1.5">{h.title}</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 bg-fintech-darkBlue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              What You Need
            </h2>
            <ul className="space-y-3">
              {requirements.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-fintech-mint flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm mt-6 text-center">
              By downloading, you agree to our{' '}
              <a href="/terms-of-service" className="underline hover:text-fintech-mint">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="underline hover:text-fintech-mint">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Download;
