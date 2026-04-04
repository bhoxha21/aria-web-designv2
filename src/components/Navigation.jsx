import React, { useState } from 'react';
import MagneticElement from './MagneticElement';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#why-website', label: 'Why web' },
  { href: '#why-aria', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Stories' },
];

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setLang(lang === 'sq' ? 'en' : 'sq');
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="nav-aria" role="navigation" aria-label="Primary">
        <div className="nav-aria-inner">
          <MagneticElement>
            <a href="#home" className="nav-aria-brand" aria-label="Aria Web Design — Home">
              <span className="nav-aria-brand-text">
                Aria <span>Web Design</span>
              </span>
            </a>
          </MagneticElement>

          <div className="nav-aria-links-desktop">
            <MagneticElement>
              <a href="#why-website" role="menuitem">{t.nav.why}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#why-aria" role="menuitem">{t.nav.services}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#process" role="menuitem">{t.nav.process}</a>
            </MagneticElement>
            <MagneticElement>
              <a href="#testimonials" role="menuitem">{t.nav.stories}</a>
            </MagneticElement>
          </div>

          <div className="nav-aria-actions">
            <MagneticElement>
              <a href="#cta" className="nav-aria-cta" aria-label="Start a conversation — contact">
                <MessageCircle size={16} strokeWidth={2} aria-hidden />
                <span className="cta-text">{t.nav.cta}</span>
              </a>
            </MagneticElement>

            <MagneticElement>
              <button 
                type="button" 
                onClick={handleToggle}
                className="lang-toggle" 
                aria-label="Toggle language"
                title={lang === 'sq' ? 'Switch to English' : 'Switch to Albanian'}
              >
                <img 
                  src={lang === 'sq' ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/al.png"} 
                  alt={lang === 'sq' ? "US Flag" : "Albania Flag"} 
                  width="22"
                  style={{ borderRadius: '2px', display: 'block' }}
                />
              </button>
            </MagneticElement>

            <MagneticElement>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </MagneticElement>
          </div>
        </div>
      </nav>

      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          <a href="#why-website" onClick={closeMenu}>{t.nav.why}</a>
          <a href="#why-aria" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#process" onClick={closeMenu}>{t.nav.process}</a>
          <a href="#testimonials" onClick={closeMenu}>{t.nav.stories}</a>
          <a href="#cta" className="mobile-drawer-cta" onClick={closeMenu}>
            <MessageCircle size={18} />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
