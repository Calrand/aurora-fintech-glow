
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DownloadSection from '@/components/DownloadSection';
import WaitlistSection from '@/components/WaitlistSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <DownloadSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default Index;
