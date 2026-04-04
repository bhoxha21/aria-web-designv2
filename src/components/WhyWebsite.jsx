import React, { useEffect, useRef } from 'react';
import { Phone, Search, Shield } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function WhyWebsite() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-tag, .section-title, .section-lead', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.why-visual-card', {
        scrollTrigger: {
          trigger: '.why-visual-card',
          start: 'top 85%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.why-card-stat', {
        scrollTrigger: {
          trigger: '.why-visual-card',
          start: 'top 75%',
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-website section-aria" id="why-website" ref={sectionRef}>
      <div className="container-aria">
        <div className="why-website-inner">
          <div>
            <span className="section-tag">{t.whyWeb.tag}</span>
            <h2 className="section-title">{t.whyWeb.title}</h2>
            <p className="section-lead" style={{ opacity: 1 }}>
              {t.whyWeb.p1}
            </p>
            <p className="section-lead" style={{ marginTop: '1rem', opacity: 1 }}>
              {t.whyWeb.p2}
            </p>
          </div>
          <div>
            <div className="why-visual-card">
              <div className="mock-browser">
                <div className="mock-bar">
                  <div className="mock-dot" style={{ background: '#f87171' }} />
                  <div className="mock-dot" style={{ background: '#fbbf24' }} />
                  <div className="mock-dot" style={{ background: '#4ade80' }} />
                  <div className="mock-url">ariawebdesigns.com</div>
                </div>
                <div className="mock-row blue" />
                <div className="mock-row w80" />
                <div className="mock-row w50" />
                <div className="mock-row cta-row" />
              </div>
              <div className="why-card-stat">
                <div className="why-card-stat-icon">
                  <Search size={18} strokeWidth={2} />
                </div>
                <div className="why-card-stat-text">
                  <strong>{t.whyWeb.stat1Title}</strong>
                  {t.whyWeb.stat1Desc}
                </div>
              </div>
              <div className="why-card-stat">
                <div className="why-card-stat-icon">
                  <Shield size={18} strokeWidth={2} />
                </div>
                <div className="why-card-stat-text">
                  <strong>{t.whyWeb.stat2Title}</strong>
                  {t.whyWeb.stat2Desc}
                </div>
              </div>
              <div className="why-card-stat">
                <div className="why-card-stat-icon">
                  <Phone size={18} strokeWidth={2} />
                </div>
                <div className="why-card-stat-text">
                  <strong>{t.whyWeb.stat3Title}</strong>
                  {t.whyWeb.stat3Desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
