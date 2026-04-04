import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import LiquidRibbon from './LiquidRibbon'
import FloatingBubbles from './FloatingBubbles'

const Scene = () => {
  const root = typeof document !== 'undefined' ? document.getElementById('root') : undefined

  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 1024);
      }, 150);
    };
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  if (isMobile) {
    return <FloatingBubbles />;
  }

  return (
    <div className="canvas-container" aria-hidden="true">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        dpr={[1, 1.5]}
        eventSource={root ?? undefined}
        eventPrefix="client"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={42} near={0.1} far={50} />
        <color attach="background" args={['#f8fafc']} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[8, 10, 6]} intensity={1.35} />
        <directionalLight position={[-6, 4, -4]} intensity={0.35} color="#e0f2fe" />

        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={0.55} />
          <Float speed={1.65} rotationIntensity={0.85} floatIntensity={1.4}>
            <LiquidRibbon />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
