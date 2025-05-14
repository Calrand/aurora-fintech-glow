import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from 'react-router-dom';
const DownloadSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <section id="download-section" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fintech-mint/5 to-white -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fintech-mint/5 blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-fintech-mint/20">
            <div className="text-center mb-8">
              
              <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">Start Squirrelll.ing Today</h2>
              <p className="text-lg md:text-xl mb-8 text-fintech-darkBlue/80 max-w-2xl mx-auto">
                Make saving a daily habit. Build real financial momentum. Whether you're here to stay consistent or just make saving more fun—Squirrelll.ing makes the journey simple, social, and satisfying.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-8">
              <Button onClick={scrollToTop} size="lg" className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 hover:opacity-90 text-fintech-darkBlue font-medium flex gap-2 shadow-md px-8 py-6 h-auto text-base">
                <Download size={20} />
                Download for iOS
              </Button>
              
              <Button onClick={scrollToTop} size="lg" className="bg-gradient-to-r from-fintech-amber to-fintech-gold hover:opacity-90 text-fintech-darkBlue font-medium flex gap-2 shadow-md px-8 py-6 h-auto text-base">
                <Download size={20} />
                Download for Android
              </Button>
            </div>
            
            
          </div>
          
          <div className="text-center mt-10">
            <Link to="/" className="text-fintech-mint hover:text-fintech-mint/80 hover:underline transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default DownloadSection;