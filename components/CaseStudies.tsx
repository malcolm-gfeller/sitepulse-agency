import React from 'react';
import Button from './Button';
import { ArrowRightIcon } from '../icons';
import nexusLogo from '../images/nexus-white-logo.png';
import ceLogo from '../images/cearchitectesa-logo.png';
import tukassiLogo from '../images/Logo-White-Transparent.png';

const CaseStudyCard = ({ 
  company, 
  stat, 
  variant = 'cyan',
  category,
  link,
  logo
}: { 
  company: string, 
  stat: string, 
  variant?: 'cyan' | 'orange' | 'green' | 'purple',
  category: string,
  link: string,
  logo: string
}) => {
  
  // Color mappings for gradients and borders
  const colors = {
    cyan: {
      border: 'group-hover:border-brand-cyan/50',
      glow: 'from-brand-cyan/20',
      text: 'text-brand-cyan',
      bg: 'hover:shadow-[0_0_50px_-12px_rgba(166,237,221,0.3)]'
    },
    orange: {
      border: 'group-hover:border-brand-orange/50',
      glow: 'from-brand-orange/20',
      text: 'text-brand-orange',
      bg: 'hover:shadow-[0_0_50px_-12px_rgba(252,163,17,0.3)]'
    },
    green: {
      border: 'group-hover:border-brand-green/50',
      glow: 'from-brand-green/20',
      text: 'text-brand-green',
      bg: 'hover:shadow-[0_0_50px_-12px_rgba(165,224,3,0.3)]'
    },
    purple: {
      border: 'group-hover:border-brand-purple/50',
      glow: 'from-brand-purple/20',
      text: 'text-brand-purple',
      bg: 'hover:shadow-[0_0_50px_-12px_rgba(110,41,246,0.3)]'
    },
  };

  const currentStyle = colors[variant];

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative w-full min-h-[500px] flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-sm transition-all duration-500 ${currentStyle.border} ${currentStyle.bg}`}
    >
      {/* Background Decor - Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Background Decor - Gradient Glow */}
      <div className={`absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t ${currentStyle.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`} />

      {/* Top Section: Category Badge */}
      <div className="relative z-10 flex justify-end p-8">
        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Middle Section: Logo */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-8 transition-transform duration-500 group-hover:-translate-y-8">
        <div className="relative">
           {/* Logo Container */}
           <img 
            src={logo} 
            alt={company} 
            className="w-auto h-auto max-h-24 max-w-[200px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter grayscale group-hover:grayscale-0" 
          />
        </div>
      </div>
      
      {/* Bottom Section: Text Content */}
      <div className="relative z-10 p-8 border-t border-white/5 bg-black/20 backdrop-blur-sm group-hover:border-white/10 transition-colors duration-300">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className={`text-2xl font-bold text-white mb-3 leading-tight`}>
            {stat}
          </h4>
          
          <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0">
            <span className={currentStyle.text}>Voir le site</span>
            <ArrowRightIcon className={`w-4 h-4 ${currentStyle.text}`} />
          </div>
        </div>
      </div>
    </a>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="projets">
       {/* Decorative subtle background blob */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Réalisations récentes</h2>
            <p className="text-gray-400 text-lg">Découvrez comment nous aidons nos clients à se démarquer.</p>
          </div>
          <Button variant="outline-white" href="#contact">Démarrer un projet</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard 
            company="Nexus Production" 
            category="Web & Social"
            stat="Studio d'enregistrement : Site web & création de mails professionnels" 
            variant="cyan"
            link="https://nexusproduction.sitepulse.ch/"
            logo={nexusLogo}
          />
          <CaseStudyCard 
            company="CE Architectes" 
            category="Architecture"
            stat="Solutions architecturales simples et percutantes" 
            variant="orange"
            link="https://cearchitectesa.ch/"
            logo={ceLogo}
          />
          <CaseStudyCard 
            company="Tukassi" 
            category="E-commerce"
            stat="Boutique en ligne & Expérience digitale sur mesure" 
            variant="purple"
            link="https://tukassi.ch/"
            logo={tukassiLogo}
          />
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
