import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
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
  getGuide,
  getCategory,
  relatedAsk,
  relatedGuides,
  GUIDES,
} from '@/data/knowledge';

const GuideArticle: React.FC = () => {
  const { slug = '' } = useParams();
  const guide = getGuide(slug);
  if (!guide) return <Navigate to="/guides" replace />;

  const category = getCategory(guide.category);
  const url = `https://squirrelll.ing/guides/${guide.slug}`;
  const idx = GUIDES.findIndex((g) => g.slug === guide.slug);
  const prev = idx > 0 ? GUIDES[idx - 1] : undefined;
  const next = idx < GUIDES.length - 1 ? GUIDES[idx + 1] : undefined;

  const rGuides = relatedGuides(guide.slug, guide.category);
  const rAsk = relatedAsk(guide.slug, guide.category);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: guide.title,
    description: guide.problem,
    url,
    datePublished: guide.updated,
    dateModified: guide.updated,
    author: { '@id': 'https://squirrelll.ing/#organization' },
    publisher: { '@id': 'https://squirrelll.ing/#organization' },
    mainEntityOfPage: url,
    articleSection: category?.name,
    isPartOf: { '@id': 'https://squirrelll.ing/#website' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Money Guides', item: 'https://squirrelll.ing/guides' },
      { '@type': 'ListItem', position: 3, name: guide.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title={`${guide.title} — Squirrelll.ing Money Guides`}
        description={guide.problem.slice(0, 155)}
        path={`/guides/${guide.slug}`}
        type="article"
        jsonLd={[articleSchema, faqSchema, breadcrumb]}
      />
      <Navbar />
      <main className="pt-28 pb-16 md:pt-36">
        <Container>
          <KBreadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Money Guides', to: '/guides' },
              { label: guide.title },

            ]}
          />

          <article className="mt-6 max-w-3xl">
            {category && (
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-3">
                {category.name}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {guide.title}
            </h1>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <div className="text-sm text-white/50">Last updated: {guide.updated}</div>
              <KSocialShare url={url} title={guide.title} />
            </div>

            <section className="mt-8 p-5 rounded-xl bg-fintech-mint/[0.06] border border-fintech-mint/20">
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-2">
                Problem Summary
              </div>
              <p className="text-white/90 leading-relaxed">{guide.problem}</p>
            </section>

            <KSection title="Why This Happens">
              <p>{guide.whyItHappens}</p>
            </KSection>

            <KSection title="Practical Steps">
              <ol className="list-decimal pl-5 space-y-2 text-white/80">
                {guide.practicalSteps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </KSection>

            <KSection title="Long-Term Habits">
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                {guide.longTermHabits.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </KSection>

            <KSection title="Helpful Tools">
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                {guide.helpfulTools.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </KSection>

            {guide.whereSquirrelllHelps && (
              <KSection title="Where Squirrelll.ing Can Help">
                <p>{guide.whereSquirrelllHelps}</p>
              </KSection>
            )}

            <KSection title="Frequently Asked Questions">
              <div className="space-y-4">
                {guide.faqs.map((f, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="font-semibold text-white">{f.q}</div>
                    <p className="mt-2 text-white/70">{f.a}</p>
                  </div>
                ))}
              </div>
            </KSection>

            {guide.references && guide.references.length > 0 && (
              <KSection title="References">
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  {guide.references.map((r, i) => (
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

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Related Money Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rGuides.map((g) => (
                  <KCard key={g.slug} to={`/guides/${g.slug}`} title={g.title} eyebrow="Guide" />
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">Related Ask Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rAsk.map((a) => (
                  <KCard key={a.slug} to={`/ask/${a.slug}`} title={a.title} eyebrow="Ask" />
                ))}
              </div>
            </section>

            <KPrevNext
              prev={prev && { to: `/guides/${prev.slug}`, title: prev.title }}
              next={next && { to: `/guides/${next.slug}`, title: next.title }}
            />

            <div className="mt-10 text-center">
              <Link to="/guides" className="text-fintech-mint hover:underline">
                ← Back to all guides
              </Link>
            </div>
          </article>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
};

export default GuideArticle;
