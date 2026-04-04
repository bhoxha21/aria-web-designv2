import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticElement = ({ children, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const element = ref.current;
    if (!element) return;

    let hoverArea = 50; 
    
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseEnter = () => {
      element.addEventListener('mousemove', handleMouseMove);
      document.dispatchEvent(new CustomEvent('magnetic-enter'));
    };

    const handleMouseLeave = () => {
      element.removeEventListener('mousemove', handleMouseMove);
      document.dispatchEvent(new CustomEvent('magnetic-leave'));
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default MagneticElement;
