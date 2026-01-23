import React, { useState } from 'react';
import Button from './Button';
import { MailIcon, MapPinIcon, CheckIcon, CloseIcon } from '../icons';
import emailjs from '@emailjs/browser';

const StatusModal = ({ status, onClose }: { status: 'success' | 'error' | 'idle' | 'submitting'; onClose: () => void }) => {
  if (status !== 'success' && status !== 'error') return null;
  const isSuccess = status === 'success';
  const iconColorClass = isSuccess ? "bg-brand-cyan/10 text-brand-cyan" : "bg-red-500/10 text-red-500";
  const borderColorClass = isSuccess ? "border-brand-cyan/20" : "border-red-500/20";
  const shadowColorClass = isSuccess ? "shadow-[0_0_50px_-10px_rgba(166,237,221,0.2)]" : "shadow-[0_0_50px_-10px_rgba(239,68,68,0.2)]";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative bg-gray-900 border ${borderColorClass} p-8 md:p-10 rounded-2xl ${shadowColorClass} max-w-md w-full transform transition-all text-center`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white"> <CloseIcon className="w-6 h-6" /> </button>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${iconColorClass}`}> {isSuccess ? <CheckIcon className="w-8 h-8" /> : <CloseIcon className="w-8 h-8" />} </div>
        <h3 className="text-2xl font-bold text-white mb-2">{isSuccess ? "Message envoyé !" : "Oups !"}</h3>
        <p className="text-gray-400 mb-8">{isSuccess ? "Merci. Notre équipe reviendra vers vous sous 24h." : "Une erreur est survenue lors de l'envoi."}</p>
        <Button variant={isSuccess ? "cyan" : "outline-white"} onClick={onClose} className="w-full justify-center"> Fermer </Button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { const { id, value } = e.target; setFormData(prev => ({ ...prev, [id]: value })); };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('submitting');
    try {
      await emailjs.send("service_xke393j", "template_11wdnwk", formData, "hxsC-uJNQAeboq553");
      setStatus('success'); setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) { setStatus('error'); }
  };
  return (
    <section className="py-24 bg-brand-black relative" id="contact">
      <StatusModal status={status} onClose={() => setStatus('idle')} />
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Parlons de votre projet.</h2>
            <p className="text-xl text-gray-400 mb-12"> Vous avez une idée ? Un défi à relever ? Contactez-nous pour une consultation gratuite. </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4"> <div className="p-3 bg-brand-cyan/10 rounded-full text-brand-cyan"> <MailIcon className="w-6 h-6" /> </div> <div> <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p> <a href="mailto:info@sitepulse.ch" className="text-white text-lg hover:text-brand-cyan">info@sitepulse.ch</a> </div> </div>
              <div className="flex items-center gap-4"> <div className="p-3 bg-brand-purple/10 rounded-full text-brand-purple"> <MapPinIcon className="w-6 h-6" /> </div> <div> <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Adresse</p> <p className="text-white text-lg">Fribourg, Suisse</p> </div> </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none" placeholder="Votre nom" required />
                <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none" placeholder="Entreprise" />
              </div>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none" placeholder="votre@email.com" required />
              <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none" placeholder="Message..." required></textarea>
              <Button variant="cyan" className="w-full justify-center" type="submit"> {status === 'submitting' ? 'Envoi...' : 'Envoyer'} </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
