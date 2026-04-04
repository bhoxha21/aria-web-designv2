import React from 'react';
import MagneticElement from './MagneticElement';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

const LINKS = [
  { href: '#why-website', label: 'Why web' },
  { href: '#why-aria', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Stories' },
];

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();

  const handleToggle = (e) => {
    e.preventDefault();
    setLang(lang === 'sq' ? 'en' : 'sq');
  };

  return (
    <nav className="nav-aria" role="navigation" aria-label="Primary">
      <div className="nav-aria-inner">
        <MagneticElement>
          <a href="#home" className="nav-aria-brand" aria-label="Aria Web Design — Home">
            <span className="nav-aria-brand-text">
              Aria <span>Web Design</span>
            </span>
          </a>
        </MagneticElement>

        <div className="nav-aria-links" role="menubar" aria-label="Sections">
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

        <MagneticElement>
          <a href="#cta" className="nav-aria-cta" aria-label="Start a conversation — contact">
            <MessageCircle size={16} strokeWidth={2} aria-hidden />
            {t.nav.cta}
          </a>
        </MagneticElement>

        <MagneticElement>
          <button 
            type="button" 
            onClick={handleToggle}
            className="lang-toggle" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              color: 'var(--navy)', 
              border: '1px solid rgba(15, 23, 42, 0.15)',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginLeft: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            {lang === 'sq' ? 'SQ | en' : 'EN | sq'}
          </button>
        </MagneticElement>
      </div>
    </nav>
  );
}
