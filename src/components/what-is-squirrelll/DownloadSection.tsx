
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from 'react-router-dom';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.squirrelll.ing';

const DownloadSection: React.FC = () => {
  return <section id="download-section" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fintech-darkBlue/90 to-fintech-dark -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fintech-mint/10 blur-[60px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Ready to start Squirrelll.ing?</h2>
              <p className="text-base md:text-lg mb-6 text-white/80 max-w-xl mx-auto">
                Make micro finance and community engagement your daily habit.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button asChild size="lg" className="bg-white/10 hover:bg-white/15 text-white font-medium flex gap-2 shadow-sm px-6 py-5 h-auto text-base border border-white/10">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Download for iOS (link coming soon)">
                  <Download size={18} />
                  Download for iOS
                </a>
              </Button>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-fintech-amber to-fintech-gold hover:opacity-90 text-fintech-darkBlue font-medium flex gap-2 shadow-sm px-6 py-5 h-auto text-base">
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <Download size={18} />
                  Download for Android
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/" className="text-fintech-mint hover:text-fintech-mint/80 hover:underline transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>;
};

export default DownloadSection;
