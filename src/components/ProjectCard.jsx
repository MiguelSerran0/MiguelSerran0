import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import MagneticButton from './MagneticButton.jsx'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="surface rounded-2xl overflow-hidden card-hover flex flex-col h-full group" maxTilt={6}>
        <div className="aspect-video overflow-hidden" style={{ backgroundColor: 'var(--surface-hover)' }}>
          <img
            src={project.image}
            alt={`Vista previa del proyecto ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
            width={600}
            height={400}
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm mt-2 flex-1" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-5">
            <MagneticButton
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-secondary flex-1"
              aria-label={`Ver código de ${project.title} en GitHub`}
              strength={8}
            >
              <FiGithub size={16} /> Código
            </MagneticButton>
            <MagneticButton
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary flex-1"
              aria-label={`Ver demo en vivo de ${project.title}`}
              strength={8}
            >
              <FiExternalLink size={16} /> Demo
            </MagneticButton>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}
