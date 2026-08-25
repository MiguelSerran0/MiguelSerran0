import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

export default function Experience() {
  return (
    <section id="experiencia" className="section" aria-label="Experiencia">
      <div className="container-app">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional y académica"
          description="Un recorrido por los equipos y proyectos que dieron forma a mi manera de construir software."
        />

        <ol className="max-w-2xl mx-auto">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} isLast={i === experience.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}
