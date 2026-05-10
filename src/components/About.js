import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content" ref={contentRef}>
          <h2>À propos de FDL Chemicals</h2>
          <p>FDL Chemicals est un leader marocain dans l'import/export de produits chimiques industriels. Depuis plus de deux décennies, nous connectons les marchés locaux aux fournisseurs mondiaux, garantissant la qualité, la conformité et la fiabilité.</p>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Pays desservis</div>
            </div>
          </div>
        </div>
        <div className="about-image" ref={imageRef}>
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Chemical industry" />
        </div>
      </div>
    </section>
  );
};

export default About;