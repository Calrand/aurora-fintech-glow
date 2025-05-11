
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get started by downloading the Squirrelll app from the App Store or Google Play Store.",
  },
  {
    number: "02",
    title: "Connect Your Payment Method",
    description: "Securely link your payment methods to start using Squirrelll's features immediately.",
  },
  {
    number: "03",
    title: "Start Squirrelll.ing",
    description: "Begin your journey to better financial management with our powerful mobile app.",
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 bg-fintech-darkBlue/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It <span className="gradient-text">Works</span></h2>
          <p className="text-white/70 max-w-xl mx-auto">Getting started with Squirrelll is simple. Follow these easy steps to begin your journey.</p>
        </div>
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="glass-card p-6 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-full ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'} flex items-center justify-center text-fintech-dark font-bold text-lg mb-4`}>
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-8 w-8" />
              <CarouselNext className="relative static right-0 translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop View - Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'} flex items-center justify-center text-fintech-dark font-bold text-xl mb-5`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                <div className={`h-1 w-16 mt-6 ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
