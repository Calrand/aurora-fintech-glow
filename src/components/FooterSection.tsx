
import React from 'react';
import { Link } from "react-router-dom";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-fintech-darkBlue py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-6">
            <img alt="Squirrell" className="h-12 w-auto" src="/lovable-uploads/fa0255ac-ff2d-4248-904b-e3e46f5db299.png" />
          </div>
          <p className="text-white/60 mb-6 max-w-md text-center">
            A FinTech platform integrating micro finance into your life. Revolutionizing your financial experience with smart, intuitive tools for the modern world.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-6 text-white">Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-4 text-center">
              <Link to="#" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors">Payment Security</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col items-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Squirrelll. All rights reserved.</p>
          
          <div className="mt-4">
            <select className="bg-white/5 border border-white/10 rounded px-3 py-1 text-white/60 text-sm">
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
