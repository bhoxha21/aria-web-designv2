import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function SiteFooter() {
  const footerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-brand, .footer-links a, .footer-copy', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="site-footer" role="contentinfo" ref={footerRef}>
      <div className="footer-inner">
        <a href="#home" className="footer-brand">
          {t.footer.brand}
        </a>
        <nav className="footer-links" aria-label="Footer">
          {t.footer.links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <p className="footer-copy">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
