import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="process section-aria" id="process" aria-labelledby="process-heading">
      <div className="container-aria">
        <div className="section-header-centered">
          <span className="section-tag">{t.process.tag}</span>
          <h2 className="section-title" id="process-heading">{t.process.title}</h2>
          <p className="section-lead">{t.process.subtitle}</p>
        </div>

        <div className="steps-grid">
          {t.process.steps.map((s, idx) => (
            <div key={idx} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
