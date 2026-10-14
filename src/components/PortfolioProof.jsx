import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, CheckCircle2, Smartphone, ShieldCheck, Sparkles, ZoomIn, X } from 'lucide-react';
import MagneticElement from './MagneticElement';

export default function PortfolioProof() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const projects = t.portfolio.projects;
  const curr = projects[activeProject];

  return (
    <section className="portfolio-section section-aria" id="proof" aria-labelledby="portfolio-heading">
      <div className="container-aria">
        {/* Header */}
        <div className="section-header-centered">
          <span className="section-tag">{t.portfolio.tag}</span>
          <h2 className="section-title" id="portfolio-heading">{t.portfolio.title}</h2>
          <p className="section-lead">{t.portfolio.subtitle}</p>
        </div>

        {/* Project Selector Tabs */}
        <div className="portfolio-tabs-nav" role="tablist">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              role="tab"
              aria-selected={activeProject === idx}
              className={`portfolio-tab-btn ${activeProject === idx ? 'active' : ''}`}
              onClick={() => setActiveProject(idx)}
            >
              <span className="tab-indicator-dot" />
              <span className="tab-proj-name">{proj.name}</span>
              <span className="tab-proj-domain">({proj.domain})</span>
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        <div className="portfolio-showcase-card">
          <div className="project-grid">
            {/* Left: Mobile Viewport Simulator with Real Client Screenshot */}
            <div className="project-simulator-col">
              <div className="phone-device-frame">
                <div className="phone-speaker" />
                <div className="phone-screen-container">
                  <img 
                    src={curr.image} 
                    alt={`Live client website screenshot for ${curr.name}`}
                    className="phone-screenshot-img"
                    loading="lazy"
                  />
                  <div className="phone-inspect-overlay">
                    <button 
                      type="button" 
                      onClick={() => setModalImage(curr.image)}
                      className="btn-zoom-inspect"
                      aria-label={`Zoom into ${curr.name} screenshot`}
                    >
                      <ZoomIn size={16} />
                      <span>Click to Enlarge</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-World Utility & Transformation Breakdown */}
            <div className="project-details-col">
              <div className="project-badge-tag">{curr.badge}</div>
              <h3 className="project-headline">{curr.name}</h3>
              <p className="project-tagline">{curr.tagline}</p>
              <p className="project-overview">{curr.overview}</p>

              {/* Transformation Highlights */}
              <div className="project-highlights-box">
                <h4 className="highlights-title">Engineering & Conversion Utility:</h4>
                <ul className="highlights-list">
                  {curr.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="highlight-item">
                      <CheckCircle2 size={17} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measurable Performance Metrics */}
              <div className="project-metrics-row">
                {curr.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="metric-pill">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* External Link & CTA */}
              <div className="project-action-row">
                <a 
                  href={curr.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-live-visit"
                >
                  <span>Visit {curr.domain}</span>
                  <ExternalLink size={15} />
                </a>

                <a href="#book" className="btn-get-similar">
                  <span>Get A Build Like This</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Notice */}
        <p className="portfolio-subnote-text">
          <Sparkles size={14} />
          <span>{t.portfolio.interactiveLabel}</span>
        </p>

        {/* Zoom Lightbox Modal */}
        {modalImage && (
          <div className="lightbox-modal-backdrop" onClick={() => setModalImage(null)}>
            <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close-btn"
                onClick={() => setModalImage(null)}
                aria-label="Close zoomed view"
              >
                <X size={24} />
              </button>
              <img 
                src={modalImage} 
                alt="Enlarged screenshot preview" 
                className="lightbox-img" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
