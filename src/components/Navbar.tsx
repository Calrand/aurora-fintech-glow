
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 lg:px-10 backdrop-blur-lg ${
      location.pathname === '/what-is-squirrelling' ? 'bg-white/90 border-b border-fintech-mint/10' : 'bg-fintech-dark/90 border-b border-white/10'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Squirrell" 
            className="h-8 md:h-12 w-auto" 
            src="/lovable-uploads/7489bf58-8991-4385-9cbe-719585cd376d.png" 
          />
        </Link>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className={location.pathname === '/what-is-squirrelling' ? "text-fintech-dark hover:bg-fintech-mint/10" : "text-white hover:bg-white/10"}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop button */}
        <Link to="/what-is-squirrelling">
          <Button 
            variant="outline" 
            className={
              location.pathname === '/what-is-squirrelling' 
                ? "border-fintech-mint text-fintech-dark hover:bg-fintech-mint/10 hidden sm:flex gap-2"
                : "border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 hidden sm:flex gap-2"
            }
            aria-label="Learn what is Squirrelll.ing"
          >
            <HelpCircle size={18} />
            What is Squirrelll.ing?
          </Button>
        </Link>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${
            location.pathname === '/what-is-squirrelling' ? 'bg-white' : 'bg-fintech-dark'
          } border-b ${
            location.pathname === '/what-is-squirrelling' ? 'border-fintech-mint/10' : 'border-white/10'
          } py-4 px-4 flex flex-col gap-3 shadow-lg animate-fade-in`}>
            <Link to="/what-is-squirrelling" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="outline" 
                className={
                  location.pathname === '/what-is-squirrelling'
                    ? "border-fintech-mint text-fintech-dark hover:bg-fintech-mint/10 w-full flex justify-center gap-2"
                    : "border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 w-full flex justify-center gap-2"
                }
              >
                <HelpCircle size={18} />
                What is Squirrelll.ing?
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
