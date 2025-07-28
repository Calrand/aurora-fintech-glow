import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';
const PrivacyPolicy: React.FC = () => {
  return <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
              
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-fintech-mint to-fintech-mint mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">At Squirrelll.ing, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>
              <p className="mb-4"><strong>Personal Information:</strong> Name, email address, phone number, location, and payment details.</p>
              <p className="mb-4"><strong>Usage Data:</strong> Information about your interactions with our app, including activity logs, game participation, savings behavior, and transaction history.</p>
              <p className="mb-4"><strong>Device Information:</strong> IP address, device type, browser type, and OS used.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>To process your daily deposits, savings goals, and pool contributions.</li>
                <li>To manage your account and notify you about important updates.</li>
                <li>To personalize your experience and improve app performance.</li>
                <li>To comply with financial regulations and fraud prevention.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">3. Data Sharing and Security</h2>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>We never sell your data.</li>
                {/* <li>We use Checkout.com as our payment partner, which adheres to strict PCI DSS Level 1 compliance to process all transactions securely.</li> */}
                <li>Data is encrypted and stored securely using industry-standard protocols.</li>
                <li>We may share data with government or legal authorities only when required by law.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">4. Cookies and Tracking</h2>
              <p>We use cookies for performance and user experience improvement. You can manage cookie settings in your browser.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">5. Your Rights</h2>
              <p>You can request access, correction, or deletion of your data at any time. Contact us at assist@squirrelll.ing.</p>
              
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
    </div>;
};
export default PrivacyPolicy;