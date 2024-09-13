import React from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation';
import Hero from './components/Hero.js';
import WhyChooseGelato from './components/WhyChooseGelato';
import Features from './components/Features.js';
import SellerSection from './components/SellerSection.js';
import ProducerSection from './components/ProducerSection.js';
import GelatoConnect from './components/GelatoConnect.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <WhyChooseGelato />
      <Features />
      <SellerSection />
      <ProducerSection />
      <GelatoConnect/>
      <Footer />
    </div>
  );
}

export default App;