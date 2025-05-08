
import React from 'react';
import { Link } from "react-router-dom";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-fintech-darkBlue py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Aurora Fintech" className="h-8 w-auto" />
              <span className="font-bold text-xl text-white">Aurora</span>
            </div>
            <p className="text-white/60 mb-6">Revolutionizing your financial experience with smart, intuitive tools for the modern world.</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Press</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Community</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Developers</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Partners</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Security</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-fintech-mint transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Aurora Fintech. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
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
