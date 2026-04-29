import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';

const DeleteAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Delete Account Request
              </h1>

              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-fintech-mint to-fintech-amber mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">
                To request deletion of your Squirrelll.ing account and
                associated data, please follow the steps below.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                How to Request Account Deletion
              </h2>

              <ol className="list-decimal pl-6 space-y-3 mb-4">
                <li>
                  Send an email to{' '}
                  <a
                    href="mailto:support@squirrelll.ing"
                    className="text-fintech-mint hover:underline"
                  >
                    support@squirrelll.ing
                  </a>{' '}
                  from your registered email address.
                </li>
                <li>
                  Include your username and clearly state that you are
                  requesting account deletion.
                </li>
                <li>
                  Our team will process your request within 3–5 business days.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-12 mb-6">Data Deletion</h2>

              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  Personal data, including name, email, and phone number, will
                  be deleted.
                </li>
                <li>Account data and wallet information will be removed.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-6">Data Retention</h2>

              <p>
                Certain transaction records may be retained for legal and
                regulatory compliance for a limited period.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Questions</h2>

              <p>
                If you have any questions, contact{' '}
                <a
                  href="mailto:support@squirrelll.ing"
                  className="text-fintech-mint hover:underline"
                >
                  support@squirrelll.ing
                </a>
                .
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="italic text-fintech-darkBlue/60">
                  Last updated: May 01, 2025
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

export default DeleteAccount;
