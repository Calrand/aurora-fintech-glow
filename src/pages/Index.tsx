
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import DownloadSection from '@/components/DownloadSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default Index;
