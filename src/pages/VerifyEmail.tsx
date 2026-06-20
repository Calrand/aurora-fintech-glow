import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';

type Status = 'loading' | 'success' | 'error';

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState('');
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) return;

    const verify = async () => {
      try {
        const res = await fetch(
          'https://squirrelll-ing-31558857aa28.herokuapp.com/api/auth/verify-email',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          },
        );

        const data = await res.json();

        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
          setMessage(data.error || 'Verification failed.');
        }
      } catch {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    };

    verify();
  }, [token]);

  if (!token) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-fintech-darkBlue">
      <SEO
        title="Verify Your Email — Squirrelll.ing"
        description="Confirm your Squirrelll.ing email address to activate your account and start saving."
        path="/verify-email"
        noindex
      />
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {status === 'loading' && (
              <>
                <div className="flex justify-center mb-6">
                  <Loader2
                    size={56}
                    className="animate-spin text-fintech-mint"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Verifying your email...
                </h1>
                <p className="text-lg text-fintech-darkBlue/80">
                  Please wait while we verify your account.
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-fintech-mint/20 to-fintech-amber/20 rounded-full p-6">
                    <CheckCircle size={56} className="text-fintech-mint" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Verification Successful
                </h1>
                <p className="text-lg text-fintech-darkBlue/80">
                  You can now login to your account from the app.
                </p>

                <div className="mt-10">
                  <Link to="/" className="text-fintech-mint hover:underline">
                    Back to Home
                  </Link>
                </div>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 rounded-full p-6">
                    <XCircle size={56} className="text-red-500" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Verification Failed
                </h1>
                <p className="text-lg text-fintech-darkBlue/80">
                  {message || 'This verification link is invalid or expired.'}
                </p>

                <div className="mt-10">
                  <Link to="/" className="text-fintech-mint hover:underline">
                    Back to Home
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default VerifyEmail;
