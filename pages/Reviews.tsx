import React from 'react';
import { Container, Section, SectionTitle, SubTitle, Paragraph, Button, InfoBox, Card } from '../components/Shared';
import { CheckCircle, AlertCircle, ArrowRight, Layers, Zap, Calendar, TrendingUp, Anchor, ShieldCheck, Lock, Clock, Users, Globe, Network } from 'lucide-react';

// --- Cryptex Review (Premium Sales Page) ---
export const CryptexReview: React.FC = () => (
  <div className="pt-0"> 
    {/* Hero Section */}
    <div className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-gold/5 blur-[100px] z-0"></div>

        <Container className="relative z-10 text-center">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
                The Architect of Digital Income
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Structure. Time. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-600">
                    Legacy.
                </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Designed for individuals who think long-term about digital wealth. 
                Move beyond the noise of daily trading and embrace the power of contract-based precision.
            </p>
        </Container>
    </div>
    
    {/* Philosophy Section */}
    <Section className="bg-white">
        <Container>
            <div className="max-w-4xl mx-auto text-center">
                 <SectionTitle>The Cryptex Philosophy</SectionTitle>
                 <Paragraph>
                    In an economy driven by impulse and speed, true wealth is often built through 
                    <strong>discipline, patience, and structure</strong>.
                 </Paragraph>
                 <Paragraph>
                    Cryptex is not for the day trader looking for a quick flip. It is a sophisticated, 
                    contract-based platform designed for forward-thinkers. By utilizing time-based contracts, 
                    Cryptex removes the emotional volatility of the market, offering a clear, 
                    calculated path toward your digital financial goals.
                 </Paragraph>
            </div>
        </Container>
    </Section>

    {/* Contracts Grid */}
    <Section className="bg-slate-50">
        <Container>
            <div className="text-center mb-16">
                <SubTitle>Strategic Time Horizons</SubTitle>
                <p className="text-slate-600">Select the timeline that aligns with your life goals.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* 2 Year */}
                 <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-800 hover:shadow-xl transition-all">
                    <div className="text-slate-800 mb-4"><ShieldCheck size={32}/></div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">2-Year Contract</h3>
                    <p className="text-sm text-slate-500 mb-4 font-semibold">Entry Level</p>
                    <p className="text-slate-600 text-sm">An accessible starting point to understand the mechanics of the system with a shorter commitment.</p>
                 </div>

                {/* 3 Year */}
                 <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-400 hover:shadow-xl transition-all">
                    <div className="text-slate-400 mb-4"><Calendar size={32}/></div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">3-Year Contract</h3>
                    <p className="text-sm text-slate-500 mb-4 font-semibold">Strategic Foundation</p>
                    <p className="text-slate-600 text-sm">Designed for progressive growth and medium-term planning, balancing time and reward.</p>
                 </div>
                 
                 {/* 5 Year */}
                 <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-brand-accent transform md:-translate-y-4 relative z-10">
                    <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs px-2 py-1 rounded-bl-lg font-bold">POPULAR</div>
                    <div className="text-brand-accent mb-4"><TrendingUp size={32}/></div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">5-Year Contract</h3>
                    <p className="text-sm text-brand-accent mb-4 font-semibold">Wealth Builder</p>
                    <p className="text-slate-600 text-sm">The standard for serious digital asset accumulation. Built for those committed to compounding.</p>
                 </div>
                 
                 {/* 7 Year */}
                 <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-gold hover:shadow-xl transition-all">
                    <div className="text-brand-gold mb-4"><Anchor size={32}/></div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">7-Year Contract</h3>
                    <p className="text-sm text-brand-gold mb-4 font-semibold">Legacy Focus</p>
                    <p className="text-slate-600 text-sm">Structured for maximum time-leverage and long-range legacy planning for future generations.</p>
                 </div>
            </div>
        </Container>
    </Section>

    {/* Why Contract Based */}
    <Section className="bg-white">
        <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <SectionTitle align="left">Why Choose Contracts?</SectionTitle>
                    <Paragraph>
                        The wealthy do not react; they plan. Contract-based systems provide the ultimate luxury: <strong>freedom from decision fatigue.</strong>
                    </Paragraph>
                    <ul className="space-y-6 mt-8">
                        <li className="flex items-start">
                            <div className="bg-brand-light p-3 rounded-lg mr-4 shrink-0"><Lock className="text-brand-primary" size={20}/></div>
                            <div>
                                <h4 className="font-bold text-brand-dark text-lg">Commitment to Process</h4>
                                <p className="text-slate-600 mt-1">Contracts enforce discipline, preventing emotional selling during temporary market dips. You stay the course.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-brand-light p-3 rounded-lg mr-4 shrink-0"><Clock className="text-brand-primary" size={20}/></div>
                            <div>
                                <h4 className="font-bold text-brand-dark text-lg">Time Leverage</h4>
                                <p className="text-slate-600 mt-1">By locking in a strategy, you allow time to do the heavy lifting, rather than constant manual effort or stress.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
                     <h3 className="font-serif text-2xl font-bold text-brand-dark mb-6">Built for Support</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Cryptex isn't a "launch and leave" platform. It is a system designed to support participants over years, not weeks.
                     </p>
                     <InfoBox title="Community Confidence" icon={<Users />}>
                        Join a network of individuals who have chosen structure over speculation. The strength of Cryptex lies in its operational longevity and community trust.
                     </InfoBox>
                </div>
            </div>
        </Container>
    </Section>

    {/* CTA Section */}
    <Section className="bg-brand-dark text-white text-center py-20">
        <Container>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Define Your Digital Future</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg font-light">
                If you are ready to stop guessing and start planning, Cryptex offers the framework you need.
            </p>
            <Button href="https://secure-bytnex.io/MyRegister.php?a=C4080139735" variant="primary" className="text-lg px-10 py-4 shadow-2xl shadow-brand-gold/20 border border-transparent hover:border-brand-gold">
                Explore Cryptex Contract Options
            </Button>
            <p className="text-slate-500 text-xs mt-6 tracking-wide uppercase">
                Secure Registration Portal
            </p>
        </Container>
    </Section>

    {/* Final Closing */}
    <div className="bg-white py-12 border-t border-slate-100">
        <Container>
            <p className="text-center text-slate-500 italic font-serif text-lg">
                "Wealth is not measured by the speed of the return, but by the certainty of the plan. Think in years, not days."
            </p>
        </Container>
    </div>
  </div>
);

