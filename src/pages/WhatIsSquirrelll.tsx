import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/what-is-squirrelll/HeroSection';
import ConceptSection from '@/components/what-is-squirrelll/ConceptSection';
import EducationalContent from '@/components/what-is-squirrelll/EducationalContent';
import FAQSection, { faqs } from '@/components/what-is-squirrelll/FAQSection';

import EcosystemSection from '@/components/what-is-squirrelll/EcosystemSection';
import DownloadSection from '@/components/what-is-squirrelll/DownloadSection';
import SEO from '@/components/SEO';

const WhatIsSquirrelll: React.FC = () => {
  const url = 'https://squirrelll.ing/what-is-squirrelling';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is Squirrelll.ing? A Guide to Squirrelling, Community Savings, and Micro-Financing',
    description:
      'An educational guide to Squirrelll.ing and the concept of Squirrelling — the long-standing practice of consistent, small-amount saving that underpins community micro-finance.',
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'Squirrelll.ing' },
    publisher: {
      '@type': 'Organization',
      name: 'Squirrelll.ing',
      logo: { '@type': 'ImageObject', url: 'https://squirrelll.ing/logo.svg' },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'What is Squirrelll.ing?', item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Squirrelll.ing',
    url: 'https://squirrelll.ing',
    logo: 'https://squirrelll.ing/logo.svg',
    description:
      'A community-focused micro-financing platform inspired by Squirrelling — the practice of setting aside small amounts consistently.',
  };

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="What is Squirrelll.ing? Squirrelling, Community Savings & Micro-Finance Explained"
        description="A definitive guide to Squirrelll.ing and Squirrelling — the concept, history, global practices, and behavioural economics behind consistent community micro-savings."
        path="/what-is-squirrelling"
        type="article"
        jsonLd={[articleSchema, breadcrumbSchema, faqSchema, orgSchema]}
      />
      <Navbar />
      <HeroSection />
      <EducationalContent />
      <ConceptSection />
      <EcosystemSection />
      <FAQSection />
      <DownloadSection />
      <FooterSection />
    </div>
  );
};

export default WhatIsSquirrelll;
