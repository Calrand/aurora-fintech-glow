
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Check if we're on a light-themed page
  const isLightTheme = ['/privacy-policy', '/terms-of-service', '/payment-security'].includes(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 lg:px-10 backdrop-blur-lg ${
      isLightTheme ? 'bg-white/90 border-b border-fintech-mint/10' : 'bg-fintech-dark/90 border-b border-white/10'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Squirrell" 
            className="h-8 md:h-10 w-auto" 
            src={isLightTheme 
              ? "/lovable-uploads/bfdc704f-0326-4dfc-a399-2736f01b47be.png" 
              : "/lovable-uploads/f22d1792-06d8-48f3-8847-3f067e54d9e3.png"
            } 
          />
        </Link>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className={isLightTheme ? "text-fintech-darkBlue hover:bg-fintech-mint/10" : "text-white hover:bg-white/10"}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop button */}
        {location.pathname === '/' ? (
          <Link to="/what-is-squirrelling">
            <Button 
              variant="outline"
              className="border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 hidden sm:flex gap-2"
              aria-label="Learn what is Squirrelll.ing"
            >
              <HelpCircle size={18} />
              What is Squirrelll.ing?
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button 
              variant={isLightTheme ? "default" : "outline"}
              className={
                isLightTheme 
                  ? "bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue hover:opacity-90 hidden sm:flex gap-2"
                  : "border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 hidden sm:flex gap-2"
              }
            >
              Back to Home
            </Button>
          </Link>
        )}
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${
            isLightTheme ? 'bg-white' : 'bg-fintech-dark'
          } border-b ${
            isLightTheme ? 'border-fintech-mint/10' : 'border-white/10'
          } py-4 px-4 flex flex-col gap-3 shadow-lg animate-fade-in`}>
            {location.pathname === '/' ? (
              <Link to="/what-is-squirrelling" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline"
                  className="border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 w-full flex justify-center gap-2"
                >
                  <HelpCircle size={18} />
                  What is Squirrelll.ing?
                </Button>
              </Link>
            ) : (
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant={isLightTheme ? "default" : "outline"}
                  className={
                    isLightTheme
                      ? "bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue hover:opacity-90 w-full flex justify-center gap-2"
                      : "border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10 w-full flex justify-center gap-2"
                  }
                >
                  Back to Home
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
