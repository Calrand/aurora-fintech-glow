
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from 'react-router-dom';

const DownloadSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="download-section" className="py-20 md:py-28 bg-gradient-to-b from-fintech-mint/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 gradient-text">Start Squirrelll.ing Today</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Make saving a daily habit. Build real financial momentum. Whether you're here to stay consistent or just make saving more fun—Squirrelll.ing makes the journey simple, social, and satisfying.
          </p>
          
          <Button 
            onClick={scrollToTop} 
            size="lg" 
            className="bg-gradient-to-r from-fintech-mint to-fintech-amber hover:opacity-90 text-fintech-darkBlue font-medium flex gap-2 mx-auto shadow-md"
          >
            <Download size={18} />
            Download App Squirrelll.ing
          </Button>
          
          <Link to="/" className="mt-8 inline-block text-fintech-mint hover:underline">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
