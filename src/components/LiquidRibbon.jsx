import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'

const LiquidRibbon = () => {
  const meshRef = useRef()
  const matRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return

    if (matRef.current) {
      const hue = (state.clock.elapsedTime * 0.08) % 1;
      matRef.current.color.setHSL(hue, 1.0, 0.85);
      matRef.current.attenuationColor.setHSL(hue, 1.0, 0.65);
    }

    const sy = typeof window !== 'undefined' ? window.scrollY : 0
    const parallaxX = sy * 0.00045
    const parallaxY = sy * 0.00022
    const parallaxRot = sy * 0.00012

    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.22 + parallaxY
    meshRef.current.position.x = 2.35 + parallaxX

    meshRef.current.rotation.x += delta * 0.35
    meshRef.current.rotation.y += delta * 0.22

    const targetX = (state.pointer.x * Math.PI) / 3.2
    const targetY = (state.pointer.y * Math.PI) / 3.2
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.04
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.04
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.08 + parallaxRot
  })

  return (
    <mesh ref={meshRef} position={[2.35, 0, 0]} scale={2.35}>
      <torusKnotGeometry args={[1.45, 0.48, 280, 36]} />
      <MeshTransmissionMaterial
        ref={matRef}
        backside
        samples={12}
        resolution={768}
        transmission={1}
        roughness={0.1}
        thickness={1.65}
        ior={1.52}
        chromaticAberration={0.055}
        anisotropy={0.28}
        distortion={0.48}
        distortionScale={0.55}
        temporalDistortion={0.08}
        color="#bae6fd"
        attenuationDistance={0.55}
        attenuationColor="#0e7490"
      />
    </mesh>
  )
}

export default LiquidRibbon
