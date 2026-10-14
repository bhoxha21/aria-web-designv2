import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <a href="#home" className="footer-brand" aria-label="Aria Web Design Home">
          <span className="brand-badge-icon">
            <Sparkles size={16} />
          </span>
          <span className="footer-brand-text">
            Aria <span>Web Design</span>
          </span>
        </a>
        <p className="footer-tagline">{t.footer.tagline}</p>

        <nav className="footer-links" aria-label="Footer Navigation">
          {t.footer.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer-copy">{t.footer.copy}</p>
        <p className="footer-disclaimer">{t.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
