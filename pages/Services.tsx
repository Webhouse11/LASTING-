import React from 'react';
import { Container, Section, SectionTitle, SubTitle, Paragraph, Button, InfoBox } from '../components/Shared';
import { TrendingUp, Award, Clock, Briefcase, Lock, UserCheck } from 'lucide-react';

// --- Learn Trading Page ---
export const TradingPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Empower Yourself with Skill</SectionTitle>
          <Paragraph className="text-center mb-12">
            Give a man a fish, and you feed him for a day. Teach him to read the charts, and he can feed himself for a lifetime.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <SubTitle>Why Learn to Trade?</SubTitle>
              <div className="space-y-6 mt-6">
                <div className="flex">
                   <div className="bg-brand-light p-3 rounded-lg mr-4 h-fit"><Award className="text-brand-accent" /></div>
                   <div>
                     <h4 className="font-bold text-brand-dark">Total Control</h4>
                     <p className="text-sm text-slate-600">No third parties. No lock-up periods. Your funds stay in your wallet until you execute a trade.</p>
                   </div>
                </div>
                <div className="flex">
                   <div className="bg-brand-light p-3 rounded-lg mr-4 h-fit"><TrendingUp className="text-brand-accent" /></div>
                   <div>
                     <h4 className="font-bold text-brand-dark">Market Agnostic</h4>
                     <p className="text-sm text-slate-600">Make money when the market goes up, and make money when it goes down (shorting).</p>
                   </div>
                </div>
                <div className="flex">
                   <div className="bg-brand-light p-3 rounded-lg mr-4 h-fit"><Clock className="text-brand-accent" /></div>
                   <div>
                     <h4 className="font-bold text-brand-dark">Lifetime Skill</h4>
                     <p className="text-sm text-slate-600">Once you learn market structure and psychology, you can apply it to Crypto, Forex, or Stocks forever.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
               <h3 className="text-2xl font-serif font-bold mb-4">Our Mentorship Program</h3>
               <p className="text-slate-300 mb-6">
                 We don't sell signals. We sell education. Our curriculum covers:
               </p>
               <ul className="list-disc list-inside space-y-2 text-slate-300 mb-8 text-sm">
                 <li>Market Structure & Price Action</li>
                 <li>Risk Management (The most important skill)</li>
                 <li>Trader Psychology</li>
                 <li>Building your own Trading Plan</li>
               </ul>
               <Button href="https://digitaasset2026.vercel.app/" variant="primary" className="w-full">Inquire About Enrollment</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

// --- Asset Management Page ---
export const AssetManagementPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-block p-3 bg-brand-dark rounded-full text-brand-gold mb-6">
             <Lock size={32} />
           </div>
           <SectionTitle>Private Asset Management</SectionTitle>
           <Paragraph>
             For individuals with significant capital who prefer a hands-off, professional approach to digital asset accumulation.
           </Paragraph>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
           <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">How It Works</h3>
           <div className="prose text-slate-600">
             <p>
               We utilize a blend of blue-chip holding, yield farming strategies, and algorithmic rebalancing to grow your portfolio. This is not a "get rich quick" scheme; it is a wealth preservation and growth strategy.
             </p>
             
             <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-brand-dark mb-1">Minimum Capital</h4>
                  <p className="text-sm">$250 USD Equivalent</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-brand-dark mb-1">Transparency</h4>
                  <p className="text-sm">Monthly Reports & Direct Access</p>
                </div>
             </div>

             <InfoBox title="Invitation Only" icon={<Briefcase />}>
               Due to the high-touch nature of this service, we limit the number of clients we accept to ensure quality of service.
             </InfoBox>
           </div>
           
           <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between">
              <div>
                <p className="font-bold text-brand-dark">Interested?</p>
                <p className="text-sm text-slate-500">Let's discuss if this fits your portfolio.</p>
              </div>
              <Button href="https://wa.me/2348060180077" variant="primary" className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 shadow-green-500/20">
                 Chat on WhatsApp
              </Button>
           </div>
        </div>
      </Container>
    </Section>
  </div>
);