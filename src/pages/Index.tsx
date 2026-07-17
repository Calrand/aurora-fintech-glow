import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroHighlightSection from '@/components/HeroHighlightSection';
import SEO from '@/components/SEO';

// Lazy load non-critical components
const ConceptSection = lazy(() => import('@/components/what-is-squirrelll/ConceptSection'));
const FAQSection = lazy(() => import('@/components/what-is-squirrelll/FAQSection'));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));
const DownloadSection = lazy(() => import('@/components/DownloadSection'));
const WaitlistSection = lazy(() => import('@/components/WaitlistSection'));
const FooterSection = lazy(() => import('@/components/FooterSection'));

// Loading fallback
const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="w-8 h-8 border-4 border-fintech-mint/30 border-t-fintech-mint rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  console.log('Rendering Index');
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="Squirrelll.ing — Community Funding Where Everyone Gives & Everyone Gets"
        description="Community funding where everyone gives — and everyone gets. Contribute to a shared Daily Pool, save toward your goals with Savings Pods. Any day could be your day. Available on Google Play and App Store."
        path="/"
        ogDescription="Community funding where everyone gives — and everyone gets. Contribute to a shared Daily Pool, save toward your goals with Savings Pods. Any day could be your day."
        keywords="squirrelling, squirreling, make money online, passive income app, daily savings pool, earn money daily, side hustle app, community funding, micro savings, savings pool, set and forget savings, daily pool, savings pods, micro-fintech, fintech"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Squirrelll.ing',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'iOS, Android',
          description:
            'A community-based micro-fintech platform integrating micro-savings, round-ups, and a Daily Pool into your everyday life.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          downloadUrl: 'https://play.google.com/store/apps/details?id=com.squirrelll.ing',
        }}
      />
      <Navbar />
      <HeroSection />
      <HeroHighlightSection />

      <Suspense fallback={<SectionLoader />}>
        <ConceptSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HowItWorksSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DownloadSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WaitlistSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
