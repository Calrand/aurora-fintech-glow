import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';
import { Check, Shield } from 'lucide-react';
const PaymentSecurity: React.FC = () => {
  return <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Payment Security</h1>
              <p className="text-xl text-fintech-darkBlue/70">Your Transactions Are Always Protected</p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-fintech-mint to-fintech-amber mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-fintech-mint/20 p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                <div className="bg-gradient-to-br from-fintech-mint/20 to-fintech-amber/20 rounded-full p-6 flex-shrink-0">
                  <Shield size={40} className="text-fintech-mint" />
                </div>
                <div>
                  <p className="text-lg mb-6">
                    At Squirrelll.ing, your financial security is non-negotiable. All payment processing is handled through our trusted partner Checkout.com, a PCI DSS Level 1 certified provider—one of the highest standards for secure payment systems.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 gradient-text">How We Keep You Safe:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-fintech-mint/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-fintech-mint/20 rounded-full p-2">
                      <Check size={20} className="text-fintech-mint" />
                    </div>
                    <h3 className="font-semibold text-xl">End-to-End Encryption</h3>
                  </div>
                  <p className="text-fintech-darkBlue/80">Your data is encrypted during transmission and storage.</p>
                </div>
                
                <div className="bg-fintech-amber/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-fintech-amber/20 rounded-full p-2">
                      <Check size={20} className="text-fintech-amber" />
                    </div>
                    <h3 className="font-semibold text-xl">Tokenization</h3>
                  </div>
                  <p className="text-fintech-darkBlue/80">Sensitive card information is tokenized so your actual data is never stored on our servers.</p>
                </div>
                
                <div className="bg-fintech-gold/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-fintech-gold/20 rounded-full p-2">
                      <Check size={20} className="text-fintech-gold" />
                    </div>
                    <h3 className="font-semibold text-xl">Fraud Detection</h3>
                  </div>
                  <p className="text-fintech-darkBlue/80">Checkout.com uses advanced fraud prevention systems to protect against unauthorized transactions.</p>
                </div>
                
                <div className="bg-fintech-mint/5 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-fintech-mint/20 rounded-full p-2">
                      <Check size={20} className="text-fintech-mint" />
                    </div>
                    <h3 className="font-semibold text-xl">Secure Authentication</h3>
                  </div>
                  <p className="text-fintech-darkBlue/80">We use industry-standard authentication methods like 3D Secure (3DS) to ensure safe and verified payments.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 gradient-text">Transparency You Can Trust:</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1 mt-1">
                    <Check size={16} className="text-fintech-mint" />
                  </div>
                  <p>All charges are shown clearly before confirmation.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1 mt-1">
                    <Check size={16} className="text-fintech-mint" />
                  </div>
                  <p>You will receive transaction notifications and can view full transaction logs inside the app.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-fintech-mint/30 to-fintech-mint/50 rounded-full p-1 mt-1">
                    <Check size={16} className="text-fintech-mint" />
                  </div>
                  <p>Your personal information is never sold or shared with third parties.</p>
                </li>
              </ul>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-center text-lg">
                  If you encounter any unauthorized activity or have payment concerns, please contact our support team at <strong className="text-fintech-mint">assist@squirrelll.ing</strong> or use the live chat within the app.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/" className="text-fintech-mint hover:underline">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>;
};
export default PaymentSecurity;