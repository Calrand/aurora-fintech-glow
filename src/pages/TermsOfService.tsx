
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <img 
                src="/lovable-uploads/fa0255ac-ff2d-4248-904b-e3e46f5db299.png" 
                alt="Squirrelll Logo" 
                className="h-16 w-auto mx-auto mb-6"
              />
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
              <p className="text-lg text-fintech-darkBlue/70">Effective Date: 01 May, 2025</p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-fintech-mint to-fintech-amber mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">Welcome to Squirrelll.ing. By accessing or using our platform, you agree to the following Terms of Service.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">1. Eligibility</h2>
              <p>You must be 18 years or older to create an account and participate in financial transactions.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">2. Services Offered</h2>
              <p className="mb-4">Squirrelll.ing offers two financial tools:</p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>A Daily Pool, which users contribute to and from which one participant is randomly selected each day to get the total pool.</li>
                <li>A Smart Savings Tool, allowing users to automate daily or weekly deposits toward personal goals.</li>
              </ul>
              <p>Participation in the Daily Pool is optional. Rewards require completion of a skill-based game and are not guaranteed.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">3. Payments</h2>
              <p className="mb-4">All transactions are securely processed through our payment partner, Checkout.com. By using our services, you agree to abide by their policies and processing terms.</p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>3% fee applies to deposits (charged by Checkout.com).</li>
                <li>12% platform fee applies to the Daily Pool reward before payout.</li>
                <li>5% fee for withdrawing savings (waived if reward funds are reinvested into savings).</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">4. Refunds</h2>
              <p>Deposits to the daily pool are non-refundable once processed unless a technical or unauthorized issue is verified. Deposits to savings are withdrawable anytime from your wallet.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">5. Account Termination</h2>
              <p>We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to fraud, abuse, or misuse.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">6. Limitation of Liability</h2>
              <p>Squirrelll.ing is not liable for any indirect or consequential damages arising from the use or inability to use the platform.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">7. Updates to Terms</h2>
              <p>We may update these Terms of Service from time to time. Users will be notified, and continued use of the platform constitutes acceptance.</p>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="italic text-fintech-darkBlue/60">Last updated: May 01, 2025</p>
                <div className="mt-6">
                  <Link to="/" className="text-fintech-mint hover:underline">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default TermsOfService;
