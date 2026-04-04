import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

const STYLES = [
  { initial: 'M', name: 'Mario', avatarStyle: undefined },
  { initial: 'E', name: 'Elena', avatarStyle: { background: 'linear-gradient(135deg,#7c3aed,#a78bfa)' } },
  { initial: 'A', name: 'Dr. Arben', avatarStyle: { background: 'linear-gradient(135deg,#0f766e,#2dd4bf)' } },
  { initial: 'S', name: 'Sofia', avatarStyle: { background: 'linear-gradient(135deg,#b45309,#fbbf24)' } },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const itemsArray = t.testimonials.items;

  const measure = useCallback(() => {
    const el = wrapRef.current;
    if (el) setWidth(el.offsetWidth);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + itemsArray.length) % itemsArray.length);
    },
    [itemsArray]
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-tag, .section-title, .section-lead', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.carousel-wrap, .carousel-controls', {
        scrollTrigger: {
          trigger: '.carousel-wrap',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const offset = width > 0 ? -index * width : 0;

  return (
    <section className="testimonials section-aria" id="testimonials" aria-labelledby="testimonials-heading" ref={sectionRef}>
      <div className="container-aria">
        <div className="testimonials-header">
          <span className="section-tag">{t.testimonials.tag}</span>
          <h2 className="section-title" id="testimonials-heading">
            {t.testimonials.title}
          </h2>
          <p className="section-lead">{t.testimonials.lead}</p>
        </div>

        <div className="carousel-wrap" ref={wrapRef}>
          <div
            className="carousel-track"
            style={{ transform: `translate3d(${offset}px,0,0)` }}
          >
            {itemsArray.map((item, idx) => (
              <div key={STYLES[idx].name} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="quote-mark" aria-hidden="true">
                    &ldquo;
                  </div>
                  <p className="testimonial-text">{item.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={STYLES[idx].avatarStyle}>
                      {STYLES[idx].initial}
                    </div>
                    <div>
                      <div className="author-name">{STYLES[idx].name}</div>
                      <div className="author-role">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button type="button" className="carousel-btn" aria-label="Previous testimonial" onClick={() => go(-1)}>
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <div className="carousel-dots">
            {itemsArray.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${i === index ? ' active' : ''}`}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" className="carousel-btn" aria-label="Next testimonial" onClick={() => go(1)}>
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
