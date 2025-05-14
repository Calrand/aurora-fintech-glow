
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/5 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/fa0255ac-ff2d-4248-904b-e3e46f5db299.png" 
              alt="Squirrelll Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">What is Squirrelll.ing?</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-fintech-darkBlue/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            A Smarter Way to Save, One Small Step at a Time
          </p>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-fintech-mint to-fintech-amber mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
