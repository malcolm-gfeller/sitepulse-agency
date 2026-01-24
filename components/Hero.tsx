import React from 'react';
import Button from './Button';
import { CheckIcon } from '../icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-black selection:bg-brand-cyan selection:text-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-brand-purple/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-brand-cyan/10 rounded-full blur-[100px] opacity-30" />
        
        {/* Abstract Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(166,237,221,0.1)]">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">Agence Web Suisse 🇨🇭</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Donnez vie à votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                vision digitale.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Créez et développez votre présence en ligne avec des solutions web sur mesure, de la création de sites à l'identité visuelle et au SEO.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="cyan" href="#contact" className="w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(166,237,221,0.3)] hover:shadow-[0_0_30px_rgba(166,237,221,0.5)]">
                Démarrer un projet
              </Button>
              <Button variant="outline-white" href="#projets" className="w-full sm:w-auto justify-center">
                Voir nos réalisations
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-brand-cyan" />
                <span>Sites ultra-rapides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-brand-purple" />
                <span>Design sur mesure</span>
              </div>
               <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-brand-orange" />
                <span>Stratégie SEO</span>
              </div>
            </div>
          </div>

          {/* Visual Element / Abstract Representation */}
          <div className="lg:w-2/5 w-full relative perspective-1000 hidden md:block">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square max-w-lg mx-auto">
                {/* Main Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl flex flex-col justify-between transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-10 group">
                   <div className="flex justify-between items-center mb-8">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-brand-purple/80" />
                         <div className="w-3 h-3 rounded-full bg-brand-cyan/80" />
                         <div className="w-3 h-3 rounded-full bg-brand-orange/80" />
                      </div>
                      <div className="h-1.5 w-20 bg-white/20 rounded-full" />
                   </div>
                   
                   <div className="space-y-6 relative">
                      {/* Fake Graphs/Content */}
                      <div className="h-40 w-full bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/10 rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-cyan/20 to-transparent opacity-50"></div>
                        <svg className="absolute bottom-0 left-0 w-full h-24 text-brand-cyan opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                             <path fill="currentColor" d="M0,15 Q25,5 50,15 T100,10 V20 H0 Z" />
                        </svg>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-16 w-1/2 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-brand-orange/50 flex items-center justify-center text-brand-orange text-xs font-bold">SEO</div>
                         </div>
                         <div className="h-16 w-1/2 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                             <div className="w-8 h-8 rounded-full border-2 border-brand-green/50 flex items-center justify-center text-brand-green text-xs font-bold">UX</div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Performance</span>
                        <span className="text-2xl font-bold text-white">98<span className="text-brand-cyan text-lg">%</span></span>
                      </div>
                      <div className="h-10 w-10 bg-brand-cyan rounded-full flex items-center justify-center text-black font-bold transform group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                      </div>
                   </div>
                </div>

                {/* Background Card Decorative */}
                 <div className="absolute inset-0 bg-brand-purple/20 rounded-3xl transform rotate-[6deg] scale-95 z-0 blur-sm" />
                 
                 {/* Floating elements */}
                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-cyan/20 rounded-full blur-xl animate-pulse delay-700" />
                 <div className="absolute bottom-20 -left-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Line Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;