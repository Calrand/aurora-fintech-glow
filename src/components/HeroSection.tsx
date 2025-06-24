
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-fintech-mint/10 blur-[60px] sm:blur-[80px] md:blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              <span className="gradient-text block mb-1 sm:mb-2">A FinTech Platform</span> 
              <span className="block">For Your Micro Finances</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-2">
              Take control of your finances with our intuitive app that helps you save and invest to grow your money effortlessly.
            </p>
            
            <div className="flex justify-center lg:justify-start px-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium flex gap-2 w-full sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 text-sm sm:text-base" 
                onClick={scrollToDownload}
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                Download Now
              </Button>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 justify-center lg:justify-start px-2">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-fintech-cream flex items-center justify-center text-xs text-fintech-dark font-medium">JD</div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-fintech-lightGreen flex items-center justify-center text-xs text-fintech-dark font-medium">AM</div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-fintech-mistyRose flex items-center justify-center text-xs text-fintech-dark font-medium">SK</div>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">
                Joined by <span className="text-fintech-mint font-medium">10,000+</span> users
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative mt-4 sm:mt-6 lg:mt-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            <div className="glow-mint animate-float">
              <div className="relative z-10 glass-card p-1 sm:p-2 shadow-xl max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto">
                <img 
                  alt="Squirrelll app interface" 
                  className="rounded-lg w-full" 
                  src="/uploads/889a0e04-84e2-4ed8-84b5-094e6f3fd17e.png" 
                  loading="eager" 
                  width="400" 
                  height="800" 
                />
              </div>
            </div>
            
            <div 
              style={{ animationDelay: "1s" }} 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 glass-card p-2 sm:p-3 md:p-4 shadow-lg animate-float max-w-[120px] sm:max-w-[140px] md:max-w-none"
            >
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-fintech-mint flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark sm:w-4 sm:h-4">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-white/70">Collection Successful</p>
                  <p className="text-xs sm:text-sm font-medium">$2,854.00</p>
                </div>
              </div>
            </div>
            
            <div 
              style={{ animationDelay: "2s" }} 
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 glass-card p-2 sm:p-3 md:p-4 shadow-lg animate-float max-w-[120px] sm:max-w-[140px] md:max-w-none"
            >
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-fintech-gold flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark sm:w-4 sm:h-4">
                    <path d="m12 8-9.04 9.06a10.58 10.58 0 0 0 17.68 2.1a10.89 10.89 0 0 0 1.74-2.1"></path>
                    <path d="M5.62 5.62a9 9 0 0 1 12.76 0M2.34 2.34a12 12 0 0 1 16.97 16.97"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-white/70">Savings Growth</p>
                  <p className="text-xs sm:text-sm font-medium">+12.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/50 hover:text-white flex items-center gap-2 animate-bounce text-xs sm:text-sm" 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
            aria-label="Scroll to explore"
          >
            Scroll to explore
            <ArrowDown size={14} className="sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
