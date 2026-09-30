import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Photo } from '../site'

// Adapted from the "Showcase slider" Figma template: full-bleed photos slide
// horizontally on a timer.
const transition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] as const }
const INTERVAL_MS = 5000

export function HeroSlider({ slides }: { slides: Photo[] }) {
  const reduceMotion = useReducedMotion()
  const [position, setPosition] = useState(0) // 0..slides.length; the last value is the duplicated first slide
  const [snapping, setSnapping] = useState(false)
  const active = position % slides.length

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setPosition((p) => p + 1), INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  // After sliding onto the duplicated first slide, jump back to the real one without animating.
  useEffect(() => {
    if (position !== slides.length) return
    const id = setTimeout(() => {
      setSnapping(true)
      setPosition(0)
    }, transition.duration * 1000)
    return () => clearTimeout(id)
  }, [position, slides.length])

  useEffect(() => {
    if (snapping) requestAnimationFrame(() => setSnapping(false))
  }, [snapping])

  const track = [...slides, slides[0]]

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <motion.div
        className="flex h-full"
        animate={{ x: `${-position * 100}vw` }}
        transition={snapping || reduceMotion ? { duration: 0 } : transition}
      >
        {track.map((slide, i) => (
          <div
            key={i}
            role="img"
            aria-label={slide.alt}
            aria-hidden={i % slides.length !== active}
            className="h-full w-screen shrink-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${slide.src}')`, backgroundPosition: slide.position }}
          />
        ))}
      </motion.div>
    </div>
  )
}
