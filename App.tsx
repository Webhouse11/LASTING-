import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { EducationPage, TrustPage, OpportunitiesIntro } from './pages/ContentPages';
import { BytnexReview, AurumReview, ComparisonPage, CryptexReview } from './pages/Reviews';
import { TradingPage, AssetManagementPage } from './pages/Services';
import { ContactPage } from './pages/Support';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Landing */}
          <Route path="/" element={<Home />} />
          
          {/* Education & Trust */}
          <Route path="/education" element={<EducationPage />} />
          <Route path="/why-trust-us" element={<TrustPage />} />
          
          {/* Opportunities Section */}
          <Route path="/opportunities" element={<OpportunitiesIntro />} />
          <Route path="/review/bytnex" element={<BytnexReview />} />
          <Route path="/review/aurum" element={<AurumReview />} />
          <Route path="/review/cryptex" element={<CryptexReview />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          
          {/* Services */}
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/management" element={<AssetManagementPage />} />
          
          {/* Support */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;