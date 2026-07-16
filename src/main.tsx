import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n';

const container = document.getElementById('root')!;

// Prerendered HTML lives inside <div data-prerender="true"> for crawlers/SEO.
// On the client we intentionally discard it (not hydrate) because the
// prerendered markup is SEO-only content that doesn't match the React tree.
// React would otherwise log hydration mismatch warnings.
const prerender = container.querySelector('[data-prerender="true"]');
if (prerender) prerender.remove();

createRoot(container).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
