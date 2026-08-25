import { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import ScrollProgressBar from '../components/ScrollProgressBar.jsx'
import CursorGlow from '../components/CursorGlow.jsx'

const Skills = lazy(() => import('../components/Skills.jsx'))
const Experience = lazy(() => import('../components/Experience.jsx'))
const Projects = lazy(() => import('../components/Projects.jsx'))
const Certifications = lazy(() => import('../components/Certifications.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))

function SectionFallback() {
  return (
    <div className="section container-app" aria-hidden="true">
      <div className="h-64 rounded-2xl animate-pulse" style={{ backgroundColor: 'var(--surface)' }} />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Saltar al contenido principal
      </a>
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
