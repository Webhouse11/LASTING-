import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronDown, Mail } from 'lucide-react';
import { Container } from './Shared';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Opportunities', path: '/opportunities', sub: [
        { name: 'Overview', path: '/opportunities' },
        { name: 'Bytnex Review', path: '/review/bytnex' },
        { name: 'Aurum Review', path: '/review/aurum' },
        { name: 'Cryptex Contracts', path: '/review/cryptex' },
        { name: 'Comparison', path: '/comparison' }
    ]},
    { name: 'Trading', path: '/trading' },
    { name: 'Asset Mgmt', path: '/management' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-light font-sans text-slate-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center text-brand-gold">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg leading-tight ${scrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
                  Lasting Digital
                </span>
                <span className={`text-xs tracking-widest uppercase ${scrolled ? 'text-brand-accent' : 'text-brand-accent'}`}>
                  Income
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link 
                    to={link.path} 
                    className={`text-sm font-medium hover:text-brand-accent transition-colors py-2 flex items-center ${
                        scrolled ? 'text-slate-600' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                    {link.sub && <ChevronDown size={14} className="ml-1" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.sub && (
                    <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {link.sub.map(sub => (
                        <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-accent">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/opportunities" 
                className="bg-brand-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition shadow-lg shadow-amber-500/20"
              >
                Start Here
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-4">
             {navLinks.map((link) => (
               <div key={link.name}>
                 <Link 
                    to={link.path} 
                    className="block text-xl font-serif font-medium text-brand-dark py-2 border-b border-slate-100"
                  >
                    {link.name}
                  </Link>
                  {link.sub && (
                    <div className="pl-4 mt-2 space-y-2">
                       {link.sub.map(sub => (
                         <Link key={sub.path} to={sub.path} className="block text-slate-600 py-1">
                           - {sub.name}
                         </Link>
                       ))}
                    </div>
                  )}
               </div>
              ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="text-brand-accent" size={24} />
                <span className="font-serif font-bold text-white text-lg">Lasting Digital Income</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                A premium education platform dedicated to sustainability, consistency, and clarity in the digital income space.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/education" className="hover:text-brand-gold transition">Crypto Education</Link></li>
                <li><Link to="/opportunities" className="hover:text-brand-gold transition">Income Systems</Link></li>
                <li><Link to="/trading" className="hover:text-brand-gold transition">Skill Trading</Link></li>
                <li><Link to="/management" className="hover:text-brand-gold transition">Private Management</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/why-trust-us" className="hover:text-brand-gold transition">Why Trust Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-gold transition">Contact Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <p className="text-sm mb-4">Have questions? We are here to guide you.</p>
              <Link to="/contact" className="inline-flex items-center text-brand-gold hover:text-white transition text-sm">
                <Mail size={16} className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 mt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Lasting Digital Income. All rights reserved.</p>
            <div className="mt-4 md:mt-0 max-w-lg text-slate-500 text-center md:text-right">
              <p>Disclaimer: Crypto assets are volatile. Content is for educational purposes only and does not constitute financial advice. Past performance is not indicative of future results.</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;