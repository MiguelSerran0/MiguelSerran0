import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function TimelineItem({ item, isLast }) {
  const Icon = item.type === 'education' ? FiBookOpen : FiBriefcase

  return (
    <Reveal as="li" className="relative pl-14 pb-10 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-10 bottom-0 w-px"
          style={{ backgroundColor: 'var(--border)' }}
        />
      )}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 grid place-items-center w-10 h-10 rounded-full"
        style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
        whileHover={{ scale: 1.15, rotate: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Icon size={17} />
      </motion.span>

      <div className="surface rounded-2xl p-5 sm:p-6 card-hover">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-base sm:text-lg">{item.role}</h3>
          <span className="tag">{item.period}</span>
        </div>
        <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
          {item.place}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {item.description}
        </p>
      </div>
    </Reveal>
  )
}
