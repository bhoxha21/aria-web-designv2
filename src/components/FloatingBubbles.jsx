import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

function Bubble({ x, y, size, color }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  )
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    // Generate only 25 bubbles for mobile to keep performance ultra high
    const newBubbles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 5,
      // Matches the Aria web design blue/cyan theme gracefully
      color: `rgba(8, 145, 178, ${Math.random() * 0.15 + 0.1})`, 
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div 
      className="floating-bubbles-bg" 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #f1f5f9, #bae6fd, #e0f2fe)',
      }}
    >
      <svg style={{ width: '100%', height: '100%' }}>
        <title>Floating Bubbles Background</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}
