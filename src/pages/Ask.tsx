import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import { KSearch, KCard, KBreadcrumbs } from '@/components/knowledge/KnowledgeUI';
import { ASK_ARTICLES, CATEGORIES, askByCategory } from '@/data/knowledge';
import { Link } from 'react-router-dom';

const EXAMPLES = [
  'What is Squirrellling?',
  'How can I save money?',
  'Can saving $1 a day make a difference?',
  'What is a Savings Pod?',
  'How does the Daily Pool work?',
  'What is microfinance?',
];

const Ask: React.FC = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return ASK_ARTICLES;
    const s = q.toLowerCase();
    return ASK_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(s) ||
        a.question.toLowerCase().includes(s) ||
        a.quickAnswer.toLowerCase().includes(s),
    );
  }, [q]);

  const askCategories = CATEGORIES.filter((c) => c.scope === 'ask' || c.scope === 'both');
  const url = 'https://squirrelll.ing/ask';

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: 'Ask Squirrelll.ing — Financial Questions Answered',
    description: 'A searchable library of clear answers to real financial questions.',
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
        { '@type': 'ListItem', position: 2, name: 'Ask', item: url },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ASK_ARTICLES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://squirrelll.ing/ask/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title="Ask Squirrelll.ing — Answers to Real Financial Questions"
        description="Get clear, simple answers to real financial questions. From micro-savings to community finance, the Daily Pool, Savings Pods, and building better money habits — answered simply."
        path="/ask"
        keywords="financial questions answered, how to save money, what is microfinance, community savings questions, daily pool explained, savings pods explained"
        ogDescription="Clear answers to real financial questions — micro-savings, community finance, Daily Pool, Savings Pods, and money habits explained simply."
        jsonLd={collectionSchema}
      />
      <Navbar />
      <main>
        <section className="pt-28 pb-12 md:pt-36 md:pb-16">
          <Container>
            <KBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Ask Squirrelll.ing' }]} />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <span className="gradient-text">Ask</span> Squirrelll.ing
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Answers to real financial questions, explained simply.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-white/40 mr-1">Browse</span>
                {askCategories.map((c) => {
                  const count = askByCategory(c.slug).length;
                  return (
                    <Link
                      key={c.slug}
                      to={`/ask/category/${c.slug}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 hover:text-fintech-mint transition-all text-xs text-white/75"
                    >
                      <span>{c.name}</span>
                      <span className="text-[10px] text-white/40">{count}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <KSearch
                  value={q}
                  onChange={setQ}
                  suggestions={filtered.slice(0, 6).map((a) => ({
                    label: a.title,
                    sublabel: CATEGORIES.find((c) => c.slug === a.category)?.name,
                    to: `/ask/${a.slug}`,
                  }))}
                />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setQ(ex)}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-fintech-mint hover:border-fintech-mint/40 transition-colors"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>


        <section className="py-8 md:py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {q.trim() ? `Results (${filtered.length})` : 'Popular Questions'}
            </h2>
            {filtered.length === 0 ? (
              <p className="text-white/60">No matches. Try a broader term.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((a) => (
                  <KCard
                    key={a.slug}
                    to={`/ask/${a.slug}`}
                    title={a.title}
                    description={a.quickAnswer.slice(0, 130) + '…'}
                    eyebrow={CATEGORIES.find((c) => c.slug === a.category)?.name}
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

export default Ask;
