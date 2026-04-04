import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyWebsite from './components/WhyWebsite'
import WhyAria from './components/WhyAria'
import Process from './components/Process'
import FloatingStats from './components/FloatingStats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import SiteFooter from './components/SiteFooter'
import Scene from './components/Scene'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const onResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('resize', onResize)
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <CustomCursor />
      <Scene />
      <Navigation />
      <main id="main-content">
        <Hero />
        <WhyWebsite />
        <WhyAria />
        <Process />
        <FloatingStats />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
