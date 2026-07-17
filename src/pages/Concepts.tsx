import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KSearch, KCard, KBreadcrumbs } from '@/components/knowledge/KnowledgeUI';
import { CONCEPTS, CATEGORIES, conceptsByCategory } from '@/data/knowledge';

const Concepts: React.FC = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return CONCEPTS;
    const s = q.toLowerCase();
    return CONCEPTS.filter(
      (c) => c.term.toLowerCase().includes(s) || c.shortDefinition.toLowerCase().includes(s) || (c.alsoKnownAs ?? []).some((n) => n.toLowerCase().includes(s)),
    );
  }, [q]);
  const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term));
  const cats = CATEGORIES.filter((c) => c.scopes.includes('concept'));

  const schema = {
    '@context': 'https://schema.org', '@type': 'DefinedTermSet',
    name: 'Squirrelll.ing Financial Concepts',
    url: 'https://squirrelll.ing/concepts',
    hasDefinedTerm: CONCEPTS.map((c) => ({ '@type': 'DefinedTerm', name: c.term, description: c.shortDefinition, url: `https://squirrelll.ing/concepts/${c.slug}` })),
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Financial Concepts — Evergreen Definitions"
        description="Neutral, evergreen definitions of core financial concepts: microfinance, ROSCA, compound interest, emergency fund, and more."
        path="/concepts"
        jsonLd={schema}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <Container>
            <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Concepts' }]} />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Financial <span className="gradient-text">Concepts</span>
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Clear, evergreen definitions of the ideas that shape how money works.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-white/40 mr-1">Browse</span>
                {cats.map((c) => {
                  const count = conceptsByCategory(c.slug).length;
                  if (count === 0) return null;
                  return (
                    <a
                      key={c.slug}
                      href={`/concepts/category/${c.slug}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 hover:text-fintech-mint transition-all text-xs text-white/75"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-white/40">{count}</span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-6">
                <KSearch
                  value={q}
                  onChange={setQ}
                  placeholder="Search concepts..."
                  suggestions={sorted.slice(0, 6).map((c) => ({
                    label: c.term,
                    sublabel: c.shortDefinition,
                    to: `/concepts/${c.slug}`,
                  }))}
                />
              </div>
            </div>
          </Container>
        </section>


        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A–Z Index</h2>
            {sorted.length === 0 ? (
              <p className="text-white/60">No matches.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sorted.map((c) => (
                  <KCard
                    key={c.slug}
                    to={`/concepts/${c.slug}`}
                    title={c.term}
                    description={c.shortDefinition}
                    eyebrow={CATEGORIES.find((x) => x.slug === c.category)?.name}
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

export default Concepts;
