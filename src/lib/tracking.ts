/**
 * Consent-gated tracking loader.
 *
 * NOTHING here runs until the user grants consent via the CookieConsent banner.
 * Add IDs below; leave a value empty/null to disable that pixel entirely.
 */

export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

// ---- Configure your tracker IDs here ----
const IDS = {
  ga4: 'G-P2GFWDSSFK',          // Google Analytics 4 (analytics)
  gtm: 'GTM-5XKBPWCG',          // Google Tag Manager (analytics)
  metaPixel: '',                 // Meta/Facebook Pixel ID (marketing) — fill in
  redditPixel: '',               // Reddit Pixel ID, e.g. 't2_xxxxx' (marketing) — fill in
};

const loaded = {
  ga4: false,
  gtm: false,
  metaPixel: false,
  redditPixel: false,
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: unknown;
    rdt?: ((...args: unknown[]) => void) & { sendEvent?: unknown; callQueue?: unknown[] };
  }
}

const injectScript = (src: string, async = true) => {
  const s = document.createElement('script');
  s.src = src;
  s.async = async;
  document.head.appendChild(s);
  return s;
};

// ---------- Google Analytics 4 ----------
const loadGA4 = () => {
  if (loaded.ga4 || !IDS.ga4) return;
  loaded.ga4 = true;
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${IDS.ga4}`);
  window.dataLayer = window.dataLayer || [];
  const gtag: typeof window.gtag = (...args) => {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', IDS.ga4, { anonymize_ip: true });
};

// ---------- Google Tag Manager ----------
const loadGTM = () => {
  if (loaded.gtm || !IDS.gtm) return;
  loaded.gtm = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${IDS.gtm}`);
};

// ---------- Meta (Facebook) Pixel ----------
const loadMetaPixel = () => {
  if (loaded.metaPixel || !IDS.metaPixel) return;
  loaded.metaPixel = true;
  /* eslint-disable */
  // Standard Meta Pixel snippet
  (function (f: any, b: any, e: any, v: any) {
    if (f.fbq) return;
    const n: any = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const t = b.createElement(e);
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq!('init', IDS.metaPixel);
  window.fbq!('track', 'PageView');
};

// ---------- Reddit Pixel ----------
const loadRedditPixel = () => {
  if (loaded.redditPixel || !IDS.redditPixel) return;
  loaded.redditPixel = true;
  /* eslint-disable */
  (function (w: any, d: any) {
    if (!w.rdt) {
      const p: any = (w.rdt = function () {
        p.sendEvent ? p.sendEvent.apply(p, arguments) : p.callQueue.push(arguments);
      });
      p.callQueue = [];
      const t = d.createElement('script');
      t.src = 'https://www.redditstatic.com/ads/pixel.js';
      t.async = true;
      const s = d.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s);
    }
  })(window, document);
  /* eslint-enable */
  window.rdt!('init', IDS.redditPixel);
  window.rdt!('track', 'PageVisit');
};

/**
 * Apply the user's consent decision. Loads only the pixels they allowed.
 * Note: scripts already loaded cannot be unloaded without a page reload.
 */
export const applyConsent = (c: Consent) => {
  if (c.analytics) {
    loadGA4();
    loadGTM();
  }
  if (c.marketing) {
    loadMetaPixel();
    loadRedditPixel();
  }
};

export const hasLoadedAny = () =>
  loaded.ga4 || loaded.gtm || loaded.metaPixel || loaded.redditPixel;
