import React from 'react';
import { Container, Section, SectionTitle, Paragraph, SubTitle, InfoBox, Button } from '../components/Shared';
import { BookOpen, Shield, Eye, BarChart, Heart } from 'lucide-react';

// --- Crypto Education Page ---
export const EducationPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>The Foundation of Success is Knowledge</SectionTitle>
          <Paragraph className="text-xl text-center mb-12">
            Before you invest a single dollar, invest in your understanding. 
            The crypto market rewards the patient and the educated.
          </Paragraph>

          <div className="prose prose-lg text-slate-600 mx-auto">
            <h3 className="text-2xl font-serif text-brand-dark font-bold mb-4">Why Digital Income?</h3>
            <p className="mb-6">
              The world is shifting. Traditional finance is evolving into decentralized systems. This isn't just about "magic internet money"; it's about programmable value, automated efficiency, and global accessibility. Digital income opportunities allow you to participate in this technological revolution.
            </p>
            
            <h3 className="text-2xl font-serif text-brand-dark font-bold mb-4">Hype vs. Reality</h3>
            <p className="mb-6">
              <strong>Hype</strong> says you'll be a millionaire by Tuesday. <br/>
              <strong>Reality</strong> says wealth is built through consistency, compound growth, and risk management.
            </p>
            <p className="mb-8">
              At Lasting Digital Income, we teach you to ignore the noise. We focus on opportunities that have clear mechanics, transparent teams, and sustainable models.
            </p>

            <InfoBox title="Start With The Basics" icon={<BookOpen />}>
               We believe every investor should understand Bitcoin, blockchain fundamentals, and stablecoins before exploring high-yield opportunities. <a href="#" className="underline text-brand-accent">Read our Beginner's Guide</a> (Coming Soon).
            </InfoBox>
          </div>
          
          <div className="mt-12 text-center">
             <Button to="/opportunities">See How We Apply This Logic</Button>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

// --- Why Trust Us Page ---
export const TrustPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Shield className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <SectionTitle>Trust is Earned, Not Claimed</SectionTitle>
          <Paragraph>
            In an industry rife with anonymity and broken promises, we stand for transparency, longevity, and face-to-face connection.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <SubTitle>Our Philosophy</SubTitle>
            <Paragraph>
              We don't promote anything we don't personally use or deeply investigate. Our reputation is worth more than any commission. We believe in "Slow is Smooth, Smooth is Fast." By avoiding "get rich quick" schemes, we protect our community and help them build lasting wealth.
            </Paragraph>
          </div>
          <div>
             <SubTitle>The "Advisor" Approach</SubTitle>
             <Paragraph>
               We are not salespeople. We are educators and connectors. If a platform or service isn't right for you, we will tell you. We measure our success by the longevity of your digital income, not the speed of your deposit.
             </Paragraph>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-brand-dark mb-4">We are real people.</h3>
            <Button to="/contact" variant="outline">Chat With Us Directly</Button>
        </div>
      </Container>
    </Section>
  </div>
);

// --- Recommendations Intro Page ---
export const OpportunitiesIntro: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-white">
      <Container>
         <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Curated Selection</span>
            <SectionTitle>Recommended Opportunities</SectionTitle>
            <Paragraph>
               We filter through hundreds of platforms to find the few that meet our rigorous standards for sustainability, transparency, and technical competence.
            </Paragraph>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                <Eye className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Vetted</h4>
                <p className="text-sm text-slate-600">We analyze the business model, the team (where possible), and the mechanics.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                <BarChart className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Sustainable</h4>
                <p className="text-sm text-slate-600">We look for mathematical sustainability over unrealistic hype cycles.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 text-center">
                <Heart className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Community First</h4>
                <p className="text-sm text-slate-600">We only recommend what we are willing to put our own capital into.</p>
            </div>
         </div>

         <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
            <Button to="/review/bytnex">Explore Bytnex</Button>
            <Button to="/review/aurum" variant="secondary">Explore Aurum</Button>
            <Button to="/comparison" variant="outline">Compare Both</Button>
         </div>
      </Container>
    </Section>
  </div>
);