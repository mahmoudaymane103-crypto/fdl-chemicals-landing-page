import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav" className={isScrolled ? 'frosted' : ''}>
      <div className="nav-container">
        <div className="logo">FDL</div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')}>À propos</a></li>
          <li><a onClick={() => scrollToSection('products')}>Produits</a></li>
          <li><a onClick={() => scrollToSection('compliance')}>Conformité</a></li>
          <li><a onClick={() => scrollToSection('supply-chain')}>Chaîne d'approvisionnement</a></li>
          <li><a onClick={() => scrollToSection('why-fdl')}>Pourquoi FDL</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;