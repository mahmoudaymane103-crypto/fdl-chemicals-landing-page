import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    gsap.from(formRef.current, {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message envoyé avec succès !');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitMessage('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      setSubmitMessage('Erreur de connexion.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <h2>Contactez-nous</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Adresse</h3>
              <p>Casablanca, Maroc</p>
            </div>
            <div className="contact-item">
              <h3>Téléphone</h3>
              <p>+212 6XX XXX XXX</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>contact@fdlchemicals.ma</p>
            </div>
            <div className="contact-item">
              <h3>Heures d'ouverture</h3>
              <p>Lundi - Vendredi: 8h00 - 18h00</p>
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Votre entreprise"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;