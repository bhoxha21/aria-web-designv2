import React, { useEffect, useRef } from 'react';
import { BadgePercent, Headphones, LayoutTemplate, Shield } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function WhyAria() {
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

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-aria section-aria" id="why-aria" ref={sectionRef}>
      <div className="container-aria">
        <span className="section-tag">{t.whyAria.tag}</span>
        <h2 className="section-title">{t.whyAria.title}</h2>
        <p className="section-lead">{t.whyAria.lead}</p>
        <div className="features-grid">
          {t.whyAria.features.map(({ title, desc }, idx) => {
            const Icon = [BadgePercent, Shield, Headphones, LayoutTemplate][idx];
            return (
              <div key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="feature-title">{title}</div>
                <p className="feature-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
