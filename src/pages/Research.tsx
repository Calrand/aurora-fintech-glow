import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KSearch, KCard, KBreadcrumbs } from '@/components/knowledge/KnowledgeUI';
import { RESEARCH, CATEGORIES, researchByCategory } from '@/data/knowledge';

const Research: React.FC = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return RESEARCH;
    const s = q.toLowerCase();
    return RESEARCH.filter((r) => r.title.toLowerCase().includes(s) || r.summary.toLowerCase().includes(s));
  }, [q]);
  const cats = CATEGORIES.filter((c) => c.scopes.includes('research'));
  const url = 'https://squirrelll.ing/research';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url,
    name: 'Research — Squirrelll.ing',
    description: 'Summaries of academic and behavioral finance research on savings, community finance, and money behavior.',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: RESEARCH.map((r, i) => ({
        '@type': 'ListItem', position: i + 1,
        url: `https://squirrelll.ing/research/${r.slug}`, name: r.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Financial Research — What Science Says About Saving & Community Finance"
        description="What academic and behavioral research actually says about saving habits, money psychology, community finance, and micro-savings. Evidence-based insights, explained simply."
        path="/research"
        keywords="financial research, savings psychology, behavioral economics research, community finance research, micro savings research, money habits science"
        ogTitle="Financial Research — Science Behind Saving & Community Finance"
        ogDescription="Academic and behavioral research on saving habits, money psychology, community finance, and micro-savings — explained simply."
        jsonLd={schema}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <Container>
            <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Research' }]} />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <span className="gradient-text">Research</span> Summaries
              </h1>
              <p className="mt-4 text-lg text-white/70">
                What academic and behavioral research actually says about saving, money habits, and community finance.
              </p>
              <div className="mt-8">
                <KSearch value={q} onChange={setQ} placeholder="Search research..." />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cats.map((c) => {
                const count = researchByCategory(c.slug).length;
                return (
                  <a
                    key={c.slug}
                    href={`/research/category/${c.slug}`}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 transition-all"
                  >
                    <div className="text-white font-semibold">{c.name}</div>
                    <div className="text-xs text-white/50 mt-1">{count} paper{count === 1 ? '' : 's'}</div>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {q.trim() ? `Results (${filtered.length})` : 'All Research'}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-white/60">No matches.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((r) => (
                  <KCard
                    key={r.slug}
                    to={`/research/${r.slug}`}
                    title={r.title}
                    description={r.summary.slice(0, 140) + '…'}
                    eyebrow={CATEGORIES.find((c) => c.slug === r.category)?.name}
                  />
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Research;
