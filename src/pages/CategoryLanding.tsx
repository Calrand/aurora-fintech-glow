import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KBreadcrumbs, KCard } from '@/components/knowledge/KnowledgeUI';
import { getCategory, nodesInCategory, SECTIONS, SectionKey } from '@/data/knowledge';

const SECTION_BY_PATH: Record<string, SectionKey> = {
  ask: 'ask',
  'money-guides': 'guide',
  research: 'research',
  concepts: 'concept',
  squirrelll: 'platform',
};

const CategoryLanding: React.FC<{ sectionPathSegment: string }> = ({ sectionPathSegment }) => {
  const { slug = '' } = useParams();
  const section = SECTION_BY_PATH[sectionPathSegment];
  const cat = getCategory(slug);
  if (!section || !cat) return <Navigate to={`/${sectionPathSegment}`} replace />;

  const nodes = nodesInCategory(slug);
  const secLabel = SECTIONS[section].label;
  const secPath = SECTIONS[section].path;
  const url = `https://squirrelll.ing${secPath}/category/${slug}`;

  // Filter to just this section's nodes for the primary list; show cross-section links below.
  const primary =
    section === 'ask' ? nodes.ask :
    section === 'guide' ? nodes.guides :
    section === 'research' ? nodes.research :
    section === 'concept' ? nodes.concepts :
    nodes.platform;

  const total = nodes.ask.length + nodes.guides.length + nodes.research.length + nodes.concepts.length + nodes.platform.length;

  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    url, name: `${cat.name} — ${secLabel}`,
    description: cat.description,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
        { '@type': 'ListItem', position: 2, name: secLabel, item: `https://squirrelll.ing${secPath}` },
        { '@type': 'ListItem', position: 3, name: cat.name, item: url },
      ],
    },
  };

  const renderGroup = (label: string, path: string, items: { slug: string; title?: string; term?: string }[]) => {
    if (items.length === 0) return null;
    return (
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{label}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i: any) => (
            <KCard key={i.slug} to={`${path}/${i.slug}`} title={i.title || i.term} eyebrow={label} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title={`${cat.name} — ${secLabel} · Squirrelll.ing`}
        description={cat.description}
        path={`${secPath}/category/${slug}`}
        jsonLd={schema}
      />
      <Navbar />
      <main className="pt-28 pb-16 md:pt-36">
        <Container>
          <KBreadcrumbs items={[
            { label: 'Home', to: '/' },
            { label: secLabel, to: secPath },
            { label: cat.name },
          ]} />

          <div className="mt-6 max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-fintech-mint mb-3">Category</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{cat.name}</h1>
            <p className="mt-4 text-lg text-white/70">{cat.description}</p>
            <p className="mt-2 text-sm text-white/50">{total} item{total === 1 ? '' : 's'} across the knowledge base.</p>
          </div>

          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">In {secLabel}</h2>
            {primary.length === 0 ? (
              <p className="text-white/60">Nothing here yet in this section.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {primary.map((n: any) => (
                  <KCard key={n.slug} to={`${secPath}/${n.slug}`} title={n.title || n.term} description={(n.quickAnswer || n.summary || n.shortDefinition || n.problem || '').slice(0, 130) + '…'} />
                ))}
              </div>
            )}
          </section>

          {section !== 'ask' && renderGroup('Related Questions', '/ask', nodes.ask)}
          {section !== 'guide' && renderGroup('Related Money Guides', '/money-guides', nodes.guides)}
          {section !== 'concept' && renderGroup('Related Concepts', '/concepts', nodes.concepts as any)}
          {section !== 'research' && renderGroup('Related Research', '/research', nodes.research)}
          {section !== 'platform' && renderGroup('Related Platform Features', '/squirrelll', nodes.platform)}

          <div className="mt-12 text-center">
            <Link to={secPath} className="text-fintech-mint hover:underline">← Back to {secLabel}</Link>
          </div>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
};

export default CategoryLanding;
