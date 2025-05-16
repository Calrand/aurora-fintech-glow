
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-fintech-dark flex flex-col items-center justify-center z-50">
      <div className="relative">
        <img 
          src="/uploads/7489bf58-8991-4385-9cbe-719585cd376d.png" 
          alt="Squirrelll" 
          className="h-24 md:h-32 w-auto animate-pulse mb-8"
        />
        
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-16 h-1 bg-gradient-to-r from-fintech-mint to-fintech-amber rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-white/30 animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        </div>
      </div>
      
      <p className="text-white/50 text-sm mt-16">Loading your financial future...</p>
    </div>
  );
};

export default LoadingScreen;
