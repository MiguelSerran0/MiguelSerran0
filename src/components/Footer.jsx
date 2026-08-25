import { motion } from 'framer-motion'
import { socials } from '../data/socials.js'
import { scrollToSection } from '../utils/scrollTo.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-app py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.button
          type="button"
          onClick={() => scrollToSection('inicio')}
          className="font-bold text-lg tracking-tight"
          whileHover={{ scale: 1.04 }}
        >
          Miguel<span className="text-gradient">.dev</span>
        </motion.button>

        <ul className="flex items-center gap-2">
          {socials.map(({ id, label, href, Icon }) => (
            <li key={id}>
              <motion.a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid place-items-center w-9 h-9 rounded-full border"
                style={{ borderColor: 'var(--border)' }}
                whileHover={{ scale: 1.12, y: -2, borderColor: 'var(--color-accent)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            </li>
          ))}
        </ul>

        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
          © {year} Miguel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
