import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FloatingStats = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const cards = document.querySelectorAll('.stat-card-aria');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50 + i * 20, opacity: 0 },
        {
          y: -80 - i * 24,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    });
  }, []);

  const stats = [
    { num: '24h', label: t.stats.time },
    { num: '100%', label: t.stats.satisfaction },
    { num: '24/7', label: t.stats.support },
  ];

  return (
    <section ref={sectionRef} className="section-aria stats-section" id="services" style={{ minHeight: '70vh' }}>
      <div
        className="container-aria"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          paddingTop: '2rem',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-card-aria"
            style={{
              padding: '3rem 1.75rem',
              textAlign: 'center',
              willChange: 'transform',
              marginTop: i % 2 !== 0 ? '4rem' : '0',
            }}
          >
            <div className="stat-num-aria">{stat.num}</div>
            <div className="stat-label-aria">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloatingStats;
