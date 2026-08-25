import { FiCode, FiTarget, FiUsers } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const highlights = [
  {
    Icon: FiCode,
    title: 'Código de calidad',
    text: 'Escribo componentes mantenibles, testeados y documentados, pensando en el equipo que llega después.',
  },
  {
    Icon: FiTarget,
    title: 'Enfoque en producto',
    text: 'Traduzco objetivos de negocio en interfaces claras, midiendo el impacto real de cada mejora.',
  },
  {
    Icon: FiUsers,
    title: 'Colaboración',
    text: 'Trabajo de cerca con diseño, backend y producto para entregar experiencias consistentes de punta a punta.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section" aria-label="Sobre mí">
      <div className="container-app">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Construyo interfaces con precisión y propósito"
          description="Más de 5 años ayudando a equipos de producto a lanzar experiencias web rápidas, accesibles y bien diseñadas."
        />

       <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal className="space-y-5 text-base sm:text-lg leading-relaxed" style={{}}>
            <p style={{ color: 'var(--text-secondary)' }}>
              Soy Miguel, ingeniero de software especializado en Backend. Empecé mi carrera
              construyendo pages para pequeños negocios y hoy trabajo con arquitecturas
              de sofware, metodologias e implemento sistemas inteligentes con IA
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Me apasiona la lógica: la precisión de un algoritmo, 
              la eficiencia correcta de un código, la diferencia entre un backend que funciona y uno que escala.
              Fuera del código, disfruto el diseño de sistemas, la fotografía y el café de
              filtro.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Actualmente enfocado en construir productos con React 19, explorando
              patrones de rendimiento y experiencias con animaciones fluidas.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-1 gap-4">
            {highlights.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="surface rounded-2xl p-6 flex gap-4 card-hover">
                <div
                  className="shrink-0 grid place-items-center w-11 h-11 rounded-xl"
                  style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
