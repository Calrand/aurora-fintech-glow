import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import KnowledgeArticle from '@/components/knowledge/KnowledgeArticle';
import { getConcept, getCategory, conceptReadingTime, CONCEPTS, CATEGORIES } from '@/data/knowledge';

const ConceptArticle: React.FC = () => {
  const { slug = '' } = useParams();
  const c = getConcept(slug);
  if (!c) return <Navigate to="/concepts" replace />;

  const category = getCategory(c.category);
  const extraChips = (c.categories ?? []).map((s) => getCategory(s)).filter(Boolean) as any[];
  const readMin = conceptReadingTime(c);
  const url = `https://squirrelll.ing/concepts/${c.slug}`;
  const idx = CONCEPTS.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? CONCEPTS[idx - 1] : undefined;
  const next = idx < CONCEPTS.length - 1 ? CONCEPTS[idx + 1] : undefined;

  const sections = [
    { heading: 'Definition', body: c.longDefinition },
    ...(c.examples && c.examples.length ? [{ heading: 'Examples', body: c.examples.map((e) => `• ${e}`).join('\n') }] : []),
    ...(c.sections ?? []),
    ...(c.alsoKnownAs && c.alsoKnownAs.length ? [{ heading: 'Also Known As', body: c.alsoKnownAs.join(' · ') }] : []),
  ];

  const definedTerm = {
    '@context': 'https://schema.org', '@type': 'DefinedTerm',
    name: c.term, description: c.shortDefinition, url,
    inDefinedTermSet: 'https://squirrelll.ing/concepts',
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'Concepts', item: 'https://squirrelll.ing/concepts' },
      ...(category ? [{ '@type': 'ListItem', position: 3, name: category.name, item: `https://squirrelll.ing/concepts/category/${category.slug}` }] : []),
      { '@type': 'ListItem', position: category ? 4 : 3, name: c.term, item: url },
    ],
  };

  return (
    <KnowledgeArticle
      section="concept"
      slug={c.slug}
      title={c.term}
      h1={c.term}
      category={category}
      extraCategoryChips={extraChips.filter((x) => x && x.slug !== c.category)}
      quickAnswerLabel="Definition"
      quickAnswer={c.shortDefinition}
      readMin={readMin}
      formatLabel="Concept"
      sections={sections}
      keyTakeaways={c.keyTakeaways}
      faqs={c.faqs}
      references={c.references}
      jsonLd={[definedTerm, breadcrumb]}
      metaDescription={c.shortDefinition}
      node={c}
      prev={prev ? { path: `/concepts/${prev.slug}`, title: prev.term } : undefined}
      next={next ? { path: `/concepts/${next.slug}`, title: next.term } : undefined}
    />
  );
};

export default ConceptArticle;
