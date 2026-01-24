import React from 'react';
import { LinkedInIcon, MailIcon } from '../icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-12 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-brand-cyan to-brand-purple rounded-full flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              SITEPULSE<span className="text-brand-cyan">.</span>
            </span>
          </a>

          {/* Socials */}
          <div className="flex gap-6">
             <a href="https://www.linkedin.com/in/malcolm-gfeller/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
             <a href="mailto:info@sitepulse.ch" className="text-gray-400 hover:text-white transition-colors"><MailIcon /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SITEPULSE. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;