import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { scrollToSection } from '../utils/scrollTo.js'
import MagneticButton from './MagneticButton.jsx'
import TypewriterText from './TypewriterText.jsx'
import CountUp from './CountUp.jsx'

const ROLES = [
  'Ingeniero de Software Backend',
  'Especialista en Python',
  'Scrum Master',
  'Ingeniero de Producto',
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Presentación"
    >
      {/* Ambient gradient blobs — slow, continuous drift for a "living" background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] w-[420px] h-[420px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, var(--color-accent-2), transparent 70%)' }}
        animate={{ x: [0, -20, 15, 0], y: [0, -15, 15, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-app grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="eyebrow inline-flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-success)' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            Disponible para nuevos proyectos
          </motion.span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Hola, soy <span className="text-gradient">Miguel Serrano</span>
            <br />
            Ingeniero de Software |Desarrollador fullstack
          </h1>

          <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Diseño y construyo productos digitales rápidos, accesibles y cuidados al
            detalle. Me especializo en React y en llevar interfaces desde el prototipo
            hasta producción con altos estándares de calidad.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton as="a" href="/cv/CV-Miguel-Serrano.pdf" download className="btn btn-primary">
              <FiDownload size={17} /> Descargar CV
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => scrollToSection('contacto')}
              className="btn btn-secondary"
            >
              Contáctame
            </MagneticButton>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-2xl font-extrabold">
                <CountUp value={5} suffix="+" />
              </p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Años de experiencia</p>
            </div>
            <div className="w-px h-10" style={{ backgroundColor: 'var(--border)' }} />
            <div>
              <p className="text-2xl font-extrabold">
                <CountUp value={30} suffix="+" />
              </p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Proyectos entregados</p>
            </div>
            <div className="w-px h-10" style={{ backgroundColor: 'var(--border)' }} />
            <div>
              <p className="text-2xl font-extrabold">
                <CountUp value={12} />
              </p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Certificaciones</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto lg:mx-0 w-full max-w-sm"
        >
          <motion.div
            className="relative rounded-[2rem] overflow-hidden aspect-[4/5] surface"
            style={{ boxShadow: 'var(--shadow-lg)' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/profile1.jpg"
              alt="Foto de perfil de Miguel Serrano"
              className="w-full h-full object-cover"
              loading="eager"
              width={400}
              height={500}
            />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 surface rounded-2xl px-4 py-3 hidden sm:block"
            style={{ boxShadow: 'var(--shadow-md)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>Stack principal</p>
            <p className="text-sm font-semibold mt-0.5">React · Node · AWS</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('sobre-mi')}
        aria-label="Desplazarse a la siguiente sección"
        className="hidden sm:grid absolute bottom-8 left-1/2 -translate-x-1/2 place-items-center w-10 h-10 rounded-full border"
        style={{ borderColor: 'var(--border-strong)' }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, borderColor: 'var(--color-accent)' }}
      >
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  )
}
