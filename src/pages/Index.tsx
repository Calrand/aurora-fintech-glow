
import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Lazy load non-critical components
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
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      return (
        <h1>Loading...</h1>
      )
      <Navbar />
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <HowItWorksSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DownloadSection />
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
