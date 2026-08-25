import { motion } from 'framer-motion'

export default function SkillChip({ name, Icon, accentVar }) {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      className="skill-chip"
      style={{ '--chip-accent': `var(${accentVar})` }}
      onPointerMove={handlePointerMove}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
    >
      <span className="skill-chip-icon" aria-hidden="true">
        <Icon size={15} />
      </span>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}
