import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/what-is-squirrelll/HeroSection';
import ConceptSection from '@/components/what-is-squirrelll/ConceptSection';
import EducationalContent from '@/components/what-is-squirrelll/EducationalContent';


import EcosystemSection from '@/components/what-is-squirrelll/EcosystemSection';
import DownloadSection from '@/components/what-is-squirrelll/DownloadSection';
import SEO from '@/components/SEO';

const WhatIsSquirrelll: React.FC = () => {
  const url = 'https://squirrelll.ing/what-is-squirrelll.ing';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: 'What is Squirrelll.ing? A Guide to Squirrelling, Community Savings, and Micro-Financing',
    description:
      'An educational guide to Squirrelll.ing and the concept of Squirrelling — the long-standing practice of consistent, small-amount saving that underpins community micro-finance.',
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: 'en',
    datePublished: '2025-06-26',
    dateModified: '2026-07-16',
    author: { '@id': 'https://squirrelll.ing/#organization' },
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    image: 'https://squirrelll.ing/uploads/og-image.jpg',
    about: [
      { '@id': `${url}#term-squirrelling` },
      { '@id': 'https://squirrelll.ing/#brand' },
    ],
    keywords: [
      'squirrelling', 'squirrellling', 'community savings', 'micro-finance',
      'daily pool', 'susu', 'tanda', 'ROSCA', 'micro-savings',
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: 'What is Squirrelll.ing?',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    about: { '@id': 'https://squirrelll.ing/#organization' },
    primaryImageOfPage: 'https://squirrelll.ing/uploads/og-image.jpg',
    breadcrumb: { '@id': `${url}#breadcrumb` },
    inLanguage: 'en',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'What is Squirrelll.ing?', item: url },
    ],
  };

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${url}#term-squirrelling`,
    name: 'Squirrelling',
    alternateName: ['Squirrellling', 'Susu', 'Tanda', 'ROSCA'],
    description:
      'Squirrelling is the practice of consistently setting aside small amounts of money — individually or through a community pool — to build financial stability over time. It is the foundation of rotating savings groups such as Susu (West Africa) and Tandas (Mexico).',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Squirrelll.ing Glossary',
      url: 'https://squirrelll.ing/what-is-squirrelll.ing',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Squirrelll.ing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Squirrelll.ing is a community-based micro-fintech platform built around one simple idea: small amounts pooled together daily become something real — for someone today, and for you another day. Members contribute to a shared Daily Pool and can also save toward personal goals with Savings Pods.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Squirrelling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Squirrelling is the long-standing practice of setting aside small amounts of money consistently to build stability and wealth over time. It underpins rotating savings groups worldwide, such as Susu in West Africa and Tandas in Mexico.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Daily Pool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Daily Pool is a shared community pot. Every member contributes a small fixed amount each day, and one member per region is randomly selected to receive the full pool (minus a 12% platform fee) to accelerate their financial goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Squirrelll.ing gambling or crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Squirrelll.ing is a traditional community micro-savings platform running on regulated payment rails. There is no betting, no risking of money, and no cryptocurrency involved.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I withdraw my money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Both your personal savings and any Daily Pool winnings can be withdrawn whenever it suits you.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <SEO
        title="What is Squirrelll.ing? Squirrelling, Community Savings & Micro-Finance Explained"
        description="A definitive guide to Squirrelll.ing and Squirrelling — the concept, history, global practices, and behavioural economics behind consistent community micro-savings."
        path="/what-is-squirrelll.ing"
        type="article"
        jsonLd={[articleSchema, breadcrumbSchema, orgSchema]}
      />
      <Navbar />
      <HeroSection />
      <EducationalContent />
      <ConceptSection />
      <EcosystemSection />
      
      <DownloadSection />
      <FooterSection />
    </div>
  );
};

export default WhatIsSquirrelll;
