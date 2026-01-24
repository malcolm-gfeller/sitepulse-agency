import React from 'react';
import Button from './Button';
import { ArrowRightIcon } from '../icons';

const InsightCard = ({ category, title, variant = 'purple' }: { category: string, title: string, variant?: 'purple' | 'orange' | 'green' | 'cyan' }) => {
  const styles = {
    purple: 'bg-brand-purple text-white',
    orange: 'bg-brand-orange text-black',
    green: 'bg-brand-green text-black',
    cyan: 'bg-brand-cyan text-black',
  };

  const arrowColor = {
    purple: 'text-white',
    orange: 'text-black',
    green: 'text-black',
    cyan: 'text-black',
  };

  return (
    <a href="#" className={`group flex flex-col justify-end p-8 aspect-[4/3] rounded-sm transition-transform duration-300 hover:-translate-y-2 ${styles[variant]}`}>
      <span className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">{category}</span>
      <h3 className="text-2xl font-bold leading-tight mb-4">{title}</h3>
      <div className="max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-300">
        <ArrowRightIcon className={`w-8 h-8 ${arrowColor[variant]}`} />
      </div>
    </a>
  );
};

const Insights: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Dernières Actualités</h2>
          <Button variant="outline-white" href="#contact">Voir tous les articles</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InsightCard 
            category="Actualité" 
            title="Changement sismique dans la recherche : Points clés du SMX Advanced" 
            variant="purple" 
          />
          <InsightCard 
            category="Moteurs de recherche" 
            title="Découvrabilité de marque dans un monde changeant : SEO et LLMs" 
            variant="orange" 
          />
          <InsightCard 
            category="SEO" 
            title="Ce que SGE signifie pour Google, vous et votre site web" 
            variant="green" 
          />
        </div>
      </div>
    </section>
  );
};

export default Insights;