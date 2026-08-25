import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const springX = useSpring(x, { stiffness: 100, damping: 22, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 100, damping: 22, mass: 0.4 })
  const translateX = useTransform(springX, (v) => v - 220)
  const translateY = useTransform(springY, (v) => v - 220)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[440px] h-[440px] rounded-full blur-3xl"
      style={{
        x: translateX,
        y: translateY,
        background:
          'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 70%)',
      }}
    />
  )
}
