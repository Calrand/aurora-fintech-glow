
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Revolutionize</span> Your 
              <br />Financial Experience
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Take control of your finances with our intuitive app that helps you manage, invest, and grow your money effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium flex gap-2" onClick={scrollToDownload}>
                <Download size={18} />
                Download Now
              </Button>
              
              <Button size="lg" variant="outline" className="border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-fintech-cream flex items-center justify-center text-xs text-fintech-dark">JD</div>
                <div className="w-8 h-8 rounded-full bg-fintech-lightGreen flex items-center justify-center text-xs text-fintech-dark">AM</div>
                <div className="w-8 h-8 rounded-full bg-fintech-mistyRose flex items-center justify-center text-xs text-fintech-dark">SK</div>
              </div>
              <p className="text-white/70 text-sm">Joined by <span className="text-fintech-mint font-medium">10,000+</span> users</p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="glow-mint animate-float">
              <div className="relative z-10 glass-card p-2 shadow-xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Squirrelll app interface" className="rounded-lg w-full" />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card p-4 shadow-lg animate-float" style={{
            animationDelay: "1s"
          }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fintech-mint flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70">Collection Successful</p>
                  <p className="text-sm font-medium">$2,854.00</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 shadow-lg animate-float" style={{
            animationDelay: "2s"
          }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fintech-gold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fintech-dark">
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
        
        <div className="flex justify-center mt-16">
          <Button variant="ghost" size="sm" className="text-white/50 hover:text-white flex items-center gap-2 animate-bounce" onClick={() => document.getElementById('features')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Scroll to explore
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
