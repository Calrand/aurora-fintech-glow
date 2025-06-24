
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const features = [{
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
      </svg>,
  title: "Smart Portfolio",
  description: "Automatically optimized investment portfolios that adapt to market changes and your financial goals.",
  color: "bg-fintech-mint text-fintech-dark"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="M7 15h0"></path>
        <path d="M12 15h0"></path>
        <path d="M17 15h0"></path>
      </svg>,
  title: "Seamless Payments",
  description: "Send and receive money instantly with zero fees to anyone, anywhere in the world.",
  color: "bg-fintech-amber text-fintech-dark"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="m17 5-5-3-5 3"></path>
        <path d="m17 19-5 3-5-3"></path>
        <path d="M4.5 9.5 12 13l7.5-3.5"></path>
        <path d="M4.5 14.5 12 18l7.5-3.5"></path>
      </svg>,
  title: "Advanced Analytics",
  description: "Comprehensive financial insights and spending patterns to help you make informed decisions.",
  color: "bg-fintech-gold text-fintech-dark"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
        <path d="M10 9H8"></path>
      </svg>,
  title: "Budget Planner",
  description: "Create and manage budgets across multiple categories to stay on track with your financial goals.",
  color: "bg-fintech-lightGreen text-fintech-dark"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 14 6-6"></path>
        <circle cx="14" cy="9" r="1"></circle>
        <circle cx="10" cy="14" r="1"></circle>
        <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1"></path>
        <path d="M17 9v12a2 2 0 0 1-2 2H4"></path>
        <path d="M13 5V3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2"></path>
      </svg>,
  title: "Bill Management",
  description: "Never miss a payment with automated bill tracking, reminders, and one-click payments.",
  color: "bg-fintech-cream text-fintech-dark"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9"></path>
        <path d="M14 17H5"></path>
        <circle cx="17" cy="17" r="3"></circle>
        <circle cx="7" cy="7" r="3"></circle>
      </svg>,
  title: "Secure Transactions",
  description: "Bank-level encryption and biometric authentication to keep your financial data safe.",
  color: "bg-fintech-mistyRose text-fintech-dark"
}];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-12 sm:py-14 md:py-16 lg:py-20 bg-fintech-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 px-2">
            Innovative <span className="gradient-text">Features</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Our app is packed with powerful tools and features designed to give you complete control over your finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg glass-card overflow-hidden hover:-translate-y-1 transition-all">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    {React.cloneElement(feature.icon, { 
                      width: "100%", 
                      height: "100%" 
                    })}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
