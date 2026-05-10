import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const moleculeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1')
    .from(moleculeRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: 'power3.out'
    }, '-=1.5');

    // Add floating animation to molecule
    gsap.to(moleculeRef.current, {
      y: '+=10',
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 ref={titleRef}>Solutions Chimiques Globales</h1>
        <p ref={subtitleRef}>Services d'import/export premium reliant le Maroc aux marchés mondiaux</p>
      </div>
      <div className="hero-images">
        <div className="hero-bg-image">
          <img src="https://images.unsplash.com/photo-1582719471135-53b41b0b5b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Chemical laboratory" />
        </div>
        <div className="molecule-svg" ref={moleculeRef}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="3" fill="var(--accent)"/>
            <circle cx="120" cy="80" r="2" fill="var(--text-secondary)"/>
            <circle cx="80" cy="120" r="2" fill="var(--text-secondary)"/>
            <circle cx="140" cy="100" r="2" fill="var(--text-secondary)"/>
            <circle cx="60" cy="100" r="2" fill="var(--text-secondary)"/>
            <line x1="100" y1="100" x2="120" y2="80" stroke="var(--accent)" stroke-width="2"/>
            <line x1="100" y1="100" x2="80" y2="120" stroke="var(--accent)" stroke-width="2"/>
            <line x1="100" y1="100" x2="140" y2="100" stroke="var(--accent)" stroke-width="2"/>
            <line x1="100" y1="100" x2="60" y2="100" stroke="var(--accent)" stroke-width="2"/>
          </svg>
        </div>
      </div>
      <div className="grid-overlay"></div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;