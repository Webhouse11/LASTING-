import React from 'react';
import { Container, Section, SectionTitle, Paragraph, Button } from '../components/Shared';
import { Mail, MessageCircle } from 'lucide-react';

// --- Contact Page ---
export const ContactPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle>Let's Talk.</SectionTitle>
          <Paragraph>
            We are real people building real relationships. Whether you are confused, curious, or ready to start, we are here to answer your questions honestly.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* WhatsApp Card */}
           <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">WhatsApp</h3>
              <p className="text-slate-600 mb-6">Best for quick questions and direct guidance. We usually reply within a few hours.</p>
              <Button href="https://wa.me/2348060180077" className="bg-green-600 hover:bg-green-700 text-white w-full">
                Chat on WhatsApp
              </Button>
           </div>

           {/* Email Card */}
           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-200 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Email Support</h3>
              <p className="text-slate-600 mb-6">For detailed inquiries, partnership proposals, or account assistance.</p>
              <Button variant="secondary" className="w-full cursor-default hover:bg-brand-dark">
                webhouselab1@gmail.com
              </Button>
           </div>
        </div>
      </Container>
    </Section>
  </div>
);