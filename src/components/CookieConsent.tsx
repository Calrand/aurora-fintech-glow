import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'squirrelll_cookie_consent_v1';

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const applyConsent = (c: Consent) => {
  // Google Consent Mode v2 — covers GDPR (EU), CCPA/CPRA (California),
  // LGPD (Brazil), and COPPA (kids) signals for downstream tools.
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => window.dataLayer!.push(args);
  gtag('consent', 'update', {
    ad_storage: c.marketing ? 'granted' : 'denied',
    ad_user_data: c.marketing ? 'granted' : 'denied',
    ad_personalization: c.marketing ? 'granted' : 'denied',
    analytics_storage: c.analytics ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
};

const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // Default-deny for GDPR/CCPA before choice
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push([
          'consent',
          'default',
          {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500,
          },
        ]);
        setOpen(true);
      } else {
        applyConsent(JSON.parse(raw));
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (c: Omit<Consent, 'necessary' | 'timestamp'>) => {
    const consent: Consent = {
      necessary: true,
      analytics: c.analytics,
      marketing: c.marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 animate-fade-in">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-fintech-dark/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6 text-white">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-fintech-mint/15 flex items-center justify-center">
            <Cookie className="text-fintech-mint" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold mb-1">
              We value your privacy
            </h2>
            <p className="text-sm text-white/70">
              We use cookies to keep the site working, measure performance, and
              improve your experience. You can accept all, reject non-essential,
              or customise your choices. We comply with GDPR, CCPA/CPRA, LGPD,
              and COPPA — and never knowingly collect data from children under
              13. Read our{' '}
              <Link to="/privacy-policy" className="text-fintech-mint underline">
                Privacy Policy
              </Link>
              .
            </p>

            {showSettings && (
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <Row
                  title="Strictly necessary"
                  desc="Required for the site to function. Always on."
                  checked
                  disabled
                />
                <Row
                  title="Analytics"
                  desc="Helps us understand how people use the site."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Row
                  title="Marketing"
                  desc="Used to personalise ads and measure campaigns."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            )}

            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={() => save({ analytics: true, marketing: true })}
                className="bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue hover:opacity-90 flex-1"
              >
                Accept all
              </Button>
              <Button
                variant="outline"
                onClick={() => save({ analytics: false, marketing: false })}
                className="border-white/20 text-white hover:bg-white/10 flex-1"
              >
                Reject non-essential
              </Button>
              {showSettings ? (
                <Button
                  variant="ghost"
                  onClick={() => save({ analytics, marketing })}
                  className="text-fintech-mint hover:bg-fintech-mint/10 flex-1"
                >
                  Save choices
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => setShowSettings(true)}
                  className="text-white/70 hover:bg-white/10 flex-1"
                >
                  Customise
                </Button>
              )}
            </div>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => save({ analytics: false, marketing: false })}
            className="text-white/50 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Row: React.FC<{
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}> = ({ title, desc, checked, disabled, onChange }) => (
  <div className="flex items-start justify-between gap-3">
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
    <Switch
      checked={checked}
      disabled={disabled}
      onCheckedChange={onChange}
    />
  </div>
);

export default CookieConsent;
