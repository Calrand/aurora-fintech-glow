
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return <section className="relative pt-28 pb-24 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 md:py-20 top-image-section">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text block mb-2">A FinTech Platform</span> 
              <span className="block">For Your Micro Finances</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">Take control of your finances with our intuitive app that helps you save and invest to grow your money effortlessly.</p>
            
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium flex gap-2 w-full sm:w-auto" onClick={scrollToDownload}>
                <Download size={18} />
                Download Now
              </Button>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-fintech-cream flex items-center justify-center text-xs text-fintech-dark">JD</div>
                <div className="w-8 h-8 rounded-full bg-fintech-lightGreen flex items-center justify-center text-xs text-fintech-dark">AM</div>
                <div className="w-8 h-8 rounded-full bg-fintech-mistyRose flex items-center justify-center text-xs text-fintech-dark">SK</div>
              </div>
              <p className="text-white/70 text-sm">Joined by <span className="text-fintech-mint font-medium">10,000+</span> users</p>
            </div>
          </div>
          
          <div className="flex-1 relative mt-6 lg:mt-0">
            <div className="glow-mint animate-float max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:max-w-none">
              <div className="relative z-10 glass-card p-2 shadow-xl">
                <img alt="Squirrelll app interface" className="rounded-lg w-full" src="/lovable-uploads/889a0e04-84e2-4ed8-84b5-094e6f3fd17e.png" loading="eager" width="400" height="800" />
              </div>
            </div>
            
            <div style={{
            animationDelay: "1s"
          }} className="absolute -top-6 -right-6 glass-card p-3 md:p-4 shadow-lg animate-float floating-elem">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-fintech-mint flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70">Collection Successful</p>
                  <p className="text-sm font-medium">$2,854.00</p>
                </div>
              </div>
            </div>
            
            <div style={{
            animationDelay: "2s"
          }} className="absolute -bottom-4 -left-4 glass-card p-3 md:p-4 shadow-lg animate-float floating-elem">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-fintech-gold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark">
                    <path d="m12 8-9.04 9.06a10.58 10.58 0 0 0 17.68 2.1a10.89 10.89 0 0 0 1.74-2.1"></path>
                    <path d="M5.62 5.62a9 9 0 0 1 12.76 0M2.34 2.34a12 12 0 0 1 16.97 16.97"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70">Savings Growth</p>
                  <p className="text-sm font-medium">+12.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="ghost" size="sm" className="text-white/50 hover:text-white flex items-center gap-2 animate-bounce" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({
          behavior: 'smooth'
        })} aria-label="Scroll to explore">
            Scroll to explore
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
