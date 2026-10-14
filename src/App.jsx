import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OfferBundle from './components/OfferBundle';
import PortfolioProof from './components/PortfolioProof';
import ContrastComparison from './components/ContrastComparison';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import WalkthroughForm from './components/WalkthroughForm';
import SiteFooter from './components/SiteFooter';
import StickyMobileBar from './components/StickyMobileBar';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <Hero />
        <OfferBundle />
        <PortfolioProof />
        <ContrastComparison />
        <Process />
        <Testimonials />
        <WalkthroughForm />
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </div>
  );
}

export default App;
