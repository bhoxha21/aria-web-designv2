import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, Send, CheckCircle2, ShieldCheck, Clock, Zap } from 'lucide-react';
import MagneticElement from './MagneticElement';

export default function WalkthroughForm() {
  const { t, lang } = useLanguage();
  const [formState, setFormState] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    website: '',
    businessType: t.close.form.businessTypeOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const encodedWhatsAppMsg = encodeURIComponent(
    lang === 'es'
      ? `Hola Aria Web Design, me gustaría reclamar mi demostración y soporte acrílico NFC gratis para mi negocio (${formState.businessName || 'mi local'}).`
      : `Hi Aria Web Design, I would like to claim my free NFC review stand walkthrough for my business (${formState.businessName || 'my business'}).`
  );

  const waHref = `https://wa.me/355694704555?text=${encodedWhatsAppMsg}`;

  return (
    <section className="walkthrough-section section-aria" id="book" aria-labelledby="book-heading">
      <div className="container-aria">
        <div className="close-card-wrapper">
          <div className="close-header-centered">
            <div className="close-urgency-badge">
              <span className="urgency-pulse" />
              <span>{t.close.badge}</span>
            </div>
            <h2 className="close-main-title" id="book-heading">{t.close.title}</h2>
            <p className="close-main-sub">{t.close.subtitle}</p>
          </div>

          <div className="close-grid">
            {/* Form Column */}
            <div className="form-card-container">
              {isSubmitted ? (
                <div className="form-success-box animate-pop">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} color="#16a34a" />
                  </div>
                  <h3 className="success-title">{t.close.form.successTitle}</h3>
                  <p className="success-message">{t.close.form.successMessage}</p>
                  
                  <div className="success-chat-alternative">
                    <a 
                      href={waHref} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp-direct"
                    >
                      <MessageCircle size={18} />
                      <span>{t.close.form.directChat}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="walkthrough-lead-form">
                  <div className="form-row-2col">
                    <div className="form-field-group">
                      <label htmlFor="businessName">{t.close.form.businessName} *</label>
                      <input 
                        type="text" 
                        id="businessName" 
                        name="businessName" 
                        required 
                        value={formState.businessName}
                        onChange={handleChange}
                        placeholder={t.close.form.businessNamePlaceholder} 
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="ownerName">{t.close.form.ownerName} *</label>
                      <input 
                        type="text" 
                        id="ownerName" 
                        name="ownerName" 
                        required 
                        value={formState.ownerName}
                        onChange={handleChange}
                        placeholder={t.close.form.ownerNamePlaceholder} 
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-field-group">
                      <label htmlFor="phone">{t.close.form.phone} *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder={t.close.form.phonePlaceholder} 
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="website">{t.close.form.website}</label>
                      <input 
                        type="text" 
                        id="website" 
                        name="website" 
                        value={formState.website}
                        onChange={handleChange}
                        placeholder={t.close.form.websitePlaceholder} 
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="businessType">{t.close.form.businessType}</label>
                    <select 
                      id="businessType" 
                      name="businessType"
                      value={formState.businessType}
                      onChange={handleChange}
                    >
                      {t.close.form.businessTypeOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-submit-walkthrough"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>{t.close.form.submitting}</span>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        <span>{t.close.form.submitBtn}</span>
                      </>
                    )}
                  </button>

                  <p className="form-disclaimer-note">
                    <ShieldCheck size={14} />
                    <span>{t.close.note}</span>
                  </p>
                </form>
              )}
            </div>

            {/* Direct Connect & SLA Reassurance Column */}
            <div className="close-reassurance-col">
              <div className="sla-card">
                <div className="sla-icon-row">
                  <Clock size={28} className="sla-icon" />
                  <span className="sla-highlight">2-Hour Rapid Response SLA</span>
                </div>
                <h3 className="sla-title">Direct Owner-to-Designer Communication</h3>
                <p className="sla-text">
                  No account managers, no automated support queues. When you contact Aria Web Design, you speak directly with the senior engineer who codes your site and programs your NFC stand.
                </p>

                <div className="sla-perks-list">
                  <div className="sla-perk-item">
                    <Zap size={16} color="#0891b2" />
                    <span>Complimentary mobile speed & local SEO audit included</span>
                  </div>
                  <div className="sla-perk-item">
                    <ShieldCheck size={16} color="#0891b2" />
                    <span>$0 down to begin initial prototype review</span>
                  </div>
                </div>

                <div className="direct-wa-box">
                  <p className="direct-wa-sub">{t.close.form.directChat}</p>
                  <MagneticElement>
                    <a 
                      href={waHref} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-wa-instant"
                    >
                      <MessageCircle size={20} />
                      <span>{t.close.form.chatPrompt}</span>
                    </a>
                  </MagneticElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
