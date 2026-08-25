import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="proyectos" className="section" aria-label="Proyectos destacados">
      <div className="container-app">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo destacado"
          description="Una selección de proyectos donde combiné diseño, rendimiento y buenas prácticas de ingeniería."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
