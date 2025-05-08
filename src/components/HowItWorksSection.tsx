
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get started by downloading the Aurora app from the App Store or Google Play Store.",
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
    <section id="how-it-works" className="py-20 bg-fintech-darkBlue/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-white/70 max-w-xl mx-auto">Getting started with Aurora is simple. Follow these easy steps to begin your journey to financial freedom.</p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
              <div className="flex-1">
                <div className="glass-card p-1 md:p-2 shadow-xl relative">
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'} flex items-center justify-center text-fintech-dark font-bold`}>
                    {step.number}
                  </div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="rounded-lg w-full aspect-video object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 text-lg mb-6">{step.description}</p>
                <div className={`h-1 w-20 ${index === 0 ? 'bg-fintech-mint' : index === 1 ? 'bg-fintech-amber' : 'bg-fintech-gold'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
