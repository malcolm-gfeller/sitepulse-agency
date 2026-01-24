import React from 'react';
import { LinkedInIcon } from '../icons';
import portrait from '../images/portrait.png';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-black" id="equipe">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">L'Équipe</h2>
          <p className="text-gray-400 text-lg">
            Une expertise dédiée à votre croissance digitale.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative max-w-sm w-full">
            <div className="aspect-[3/4] bg-gray-900 mb-6 overflow-hidden rounded-sm border-[3px] border-white group-hover:border-brand-cyan transition-colors duration-300 relative">
              <img
                src={portrait}
                alt="Malcolm Gfeller"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with LinkedIn Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <a href="https://www.linkedin.com/in/malcolm-gfeller/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-cyan transition-transform hover:scale-110">
                  <LinkedInIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-3">Malcolm Gfeller</h3>
              <div className="flex flex-col items-center gap-1">
                <span className="text-brand-cyan font-bold uppercase tracking-wider text-sm border border-brand-cyan px-3 py-1">Fondateur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;