import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import MagneticElement from './MagneticElement';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const words = document.querySelectorAll('.hero-h1 .word');

    gsap.fromTo(
      words,
      { y: '100%', opacity: 0, rotateZ: 5 },
      {
        y: '0%',
        opacity: 1,
        rotateZ: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.2,
      }
    );

    gsap.fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power2.out' });
    gsap.fromTo('.hero-actions-row', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, delay: 1.15, ease: 'power2.out' });
  }, []);

  const renderedText = t.hero.heading.split(' ').map((word, index) => (
    <span key={index} style={{ overflow: 'hidden', display: 'inline-block', paddingRight: '0.28em' }}>
      <span className="word" style={{ display: 'inline-block', willChange: 'transform, opacity' }}>
        {word}
      </span>
    </span>
  ));

  return (
    <section
      className="hero-section"
      id="home"
      ref={containerRef}
      aria-labelledby="hero-heading"
    >
      <div className="container-aria">
        <p className="hero-badge-aria" style={{ marginBottom: '1.25rem' }}>
          {t.hero.badge}
        </p>
        <h1
          id="hero-heading"
          className="hero-h1"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            color: '#0f172a',
            marginBottom: '1.5rem',
            maxWidth: '720px',
          }}
        >
          {renderedText}
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.75,
            color: 'var(--text-muted)',
            maxWidth: '460px',
            fontWeight: 400,
            marginBottom: '2rem',
          }}
        >
          {t.hero.sub}
        </p>

        <div className="hero-actions-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <MagneticElement>
            <a
              href="#cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg,#0e7490,var(--blue-bright))',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.85rem 1.65rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 8px 28px rgba(8,145,178,.3)',
              }}
            >
              {t.hero.cta}
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
            </a>
          </MagneticElement>
          <a
            href="#why-aria"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-subtle)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '10px',
              transition: 'color .2s, background .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.background = 'rgba(8,145,178,.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
              e.currentTarget.style.background = '';
            }}
          >
            {t.hero.seeOffers}
            <ArrowDown size={14} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
