import React, { useState, useEffect } from 'react';
import Button from './Button';
import { MenuIcon, CloseIcon, ArrowRightIcon } from '../icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'ACCUEIL', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EQUIPE', href: '#equipe' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-black/90 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 max-w-[1440px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group shrink-0 relative z-50">
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-cyan to-brand-purple rounded-full flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                SITEPULSE<span className="text-brand-cyan">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white text-sm font-bold tracking-wide hover:text-brand-cyan transition-colors flex items-center gap-1 group whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block shrink-0">
              <Button variant="cyan" href="#contact">Contactez-nous</Button>
            </div>

            {/* Mobile Menu Toggle (Only visible when menu is CLOSED) */}
            {!isMobileMenuOpen && (
              <button 
                className="lg:hidden text-white relative z-50 p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Higher Z-Index than header to cover everything */}
      <div className={`fixed inset-0 bg-black z-[60] transform transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Mobile Header Inside Menu */}
        <div className="px-6 py-6 flex items-center justify-between border-b border-white/10 shrink-0">
           <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-cyan to-brand-purple rounded-full flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                SITEPULSE<span className="text-brand-cyan">.</span>
              </span>
            </a>
            <button 
              className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
        </div>

        {/* Links Container - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-3xl font-bold text-white border-b border-white/10 pb-4 flex justify-between items-center active:text-brand-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-8">
            <Button variant="cyan" href="#contact" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
