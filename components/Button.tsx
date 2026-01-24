import React from 'react';
import { ArrowRightIcon } from '../icons';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline-white' | 'outline-purple' | 'cyan' | 'orange' | 'green';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', href, onClick, type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-between rounded-full px-6 py-3 font-bold text-base transition-all duration-300 group cursor-pointer";
  
  const variants = {
    primary: "bg-brand-cyan text-black hover:gap-6 gap-2",
    'outline-white': "border border-white text-white hover:bg-white hover:text-brand-purple hover:gap-6 gap-2",
    'outline-purple': "border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white hover:gap-6 gap-2",
    cyan: "bg-brand-cyan text-black hover:gap-6 gap-2",
    orange: "bg-brand-orange text-white hover:gap-6 gap-2",
    green: "bg-brand-green text-black hover:gap-6 gap-2",
  };

  const Component = href ? 'a' : 'button';
  // Include onClick in props even if it's an anchor tag to support menu closing behavior
  const props = href ? { href, target: "_self", onClick } : { onClick, type };

  return (
    // @ts-ignore
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      <div className="transition-transform duration-300">
        <ArrowRightIcon className="w-5 h-5 fill-current" />
      </div>
    </Component>
  );
};

export default Button;