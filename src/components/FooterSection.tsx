
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const FooterSection: React.FC = () => {
  const location = useLocation();
  
  // Check if we're on a light-themed page
  const isLightTheme = ['/privacy-policy', '/terms-of-service', '/payment-security'].includes(location.pathname);
  
  return (
    <footer className={`${isLightTheme ? 'bg-fintech-darkBlue' : 'bg-fintech-dark'} py-12 md:py-16 border-t border-white/5`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <Link to="/" className="flex items-center gap-2 mb-4 md:mb-6 hover:opacity-90 transition-opacity">
            <img 
              alt="Squirrell" 
              className="h-10 md:h-12 w-auto" 
              src={isLightTheme 
                ? "/lovable-uploads/fa0255ac-ff2d-4248-904b-e3e46f5db299.png" 
                : "/lovable-uploads/f22d1792-06d8-48f3-8847-3f067e54d9e3.png"
              } 
              loading="lazy"
              width="48"
              height="48"
            />
          </Link>
          <p className="text-white/60 mb-6 max-w-md text-center text-sm md:text-base">
            A FinTech platform integrating micro finance into your life. Revolutionizing your financial experience with smart, intuitive tools for the modern world.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 text-white">Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-x-12 sm:gap-y-4 text-center w-full max-w-md">
              <Link to="/privacy-policy" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/payment-security" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Payment Security</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col items-center">
          <p className="text-white/40 text-xs md:text-sm">© {new Date().getFullYear()} Squirrelll. All rights reserved.</p>
          
          <div className="mt-4">
            <select 
              className="bg-white/5 border border-white/10 rounded px-3 py-1 text-white/60 text-sm"
              aria-label="Select language"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
