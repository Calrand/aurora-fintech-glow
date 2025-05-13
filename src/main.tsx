
import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react';
import App from './App.tsx'
import './index.css'
import LoadingScreen from './components/LoadingScreen.tsx';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <App />;
};

createRoot(document.getElementById("root")!).render(<Root />);
