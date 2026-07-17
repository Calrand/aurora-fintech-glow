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
        title="Money Guides — Practical Help for Real Financial Challenges"
        description="Practical money guides for real life situations. From living paycheck to paycheck to building emergency savings and passive financial habits — honest guidance for people who need it."
        path="/money-guides"
        keywords="money guides, how to save money, living paycheck to paycheck, emergency savings, passive income, financial habits, money help"
        ogTitle="Money Guides by Squirrelll.ing — Real Help for Real Money Problems"
        ogDescription="Practical guidance for real financial challenges — living paycheck to paycheck, emergency savings, passive income habits, and more."
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
              <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-white/40 mr-1">Browse</span>
                {guideCats.map((c) => {
                  const count = guidesByCategory(c.slug).length;
                  return (
                    <button
                      key={c.slug}
                      onClick={() => setQ(c.name)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 hover:text-fintech-mint transition-all text-xs text-white/75"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-white/40">{count}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6">
                <KSearch
                  value={q}
                  onChange={setQ}
                  placeholder="Describe your situation..."
                  suggestions={filtered.slice(0, 6).map((g) => ({
                    label: g.title,
                    sublabel: CATEGORIES.find((c) => c.slug === g.category)?.name,
                    to: `/money-guides/${g.slug}`,
                  }))}
                />
              </div>
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
