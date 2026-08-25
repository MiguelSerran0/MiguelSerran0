import { skillCategories } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'
import SkillCategoryCard from './SkillCategoryCard.jsx'

export default function Skills() {
  return (
    <section id="habilidades" className="section" aria-label="Habilidades">
      <div className="container-app">
        <SectionHeading
          eyebrow="Habilidades"
          title="Herramientas con las que trabajo a diario"
          description="Una vista rápida de mi stack técnico y las habilidades blandas que sostienen mi forma de trabajar."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard
              key={category.id}
              title={category.title}
              Icon={category.Icon}
              accent={category.accent}
              items={category.items}
              delay={(i % 3) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
