import { emailHref, icons, portfolio, resumeAction, socialActions } from '../data/portfolio.js'
import Action from '../components/Action.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import RouteLink from '../components/RouteLink.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  const actions = [...socialActions, resumeAction]
  const hasMissingActions = actions.some((action) => !action.href)

  return (
    <>
      <section className="intro" aria-labelledby="intro-heading">
        <Reveal entrance className="profile flex items-center gap-6 sm:gap-7">
          <img src={portfolio.portrait} alt={portfolio.name} width="96" height="96" className="portrait" fetchPriority="high" />
          <div>
            <h1 id="intro-heading">{portfolio.name}</h1>
            <p className="role">{portfolio.role}</p>
          </div>
        </Reveal>

        <Reveal entrance delay={0.06} className="intro-copy">
          {portfolio.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>

        <Reveal as="ul" entrance delay={0.12} className="intro-actions flex flex-wrap gap-3 sm:gap-5" aria-label="Social profiles and resume">
          {actions.map(({ id, label, href, icon }) => (
            <li key={id}><Action href={href} icon={icon} className="pill-action">{label}</Action></li>
          ))}
        </Reveal>
        {hasMissingActions && <p className="availability-note">{portfolio.unavailableActionsMessage}</p>}
      </section>

      <section className="featured" aria-labelledby="projects-heading">
        <Reveal as="h2" id="projects-heading">{portfolio.projectContent.featuredHeading}</Reveal>
        <div className="project-grid grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16">
          {portfolio.projects.filter((project) => project.featured).slice(0, 2).map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <RouteLink href="/projects" className="view-all">View All</RouteLink>
      </section>

      <Reveal as="section" className="contact-section grid gap-8 sm:grid-cols-2 sm:gap-8" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Interested in <br /><span>Working Together?</span></h2>
        <div>
          <p className="contact-copy">{portfolio.contact.invitation}</p>
          <Action href={emailHref} icon={icons.arrow} iconAfter className="contact-action">Get in touch</Action>
          {!emailHref && <p className="availability-note">{portfolio.contact.unavailableMessage}</p>}
        </div>
      </Reveal>
    </>
  )
}
