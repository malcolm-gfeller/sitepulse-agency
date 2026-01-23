import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative border-t border-white/10" id="about">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Plus qu'une agence,<br/>
               <span className="text-brand-purple">votre partenaire digital.</span>
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               Chez <strong>SITEPULSE</strong>, nous croyons que chaque entreprise mérite une présence en ligne qui lui ressemble vraiment. Basée en Suisse, notre équipe fusionne créativité et technologie pour concevoir des solutions web qui captent l'attention et convertissent.
             </p>
             <p className="text-gray-400 text-lg leading-relaxed">
               Nous ne nous contentons pas de livrer un site ; nous vous accompagnons dans la définition de votre stratégie digitale globale pour assurer une croissance pérenne.
             </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-white/10 relative z-10">
                {/* Abstract representation of code/design */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-9xl font-extrabold text-white/5 select-none">SP</div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-cyan/30 rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
