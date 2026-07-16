import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Download } from 'lucide-react';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.squirrelll.ing';
const APP_STORE_URL = '#';

const DownloadSection: React.FC = () => {
  return (
    <section
      id="download"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
    >
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full bg-fintech-gold/10 blur-[60px] md:blur-[80px] lg:blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-fintech-mint/70 bg-fintech-mint/5 px-2 sm:px-3 py-1 rounded-full border border-fintech-mint/10 inline-flex items-center gap-1 sm:gap-1.5">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-fintech-mint/50 rounded-full"></span>
              Now on Google Play & App Store
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
            <span className="gradient-text">Squirrelll.ing</span> is Live
          </h2>
          <p className="text-white/70 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Download Squirrelll.ing on Google Play or the App Store and start
            saving today.
          </p>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto glass-card p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
                Download Now
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-fintech-mint flex items-center justify-center flex-shrink-0">
                    <Smartphone className="text-fintech-dark" size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm sm:text-base">
                      Mobile App
                    </h4>
                    <p className="text-white/60 text-xs sm:text-sm">
                      Available now on Google Play and the App Store.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Button
                    asChild
                    className="h-10 sm:h-12 md:h-14 bg-gradient-to-r from-fintech-amber to-fintech-gold hover:opacity-90 text-fintech-dark font-medium text-sm sm:text-base"
                  >
                    <a
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={18} />
                      Google Play
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="h-10 sm:h-12 md:h-14 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base border border-white/10"
                  >
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download on the App Store (link coming soon)"
                    >
                      <Download size={18} />
                      App Store
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="glow-amber max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none mx-auto">
                <img
                  alt="Squirrelll.ing App"
                  className="w-full rounded-xl shadow-xl opacity-75"
                  src="/uploads/79f59e83-3d83-409a-a070-db0311401c9e.jpg"
                  loading="lazy"
                  width={400}
                  height={800}
                />
              </div>

              <div className="absolute -top-2 sm:-top-3 md:-top-5 -right-2 sm:-right-3 md:-right-5 bg-fintech-mint text-fintech-dark px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-full font-semibold text-xs sm:text-sm">
                Live
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center px-4">
          <p className="text-white/50 text-xs sm:text-sm">
            By downloading, you agree to our{' '}
            <a
              href="/terms-of-service"
              className="underline hover:text-fintech-mint transition-colors"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="underline hover:text-fintech-mint transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