// --- Bytnex Review ---
export const BytnexReview: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
           <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">Platform Review</span>
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 mt-2">BYTNEX: A Sanctuary of Structure</h1>
           <p className="text-xl text-slate-600 font-light leading-relaxed">
             For those seeking a calm, organized path to digital income in a noisy world.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {/* 1. Opening */}
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Finding Clarity in the Chaos</h3>
            <Paragraph>
              If you have been exploring the world of digital income, you likely know the feeling of overwhelm. The noise, the charts, the constant demand for attention—it can be exhausting. But what if there was a way to participate in this new economy with clarity instead of confusion?
            </Paragraph>
            <Paragraph>
              We believe that building digital assets shouldn't feel like a second job. It should feel like a deliberate step toward freedom. This is where <strong>BYTNEX</strong> enters the conversation—as a breath of fresh air for those seeking structure over chaos.
            </Paragraph>

            {/* 2. What it is */}
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 mt-10">Designed for Stability</h3>
            <Paragraph>
              BYTNEX isn't just another trading platform; it is a system designed for stability. At its core, it is a structured digital income platform built for individuals who appreciate organization.
            </Paragraph>
             <Paragraph>
              Instead of asking you to predict the future or stare at screens all day, BYTNEX offers a methodical approach. It focuses on established systems that work in the background, allowing you to focus on living your life while your digital journey moves forward.
            </Paragraph>

            {/* 3. Why people like it */}
            <div className="my-10 bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h4 className="text-xl font-serif font-bold text-brand-dark mb-6">Why It Resonates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-700"><strong>Designed for Consistency:</strong> In a market known for volatility, it aims to provide a smoother experience.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-700"><strong>Structure over Speculation:</strong> Ideally suited for those who prefer a guided path rather than wandering alone.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-accent mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-700"><strong>Peace of Mind:</strong> By relying on clear mechanics, it removes the emotional stress of manual trading.</span>
                  </li>
                </ul>
            </div>

            {/* 4. Who is it for */}
             <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Is BYTNEX Right for You?</h3>
             <Paragraph>
               We find that this platform resonates most deeply with specific types of people:
             </Paragraph>
             <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <Card className="bg-white shadow-sm border-slate-100">
                   <Layers className="text-brand-primary mb-3" size={24} />
                   <h5 className="font-bold text-brand-dark mb-2">The Busy Professional</h5>
                   <p className="text-sm text-slate-600">You have capital but lack the time to master complex trading skills.</p>
                </Card>
                <Card className="bg-white shadow-sm border-slate-100">
                   <Zap className="text-brand-primary mb-3" size={24} />
                   <h5 className="font-bold text-brand-dark mb-2">The System Thinker</h5>
                   <p className="text-sm text-slate-600">You trust logic, process, and organization over hype and adrenaline.</p>
                </Card>
             </div>

             {/* 5. Trust Builder */}
             <InfoBox title="A Note on Responsibility" icon={<AlertCircle />}>
                True empowerment comes from understanding. While BYTNEX simplifies the process, it involves the dynamic world of cryptocurrency. We always encourage our community to approach every opportunity with a clear head, understanding that all digital assets carry some level of risk. Your journey should be one of personal responsibility and informed choice.
             </InfoBox>

             {/* 6. CTA */}
             <div className="mt-12 text-center">
                <Button href="https://secure-bytnex.io/MyRegister.php?a=C4080139735" variant="primary" className="w-full md:w-auto text-lg px-8 py-4 shadow-xl shadow-brand-accent/20">
                  Explore BYTNEX to see if it aligns with your digital income goals
                </Button>
                <p className="text-xs text-slate-400 mt-4 max-w-lg mx-auto">
                  By clicking above, you will be taken to the official BYTNEX registration page.
                </p>
             </div>

             {/* 7. Closing */}
             <div className="mt-16 border-t border-slate-100 pt-8">
               <p className="text-lg text-slate-600 italic text-center font-serif">
                 "Building lasting digital income is a marathon, not a sprint. We invite you to view BYTNEX not just as a platform, but as a potential partner in your long-term strategy."
               </p>
             </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
             <div className="sticky top-24 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-t-brand-accent">
                  <h3 className="font-bold text-xl mb-4 text-brand-dark">At a Glance</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Experience</span>
                      <span className="font-semibold text-brand-dark">Structured & Calm</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Difficulty</span>
                      <span className="font-semibold text-brand-dark">Beginner Friendly</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Approach</span>
                      <span className="font-semibold">System-Based</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-light p-6 rounded-xl border border-slate-100">
                   <h4 className="font-bold text-brand-dark mb-2">Need Guidance?</h4>
                   <p className="text-sm text-slate-600 mb-4">
                     If you are unsure if this is the right step for you, we are here to chat.
                   </p>
                   <Button to="/contact" variant="ghost" className="w-full justify-start pl-0 hover:bg-transparent hover:text-brand-accent">
                     Contact Support <ArrowRight size={16} className="ml-2" />
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

