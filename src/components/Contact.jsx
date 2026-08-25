import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import { validateContactForm, hasErrors } from '../utils/validators.js'
import { socials } from '../data/socials.js'

/**
 * EmailJS configuration.
 * Create a free account at https://www.emailjs.com, set up a service and
 * template, then replace these three values with your own IDs.
 */
const EMAILJS_SERVICE_ID = 'service_mo74t7q'
const EMAILJS_TEMPLATE_ID = 'template_1okyj5p'
const EMAILJS_PUBLIC_KEY = 'T71-MRhK3hI-bcqDC'

const INITIAL_VALUES = { name: '', email: '', subject: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (hasErrors(validationErrors)) return

    setStatus('loading')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setValues(INITIAL_VALUES)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section" aria-label="Contacto">
      <div className="container-app">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto"
          description="¿Tienes una idea, una vacante o simplemente quieres saludar? Escríbeme, respondo en menos de 48 horas."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 max-w-4xl mx-auto">
          <Reveal className="space-y-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Prefiero las conversaciones directas. Si el formulario no es lo tuyo, también
              puedes encontrarme en estas redes.
            </p>
            <ul className="space-y-3">
              {socials.map(({ id, label, href, Icon }) => (
                <li key={id}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 text-sm font-medium surface rounded-xl px-4 py-3 card-hover"
                    whileHover={{ x: 4 }}
                  >
                    <Icon size={17} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="surface rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Nombre" value={values.name} onChange={handleChange} error={errors.name} autoComplete="name" />
                <Field id="email" label="Email" type="email" value={values.email} onChange={handleChange} error={errors.email} autoComplete="email" />
              </div>

              <Field id="subject" label="Asunto" value={values.subject} onChange={handleChange} error={errors.subject} />

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-colors"
                  style={{
                    backgroundColor: 'var(--bg)',
                    border: `1px solid ${errors.message ? '#e0575c' : 'var(--border-strong)'}`,
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-xs mt-1.5" style={{ color: '#e0575c' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <MagneticButton
                as="button"
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full sm:w-auto"
                strength={6}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'loading' ? (
                    <motion.span
                      key="loading"
                      className="inline-flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Enviando...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className="inline-flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiSend size={16} /> Enviar mensaje
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: 'var(--color-success)' }}
                  >
                    <FiCheckCircle /> ¡Mensaje enviado! Te responderé pronto.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    role="alert"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#e0575c' }}
                  >
                    <FiAlertCircle /> Algo salió mal. Intenta de nuevo o escríbeme directo por email.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, value, onChange, error, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        style={{
          backgroundColor: 'var(--bg)',
          border: `1px solid ${error ? '#e0575c' : 'var(--border-strong)'}`,
          color: 'var(--text-primary)',
        }}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs mt-1.5" style={{ color: '#e0575c' }}>
          {error}
        </p>
      )}
    </div>
  )
}
