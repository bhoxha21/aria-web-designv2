import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticElement from './MagneticElement';
import { useLanguage } from '../context/LanguageContext';

const WA_HREF =
  'https://wa.me/355694704555?text=Hi%20Aria%20Web%20Design%2C%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

const CTA = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-badge, .cta-title, .cta-text, .cta-note, .btn-whatsapp', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-heading" ref={sectionRef}>
      <div className="cta-inner">
        <div className="cta-badge">
          <svg width="8" height="8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="cta-badge-text">{t.cta.badge}</span>
        </div>
        <h2 className="cta-title" id="cta-heading">
          {t.cta.title}
        </h2>
        <p className="cta-text">
          {t.cta.text}
        </p>
        <MagneticElement>
          <a href={WA_HREF} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L.057 24l6.305-1.654A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.382l-.36-.214-3.733.979 1-3.642-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
            </svg>
            {t.cta.btn}
          </a>
        </MagneticElement>
        <p className="cta-note">{t.cta.note}</p>
      </div>
    </section>
  );
};

export default CTA;