// --- Aurum Review ---
export const AurumReview: React.FC = () => (
  <div className="pt-0">
    {/* Hero */}
    <div className="relative bg-black h-[80vh] flex items-center justify-center overflow-hidden">
       {/* Background Visuals */}
       <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black z-0"></div>
       <div 
         className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')" }}
       ></div>
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
       
       <Container className="relative z-10 text-center text-white">
           <div className="animate-fade-in-up">
               <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-4">AURUM</h1>
               <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-brand-gold uppercase mb-8">
                   Digital Network Asset
               </p>
               <div className="w-24 h-1 bg-brand-gold mx-auto mb-10"></div>
               <p className="max-w-2xl mx-auto text-slate-300 mb-10 leading-relaxed font-light text-lg">
                   The bridge between the traditional financial world and the future of digital payments. Secure. Scalable. Sovereign.
               </p>
               <Button href="https://backoffice.aurum.foundation/u/4D0X8W" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all px-10 py-4 uppercase tracking-widest text-sm font-semibold">
                   Enter The Ecosystem
               </Button>
           </div>
       </Container>
    </div>

    {/* Introduction */}
    <Section className="bg-white">
        <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">About The Foundation</h2>
                    <Paragraph>
                        Aurum is a cutting-edge Layer-1 blockchain protocol designed to solve the trilemma of scalability, security, and decentralization.
                    </Paragraph>
                    <Paragraph>
                        Unlike legacy cryptocurrencies that struggle with transaction speed and high costs, Aurum utilizes a unique consensus mechanism that allows for near-instant settlement with negligible fees. It is built not just for speculation, but for real-world utility—facilitating payments, smart contracts, and decentralized applications (dApps) on a global scale.
                    </Paragraph>
                </div>
                <div className="bg-slate-50 p-10 rounded-sm border-l-4 border-brand-gold shadow-lg">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
                    <p className="text-slate-600 italic leading-relaxed text-lg">
                        "To provide a robust, accessible, and transparent financial infrastructure that empowers individuals and businesses to transact freely across borders without the friction of traditional banking systems."
                    </p>
                </div>
            </div>
        </Container>
    </Section>

    {/* Tech Specs */}
    <Section className="bg-neutral-900 text-white border-y border-neutral-800">
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800">
                <div className="p-4">
                    <div className="text-4xl font-bold text-brand-gold mb-2 font-serif">100k+</div>
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Transactions / Sec</div>
                </div>
                 <div className="p-4">
                    <div className="text-4xl font-bold text-brand-gold mb-2 font-serif">&lt;1s</div>
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Block Time</div>
                </div>
                 <div className="p-4">
                    <div className="text-4xl font-bold text-brand-gold mb-2 font-serif">Low</div>
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Transaction Fee</div>
                </div>
                 <div className="p-4">
                    <div className="text-4xl font-bold text-brand-gold mb-2 font-serif">POS</div>
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Consensus</div>
                </div>
            </div>
        </Container>
    </Section>
    
    {/* Ecosystem Grid */}
    <Section className="bg-white">
        <Container>
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">The Aurum Ecosystem</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto">A suite of integrated products designed to serve every aspect of your digital financial life.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                 <Card className="text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-brand-dark">
                    <div className="w-20 h-20 mx-auto bg-slate-50 text-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors">
                        <Globe size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-brand-dark">Aurum Chain</h3>
                    <p className="text-slate-600 text-sm leading-relaxed px-4">The high-performance blockchain network serving as the secure backbone for all applications and transactions.</p>
                 </Card>
                 <Card className="text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-brand-gold">
                    <div className="w-20 h-20 mx-auto bg-slate-50 text-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                        <Lock size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-brand-dark">Secure Wallet</h3>
                    <p className="text-slate-600 text-sm leading-relaxed px-4">Non-custodial storage solutions giving you complete sovereignty over your assets with military-grade encryption.</p>
                 </Card>
                 <Card className="text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-brand-accent">
                    <div className="w-20 h-20 mx-auto bg-slate-50 text-brand-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        <Network size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-brand-dark">Smart Exchange</h3>
                    <p className="text-slate-600 text-sm leading-relaxed px-4">Decentralized swapping protocols allowing for seamless asset management and liquidity provision.</p>
                 </Card>
            </div>
        </Container>
    </Section>

    {/* Final CTA */}
    <Section className="bg-slate-50 border-t border-slate-200">
        <Container>
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Join the Revolution</h2>
                 <Paragraph className="max-w-2xl mx-auto">
                    The transition to digital value is inevitable. Aurum positions you at the forefront of this shift with the tools you need to succeed.
                 </Paragraph>
                 <div className="mt-10">
                    <Button href="https://backoffice.aurum.foundation/u/4D0X8W" variant="primary" className="px-12 py-4 text-lg shadow-xl shadow-brand-gold/20">
                        Register for Official Access
                    </Button>
                    <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">Secure Foundation Gateway</p>
                 </div>
            </div>
        </Container>
    </Section>
  </div>
);

