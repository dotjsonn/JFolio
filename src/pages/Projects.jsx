import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { portfolio } from '../data/portfolio.js'
import './Projects.css'

export default function Projects() {
  const { projects, projectsPage } = portfolio

  return (
    <section className="projects-page" aria-labelledby="projects-heading">
      <Reveal as="h1" entrance id="projects-heading">{projectsPage.title}</Reveal>
      <Reveal as="p" entrance className="projects-introduction">{projectsPage.introduction}</Reveal>

      <section className="projects-gallery" aria-labelledby="project-gallery-heading">
        <h2 id="project-gallery-heading" className="sr-only">{projectsPage.galleryLabel}</h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
    </section>
  )
}
