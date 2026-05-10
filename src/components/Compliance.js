import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Compliance = () => {
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

  const certifications = [
    'ISO 9001:2015',
    'REACH Compliant',
    'GHS Labeling',
    'UN Transport Regulations',
    'Local Regulatory Compliance'
  ];

  return (
    <section id="compliance" ref={sectionRef}>
      <div className="container">
        <div className="compliance-content" ref={contentRef}>
          <h2>Conformité et Sécurité</h2>
          <p>La sécurité et la conformité sont au cœur de nos opérations. Nous respectons toutes les normes internationales et réglementations locales pour garantir la sécurité de nos produits et processus.</p>
          <div className="certifications">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-icon">✓</div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="compliance-image">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Safety and compliance" />
        </div>
      </div>
    </section>
  );
};

export default Compliance;