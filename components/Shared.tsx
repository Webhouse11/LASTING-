import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';

// --- Typography ---

export const SectionTitle: React.FC<{ children: React.ReactNode; align?: 'left' | 'center' }> = ({ children, align = 'center' }) => (
  <h2 className={`text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-6 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {children}
  </h2>
);

export const SubTitle: React.FC<{ children: React.ReactNode; align?: 'left' | 'center' }> = ({ children, align = 'center' }) => (
  <h3 className={`text-xl md:text-2xl font-serif text-brand-primary mb-4 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {children}
  </h3>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-slate-600 leading-relaxed text-lg mb-6 ${className}`}>
    {children}
  </p>
);

// --- Wrappers ---

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = 'py-16 md:py-24' }) => (
  <section className={`${className}`}>
    {children}
  </section>
);

// --- Interactive ---

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ to, href, children, variant = 'primary', className = '', onClick }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-amber-700 text-white shadow-lg hover:shadow-amber-500/20",
    secondary: "bg-brand-dark hover:bg-slate-800 text-white shadow-lg",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
    ghost: "text-brand-primary hover:text-brand-accent hover:bg-slate-100",
  };

  const content = (
    <>
      {children}
      {variant !== 'ghost' && <ChevronRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (to) {
    return <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>{content}</Link>;
  }
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>{content}</a>;
  }

  return <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>{content}</button>;
};

// --- Cards ---

export const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <div className="p-8">
      {title && <h3 className="text-xl font-bold text-brand-dark mb-4">{title}</h3>}
      {children}
    </div>
  </div>
);

export const InfoBox: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-slate-50 border-l-4 border-brand-accent p-6 rounded-r-lg">
    <div className="flex items-start">
      {icon && <div className="text-brand-accent mr-4 mt-1">{icon}</div>}
      <div>
        <h4 className="font-bold text-brand-dark mb-2">{title}</h4>
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  </div>
);