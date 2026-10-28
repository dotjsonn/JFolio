import { icons, portfolio } from '../data/portfolio.js'
import Action from './Action.jsx'
import CardPreview from './CardPreview.jsx'
import Reveal from './Reveal.jsx'

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="project-card" aria-labelledby={`${project.id}-title`}>
      <CardPreview
        image={project.image}
        imageAlt={project.imageAlt}
        imageClassName="project-image"
        emptyText={portfolio.projectContent.noPreview}
      />
      <div className="project-title-row flex items-center justify-between gap-3">
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        {(project.github || project.demo) && (
          <div className="flex items-center">
            {project.github && <Action href={project.github} icon={icons.github} label={`${project.title} — GitHub repository`} className="icon-action" />}
            {project.demo && <Action href={project.demo} icon={icons.external} label={`${project.title} — live demo`} className="icon-action" />}
          </div>
        )}
      </div>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-tags flex flex-wrap gap-2" aria-label={`${project.title} details`}>
        {project.technologies.map((technology) => <li className="tag" key={technology}>{technology}</li>)}
      </ul>
    </Reveal>
  )
}
