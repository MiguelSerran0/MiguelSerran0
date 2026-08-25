import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/nav.js'
import { scrollToSection } from '../utils/scrollTo.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScrollThreshold } from '../hooks/useScrollProgress.js'
import ThemeToggle from './ThemeToggle.jsx'
import MagneticButton from './MagneticButton.jsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = useScrollThreshold(24)
  const activeId = useActiveSection(navLinks.map((l) => l.id))

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-shadow duration-300">
      <nav
        className={`glass ${scrolled ? '' : 'bg-transparent border-transparent'}`}
        style={!scrolled ? { backgroundColor: 'transparent', borderColor: 'transparent', backdropFilter: 'none' } : undefined}
        aria-label="Navegación principal"
      >
        <div className="container-app flex items-center justify-between h-16">
          <motion.button
            type="button"
            onClick={() => handleNavClick('inicio')}
            className="font-bold text-lg tracking-tight"
            aria-label="Ir al inicio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Miguel<span className="text-gradient">.dev</span>
          </motion.button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors"
                  style={{ color: activeId === link.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ backgroundColor: 'var(--surface-hover)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton as="button" onClick={() => handleNavClick('contacto')} className="btn btn-primary" strength={10}>
              Contáctame
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              className="grid place-items-center w-9 h-9 rounded-full border"
              style={{ borderColor: 'var(--border-strong)' }}
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass lg:hidden overflow-hidden"
          >
            <ul className="container-app flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium"
                    style={{
                      color: activeId === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: activeId === link.id ? 'var(--surface-hover)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
