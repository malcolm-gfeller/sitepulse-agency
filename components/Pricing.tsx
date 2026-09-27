import { useState } from 'react';
import Button from './Button';
import { CheckIcon } from '../icons';

type PricingMode = 'one-time' | 'monthly';

const Pricing = () => {
  const [mode, setMode] = useState<PricingMode>('one-time');

  return (
    <section className="py-24 bg-black relative" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-brand-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-brand-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Investissez dans votre <span className="text-brand-cyan">croissance.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Des solutions transparentes adaptées à votre stade de développement.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold tracking-wider cursor-pointer transition-colors ${mode === 'one-time' ? 'text-white' : 'text-gray-500'}`} onClick={() => setMode('one-time')}>
              PAYER COMPTANT
            </span>
            
            <div 
              className="w-16 h-8 rounded-full bg-white/10 border border-white/10 relative cursor-pointer p-1 transition-colors hover:bg-white/20"
              onClick={() => setMode(mode === 'one-time' ? 'monthly' : 'one-time')}
            >
              <div className={`w-6 h-6 rounded-full bg-brand-cyan shadow-lg transform transition-transform duration-300 ${mode === 'monthly' ? 'translate-x-8' : 'translate-x-0'}`} />
            </div>

            <span className={`text-sm font-bold tracking-wider cursor-pointer transition-colors ${mode === 'monthly' ? 'text-white' : 'text-gray-500'}`} onClick={() => setMode('monthly')}>
              PAYER AU MOIS
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          {/* CARDS FOR ONE-TIME PAYMENT */}
          {mode === 'one-time' && (
            <>
              {/* Pack START */}
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-colors duration-300 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pack START</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-purple">400.-</span>
                    <span className="text-gray-400">CHF (une fois)</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+ 30.- CHF/mois (Hébergement & Maint.)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Site Web moderne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Hébergement & Domaine inclus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Maintenance technique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500/10 text-red-500 text-xs mt-0.5">!</span>
                    <span className="text-gray-400 text-sm">Modifications de contenu payantes</span>
                  </li>
                </ul>
                <Button variant="outline-white" href="#contact" className="w-full justify-center">Contacter</Button>
              </div>

              {/* Pack PRO */}
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:border-brand-cyan/50 transition-colors duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-cyan text-black text-xs font-bold px-3 py-1 rounded-bl-lg">Populaire</div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pack PRO</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-cyan">700.-</span>
                    <span className="text-gray-400">CHF (une fois)</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+ 30.- CHF/mois (Hébergement & Maint.)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-gray-300">Tout le Pack Start</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-gray-300">Agenda en ligne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-cyan mt-0.5" />
                    <span className="text-gray-300">Système de réservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500/10 text-red-500 text-xs mt-0.5">!</span>
                    <span className="text-gray-400 text-sm">Modifications de contenu payantes</span>
                  </li>
                </ul>
                <Button variant="cyan" href="#contact" className="w-full justify-center shadow-[0_0_20px_rgba(166,237,221,0.2)]">Contacter</Button>
              </div>
            </>
          )}

          {/* CARDS FOR MONTHLY PAYMENT */}
          {mode === 'monthly' && (
             <>
              {/* Pack ESSENTIEL */}
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:border-brand-green/50 transition-colors duration-300 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pack ESSENTIEL</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-green">200.-</span>
                    <span className="text-gray-400">CHF / mois</span>
                  </div>
                   <p className="text-sm text-brand-green mt-2 font-medium">Investissement initial : 0.- CHF</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-green mt-0.5" />
                    <span className="text-gray-300">Site Web moderne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-green mt-0.5" />
                    <span className="text-gray-300">Hébergement & Domaine inclus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-green mt-0.5" />
                    <span className="text-gray-300">Maintenance & Support réactif</span>
                  </li>
                   <li className="flex items-start gap-3 bg-brand-green/10 p-2 rounded-lg -mx-2">
                    <CheckIcon className="w-5 h-5 text-brand-green mt-0.5" />
                    <span className="text-white font-medium">Modifications illimitées incluses</span>
                  </li>
                </ul>
                <Button variant="outline-white" href="#contact" className="w-full justify-center">Contacter</Button>
              </div>

               {/* Pack BUSINESS */}
               <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-colors duration-300 flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Tout inclus</div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pack BUSINESS</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-purple">300.-</span>
                    <span className="text-gray-400">CHF / mois</span>
                  </div>
                   <p className="text-sm text-brand-purple mt-2 font-medium">Investissement initial : 0.- CHF</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Tout le Pack Essentiel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Système de réservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-gray-300">Gestion d'agenda</span>
                  </li>
                   <li className="flex items-start gap-3 bg-brand-purple/10 p-2 rounded-lg -mx-2">
                    <CheckIcon className="w-5 h-5 text-brand-purple mt-0.5" />
                    <span className="text-white font-medium">Modifications illimitées incluses</span>
                  </li>
                </ul>
                <Button variant="outline-white" href="#contact" className="w-full justify-center">Contacter</Button>
              </div>
             </>
          )}

          {/* SUR MESURE CARD - ALWAYS VISIBLE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300 flex flex-col text-center md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">OFFRE SUR MESURE</h3>
            <p className="text-4xl font-bold text-gray-300 mb-6">Sur Devis</p>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              Pour des demandes spécifiques ne rentrant pas dans les cases (E-commerce complexe, fonctionnalités avancées). On analyse vos besoins ensemble.
            </p>
            <Button variant="outline-white" href="#contact" className="w-full justify-center mt-auto">Contacter</Button>
          </div>

        </div>

        {/* COMPARISON TABLE */}
        <div className="max-w-4xl mx-auto bg-gray-900/30 rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white text-center">Pourquoi choisir l'abonnement ?</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="p-4 text-gray-400 font-medium w-1/3">Caractéristiques</th>
                            <th className="p-4 text-white font-bold w-1/3 bg-brand-green/5">Formules Sérénité (Abonnement)</th>
                            <th className="p-4 text-white font-bold w-1/3">Formules Achat (Unique)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td className="p-4 text-gray-300">Investissement de départ</td>
                            <td className="p-4 text-brand-green font-bold bg-brand-green/5">0.- CHF</td>
                            <td className="p-4 text-gray-300">Dès 400.- CHF</td>
                        </tr>
                         <tr>
                            <td className="p-4 text-gray-300">Hébergement & Domaine</td>
                            <td className="p-4 text-white bg-brand-green/5">Inclus</td>
                            <td className="p-4 text-gray-300">Inclus (via 30.-/mois)</td>
                        </tr>
                         <tr>
                            <td className="p-4 text-gray-300">Maintenance Technique</td>
                            <td className="p-4 text-white bg-brand-green/5">Incluse</td>
                            <td className="p-4 text-gray-300">Incluse</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-gray-300">Prix des modifications</td>
                            <td className="p-4 text-brand-green font-bold bg-brand-green/5">ILLIMITÉ (Gratuit)</td>
                            <td className="p-4 text-gray-300">100.- CHF / demande</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-gray-300">Support</td>
                            <td className="p-4 text-white bg-brand-green/5">Prioritaire</td>
                            <td className="p-4 text-gray-300">Standard</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
