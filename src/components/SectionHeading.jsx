import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignment} mb-14`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      {description && (
        <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  )
}
