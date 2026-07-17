import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KSearch, KCard, KBreadcrumbs } from '@/components/knowledge/KnowledgeUI';
import { GUIDES, CATEGORIES, guidesByCategory } from '@/data/knowledge';

const Guides: React.FC = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return GUIDES;
    const s = q.toLowerCase();
    return GUIDES.filter(
      (g) => g.title.toLowerCase().includes(s) || g.problem.toLowerCase().includes(s),
    );
  }, [q]);

  const guideCats = CATEGORIES.filter((c) => c.scope === 'guide' || c.scope === 'both');
  const url = 'https://squirrelll.ing/money-guides';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: 'Money Guides — Squirrelll.ing',
    description: 'Practical, evergreen guides for real-life financial challenges.',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
        { '@type': 'ListItem', position: 2, name: 'Money Guides', item: url },

      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: GUIDES.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://squirrelll.ing/money-guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Money Guides — Practical Help for Real Money Problems"
        description="Evergreen, practical guidance for real-life financial challenges: broke, paycheck-to-paycheck, emergency savings, and better money habits."
        path="/money-guides"
        jsonLd={schema}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <Container>
            <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Money Guides' }]} />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                How can we <span className="gradient-text">help today?</span>
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Practical solutions to common money situations — pick the one that sounds like you.
              </p>
              <div className="mt-8">
                <KSearch value={q} onChange={setQ} placeholder="Describe your situation..." />
              </div>
            </div>

          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {guideCats.map((c) => {
                const count = guidesByCategory(c.slug).length;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setQ(c.name)}
                    className="text-left p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 transition-all"
                  >
                    <div className="text-white font-semibold">{c.name}</div>
                    <div className="text-xs text-white/50 mt-1">{count} guide{count === 1 ? '' : 's'}</div>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {q.trim() ? `Results (${filtered.length})` : 'All Situations'}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-white/60">No matches. Try a broader term.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((g) => (
                  <KCard
                    key={g.slug}
                    to={`/money-guides/${g.slug}`}
                    title={g.title}
                    description={g.problem.slice(0, 140) + '…'}
                    eyebrow={CATEGORIES.find((c) => c.slug === g.category)?.name}
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

export default Guides;
