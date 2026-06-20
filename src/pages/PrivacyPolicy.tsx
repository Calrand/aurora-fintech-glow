import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <SEO
        title="Privacy Policy — Squirrelll.ing"
        description="How Squirrelll.ing collects, uses, and protects your personal information across the mobile app and website. GDPR, CCPA, LGPD and COPPA aligned."
        path="/privacy-policy"
      />
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Privacy Policy
              </h1>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-fintech-mint to-fintech-mint mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">
                At Squirrelll.ing, your privacy is our priority. This Privacy
                Policy explains how we collect, use, and protect your personal
                information when you use the Squirrelll.ing mobile application
                and website.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                1. Information We Collect
              </h2>

              <p className="mb-4">
                <strong>Personal Information:</strong> We may collect your name,
                email address, phone number, location, and payment-related
                information.
              </p>

              <p className="mb-4">
                <strong>Usage Data:</strong> We may collect information about
                your interactions with the app, including activity logs, daily
                pool participation, savings behavior, wallet activity, and
                transaction history.
              </p>

              <p className="mb-4">
                <strong>Device Information:</strong> We may collect device and
                technical information such as IP address, device type, operating
                system, browser type, diagnostics, crash logs, and device
                identifiers.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                2. How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>
                  To process daily contributions, savings goals, wallet
                  activity, and daily pool participation.
                </li>
                <li>To create, manage, and secure your account.</li>
                <li>
                  To send important account, transaction, security, and app
                  updates.
                </li>
                <li>
                  To improve app performance, diagnose issues, and maintain app
                  reliability.
                </li>
                <li>
                  To comply with legal, financial, fraud prevention, and
                  security requirements.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                3. Data Sharing and Security
              </h2>

              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>We do not sell your personal data.</li>
                <li>
                  We may share necessary data with trusted third-party service
                  providers to operate the app, including payment processors and
                  notification services.
                </li>
                <li>
                  Your data is protected using industry-standard security
                  measures, including encryption in transit.
                </li>
                <li>
                  We may share information with government, regulatory, or legal
                  authorities when required by law.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                4. Third-Party Services
              </h2>

              <p className="mb-4">
                Squirrelll.ing may use third-party services such as Stripe and
                Paypal for payment processing and OneSignal for push
                notifications. These services may process certain user, payment,
                device, or notification-related data according to their own
                privacy policies.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                5. Cookies and Tracking
              </h2>

              <p className="mb-4">
                We may use cookies and similar technologies on our website to
                improve performance and user experience. You can manage cookies
                through your browser settings.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">6. Your Rights</h2>

              <p className="mb-4">
                You can request access, correction, or deletion of your personal
                data at any time by contacting us at support@squirrelll.ing.
              </p>

              <p className="mb-4">
                Some information, such as transaction records, financial
                records, fraud prevention logs, and compliance-related records,
                may be retained for a limited period where required by law,
                regulation, security, or legitimate business purposes.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">7. Contact Us</h2>

              <p className="mb-4">
                If you have questions about this Privacy Policy or how your data
                is handled, contact us at support@squirrelll.ing.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="italic text-fintech-darkBlue/60">
                  Last updated: May 01, 2026
                </p>
                <div className="mt-6">
                  <Link to="/" className="text-fintech-mint hover:underline">
                    Back to Home
                  </Link>
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

export default PrivacyPolicy;
