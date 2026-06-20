import React, { useState, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import LoadingScreen from './components/LoadingScreen.tsx';

// Pre-render flag injected by @prerenderer/rollup-plugin (see vite.config.ts).
const isPrerender =
  typeof navigator !== 'undefined' &&
  /HeadlessChrome|Prerender/i.test(navigator.userAgent);

const Root = () => {
  const [isLoading, setIsLoading] = useState(!isPrerender);

  useEffect(() => {
    if (isPrerender) {
      // Tell the prerenderer the page is ready to snapshot.
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

if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
