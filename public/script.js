// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Sticky nav frosted glass effect
ScrollTrigger.create({
  trigger: 'body',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    if (self.progress > 0.1) {
      document.getElementById('nav').classList.add('frosted');
    } else {
      document.getElementById('nav').classList.remove('frosted');
    }
  }
});

// Hero animations
gsap.from('.hero-content h1', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: 'power3.out'
});

gsap.from('.hero-content p', {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.3,
  ease: 'power3.out'
});

gsap.from('.molecule-svg', {
  opacity: 0,
  scale: 0.8,
  duration: 2,
  delay: 0.5,
  ease: 'power3.out'
});

// Pinned text reveal on scroll
ScrollTrigger.create({
  trigger: '#hero',
  start: 'top top',
  end: 'bottom top',
  pin: '.hero-content',
  pinSpacing: false
});

// About section fade-in
gsap.from('.about-text', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '#about',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
});

gsap.from('.capability-card', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.capabilities',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

// Products carousel drag functionality
const carousel = document.querySelector('.products-carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Compliance stats counter animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

ScrollTrigger.create({
  trigger: '#compliance',
  start: 'top 80%',
  onEnter: () => {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
  }
});

// Supply chain map animation
gsap.to('#route1', {
  strokeDashoffset: 0,
  opacity: 1,
  duration: 2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '#supply-chain',
    start: 'top 60%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#route2', {
  strokeDashoffset: 0,
  opacity: 1,
  duration: 2,
  delay: 0.5,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '#supply-chain',
    start: 'top 60%',
    toggleActions: 'play none none reverse'
  }
});

gsap.to('#route3', {
  strokeDashoffset: 0,
  opacity: 1,
  duration: 2,
  delay: 1,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '#supply-chain',
    start: 'top 60%',
    toggleActions: 'play none none reverse'
  }
});

// Why FDL staggered reveal
gsap.from('.feature-card', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#why-fdl',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

// Contact form submission with API
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Envoi en cours...';
  submitBtn.disabled = true;

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      e.target.reset();
    } else {
      alert(result.error || 'Une erreur s\'est produite. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    alert('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    lenis.scrollTo(target);
  });
});