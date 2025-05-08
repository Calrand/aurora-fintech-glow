
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 lg:px-10 backdrop-blur-lg bg-fintech-dark/80 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Aurora Fintech" className="h-8 w-auto" />
          <span className="font-bold text-xl text-white">Aurora</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="#features" className="text-white/80 hover:text-fintech-mint transition-colors">Features</Link>
          <Link to="#how-it-works" className="text-white/80 hover:text-fintech-mint transition-colors">How it works</Link>
          <Link to="#testimonials" className="text-white/80 hover:text-fintech-mint transition-colors">Testimonials</Link>
          <Link to="#download" className="text-white/80 hover:text-fintech-mint transition-colors">Download</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:text-fintech-mint hover:bg-white/5">Sign In</Button>
          <Button className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-dark font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
