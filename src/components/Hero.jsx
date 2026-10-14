import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import MagneticElement from './MagneticElement';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Smartphone, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const [tapSuccess, setTapSuccess] = useState(false);

  const handleTestTap = () => {
    setTapSuccess(true);
    setTimeout(() => setTapSuccess(false), 3500);
  };

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="container-aria">
        <div className="hero-grid-layout">
          {/* Left Column: Sales Copy & CTAs */}
          <div className="hero-copy-col">
            <div className="hero-badge-aria">
              <span className="hero-badge-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 id="hero-heading" className="hero-h1">
              <span className="hero-h1-lead">{t.hero.headingStart} </span>
              <span className="hero-h1-gradient">{t.hero.headingAccent}</span>
            </h1>

            <p className="hero-sub">
              {t.hero.sub}
            </p>

            <div className="hero-actions-row">
              <MagneticElement>
                <a href="#book" className="btn-primary-hero">
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
                </a>
              </MagneticElement>

              <MagneticElement>
                <a href="#proof" className="btn-secondary-hero">
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </MagneticElement>
            </div>

            {/* Trust Proof Bar */}
            <div className="hero-trust-bar">
              {t.hero.trustBadges.map((badge, idx) => (
                <div key={idx} className="trust-badge-item">
                  <div className="trust-badge-val">{badge.value}</div>
                  <div className="trust-badge-lbl">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Acrylic NFC & Storefront Simulation */}
          <div className="hero-visual-col">
            <div className="hero-visual-card-glass">
              {/* Standout Header Badge */}
              <div className="visual-card-header">
                <div className="visual-live-dot" />
                <span className="visual-card-tag">Interactive Review Automation Preview</span>
              </div>

              {/* Physical Stand + Mobile Phone Interactive Demo */}
              <div className="visual-stand-demo-wrapper">
                <div className="acrylic-stand-card">
                  <div className="stand-badge-top">PHYSICAL ACRYLIC STAND</div>
                  <div className="stand-g-logo">
                    <span className="g-letter">G</span>
                    <div className="stand-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#eab308" color="#eab308" />
                      ))}
                    </div>
                  </div>
                  <div className="stand-instruction">TAP PHONE ON STAND</div>
                  <div className="stand-nfc-wave">
                    <span className="wave-ring r1" />
                    <span className="wave-ring r2" />
                    <Smartphone size={32} className="stand-phone-icon" />
                  </div>

                  <button 
                    type="button" 
                    onClick={handleTestTap}
                    className={`btn-simulate-tap ${tapSuccess ? 'tapped' : ''}`}
                    aria-label="Simulate tapping customer phone on NFC stand"
                  >
                    {tapSuccess ? '✓ 5★ Google Review Triggered!' : '👉 Click to Simulate Customer Tap'}
                  </button>
                </div>

                {/* Pop-up Google 5-Star Simulation Dialog */}
                {tapSuccess && (
                  <div className="simulated-google-popup animate-pop">
                    <div className="popup-google-brand">
                      <span className="popup-g-icon">G</span>
                      <strong>Google Maps Review</strong>
                    </div>
                    <p className="popup-prompt">Rate & Review Your Experience</p>
                    <div className="popup-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={22} fill="#eab308" color="#eab308" className="star-bounce" />
                      ))}
                    </div>
                    <div className="popup-success-badge">
                      <CheckCircle2 size={16} color="#16a34a" />
                      <span>Opens automatically on customer's phone!</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Trust Note */}
              <div className="visual-card-footer">
                <div className="footer-feature-chip">
                  <Zap size={14} color="#0891b2" />
                  <span>Sub-second mobile load</span>
                </div>
                <div className="footer-feature-chip">
                  <ShieldCheck size={14} color="#0891b2" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
