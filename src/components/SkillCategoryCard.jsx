import Reveal from './Reveal.jsx'
import SkillChip from './SkillChip.jsx'

export default function SkillCategoryCard({ title, Icon, accent, items, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="category-card surface rounded-2xl p-6 card-hover h-full"
      style={{ '--chip-accent': `var(${accent})` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="category-icon-badge" style={{ '--chip-accent': `var(${accent})` }} aria-hidden="true">
          <Icon size={18} />
        </span>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
        {items.map((item) => (
          <SkillChip key={item.name} name={item.name} Icon={item.Icon} accentVar={accent} />
        ))}
      </div>
    </Reveal>
  )
}
