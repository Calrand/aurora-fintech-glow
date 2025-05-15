
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/what-is-squirrelll/HeroSection';
import ConceptSection from '@/components/what-is-squirrelll/ConceptSection';
import FAQSection from '@/components/what-is-squirrelll/FAQSection';
import DownloadSection from '@/components/what-is-squirrelll/DownloadSection';

const WhatIsSquirrelll: React.FC = () => {
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
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
