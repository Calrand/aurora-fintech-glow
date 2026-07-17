import React from 'react';
import Container from '@/components/Container';
import { useTranslation } from 'react-i18next';

const HeroHighlightSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative -mt-8 sm:-mt-10 md:-mt-12 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <Container>
        <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fintech-mint via-fintech-amber to-fintech-mint" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed md:leading-relaxed text-center max-w-4xl mx-auto">
            {t('hero.highlight')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroHighlightSection;
