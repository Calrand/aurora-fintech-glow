
import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
        title="Squirrelll.ing — Community-Based Micro-Fintech Platform"
        description="Save and invest in tiny daily steps. Download Squirrelll.ing on Google Play or join the waitlist for the iOS launch."
        path="/"
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

      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[100px] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
              <span className="gradient-text">What is Squirrelll.ing?</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto">
              A Smarter Way to Reach Your Financial Goals, One Small Step at a Time
            </p>
          </div>
        </div>
      </section>

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
