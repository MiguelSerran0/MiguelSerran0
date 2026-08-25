import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useScrollThreshold } from '../hooks/useScrollProgress.js'

const RADIUS = 19
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function BackToTop() {
  const visible = useScrollThreshold(480)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 grid place-items-center w-11 h-11 rounded-full"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-md)' }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="22" cy="22" r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="2" />
            <motion.circle
              cx="22"
              cy="22"
              r={RADIUS}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{ pathLength: progress }}
            />
          </svg>
          <motion.span
            className="relative grid place-items-center"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowUp size={17} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
