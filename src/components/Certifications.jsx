import { FiAward, FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  return (
    <section id="certificaciones" className="section" aria-label="Certificaciones y cursos">
      <div className="container-app">
        <SectionHeading
          eyebrow="Formación continua"
          title="Certificaciones y cursos"
          description="Aprendizaje constante para mantenerme al día con las mejores prácticas de la industria."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.08}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noreferrer noopener"
                className="surface rounded-2xl p-5 flex items-start gap-4 card-hover h-full group"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="shrink-0 grid place-items-center w-11 h-11 rounded-xl"
                  style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
                  whileHover={{ rotate: 12, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <FiAward size={19} aria-hidden="true" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono mt-2" style={{ color: 'var(--text-tertiary)' }}>
                    {cert.date}
                  </p>
                </div>
                <FiArrowUpRight
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text-tertiary)' }}
                  aria-hidden="true"
                />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
