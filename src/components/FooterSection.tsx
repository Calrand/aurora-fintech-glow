
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
            Revolutionizing your financial experience with smart, intuitive tools for the modern world.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Security</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col items-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Squirrell. All rights reserved.</p>
          
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
