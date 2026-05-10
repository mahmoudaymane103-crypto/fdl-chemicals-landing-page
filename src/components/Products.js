import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const products = [
    {
      name: 'Solvants Industriels',
      description: 'Solvants de haute pureté pour applications industrielles',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Acides et Bases',
      description: 'Acides minéraux et bases pour processus chimiques',
      image: 'https://images.unsplash.com/photo-1582719471135-53b41b0b5b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Engrais Chimiques',
      description: 'Solutions nutritionnelles pour l\'agriculture moderne',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Polymères et Résines',
      description: 'Matériaux polymères pour diverses industries',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Gaz Spécialisés',
      description: 'Gaz industriels et spéciaux pour applications critiques',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Sels Industriels',
      description: 'Sels et composés inorganiques pour l\'industrie',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  useEffect(() => {
    gsap.from(sectionRef.current, {
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

    // Auto-sliding functionality
    const autoSlide = () => {
      if (carouselRef.current && isAutoSliding) {
        const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const currentScroll = carouselRef.current.scrollLeft;
        const nextScroll = currentScroll + 320; // Card width + gap

        if (nextScroll >= maxScrollLeft) {
          // Reset to beginning
          gsap.to(carouselRef.current, {
            scrollLeft: 0,
            duration: 1,
            ease: 'power2.inOut'
          });
        } else {
          gsap.to(carouselRef.current, {
            scrollLeft: nextScroll,
            duration: 1,
            ease: 'power2.inOut'
          });
        }
      }
    };

    const interval = setInterval(autoSlide, 4000); // Auto slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoSliding(false); // Pause auto-sliding when user interacts
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Resume auto-sliding after a delay
    setTimeout(() => setIsAutoSliding(true), 2000);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-sliding after a delay
    setTimeout(() => setIsAutoSliding(true), 2000);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="products" ref={sectionRef}>
      <div className="container">
        <h2>Nos Produits</h2>
        <div
          className="products-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;