import React, { useState } from 'react';
import MagneticElement from './MagneticElement';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navigation() {
  const { lang, toggleLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="nav-aria" role="navigation" aria-label="Primary">
        <div className="nav-aria-inner">
          <MagneticElement>
            <a href="#home" className="nav-aria-brand" aria-label="Aria Web Design — Home">
              <span className="brand-badge-icon">
                <Sparkles size={16} />
              </span>
              <span className="nav-aria-brand-text">
                Aria <span>Web Design</span>
              </span>
            </a>
          </MagneticElement>

          <div className="nav-aria-links-desktop">
            <MagneticElement>
              <a href="#offer" role="menuitem">{t.nav.offer}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#proof" role="menuitem">{t.nav.proof}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#advantage" role="menuitem">{t.nav.advantage}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#process" role="menuitem">{t.nav.process}</a>
            </MagneticElement>
          </div>

          <div className="nav-aria-actions">
            <MagneticElement>
              <button 
                type="button" 
                onClick={toggleLang}
                className="lang-toggle-btn" 
                aria-label={`Current language: ${lang.toUpperCase()}. Click to switch to ${lang === 'en' ? 'Spanish' : 'English'}.`}
                title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <span className={`lang-chip ${lang === 'en' ? 'active' : ''}`}>EN</span>
                <span className="lang-divider">/</span>
                <span className={`lang-chip ${lang === 'es' ? 'active' : ''}`}>ES</span>
              </button>
            </MagneticElement>

            <MagneticElement>
              <a href="#book" className="nav-aria-cta" aria-label="Claim Free NFC Stand Walkthrough">
                <span className="cta-dot" />
                <span className="cta-text">{t.nav.cta}</span>
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden />
              </a>
            </MagneticElement>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-aria-brand-text">
            Aria <span>Web Design</span>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <a href="#offer" onClick={closeMenu}>{t.nav.offer}</a>
          <a href="#proof" onClick={closeMenu}>{t.nav.proof}</a>
          <a href="#advantage" onClick={closeMenu}>{t.nav.advantage}</a>
          <a href="#process" onClick={closeMenu}>{t.nav.process}</a>
          
          <div className="mobile-drawer-lang-row">
            <span>Language / Idioma:</span>
            <button 
              type="button" 
              onClick={toggleLang}
              className="lang-toggle-btn mobile-lang-btn"
            >
              <span className={`lang-chip ${lang === 'en' ? 'active' : ''}`}>English</span>
              <span className="lang-divider">|</span>
              <span className={`lang-chip ${lang === 'es' ? 'active' : ''}`}>Español</span>
            </button>
          </div>

          <a href="#book" className="mobile-drawer-cta" onClick={closeMenu}>
            <Sparkles size={18} />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
