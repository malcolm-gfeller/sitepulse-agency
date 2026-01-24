import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRightIcon } from '../icons';

const ServiceCard = ({ 
  title, 
  description, 
  variant, 
  isVisible, 
  delay 
}: { 
  title: string, 
  description: string, 
  variant: 'cyan' | 'orange' | 'purple', 
  isVisible: boolean, 
  delay: string 
}) => {
  
  const borderColors = {
    cyan: 'border-r-brand-cyan hover:bg-brand-cyan',
    orange: 'border-r-brand-orange hover:bg-brand-orange',
    purple: 'border-r-brand-purple hover:bg-brand-purple',
  };

  return (
    <div 
      className={`group relative p-8 border-[3px] border-white border-r-[8px] ${borderColors[variant]} transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${delay}`}
    >
      <div className="flex flex-col h-full justify-between gap-6">
        <div className="flex justify-between items-start">
           <h3 className="text-3xl font-bold text-white group-hover:text-black transition-colors duration-300 leading-tight max-w-[80%]">{title}</h3>
           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <ArrowRightIcon className="w-8 h-8 text-black" />
           </div>
        </div>
        <p className="text-lg text-gray-300 group-hover:text-black font-medium transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

const ServiceStages: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black" id="services">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content - Sticky only on Large Screens (lg:) to fix mobile overlap */}
          <div className="lg:w-1/3 relative lg:sticky lg:top-32">
            <span className="block text-white text-sm uppercase font-bold tracking-widest mb-4">Notre Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Une approche complète : de la première idée au clic final.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Nous ne faisons pas que des sites web. Nous construisons des écosystèmes digitaux performants conçus pour convertir.
            </p>
            <div className="flex">
                <Button variant="outline-white" href="#contact">Discutons de votre projet</Button>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <ServiceCard 
              title="Création de Sites Web"
              description="Design moderne, développement rapide et expérience utilisateur fluide."
              variant="cyan"
              isVisible={isVisible}
              delay="delay-0"
            />

            <ServiceCard 
              title="Identité Visuelle"
              description="Logos, chartes graphiques et branding pour marquer les esprits."
              variant="orange"
              isVisible={isVisible}
              delay="delay-100"
            />

            <ServiceCard 
              title="SEO & Performance"
              description="Optimisation pour les moteurs de recherche et visibilité maximale."
              variant="purple"
              isVisible={isVisible}
              delay="delay-200"
            />
             <ServiceCard 
              title="Marketing Digital"
              description="Campagnes publicitaires ciblées et stratégies de contenu."
              variant="cyan"
              isVisible={isVisible}
              delay="delay-300"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStages;