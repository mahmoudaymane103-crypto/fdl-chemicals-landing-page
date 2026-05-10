import React from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Products from './components/Products';
import Compliance from './components/Compliance';
import SupplyChain from './components/SupplyChain';
import WhyFDL from './components/WhyFDL';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Ticker />
      <About />
      <Products />
      <Compliance />
      <SupplyChain />
      <WhyFDL />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;