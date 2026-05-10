import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SupplyChain = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 100,
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

  const steps = [
    {
      title: 'Sourcing Global',
      description: 'Sélection rigoureuse des fournisseurs mondiaux de premier rang',
      icon: '🌍'
    },
    {
      title: 'Contrôle Qualité',
      description: 'Tests et analyses approfondis à chaque étape du processus',
      icon: '🔬'
    },
    {
      title: 'Logistique Optimisée',
      description: 'Transport sécurisé et efficace vers le Maroc et au-delà',
      icon: '🚛'
    },
    {
      title: 'Distribution Locale',
      description: 'Réseau de distribution étendu pour une livraison rapide',
      icon: '📦'
    }
  ];

  return (
    <section id="supply-chain" ref={sectionRef}>
      <div className="container">
        <h2>Chaîne d'Approvisionnement</h2>
        <div className="supply-chain-content" ref={contentRef}>
          {steps.map((step, index) => (
            <div key={index} className="supply-step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;