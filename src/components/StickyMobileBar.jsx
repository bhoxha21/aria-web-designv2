import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  const { t, lang } = useLanguage();

  const waMsg = encodeURIComponent(
    lang === 'es'
      ? 'Hola Aria Web Design, quiero información sobre el paquete de $697 y el soporte NFC gratis.'
      : 'Hi Aria Web Design, I would like information about the $697 bundle and free NFC stand.'
  );

  return (
    <div className="sticky-mobile-cta-bar" aria-label="Mobile Quick Action Bar">
      <div className="mobile-bar-inner">
        <a href="#book" className="mobile-bar-btn-primary">
          <Sparkles size={16} />
          <span>{t.nav.cta}</span>
        </a>

        <a 
          href={`https://wa.me/355694704555?text=${waMsg}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bar-btn-wa"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
