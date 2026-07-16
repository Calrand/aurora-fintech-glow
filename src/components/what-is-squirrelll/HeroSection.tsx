import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fintech-mint/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">What is Squirrelll.ing?</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What is Squirrelll.ing?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Squirrelll.ing is a community-focused micro-financing platform inspired by
            <em> Squirrelling</em> — the long-standing human practice of consistently setting
            aside small resources for future needs and opportunities.
          </p>
          <Link
            to="/"
            className="inline-block bg-fintech-mint text-fintech-dark font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Explore the App
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
