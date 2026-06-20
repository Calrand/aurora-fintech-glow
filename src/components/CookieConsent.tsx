import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { applyConsent, type Consent } from '@/lib/tracking';

const STORAGE_KEY = 'squirrelll_cookie_consent_v1';
const REOPEN_EVENT = 'squirrelll:open-cookie-settings';

/** Trigger from anywhere (e.g. footer link): window.dispatchEvent(new Event('squirrelll:open-cookie-settings')) */
export const openCookieSettings = () =>
  window.dispatchEvent(new Event(REOPEN_EVENT));

const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: Consent = JSON.parse(raw);
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
        applyConsent(stored);
      } else {
        // No decision yet -> block everything, show banner
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }

    const reopen = () => {
      setShowSettings(true);
      setOpen(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const save = useCallback((a: boolean, m: boolean) => {
    const consent: Consent = {
      necessary: true,
      analytics: a,
      marketing: m,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setAnalytics(a);
    setMarketing(m);
    setOpen(false);
    setShowSettings(false);
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 animate-fade-in"
    >
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
              We don't load Google Analytics, Meta Pixel, Reddit Pixel or any
              other tracker until you say yes. Choose what you're comfortable
              with — you can change this any time. We comply with GDPR,
              CCPA/CPRA, LGPD and COPPA. See our{' '}
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
                  desc="Google Analytics 4 & Google Tag Manager — helps us understand usage."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Row
                  title="Marketing"
                  desc="Meta Pixel & Reddit Pixel — measure campaigns and personalise ads."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            )}

            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={() => save(true, true)}
                className="bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue hover:opacity-90 flex-1"
              >
                Accept all
              </Button>
              <Button
                variant="outline"
                onClick={() => save(false, false)}
                className="border-white/20 text-white hover:bg-white/10 flex-1"
              >
                Reject non-essential
              </Button>
              {showSettings ? (
                <Button
                  variant="ghost"
                  onClick={() => save(analytics, marketing)}
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
            aria-label="Close (reject non-essential)"
            onClick={() => save(false, false)}
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
    <Switch checked={checked} disabled={disabled} onCheckedChange={onChange} />
  </div>
);

export default CookieConsent;
