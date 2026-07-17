import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Search, Share2, Twitter, Facebook, Link2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const KBreadcrumbs: React.FC<{ items: { label: string; to?: string }[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-white/50">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={14} className="opacity-50" />}
          {it.to ? (
            <Link to={it.to} className="hover:text-fintech-mint transition-colors">
              {it.label}
            </Link>
          ) : (
            <span className="text-white/80">{it.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export type KSuggestion = { label: string; sublabel?: string; to?: string; onSelect?: () => void };

export const KSearch: React.FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suggestions?: KSuggestion[];
  maxSuggestions?: number;
}> = ({ value, onChange, placeholder = 'Ask a financial question...', suggestions = [], maxSuggestions = 6 }) => {
  const [focused, setFocused] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const navigate = useNavigate();
  const items = value.trim() ? suggestions.slice(0, maxSuggestions) : [];
  const open = focused && items.length > 0;

  React.useEffect(() => setActive(0), [value]);

  const pick = (s: KSuggestion) => {
    if (s.onSelect) s.onSelect();
    else if (s.to) navigate(s.to);
    setFocused(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search size={20} className="absolute left-4 top-[26px] -translate-y-1/2 text-white/40 z-10" />
      <input
        type="search"
        role="searchbox"
        aria-label="Search knowledge base"
        aria-autocomplete="list"
        aria-expanded={open}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)}
        onKeyDown={(e) => {
          if (!open) return;
          if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => (a + 1) % items.length); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => (a - 1 + items.length) % items.length); }
          else if (e.key === 'Enter') { e.preventDefault(); pick(items[active]); }
          else if (e.key === 'Escape') { setFocused(false); }
        }}
        placeholder={placeholder}
        className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-fintech-mint/60 focus:outline-none focus:ring-2 focus:ring-fintech-mint/20 text-white placeholder:text-white/40 text-base transition-all"
      />
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 z-20 max-h-80 overflow-auto rounded-xl bg-fintech-dark/95 backdrop-blur border border-white/10 shadow-xl text-left"
        >
          {items.map((s, i) => (
            <li
              key={i}
              role="option"
              aria-selected={i === active}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              onMouseEnter={() => setActive(i)}
              className={`px-4 py-2.5 cursor-pointer flex flex-col gap-0.5 ${i === active ? 'bg-fintech-mint/10 text-fintech-mint' : 'text-white/80 hover:bg-white/5'}`}
            >
              <span className="text-sm font-medium truncate">{s.label}</span>
              {s.sublabel && <span className="text-xs text-white/50 truncate">{s.sublabel}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const KCard: React.FC<{
  to: string;
  title: string;
  description?: string;
  eyebrow?: string;
}> = ({ to, title, description, eyebrow }) => (
  <Link
    to={to}
    className="group block p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 hover:bg-white/[0.06] transition-all"
  >
    {eyebrow && (
      <div className="text-xs uppercase tracking-wider text-fintech-mint/80 mb-2">{eyebrow}</div>
    )}
    <h3 className="text-base font-semibold text-white group-hover:text-fintech-mint transition-colors leading-snug">
      {title}
    </h3>
    {description && <p className="mt-2 text-sm text-white/60 leading-relaxed">{description}</p>}
    <div className="mt-3 inline-flex items-center gap-1 text-sm text-white/50 group-hover:text-fintech-mint transition-colors">
      Read <ChevronRight size={14} />
    </div>
  </Link>
);

export const KSection: React.FC<{ title: string; children: React.ReactNode; id?: string }> = ({
  title,
  children,
  id,
}) => (
  <section id={id} className="mt-10 scroll-mt-24">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
    <div className="text-white/80 leading-relaxed space-y-3">{children}</div>
  </section>
);

export const KSocialShare: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  const share = (kind: 'twitter' | 'facebook' | 'copy') => {
    if (kind === 'copy') {
      navigator.clipboard.writeText(url);
      toast({ title: 'Link copied' });
      return;
    }
    const targets = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    window.open(targets[kind], '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="flex items-center gap-2 text-sm text-white/60">
      <Share2 size={16} />
      <span className="mr-2">Share</span>
      <button onClick={() => share('twitter')} aria-label="Share on X" className="p-2 rounded-lg hover:bg-white/10">
        <Twitter size={16} />
      </button>
      <button onClick={() => share('facebook')} aria-label="Share on Facebook" className="p-2 rounded-lg hover:bg-white/10">
        <Facebook size={16} />
      </button>
      <button onClick={() => share('copy')} aria-label="Copy link" className="p-2 rounded-lg hover:bg-white/10">
        <Link2 size={16} />
      </button>
    </div>
  );
};

export const KPrevNext: React.FC<{
  prev?: { to: string; title: string };
  next?: { to: string; title: string };
}> = ({ prev, next }) => (
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
    {prev ? (
      <Link to={prev.to} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 transition-all">
        <div className="text-xs uppercase text-white/40 mb-1">Previous</div>
        <div className="text-white font-medium">{prev.title}</div>
      </Link>
    ) : <div />}
    {next ? (
      <Link to={next.to} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fintech-mint/40 transition-all md:text-right">
        <div className="text-xs uppercase text-white/40 mb-1">Next</div>
        <div className="text-white font-medium">{next.title}</div>
      </Link>
    ) : <div />}
  </div>
);
