import React from 'react';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  return (
    <section className="testimonials section-aria" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container-aria">
        <div className="section-header-centered">
          <span className="section-tag">{t.testimonials.tag}</span>
          <h2 className="section-title" id="testimonials-heading">{t.testimonials.title}</h2>
          <p className="section-lead">{t.testimonials.subtitle}</p>
        </div>

        <div className="authentic-testimonials-grid">
          {items.map((item, idx) => (
            <div key={idx} className="authentic-testimonial-card">
              <div className="card-top-bar">
                <div className="verified-client-pill">
                  <ShieldCheck size={14} className="verified-shield-icon" />
                  <span>VERIFIED CLIENT</span>
                </div>
                <div className="testimonial-rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#eab308" color="#eab308" />
                  ))}
                </div>
              </div>

              <div className="quote-body">
                <p className="testimonial-text">&ldquo;{item.quote}&rdquo;</p>
              </div>

              <div className="testimonial-author-row">
                <div className="author-avatar-initial">
                  {item.name.charAt(0)}
                </div>
                <div className="author-details">
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                  {item.clientTag && (
                    <div className="author-client-domain">
                      <span>{item.clientTag}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
