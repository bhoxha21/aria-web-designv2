import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ContrastComparison() {
  const { t } = useLanguage();

  return (
    <section className="contrast-section section-aria" aria-labelledby="contrast-heading">
      <div className="container-aria">
        <div className="section-header-centered">
          <span className="section-tag">{t.contrast.tag}</span>
          <h2 className="section-title" id="contrast-heading">{t.contrast.title}</h2>
          <p className="section-lead">{t.contrast.subtitle}</p>
        </div>

        <div className="contrast-grid-layout">
          {/* Left: The Traditional Agency Trap */}
          <div className="contrast-card card-old-way">
            <div className="contrast-card-header">
              <div className="contrast-badge-old">THE OLD WAY</div>
              <h3 className="contrast-card-title">{t.contrast.oldWayTitle}</h3>
            </div>
            <ul className="contrast-items-list">
              {t.contrast.oldWayItems.map((item, idx) => (
                <li key={idx} className="contrast-item old-item">
                  <XCircle size={20} className="icon-old-way" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The Aria Web Design Model */}
          <div className="contrast-card card-aria-way">
            <div className="card-popular-pill">THE REVENUE ENGINE</div>
            <div className="contrast-card-header">
              <div className="contrast-badge-aria">THE ARIA MODEL</div>
              <h3 className="contrast-card-title">{t.contrast.ariaWayTitle}</h3>
            </div>
            <ul className="contrast-items-list">
              {t.contrast.ariaWayItems.map((item, idx) => (
                <li key={idx} className="contrast-item aria-item">
                  <CheckCircle2 size={20} className="icon-aria-way" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
