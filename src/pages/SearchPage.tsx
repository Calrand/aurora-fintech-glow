import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KBreadcrumbs, KSearch, KCard } from '@/components/knowledge/KnowledgeUI';
import { searchAll, SECTIONS, SectionKey } from '@/data/knowledge';

const SearchPage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') ?? '';
  const [q, setQ] = useState(initial);

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (q) next.set('q', q); else next.delete('q');
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const results = useMemo(() => searchAll(q), [q]);
  const total = results.ask.length + results.guide.length + results.research.length + results.concept.length + results.platform.length + results.categories.length;

  const groups: { key: SectionKey; items: typeof results.ask }[] = [
    { key: 'ask', items: results.ask },
    { key: 'guide', items: results.guide },
    { key: 'concept', items: results.concept },
    { key: 'research', items: results.research },
    { key: 'platform', items: results.platform },
  ];

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Search — Squirrelll.ing Knowledge Base"
        description="Search across questions, guides, concepts, research, and platform documentation."
        path="/search"
        noindex
      />
      <Navbar />
      <main className="pt-28 pb-16 md:pt-36">
        <Container>
          <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Search the knowledge base</h1>
            <p className="mt-3 text-white/60">Questions, guides, concepts, research, and platform docs — one search.</p>
            <div className="mt-6">
              <KSearch value={q} onChange={setQ} placeholder="Search anything..." />
            </div>
            {q && <p className="mt-4 text-sm text-white/50">{total} result{total === 1 ? '' : 's'} for "{q}"</p>}
          </div>

          {q && total === 0 && (
            <p className="mt-12 text-center text-white/60">No matches. Try a broader term.</p>
          )}

          {q && groups.map(({ key, items }) => items.length > 0 && (
            <section key={key} className="mt-12">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">{SECTIONS[key].label}</h2>
                <Link to={SECTIONS[key].path} className="text-sm text-fintech-mint hover:underline">Browse all →</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((r) => (
                  <KCard key={`${key}-${r.slug}`} to={`${SECTIONS[key].path}/${r.slug}`} title={r.title} description={r.snippet} eyebrow={SECTIONS[key].label} />
                ))}
              </div>
            </section>
          ))}

          {q && results.categories.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {results.categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/ask/category/${c.slug}`}
                    className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-fintech-mint hover:border-fintech-mint/40 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
      <FooterSection />
    </div>
  );
};

export default SearchPage;
