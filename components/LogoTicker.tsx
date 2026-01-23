import React from 'react';

const LogoTicker: React.FC = () => {
  const logos = [
    'https://locomotive.agency/wp-content/uploads/2025/07/customer-avcom.png?w=160&h=70',
    'https://locomotive.agency/wp-content/uploads/2025/07/customer-bankrate.png?w=160&h=70',
    'https://locomotive.agency/wp-content/uploads/2025/07/customer-brightwork.png?w=160&h=70',
    'https://locomotive.agency/wp-content/uploads/2025/07/customer-caron.png?w=160&h=70',
    'https://locomotive.agency/wp-content/uploads/2025/07/customer-dundle.png?w=160&h=70',
  ];
  return (
    <section className="py-20 bg-black overflow-hidden border-b border-gray-900">
      <div className="container mx-auto px-6 mb-12 text-center"> <p className="text-xl md:text-2xl font-semibold text-gray-400">Driving Today’s Top Brands Forward</p> </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {logos.map((logo, i) => ( <img key={i} src={logo} alt="Client Logo" className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" /> ))}
          {logos.map((logo, i) => ( <img key={`dup-${i}`} src={logo} alt="Client Logo" className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" /> ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
