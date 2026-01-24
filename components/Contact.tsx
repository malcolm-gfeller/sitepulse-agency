import React, { useState } from 'react';
import Button from './Button';
import { MailIcon, MapPinIcon, CheckIcon, CloseIcon } from '../icons';
import emailjs from '@emailjs/browser';

// Composant Modal de Statut (Succès ou Erreur)
const StatusModal = ({ status, onClose }: { status: 'success' | 'error' | 'idle' | 'submitting'; onClose: () => void }) => {
  if (status !== 'success' && status !== 'error') return null;

  const isSuccess = status === 'success';
  
  const title = isSuccess ? "Message envoyé !" : "Oups !";
  const message = isSuccess 
    ? "Merci de nous avoir contactés. Un email de confirmation vous a été envoyé. Notre équipe reviendra vers vous sous 24h."
    : "Une erreur est survenue lors de l'envoi du message. Il est possible que le contenu ait été détecté comme indésirable ou qu'un problème technique soit survenu. Veuillez réessayer.";

  const iconColorClass = isSuccess ? "bg-brand-cyan/10 text-brand-cyan" : "bg-red-500/10 text-red-500";
  const borderColorClass = isSuccess ? "border-brand-cyan/20" : "border-red-500/20";
  const shadowColorClass = isSuccess ? "shadow-[0_0_50px_-10px_rgba(166,237,221,0.2)]" : "shadow-[0_0_50px_-10px_rgba(239,68,68,0.2)]";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className={`relative bg-gray-900 border ${borderColorClass} p-8 md:p-10 rounded-2xl ${shadowColorClass} max-w-md w-full transform transition-all duration-300 animate-fade-in-up text-center`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${iconColorClass}`}>
          {isSuccess ? (
            <CheckIcon className="w-8 h-8" />
          ) : (
            <CloseIcon className="w-8 h-8" />
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-8">
          {message}
        </p>

        <Button variant={isSuccess ? "cyan" : "outline-white"} onClick={onClose} className="w-full justify-center">
          Fermer
        </Button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // =========================================================
    // 👇👇👇 CONFIGURATION EMAILJS ACTIVE 👇👇👇
    // =========================================================
    
    // ✅ Service ID (Infomaniak SMTP)
    const SERVICE_ID = "service_xke393j";
    
    // ✅ Public Key
    const PUBLIC_KEY = "hxsC-uJNQAeboq553"; 
    
    // ✅ Templates
    const TEMPLATE_ADMIN_ID = "template_11wdnwk"; // Template "Contact Us" (reçoit le message)
    const TEMPLATE_USER_ID = "template_qlhyyaq";  // Template "Auto-Reply" (réponse auto)

    // =========================================================

    if (PUBLIC_KEY.includes("REMPLACER")) {
        console.warn("⚠️ EmailJS n'est pas configuré.");
        alert("Configuration manquante.");
        setStatus('idle');
        return;
    }

    try {
      // 1. Envoi de l'email à l'agence (Vous)
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN_ID, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      }, PUBLIC_KEY);

      // 2. Envoi de l'email de confirmation au client
      if (TEMPLATE_USER_ID && !TEMPLATE_USER_ID.includes("REMPLACER")) {
          await emailjs.send(SERVICE_ID, TEMPLATE_USER_ID, {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }, PUBLIC_KEY);
      }

      setStatus('success');
      setFormData({ name: '', company: '', email: '', message: '' }); 

    } catch (error) {
      console.error("Erreur EmailJS:", error);
      // Affichage de la modal d'erreur au lieu de l'alerte
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-brand-black relative" id="contact">
      <StatusModal status={status} onClose={() => setStatus('idle')} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Parlons de votre projet.</h2>
            <p className="text-xl text-gray-400 mb-12">
              Vous avez une idée ? Un défi à relever ? Contactez-nous pour une consultation gratuite. Nous serions ravis de discuter de la manière dont nous pouvons vous aider à grandir.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-cyan/10 rounded-full text-brand-cyan">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p>
                  <a href="mailto:info@sitepulse.ch" className="text-white text-lg hover:text-brand-cyan transition-colors">info@sitepulse.ch</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-purple/10 rounded-full text-brand-purple">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Adresse</p>
                  <p className="text-white text-lg">Fribourg, Suisse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-white uppercase">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" 
                    placeholder="Votre nom" 
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-white uppercase">Entreprise</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" 
                    placeholder="Nom de l'entreprise" 
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-white uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" 
                  placeholder="votre@email.com" 
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-white uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" 
                  placeholder="Dites-nous en plus sur votre projet..."
                  required
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <Button 
                variant="cyan" 
                className={`w-full justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`} 
                type="submit"
              >
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;