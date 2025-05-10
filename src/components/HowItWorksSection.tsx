
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: "02",
    title: "Create Your Account",
    description: "Sign up with your email or social media accounts and complete your profile in minutes.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: "03",
    title: "Connect Your Bank",
    description: "Securely link your bank accounts to start tracking your finances automatically.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
                      <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'} flex items-center justify-center text-fintech-dark font-bold text-sm mb-4`}>
                        {step.number}
                      </div>
                      <div className="mb-4 w-full max-w-[180px]">
                        <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm">{step.description}</p>
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
            <div key={index} className="glass-card p-5 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'} flex items-center justify-center text-fintech-dark font-bold text-sm mb-4`}>
                  {step.number}
                </div>
                <div className="mb-4 w-full max-w-[180px]">
                  <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
                <div className={`h-1 w-12 mt-4 ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
