import React from 'react';
import Button from './Button';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative" id="equipe">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 bg-gray-900/50">
              <img src="https://locomotive.agency/wp-content/uploads/2025/07/Tool_AI-Brand-Gap.png?w=600&h=500" alt="AI Brand Gap Analysis Tool" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6"> Des outils IA propriétaires, seulement chez <span className="text-brand-cyan">SITEPULSE</span> </h2>
            <div className="flex items-start gap-6">
              <div>
                <h5 className="text-2xl font-bold text-white mb-2">Analyse de Perception de Marque par IA</h5>
                <p className="text-gray-400 text-lg leading-relaxed mb-8"> De nombreux outils peuvent vous dire si votre marque est mentionnée. Mais aucun ne vous montre comment l'IA comprend réellement votre marque. </p>
                <Button variant="cyan" href="#contact">Essayez l'outil</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
