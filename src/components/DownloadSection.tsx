
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop } from "lucide-react";

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-fintech-gold/10 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download <span className="gradient-text">Aurora</span> Today</h2>
          <p className="text-white/70 max-w-xl mx-auto">Take the first step toward financial freedom. Download Aurora now and start your journey to better finances.</p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get Aurora on All Your Devices</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fintech-mint flex items-center justify-center">
                    <Smartphone className="text-fintech-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile App</h4>
                    <p className="text-white/60 text-sm">Available for iOS and Android</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fintech-amber flex items-center justify-center">
                    <Laptop className="text-fintech-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Web Application</h4>
                    <p className="text-white/60 text-sm">Access from any browser</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-black hover:bg-black/80 text-white flex items-center gap-2 h-14">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.9789 8.47083C17.9086 8.52325 15.8056 9.70332 15.8056 12.1436C15.888 14.8939 18.3908 15.932 18.4198 15.9381C18.4062 15.9905 17.9925 17.513 16.9174 19.0681C16.0194 20.4043 15.0834 21.737 13.6565 21.7584C12.2621 21.7797 11.8539 20.8859 10.255 20.8859C8.6734 20.8859 8.15755 21.7379 6.87537 21.7797C5.46805 21.8178 4.42677 20.3517 3.50593 19.0243C1.64318 16.353 0.177917 11.7589 2.0854 8.57338C3.02389 7.00749 4.75393 5.99641 6.62326 5.97667C8.02729 5.95122 9.35119 6.9543 10.1939 6.9543C11.0366 6.9543 12.6414 5.95694 14.3439 6.15044C15.0277 6.1888 17.1582 6.44927 18.5677 8.26246C18.4733 8.32061 17.9789 8.47083 17.9789 8.47083ZM14.9505 4.06965C15.7081 3.1565 16.2105 1.89149 16.0783 0.624878C14.9961 0.667826 13.6679 1.36487 12.8748 2.27802C12.1611 3.0857 11.558 4.38656 11.7037 5.61557C12.9188 5.70669 14.1891 4.9828 14.9505 4.06965Z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Download on the</span>
                      <span className="text-sm font-medium">App Store</span>
                    </div>
                  </Button>
                  
                  <Button className="bg-black hover:bg-black/80 text-white flex items-center gap-2 h-14">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M3.14409 21.9167C2.9834 21.6834 2.82271 21.45 2.69159 21.2C2.35812 20.5834 2.09215 19.95 1.90033 19.3C1.5585 18.0167 1.5585 16.7334 1.5585 15.4334V8.56669C1.5585 7.28335 1.5585 5.98335 1.90033 4.70001C2.09215 4.05001 2.35812 3.41669 2.69159 2.80002C2.82271 2.55002 2.9834 2.31669 3.14409 2.08335C3.70218 1.23335 4.47899 0.566687 5.37891 0.233354C6.31008 -0.0999789 7.28248 -0.0166455 8.38487 0.0500212C9.63284 0.133354 11.0571 0.40002 12.3964 0.40002H12.7385C14.0779 0.40002 15.5195 0.133354 16.7502 0.0500212C17.8697 -0.0166455 18.8421 -0.0999789 19.7733 0.233354C20.6732 0.566687 21.45 1.23335 22.0081 2.08335C22.1688 2.31669 22.3295 2.55002 22.4606 2.80002C22.7941 3.41669 23.06 4.05001 23.2519 4.70001C23.5937 5.98335 23.5937 7.26669 23.5937 8.56669V15.4334C23.5937 16.7167 23.5937 18.0167 23.2519 19.3C23.06 19.95 22.7941 20.5834 22.4606 21.2C22.3295 21.45 22.1688 21.6834 22.0081 21.9167C21.45 22.7667 20.6732 23.4334 19.7733 23.7667C18.8421 24.1 17.8697 24.0167 16.7673 23.95C15.5195 23.8667 14.0949 23.6 12.7556 23.6H12.4135C11.0742 23.6 9.64992 23.8667 8.40195 23.95C7.28248 24.0167 6.31008 24.1 5.37891 23.7667C4.47899 23.4334 3.70218 22.7667 3.14409 21.9167ZM12.4135 7.51669L10.4686 6.28335C9.80496 5.85002 9.19809 5.45002 8.67124 5.08335C8.1444 4.71669 7.56923 4.33335 7.04239 4.41669C6.0871 4.55002 5.57734 5.56669 5.57734 6.58335V17.4334C5.57734 18.45 6.10418 19.4667 7.05947 19.6C7.58631 19.6834 8.14441 19.3 8.67124 18.9167C9.19809 18.55 9.78888 18.15 10.4686 17.7167L12.4135 16.4834C12.9061 16.2 13.4642 15.8667 13.9739 15.55C14.4836 15.2334 15.0073 14.8834 15.3408 14.4834C15.6743 14.0834 15.8179 13.6334 15.8179 13.0167C15.8179 12.4 15.6743 11.95 15.3408 11.55C15.0073 11.15 14.4836 10.8 13.9739 10.4834C13.4642 10.1667 12.9061 9.83335 12.4135 9.55002L12.4135 7.51669Z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-medium">Google Play</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glow-amber">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Aurora App on Mobile" 
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
              
              <div className="absolute -top-5 -right-5 bg-fintech-mint text-fintech-dark px-4 py-2 rounded-full font-semibold">
                Free Download
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">By downloading, you agree to our <a href="#" className="underline hover:text-fintech-mint">Terms of Service</a> and <a href="#" className="underline hover:text-fintech-mint">Privacy Policy</a></p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
