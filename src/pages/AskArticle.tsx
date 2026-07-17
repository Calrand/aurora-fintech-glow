import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Layers, Tag, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Container from '@/components/Container';
import SEO from '@/components/SEO';
import {
  KBreadcrumbs,
  KCard,
  KSection,
  KSocialShare,
  KPrevNext,
} from '@/components/knowledge/KnowledgeUI';
import {
  getAsk,
  getCategory,
  relatedAsk,
  relatedGuides,
  relatedSearches,
  askReadingTime,
  ASK_ARTICLES,
} from '@/data/knowledge';

const AskArticle: React.FC = () => {
  const { slug = '' } = useParams();
  const article = getAsk(slug);
  if (!article) return <Navigate to="/ask" replace />;

  const category = getCategory(article.category);
  const url = `https://squirrelll.ing/ask/${article.slug}`;
  const idx = ASK_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? ASK_ARTICLES[idx - 1] : undefined;
  const next = idx < ASK_ARTICLES.length - 1 ? ASK_ARTICLES[idx + 1] : undefined;

  const continueLearning = relatedAsk(article.slug, article.category, 8);
  const rGuides = relatedGuides(article.slug, article.category, 4);
  const paa = relatedSearches(article, 5);
  const readMin = askReadingTime(article);
  const difficulty = article.difficulty ?? 'Beginner';
  const relatedTopic = continueLearning[0];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.quickAnswer,
    url,
    dateModified: article.updated,
    author: { '@id': 'https://squirrelll.ing/#organization' },
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    mainEntityOfPage: url,
    articleSection: category?.name,
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
    timeRequired: `PT${readMin}M`,
    educationalLevel: difficulty,
    inLanguage: 'en',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://squirrelll.ing/' },
      { '@type': 'ListItem', position: 2, name: 'Ask Squirrelll.ing', item: 'https://squirrelll.ing/ask' },
      ...(category
        ? [{ '@type': 'ListItem', position: 3, name: category.name, item: `https://squirrelll.ing/ask?c=${category.slug}` }]
        : []),
      { '@type': 'ListItem', position: category ? 4 : 3, name: article.title, item: url },
    ],
  };
  const definedTerm = article.definedTerm && {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: article.definedTerm.name,
    description: article.definedTerm.description,
    inDefinedTermSet: 'https://squirrelll.ing/ask',
  };

  const jsonLd = [articleSchema, faqSchema, breadcrumb, definedTerm].filter(Boolean) as Record<
    string,
    unknown
  >[];

  const tocItems = [
    { id: 'quick-answer', label: 'Quick Answer' },
    ...article.sections.map((s, i) => ({ id: `s-${i}`, label: s.heading })),
    { id: 'faqs', label: 'FAQs' },
    ...(article.references?.length ? [{ id: 'refs', label: 'References' }] : []),
    { id: 'continue-learning', label: 'Continue Learning' },
    { id: 'related-searches', label: 'Related Searches' },
  ];

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title={`${article.title} — Ask Squirrelll.ing`}
        description={article.quickAnswer.slice(0, 155)}
        path={`/ask/${article.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-28 pb-16 md:pt-36">
        <Container>
          <KBreadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Ask Squirrelll.ing', to: '/ask' },
              ...(category ? [{ label: category.name, to: `/ask?c=${category.slug}` }] : []),
              { label: article.title },
            ]}
          />

          <article className="mt-6 max-w-3xl">
            {category && (
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-3">
                {category.name}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <div className="text-sm text-white/50 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5"><Clock size={14} />{readMin} min read</span>
                <span className="opacity-40">·</span>
                <span>Updated regularly</span>
              </div>
              <KSocialShare url={url} title={article.title} />
            </div>

            <section id="quick-answer" className="mt-8 p-5 rounded-xl bg-fintech-mint/[0.06] border border-fintech-mint/20">
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-2">
                Quick Answer
              </div>
              <p className="text-white/90 leading-relaxed">{article.quickAnswer}</p>
            </section>

            <section aria-label="At a glance" className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Clock size={11} /> Reading time</div>
                <div className="text-sm text-white/90">{readMin} min</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Layers size={11} /> Difficulty</div>
                <div className="text-sm text-white/90">{difficulty}</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Tag size={11} /> Category</div>
                {category ? (
                  <Link to={`/ask?c=${category.slug}`} className="text-sm text-fintech-mint hover:underline">{category.name}</Link>
                ) : (
                  <div className="text-sm text-white/90">—</div>
                )}
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Search size={11} /> Related topic</div>
                {relatedTopic ? (
                  <Link to={`/ask/${relatedTopic.slug}`} className="text-sm text-fintech-mint hover:underline line-clamp-1">{relatedTopic.title}</Link>
                ) : (
                  <div className="text-sm text-white/90">—</div>
                )}
              </div>
            </section>

            <nav aria-label="Table of contents" className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-xs uppercase tracking-wider text-white/50 mb-2">On this page</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                {tocItems.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-white/70 hover:text-fintech-mint">
                      · {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {article.sections.map((s, i) => (
              <KSection key={i} id={`s-${i}`} title={s.heading}>
                <p>{s.body}</p>
              </KSection>
            ))}

            <KSection id="faqs" title="Frequently Asked Questions">
              <div className="space-y-4">
                {article.faqs.map((f, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="font-semibold text-white">{f.q}</div>
                    <p className="mt-2 text-white/70">{f.a}</p>
                  </div>
                ))}
              </div>
            </KSection>

            {article.references && article.references.length > 0 && (
              <KSection id="refs" title="References">
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  {article.references.map((r, i) => (
                    <li key={i}>
                      {r.url ? (
                        <a href={r.url} target="_blank" rel="noreferrer" className="hover:text-fintech-mint">
                          {r.title}
                        </a>
                      ) : (
                        r.title
                      )}
                    </li>
                  ))}
                </ul>
              </KSection>
            )}

            <section id="continue-learning" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {continueLearning.map((a) => (
                  <KCard key={a.slug} to={`/ask/${a.slug}`} title={a.title} eyebrow="Ask" />
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">Related Money Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rGuides.map((g) => (
                  <KCard key={g.slug} to={`/money-guides/${g.slug}`} title={g.title} eyebrow="Guide" />
                ))}
              </div>
            </section>

            <section id="related-searches" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-2">Related Searches</h2>
              <p className="text-sm text-white/50 mb-4">People also search for</p>
              <ul className="divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
                {continueLearning.slice(0, 5).map((a, i) => (
                  <li key={a.slug}>
                    <Link
                      to={`/ask/${a.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors"
                    >
                      <span className="flex items-center gap-3 text-white/80">
                        <Search size={14} className="text-white/40" />
                        <span>{paa[i] || a.question || a.title}</span>
                      </span>
                      <span className="text-xs text-fintech-mint">Open →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <KPrevNext
              prev={prev && { to: `/ask/${prev.slug}`, title: prev.title }}
              next={next && { to: `/ask/${next.slug}`, title: next.title }}
            />

            <div className="mt-10 text-center">
              <Link to="/ask" className="text-fintech-mint hover:underline">
                ← Back to all questions
              </Link>
            </div>
          </article>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
};

export default AskArticle;
