import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Layers, Tag, CheckCircle2 } from 'lucide-react';
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
  SECTIONS,
  SectionKey,
  Category,
  getRelated,
  sectionPath,
} from '@/data/knowledge';

export type ArticleSectionBlock = { heading: string; body: string };

export interface KnowledgeArticleProps {
  section: SectionKey;
  slug: string;
  title: string;
  h1?: string;
  category?: Category;
  extraCategoryChips?: Category[];
  quickAnswerLabel?: string;
  quickAnswer: string;
  readMin: number;
  difficulty?: string;
  formatLabel?: string;
  sections: ArticleSectionBlock[];
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
  references?: { title: string; url?: string }[];
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
  metaDescription: string;
  node: {
    slug: string;
    title: string;
    category: string;
    categories?: string[];
    related?: { section: SectionKey; slug: string }[];
    keyTakeaways?: string[];
  };
  prev?: { path: string; title: string };
  next?: { path: string; title: string };
}

const KnowledgeArticle: React.FC<KnowledgeArticleProps> = ({
  section,
  slug,
  title,
  h1,
  category,
  extraCategoryChips,
  quickAnswerLabel = 'Quick Answer',
  quickAnswer,
  readMin,
  difficulty,
  formatLabel,
  sections,
  keyTakeaways,
  faqs,
  references,
  jsonLd,
  metaDescription,
  node,
  prev,
  next,
}) => {
  const path = sectionPath(section, slug);
  const url = `https://squirrelll.ing${path}`;
  const related = getRelated(node as any, section);
  const displayH1 = h1 ?? title;

  const tocItems = [
    { id: 'quick-answer', label: quickAnswerLabel },
    ...sections.map((s, i) => ({ id: `s-${i}`, label: s.heading })),
    ...(keyTakeaways?.length ? [{ id: 'takeaways', label: 'Key Takeaways' }] : []),
    ...(faqs?.length ? [{ id: 'faqs', label: 'FAQs' }] : []),
    ...(references?.length ? [{ id: 'refs', label: 'References' }] : []),
    { id: 'continue-learning', label: 'Continue Learning' },
  ];

  return (
    <div className="min-h-screen bg-fintech-dark">
      <SEO
        title={`${title} — ${SECTIONS[section].label} · Squirrelll.ing`}
        description={metaDescription.slice(0, 155)}
        path={path}
        type="article"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-28 pb-16 md:pt-36">
        <Container>
          <KBreadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: SECTIONS[section].label, to: SECTIONS[section].path },
              ...(category ? [{ label: category.name, to: `${SECTIONS[section].path}/category/${category.slug}` }] : []),
              { label: title },
            ]}
          />

          <article className="mt-6 max-w-3xl">
            {category && (
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-3">
                {category.name}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {displayH1}
            </h1>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <div className="text-sm text-white/50 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5"><Clock size={14} />{readMin} min read</span>
                <span className="opacity-40">·</span>
                <span>Updated regularly</span>
              </div>
              <KSocialShare url={url} title={title} />
            </div>

            <section id="quick-answer" className="mt-8 p-5 rounded-xl bg-fintech-mint/[0.06] border border-fintech-mint/20 scroll-mt-24">
              <div className="text-xs uppercase tracking-wider text-fintech-mint mb-2">
                {quickAnswerLabel}
              </div>
              <p className="text-white/90 leading-relaxed">{quickAnswer}</p>
            </section>

            <section aria-label="At a glance" className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Clock size={11} /> Reading time</div>
                <div className="text-sm text-white/90">{readMin} min</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Layers size={11} /> {difficulty ? 'Difficulty' : 'Format'}</div>
                <div className="text-sm text-white/90">{difficulty ?? formatLabel ?? SECTIONS[section].label}</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Tag size={11} /> Category</div>
                {category ? (
                  <Link to={`${SECTIONS[section].path}/category/${category.slug}`} className="text-sm text-fintech-mint hover:underline">{category.name}</Link>
                ) : (
                  <div className="text-sm text-white/90">—</div>
                )}
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Layers size={11} /> Section</div>
                <Link to={SECTIONS[section].path} className="text-sm text-fintech-mint hover:underline">{SECTIONS[section].label}</Link>
              </div>
            </section>

            {extraCategoryChips && extraCategoryChips.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {extraCategoryChips.map((c) => (
                  <Link
                    key={c.slug}
                    to={`${SECTIONS[section].path}/category/${c.slug}`}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-fintech-mint hover:border-fintech-mint/40 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

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

            {sections.map((s, i) => (
              <KSection key={i} id={`s-${i}`} title={s.heading}>
                <p>{s.body}</p>
              </KSection>
            ))}

            {keyTakeaways && keyTakeaways.length > 0 && (
              <KSection id="takeaways" title="Key Takeaways">
                <ul className="space-y-2">
                  {keyTakeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/85">
                      <CheckCircle2 size={16} className="text-fintech-mint mt-1 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </KSection>
            )}

            {faqs && faqs.length > 0 && (
              <KSection id="faqs" title="Frequently Asked Questions">
                <div className="space-y-4">
                  {faqs.map((f, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="font-semibold text-white">{f.q}</div>
                      <p className="mt-2 text-white/70">{f.a}</p>
                    </div>
                  ))}
                </div>
              </KSection>
            )}

            {references && references.length > 0 && (
              <KSection id="refs" title="References">
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  {references.map((r, i) => (
                    <li key={i}>
                      {r.url ? (
                        <a href={r.url} target="_blank" rel="noreferrer" className="hover:text-fintech-mint">{r.title}</a>
                      ) : (
                        r.title
                      )}
                    </li>
                  ))}
                </ul>
              </KSection>
            )}

            <section id="continue-learning" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-2">Continue Learning</h2>
              <p className="text-sm text-white/50 mb-6">Related content from across the Squirrelll.ing knowledge base.</p>

              {related.ask.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white/90 mt-6 mb-3">Related Questions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.ask.map((a) => <KCard key={a.slug} to={`/ask/${a.slug}`} title={a.title} eyebrow="Ask" />)}
                  </div>
                </>
              )}
              {related.guides.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white/90 mt-8 mb-3">Related Money Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.guides.map((g) => <KCard key={g.slug} to={`/money-guides/${g.slug}`} title={g.title} eyebrow="Guide" />)}
                  </div>
                </>
              )}
              {related.concepts.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white/90 mt-8 mb-3">Related Concepts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.concepts.map((c) => <KCard key={c.slug} to={`/concepts/${c.slug}`} title={c.title} eyebrow="Concept" />)}
                  </div>
                </>
              )}
              {related.research.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white/90 mt-8 mb-3">Related Research</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.research.map((r) => <KCard key={r.slug} to={`/research/${r.slug}`} title={r.title} eyebrow="Research" />)}
                  </div>
                </>
              )}
              {related.platform.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white/90 mt-8 mb-3">Related Platform Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.platform.map((p) => <KCard key={p.slug} to={`/about-squirrelll.ing/${p.slug}`} title={p.title} eyebrow="Platform" />)}
                  </div>
                </>
              )}
            </section>

            {(prev || next) && (
              <KPrevNext
                prev={prev && { to: prev.path, title: prev.title }}
                next={next && { to: next.path, title: next.title }}
              />
            )}

            <div className="mt-10 text-center">
              <Link to={SECTIONS[section].path} className="text-fintech-mint hover:underline">
                ← Back to {SECTIONS[section].label}
              </Link>
            </div>
          </article>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
};

export default KnowledgeArticle;
