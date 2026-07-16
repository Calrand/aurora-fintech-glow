
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/what-is-squirrelll/HeroSection';
import ConceptSection from '@/components/what-is-squirrelll/ConceptSection';
import FAQSection from '@/components/what-is-squirrelll/FAQSection';
import DownloadSection from '@/components/what-is-squirrelll/DownloadSection';
import SEO from '@/components/SEO';

const WhatIsSquirrelll: React.FC = () => {
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="What is Squirrelll.ing? A Smarter Way to Reach Your Financial Goals, One Small Step at a Time"
        description="Learn how Squirrelll.ing turns spare change and small daily habits into real savings through round-ups, a community Daily Pool, and smart goal tools."
        path="/what-is-squirrelling"
      />
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <FAQSection />
      <DownloadSection />
      <FooterSection />
    </div>
  );
};

export default WhatIsSquirrelll;
