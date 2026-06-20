import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Coins, Share2, TrendingUp, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

type Frequency = 'daily' | 'weekly' | 'monthly';

const RoundUpCalculator: React.FC = () => {
  const [purchases, setPurchases] = useState('10');
  const [avgRoundUp, setAvgRoundUp] = useState('0.42');
  const [frequency, setFrequency] = useState<Frequency>('daily');
  const [apy, setApy] = useState('4');
  const [years, setYears] = useState('5');

  const results = useMemo(() => {
    const n = Number(purchases) || 0;
    const r = Number(avgRoundUp) || 0;
    const perEvent = n * r;
    const perYear =
      frequency === 'daily'
        ? perEvent * 365
        : frequency === 'weekly'
        ? perEvent * 52
        : perEvent * 12;

    const monthly = perYear / 12;
    const rate = (Number(apy) || 0) / 100;
    const y = Number(years) || 0;

    // Future value of a monthly annuity with monthly compounding
    const i = rate / 12;
    const months = y * 12;
    const fv =
      i === 0
        ? monthly * months
        : monthly * ((Math.pow(1 + i, months) - 1) / i);

    const principal = monthly * months;
    const interest = fv - principal;

    return {
      perYear,
      monthly,
      fv,
      principal,
      interest,
    };
  }, [purchases, avgRoundUp, frequency, apy, years]);

  const fmt = (v: number) =>
    v.toLocaleString(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

  const handleShare = async () => {
    const text = `I could save ${fmt(results.fv)} in ${years} years just by rounding up spare change with Squirrelll.ing 🐿️`;
    const url = 'https://squirrelll.ing/round-up-calculator';
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Round-Up Savings Calculator', text, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast.success('Copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-fintech-dark text-white">
      <Helmet>
        <title>Round-Up Savings Calculator | Squirrelll.ing</title>
        <meta
          name="description"
          content="See how much spare change you could save by rounding up every purchase. Free round-up savings calculator with compound growth projection."
        />
        <link rel="canonical" href="https://squirrelll.ing/round-up-calculator" />
        <meta property="og:title" content="Round-Up Savings Calculator" />
        <meta
          property="og:description"
          content="See how much spare change you could save by rounding up every purchase."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Round-Up Savings Calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description:
              'Calculate how much you could save by rounding up every purchase to the nearest dollar.',
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[120px] -z-10" />

        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 mb-6">
              <Coins size={18} />
              Free Tool
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Round-Up Savings Calculator</span>
            </h1>
            <p className="text-lg text-white/75">
              See how spare change adds up. Round up every purchase to the nearest dollar
              and watch your savings grow.
            </p>
          </header>

          <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Inputs */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 space-y-5">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="text-fintech-mint" size={20} />
                Your spending
              </h2>

              <div className="space-y-2">
                <Label htmlFor="purchases">Purchases per {frequency.replace('ly', '')}</Label>
                <Input
                  id="purchases"
                  type="number"
                  min="0"
                  value={purchases}
                  onChange={(e) => setPurchases(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roundup">Average round-up (USD)</Label>
                <Input
                  id="roundup"
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={avgRoundUp}
                  onChange={(e) => setAvgRoundUp(e.target.value)}
                />
                <p className="text-xs text-white/50">
                  Most cards average around $0.40–$0.55 per swipe.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Frequency</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(['daily', 'weekly', 'monthly'] as Frequency[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`py-2 rounded-lg text-sm border transition-colors capitalize ${
                        frequency === f
                          ? 'border-fintech-mint bg-fintech-mint/10 text-fintech-mint'
                          : 'border-white/10 hover:border-white/30 text-white/70'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apy">Annual yield (%)</Label>
                  <Input
                    id="apy"
                    type="number"
                    step="0.1"
                    min="0"
                    value={apy}
                    onChange={(e) => setApy(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="years">Years</Label>
                  <Input
                    id="years"
                    type="number"
                    min="1"
                    max="50"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-3xl border border-fintech-mint/30 bg-gradient-to-br from-fintech-mint/10 to-fintech-amber/5 p-6 md:p-8 flex flex-col">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <TrendingUp className="text-fintech-amber" size={20} />
                Your projection
              </h2>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="text-sm text-white/60">You'd save per month</p>
                  <p className="text-3xl font-bold gradient-text">
                    {fmt(results.monthly)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/60">Per year</p>
                  <p className="text-2xl font-semibold">{fmt(results.perYear)}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/60">In {years} years, with {apy}% APY</p>
                  <p className="text-4xl md:text-5xl font-bold gradient-text">
                    {fmt(results.fv)}
                  </p>
                  <p className="text-xs text-white/50 mt-2">
                    {fmt(results.principal)} saved + {fmt(results.interest)} in compound growth
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleShare}
                  className="w-full bg-gradient-to-r from-fintech-mint to-fintech-amber text-fintech-darkBlue hover:opacity-90 gap-2"
                >
                  <Share2 size={16} />
                  Share my results
                </Button>
                <Link to="/#waitlist" className="block">
                  <Button variant="outline" className="w-full border-fintech-mint text-fintech-mint hover:bg-fintech-mint/10">
                    Join the Squirrelll.ing waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto mt-16 prose prose-invert">
            <h2 className="text-2xl font-bold mb-4">How round-up saving works</h2>
            <p className="text-white/70">
              Every time you buy something, the purchase is rounded up to the nearest
              dollar and the spare change goes into your savings. A $3.40 coffee
              becomes $4.00 — and that extra $0.60 quietly stacks up. Over years,
              compound interest does the rest.
            </p>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default RoundUpCalculator;
