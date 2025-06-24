
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
    description: "Begin your journey to better investment management with our mobile app. Forget and grow effortlessly.",
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-fintech-darkBlue/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-2">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base px-4">
            Getting started with Squirrelll is simple. Follow these easy steps to begin your journey.
          </p>
        </div>
        
        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index}>
                  <div className="glass-card p-4 sm:p-5 md:p-6 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${
                        index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'
                      } flex items-center justify-center text-fintech-dark font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4`}>
                        {step.number}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="relative static right-0 translate-y-0 h-8 w-8 sm:h-10 sm:w-10" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop View - Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 xl:p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 xl:w-20 xl:h-20 rounded-full ${
                  index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'
                } flex items-center justify-center text-fintech-dark font-bold text-xl xl:text-2xl mb-5 xl:mb-6`}>
                  {step.number}
                </div>
                <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base xl:text-lg leading-relaxed">
                  {step.description}
                </p>
                <div className={`h-1 w-16 mt-6 xl:mt-8 ${
                  index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
