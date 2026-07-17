import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import KnowledgeArticle from '@/components/knowledge/KnowledgeArticle';
import { getPlatformDoc, getCategory, platformReadingTime, PLATFORM_DOCS } from '@/data/knowledge';

const PlatformArticle: React.FC = () => {
  const { slug = '' } = useParams();
  const p = getPlatformDoc(slug);
  if (!p) return <Navigate to="/about-squirrelll.ing" replace />;

  const category = getCategory(p.category);
  const extraChips = (p.categories ?? []).map((s) => getCategory(s)).filter(Boolean) as any[];
  const readMin = platformReadingTime(p);
  const url = `https://squirrelll.ing/about-squirrelll.ing/${p.slug}`;
  const idx = PLATFORM_DOCS.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? PLATFORM_DOCS[idx - 1] : undefined;
  const next = idx < PLATFORM_DOCS.length - 1 ? PLATFORM_DOCS[idx + 1] : undefined;

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'TechArticle',
    headline: p.title, description: p.quickAnswer, url,
    dateModified: p.updated, inLanguage: 'en',
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
  };
  const faqSchema = p.faqs && p.faqs.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'Squirrelll.ing', item: 'https://squirrelll.ing/about-squirrelll.ing' },
      ...(category ? [{ '@type': 'ListItem', position: 3, name: category.name, item: `https://squirrelll.ing/about-squirrelll.ing/category/${category.slug}` }] : []),
      { '@type': 'ListItem', position: category ? 4 : 3, name: p.title, item: url },
    ],
  };

  return (
    <KnowledgeArticle
      section="platform"
      slug={p.slug}
      title={p.title}
      category={category}
      extraCategoryChips={extraChips.filter((x) => x && x.slug !== p.category)}
      quickAnswer={p.quickAnswer}
      readMin={readMin}
      formatLabel="Platform doc"
      sections={p.sections}
      keyTakeaways={p.keyTakeaways}
      faqs={p.faqs}
      jsonLd={[articleSchema, ...(faqSchema ? [faqSchema] : []), breadcrumb]}
      metaDescription={p.quickAnswer}
      node={p}
      prev={prev ? { path: `/about-squirrelll.ing/${prev.slug}`, title: prev.title } : undefined}
      next={next ? { path: `/about-squirrelll.ing/${next.slug}`, title: next.title } : undefined}
    />
  );
};

export default PlatformArticle;
