import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import WhatIsSquirrelll from './pages/WhatIsSquirrelll';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PaymentSecurity from './pages/PaymentSecurity';
import VerifyEmail from './pages/VerifyEmail';
import DeleteAccount from './pages/DeleteAccount';
import BudgetCalculator from './pages/BudgetCalculator';
import RoundUpCalculator from './pages/RoundUpCalculator';
import About from './pages/About';
import Download from './pages/Download';
import Ask from './pages/Ask';
import AskArticle from './pages/AskArticle';
import Guides from './pages/Guides';
import GuideArticle from './pages/GuideArticle';
import Research from './pages/Research';
import ResearchArticle from './pages/ResearchArticle';
import Concepts from './pages/Concepts';
import ConceptArticle from './pages/ConceptArticle';
import Platform from './pages/Platform';
import PlatformArticle from './pages/PlatformArticle';
import CategoryLanding from './pages/CategoryLanding';
import SearchPage from './pages/SearchPage';
import CookieConsent from './components/CookieConsent';
import TestPage from './pages/TestPage';

const queryClient = new QueryClient();



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-is-squirrelll.ing" element={<WhatIsSquirrelll />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/payment-security" element={<PaymentSecurity />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/budget-calculator" element={<BudgetCalculator />} />
          <Route path="/round-up-calculator" element={<RoundUpCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/ask/category/:slug" element={<CategoryLanding sectionPathSegment="ask" />} />
          <Route path="/ask/:slug" element={<AskArticle />} />
          <Route path="/money-guides" element={<Guides />} />
          <Route path="/money-guides/category/:slug" element={<CategoryLanding sectionPathSegment="money-guides" />} />
          <Route path="/money-guides/:slug" element={<GuideArticle />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/category/:slug" element={<CategoryLanding sectionPathSegment="research" />} />
          <Route path="/research/:slug" element={<ResearchArticle />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/concepts/category/:slug" element={<CategoryLanding sectionPathSegment="concepts" />} />
          <Route path="/concepts/:slug" element={<ConceptArticle />} />
          <Route path="/about-squirrelll.ing" element={<Platform />} />
          <Route path="/about-squirrelll.ing/category/:slug" element={<CategoryLanding sectionPathSegment="about-squirrelll.ing" />} />
          <Route path="/about-squirrelll.ing/:slug" element={<PlatformArticle />} />
          <Route path="/search" element={<SearchPage />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
