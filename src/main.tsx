import React, { useState, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import LoadingScreen from './components/LoadingScreen.tsx';

// Detect prerender environment (JSDOM renderer sets navigator.userAgent
// to a value containing "jsdom"; puppeteer sets "HeadlessChrome").
const isPrerender =
  typeof navigator !== 'undefined' &&
  /jsdom|HeadlessChrome|Prerender/i.test(navigator.userAgent);

const Root = () => {
  // Skip the loading screen entirely during prerender so crawlers get the
  // real page content, not the loader.
  const [isLoading, setIsLoading] = useState(!isPrerender);

  useEffect(() => {
    if (isPrerender) {
      // Signal the prerenderer once the app has mounted.
      requestAnimationFrame(() =>
        document.dispatchEvent(new Event('render-event'))
      );
      return;
    }
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <App />;
};

const container = document.getElementById('root')!;
const tree = (
  <HelmetProvider>
    <Root />
  </HelmetProvider>
);

// If the build produced prerendered HTML, hydrate it; otherwise mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
