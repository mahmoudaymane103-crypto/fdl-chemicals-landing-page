import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyFDL = () => {
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

  const advantages = [
    {
      title: 'Expertise Technique',
      description: 'Équipe d\'experts avec plus de 25 ans d\'expérience dans l\'industrie chimique',
      icon: '🧪'
    },
    {
      title: 'Réseau Global',
      description: 'Partenariats stratégiques avec les principaux fabricants mondiaux',
      icon: '🌐'
    },
    {
      title: 'Service Personnalisé',
      description: 'Solutions sur mesure adaptées aux besoins spécifiques de chaque client',
      icon: '🤝'
    },
    {
      title: 'Support 24/7',
      description: 'Assistance technique et logistique disponible en permanence',
      icon: '⏰'
    },
    {
      title: 'Prix Compétitifs',
      description: 'Optimisation des coûts grâce à notre expertise et notre volume d\'achats',
      icon: '💰'
    },
    {
      title: 'Fiabilité Prouvée',
      description: 'Taux de satisfaction client de 98% et livraison dans les délais convenus',
      icon: '⭐'
    }
  ];

  return (
    <section id="why-fdl" ref={sectionRef}>
      <div className="container">
        <h2>Pourquoi Choisir FDL</h2>
        <div className="advantages-grid" ref={contentRef}>
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFDL;