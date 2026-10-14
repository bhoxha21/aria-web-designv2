import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import MagneticElement from './MagneticElement';
import { Check, ShieldCheck, Zap, Star, ArrowRight, Smartphone, TrendingUp, Search, Award } from 'lucide-react';

export default function OfferBundle() {
  const { t } = useLanguage();

  return (
    <section className="offer-bundle-section section-aria" id="offer" aria-labelledby="offer-heading">
      <div className="container-aria">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">{t.offer.tag}</span>
          <h2 className="section-title" id="offer-heading">{t.offer.title}</h2>
          <p className="section-lead">{t.offer.subtitle}</p>
        </div>

        {/* Master Offer Card */}
        <div className="master-offer-card">
          <div className="offer-glow-bg" />
          
          <div className="offer-grid">
            {/* Left Col: Offer Breakdown */}
            <div className="offer-details-col">
              <div className="offer-price-banner">
                <div className="price-tag-wrap">
                  <span className="price-amount">{t.offer.price}</span>
                  <span className="price-period">{t.offer.pricePeriod}</span>
                </div>
                <div className="offer-scarcity-badge">
                  <span className="scarcity-dot" />
                  <span>{t.offer.badge}</span>
                </div>
              </div>

              <p className="price-subnote">{t.offer.priceNote}</p>

              <h3 className="included-title">{t.offer.whatsIncludedTitle}</h3>

              <div className="included-items-list">
                {t.offer.items.map((item, idx) => (
                  <div key={idx} className="included-item">
                    <div className="included-check">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="included-item-title">{item.title}</h4>
                      <p className="included-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Risk Reversal Guarantee Box */}
              <div className="risk-reversal-box">
                <div className="guarantee-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="guarantee-title">{t.offer.guaranteeTitle}</h4>
                  <p className="guarantee-desc">{t.offer.guaranteeDesc}</p>
                </div>
              </div>

              <div className="offer-action-wrap">
                <MagneticElement>
                  <a href="#book" className="btn-offer-primary">
                    <span>{t.offer.ctaBtn}</span>
                    <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
                  </a>
                </MagneticElement>
              </div>
            </div>

            {/* Right Col: Physical Stand Visual Showcase */}
            <div className="offer-visual-col">
              <div className="stand-showcase-frame">
                <div className="stand-badge-floating">
                  <Award size={16} />
                  <span>INCLUDED FREE ($250 VALUE)</span>
                </div>

                <div className="stand-image-wrap">
                  <img 
                    src="/nfc-stand.jpg" 
                    alt="Custom Acrylic NFC Google Review Stand by Aria Web Design"
                    className="stand-photo-render"
                    loading="lazy"
                  />
                  <div className="stand-photo-overlay" />
                </div>

                <div className="stand-caption-card">
                  <div className="stand-stars-inline">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#eab308" color="#eab308" />
                    ))}
                    <span className="stand-stars-text">Instant 5-Star Reviews</span>
                  </div>
                  <p className="stand-caption-text">
                    Heavyweight, crystal-clear laser-cut acrylic stand custom-encoded to your Google Business Profile. Place it on your reception desk, counter, or bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The "Unfair Advantage" Flywheel Explainer */}
        <div className="advantage-flywheel-wrap" id="advantage">
          <div className="flywheel-header">
            <span className="section-tag">{t.advantage.tag}</span>
            <h3 className="flywheel-title">{t.advantage.title}</h3>
            <p className="flywheel-sub">{t.advantage.subtitle}</p>
          </div>

          <div className="flywheel-steps-grid">
            <div className="flywheel-card">
              <div className="flywheel-step-num">01</div>
              <div className="flywheel-icon-wrap">
                <Smartphone size={24} color="#0891b2" />
              </div>
              <h4 className="flywheel-card-title">{t.advantage.step1Title}</h4>
              <p className="flywheel-card-desc">{t.advantage.step1Desc}</p>
            </div>

            <div className="flywheel-card">
              <div className="flywheel-step-num">02</div>
              <div className="flywheel-icon-wrap">
                <TrendingUp size={24} color="#16a34a" />
              </div>
              <h4 className="flywheel-card-title">{t.advantage.step2Title}</h4>
              <p className="flywheel-card-desc">{t.advantage.step2Desc}</p>
            </div>

            <div className="flywheel-card">
              <div className="flywheel-step-num">03</div>
              <div className="flywheel-icon-wrap">
                <Search size={24} color="#7c3aed" />
              </div>
              <h4 className="flywheel-card-title">{t.advantage.step3Title}</h4>
              <p className="flywheel-card-desc">{t.advantage.step3Desc}</p>
            </div>

            <div className="flywheel-card">
              <div className="flywheel-step-num">04</div>
              <div className="flywheel-icon-wrap">
                <Zap size={24} color="#ea580c" />
              </div>
              <h4 className="flywheel-card-title">{t.advantage.step4Title}</h4>
              <p className="flywheel-card-desc">{t.advantage.step4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
