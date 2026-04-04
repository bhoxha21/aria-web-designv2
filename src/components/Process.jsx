import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
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

      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.steps-grid',
          start: 'top 85%',
        },
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process section-aria" id="process" ref={sectionRef}>
      <div className="container-aria">
        <div className="process-header">
          <span className="section-tag">{t.process.tag}</span>
          <h2 className="section-title">{t.process.title}</h2>
          <p className="section-lead">{t.process.lead}</p>
        </div>
        <div className="steps-grid">
          {t.process.steps.map((s, idx) => (
            <div key={idx} className="step-card">
              <div className="step-num">{idx + 1}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
