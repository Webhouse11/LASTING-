import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section, Button, SectionTitle, Paragraph, Card } from '../components/Shared';
import { Compass, TrendingUp, Users, Lock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  overlayColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "Position Yourself for Long-Term Digital Income",
    subheadline: "Discover structured crypto opportunities and education designed for people who think beyond quick wins.",
    ctaText: "Explore Opportunities",
    ctaLink: "/opportunities",
    bgImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop", // Abstract digital wealth
    overlayColor: "from-slate-900 via-slate-900/90 to-brand-dark/90"
  },
  {
    id: 2,
    headline: "Not Hype. Structured Digital Income Systems.",
    subheadline: "Carefully reviewed platforms built around long-term planning, discipline, and consistency.",
    ctaText: "See How It Works",
    ctaLink: "/opportunities",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop", // Data/Charts
    overlayColor: "from-brand-dark via-slate-900/95 to-black/90"
  },
  {
    id: 3,
    headline: "Hand-Picked Opportunities for Serious Minds",
    subheadline: "Platforms we’ve reviewed and aligned with for long-term digital participation.",
    ctaText: "View Recommended Projects",
    ctaLink: "/opportunities",
    bgImage: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?q=80&w=2832&auto=format&fit=crop", // Network nodes
    overlayColor: "from-blue-950 via-slate-900/90 to-brand-dark"
  },
  {
    id: 4,
    headline: "Learn the Skill. Explore the Systems.",
    subheadline: "Education, insights, and personal guidance for those who want clarity in crypto.",
    ctaText: "Learn Crypto the Right Way",
    ctaLink: "/education",
    bgImage: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2864&auto=format&fit=crop", // Trading/Charts
    overlayColor: "from-emerald-950/90 via-slate-900/95 to-brand-dark"
  },
  {
    id: 5,
    headline: "You’re Not Alone on This Journey",
    subheadline: "Direct guidance, insights, and access to opportunities — with clarity and responsibility.",
    ctaText: "Talk to an Expert",
    ctaLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2940&auto=format&fit=crop", // Meeting/Conversation
    overlayColor: "from-slate-900 via-slate-800/95 to-brand-accent/20"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-brand-dark h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Zoom Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{ 
                backgroundImage: `url('${slide.bgImage}')`,
                transform: index === current ? 'scale(1.1)' : 'scale(1)'
            }}
          ></div>
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor} mix-blend-multiply transition-colors duration-1000`}></div>
          <div className="absolute inset-0 bg-black/30"></div> {/* Uniform dimming */}

          {/* Content */}
          <Container className="relative z-20 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
               <div className={`transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 backdrop-blur-sm shadow-lg">
                    Lasting Digital Income
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                    {slide.headline}
                  </h1>
                  <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                    {slide.subheadline}
                  </p>
                  <Button to={slide.ctaLink} variant="primary" className="text-lg px-10 py-4 shadow-2xl shadow-brand-gold/20 border-t border-white/20">
                    {slide.ctaText}
                  </Button>
               </div>
            </div>
          </Container>
        </div>
      ))}

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all hidden md:flex opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-brand-gold w-8' : 'bg-white/30 hover:bg-white/50 w-4'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <HeroSlider />

      {/* The Problem / Empathy Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle>We understand the noise.</SectionTitle>
            <Paragraph>
              The digital world is loud. "Guaranteed returns," "moonshots," and overnight success stories often lead to confusion and loss. You are likely here because you want something different: <strong>Reliability. Honesty. A plan.</strong>
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-t-4 border-t-slate-200 hover:border-t-brand-accent">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Compass size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Lost in Direction?</h3>
              <p className="text-slate-600">
                We replace overwhelm with clear, step-by-step pathways tailored to your goals.
              </p>
            </Card>
            <Card className="text-center border-t-4 border-t-slate-200 hover:border-t-brand-accent">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Tired of Risk?</h3>
              <p className="text-slate-600">
                We prioritize capital preservation and long-term sustainability over reckless gambling.
              </p>
            </Card>
            <Card className="text-center border-t-4 border-t-slate-200 hover:border-t-brand-accent">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Need a Partner?</h3>
              <p className="text-slate-600">
                You don't have to do this alone. We offer education, support, and trusted recommendations.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Pathways Grid */}
      <Section className="bg-slate-50">
        <Container>
          <SectionTitle>Four Paths to Digital Freedom</SectionTitle>
          <Paragraph className="text-center max-w-3xl mx-auto mb-16">
            There is no "one size fits all." Choose the path that aligns with your time, capital, and desire to learn.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1 */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Learn to Trade</h3>
              <p className="text-slate-600 mb-6 min-h-[80px]">
                Take full control. Master the skill of reading charts and understanding market psychology. For those who want independence.
              </p>
              <Link to="/trading" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-dark transition">
                View Curriculum <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Path 2 */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Compass size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Income Systems</h3>
              <p className="text-slate-600 mb-6 min-h-[80px]">
                Explore vetted platforms like Bytnex and Aurum. Designed for those who prefer structured, system-driven results.
              </p>
              <Link to="/opportunities" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-dark transition">
                Compare Options <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

             {/* Path 3 */}
             <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lock size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Asset Management</h3>
              <p className="text-slate-600 mb-6 min-h-[80px]">
                A private, high-touch service for individuals with significant capital seeking professional oversight.
              </p>
              <Link to="/management" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-dark transition">
                Check Eligibility <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

             {/* Path 4 */}
             <div className="group relative bg-brand-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                <Users size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Personal Guidance</h3>
              <p className="text-slate-300 mb-6 min-h-[80px]">
                Unsure where to start? Speak directly with us via WhatsApp. We listen first, then advise.
              </p>
              <Link to="/contact" className="inline-flex items-center text-brand-gold font-semibold hover:text-white transition">
                Start a Chat <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;