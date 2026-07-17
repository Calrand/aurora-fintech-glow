import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KSearch, KCard, KBreadcrumbs } from '@/components/knowledge/KnowledgeUI';
import { PLATFORM_DOCS, CATEGORIES, platformByCategory } from '@/data/knowledge';

const Platform: React.FC = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return PLATFORM_DOCS;
    const s = q.toLowerCase();
    return PLATFORM_DOCS.filter((p) => p.title.toLowerCase().includes(s) || p.quickAnswer.toLowerCase().includes(s));
  }, [q]);
  const cats = CATEGORIES.filter((c) => c.scopes.includes('platform'));

  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    url: 'https://squirrelll.ing/squirrelll',
    name: 'Squirrelll.ing — Platform Knowledge',
    description: 'Everything about the Squirrelll.ing platform: Daily Pool, Savings Pods, fees, security.',
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Squirrelll.ing Platform — How Everything Works"
        description="Platform documentation: Daily Pool, Savings Pods, fees, and security — explained clearly."
        path="/about-squirrelll.ing"
        jsonLd={schema}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <Container>
            <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Squirrelll.ing' }]} />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <span className="gradient-text">Squirrelll.ing</span> Platform
              </h1>
              <p className="mt-4 text-lg text-white/70">
                How every feature works — from the Daily Pool to Savings Pods to fees.
              </p>
              <div className="mt-8">
                <KSearch value={q} onChange={setQ} placeholder="Search platform docs..." />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Browse by Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cats.map((c) => {
                const count = platformByCategory(c.slug).length;
                if (count === 0) return null;
                return (
                  <a
                    key={c.slug}
                    href={`/about-squirrelll.ing/category/${c.slug}`}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 transition-all"
                  >
                    <div className="text-white font-semibold">{c.name}</div>
                    <div className="text-xs text-white/50 mt-1">{count} doc{count === 1 ? '' : 's'}</div>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {q.trim() ? `Results (${filtered.length})` : 'All Documentation'}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-white/60">No matches.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((p) => (
                  <KCard
                    key={p.slug}
                    to={`/about-squirrelll.ing/${p.slug}`}
                    title={p.title}
                    description={p.quickAnswer.slice(0, 140) + '…'}
                    eyebrow={CATEGORIES.find((c) => c.slug === p.category)?.name}
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

export default Platform;
