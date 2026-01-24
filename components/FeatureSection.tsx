import React from 'react';
import Button from './Button';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative" id="equipe">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 bg-gray-900/50">
              <img 
                src="https://locomotive.agency/wp-content/uploads/2025/07/Tool_AI-Brand-Gap.png?w=600&h=500" 
                alt="AI Brand Gap Analysis Tool" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decor Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-purple/30 rounded-full -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-cyan/20 rounded-full -z-0" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Des outils IA propriétaires, seulement chez <span className="text-brand-cyan">SITEPULSE</span>
            </h2>
            <h4 className="text-xl text-gray-300 mb-12">
              Nous posons constamment des questions et construisons les outils pour y répondre. Voici notre dernière création :
            </h4>

            <div className="flex items-start gap-6">
              <div className="p-3 bg-brand-cyan/10 rounded-full text-brand-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" fill="currentColor">
                  <path d="M15.4438 11.5649L21.9313 17.9999L15.4438 24.4349L17.5558 26.5649L26.1913 17.9999L17.5558 9.43494L15.4438 11.5649Z"></path>
                  <path d="M10.0558 9.43494L7.94385 11.5649L14.4313 17.9999L7.94385 24.4349L10.0558 26.5649L18.6913 17.9999L10.0558 9.43494Z"></path>
                </svg>
              </div>
              <div>
                <h5 className="text-2xl font-bold text-white mb-2">Analyse de Perception de Marque par IA</h5>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  De nombreux outils peuvent vous dire si votre marque est mentionnée. Mais aucun ne vous montre comment l'IA comprend réellement votre marque en se basant sur les informations collectées sur le web — jusqu'à maintenant.
                </p>
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