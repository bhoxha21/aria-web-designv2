import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Instead of purely React state updating which can lag,
      // we can also use GSAP to move the cursor for buttery smoothness.
      gsap.to('.custom-cursor', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMagneticEnter = () => setIsMagnetic(true);
    const handleMagneticLeave = () => setIsMagnetic(false);

    window.addEventListener('mousemove', onMouseMove);

    // Initial positioning
    gsap.set('.custom-cursor', { x: -100, y: -100 });

    // Use event delegation for magnetic hover
    document.addEventListener('magnetic-enter', handleMagneticEnter);
    document.addEventListener('magnetic-leave', handleMagneticLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('magnetic-enter', handleMagneticEnter);
      document.removeEventListener('magnetic-leave', handleMagneticLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isMagnetic ? 'magnetic-hover' : ''}`}
    />
  );
};

export default CustomCursor;
