
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 lg:px-10 backdrop-blur-lg bg-fintech-dark/80 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <img 
            alt="Squirrell" 
            className="h-12 w-auto" 
            src="/lovable-uploads/7489bf58-8991-4385-9cbe-719585cd376d.png" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
