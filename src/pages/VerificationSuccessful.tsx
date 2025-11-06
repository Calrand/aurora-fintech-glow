import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const VerificationSuccessful: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-fintech-mint/20 to-fintech-amber/20 rounded-full p-6">
                <CheckCircle size={56} className="text-fintech-mint" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Verification Successful</h1>
            <p className="text-lg text-fintech-darkBlue/80">
              You can now login to your account from the app.
            </p>

            <div className="mt-10">
              <Link to="/" className="text-fintech-mint hover:underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default VerificationSuccessful;

