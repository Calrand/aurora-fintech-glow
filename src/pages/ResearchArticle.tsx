import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import KnowledgeArticle from '@/components/knowledge/KnowledgeArticle';
import { getResearch, getCategory, researchReadingTime, RESEARCH, CATEGORIES } from '@/data/knowledge';

const ResearchArticle: React.FC = () => {
  const { slug = '' } = useParams();
  const r = getResearch(slug);
  if (!r) return <Navigate to="/research" replace />;

  const category = getCategory(r.category);
  const extraChips = (r.categories ?? []).map((s) => getCategory(s)).filter(Boolean) as any[];
  const readMin = researchReadingTime(r);
  const url = `https://squirrelll.ing/research/${r.slug}`;
  const idx = RESEARCH.findIndex((x) => x.slug === r.slug);
  const prev = idx > 0 ? RESEARCH[idx - 1] : undefined;
  const next = idx < RESEARCH.length - 1 ? RESEARCH[idx + 1] : undefined;

  const scholarly = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: r.title,
    abstract: r.summary,
    url,
    dateModified: r.updated,
    inLanguage: 'en',
    citation: r.citations.map((c) => ({
      '@type': 'CreativeWork',
      name: c.title,
      author: c.authors,
      datePublished: c.year?.toString(),
      url: c.url,
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://squirrelll.ing/research' },
      ...(category ? [{ '@type': 'ListItem', position: 3, name: category.name, item: `https://squirrelll.ing/research/category/${category.slug}` }] : []),
      { '@type': 'ListItem', position: category ? 4 : 3, name: r.title, item: url },
    ],
  };

  return (
    <KnowledgeArticle
      section="research"
      slug={r.slug}
      title={r.title}
      category={category}
      extraCategoryChips={extraChips.filter((c) => c && c.slug !== r.category)}
      quickAnswerLabel="Summary"
      quickAnswer={r.summary}
      readMin={readMin}
      difficulty={r.difficulty}
      sections={r.sections}
      keyTakeaways={r.keyTakeaways}
      faqs={r.faqs}
      references={r.citations.map((c) => ({ title: `${c.authors ?? ''} — ${c.title}${c.year ? ` (${c.year})` : ''}`.trim(), url: c.url }))}
      jsonLd={[scholarly, breadcrumb]}
      metaDescription={r.summary}
      node={r}
      prev={prev ? { path: `/research/${prev.slug}`, title: prev.title } : undefined}
      next={next ? { path: `/research/${next.slug}`, title: next.title } : undefined}
    />
  );
};

export default ResearchArticle;