// --- Comparison Page ---
export const ComparisonPage: React.FC = () => (
  <div className="pt-24 pb-12">
    <Section>
      <Container>
        <SectionTitle>Clarity Through Comparison</SectionTitle>
        <Paragraph className="text-center max-w-3xl mx-auto mb-12">
          Both Bytnex and Aurum offer excellent paths to digital income, but they serve different needs. Use this guide to decide which resonates with you.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bytnex Side */}
          <Card className="border-t-4 border-t-slate-800">
            <h3 className="text-2xl font-serif font-bold text-center mb-2">Bytnex</h3>
            <p className="text-center text-slate-500 mb-6 text-sm uppercase tracking-wide">Best for Simplicity</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start"><CheckCircle className="text-slate-800 mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You want a "hands-off" experience.</span></li>
              <li className="flex items-start"><CheckCircle className="text-slate-800 mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You prefer proven, simple systems over complex features.</span></li>
              <li className="flex items-start"><CheckCircle className="text-slate-800 mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You are newer to digital assets.</span></li>
            </ul>
            <div className="text-center">
              <Button to="/review/bytnex" variant="outline" className="w-full">Read Full Review</Button>
            </div>
          </Card>

          {/* Aurum Side */}
          <Card className="border-t-4 border-t-brand-gold">
            <h3 className="text-2xl font-serif font-bold text-center mb-2">Aurum</h3>
            <p className="text-center text-slate-500 mb-6 text-sm uppercase tracking-wide">Best for Innovation</p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-start"><CheckCircle className="text-brand-gold mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You want to be part of a broader ecosystem.</span></li>
               <li className="flex items-start"><CheckCircle className="text-brand-gold mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You enjoy community governance and utility tokens.</span></li>
               <li className="flex items-start"><CheckCircle className="text-brand-gold mr-2 shrink-0 mt-1" size={18} /> <span className="text-slate-700">You are comfortable with slightly more complexity.</span></li>
            </ul>
             <div className="text-center">
              <Button to="/review/aurum" variant="outline" className="w-full">Read Full Review</Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16 bg-slate-100 p-8 rounded-xl max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-4">Still Undecided?</h4>
          <p className="mb-6">That's okay. You don't have to rush. We are happy to discuss your specific goals.</p>
          <Button to="/contact">Ask Us Which Fits You</Button>
        </div>
      </Container>
    </Section>
  </div>
);