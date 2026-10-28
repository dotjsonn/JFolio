import CertificationCard from '../components/CertificationCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { portfolio } from '../data/portfolio.js'
import './About.css'

export default function About() {
  const { about, technologies, certifications } = portfolio

  return (
    <div className="about-page">
      <section aria-labelledby="about-heading">
        <div className="about-hero grid items-center gap-8 sm:grid-cols-2">
          <Reveal as="h1" entrance id="about-heading">
            {about.headline.map((line) => <span key={line}>{line}</span>)}
          </Reveal>
          <img
            src={about.portrait}
            alt={about.portraitAlt}
            width="1254"
            height="1254"
            className="about-portrait"
            fetchPriority="high"
          />
        </div>
        <Reveal className="about-copy">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </section>

      <section className="about-technologies" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Tech and Tools</h2>
        <div className="technology-groups">
          {technologies.map((group) => (
            <Reveal as="section" className="technology-group" key={group.id} aria-labelledby={`${group.id}-heading`}>
              <h3 id={`${group.id}-heading`}>{group.label}:</h3>
              <ul className="technology-list">
                {group.items.map((technology) => (
                  <li className="technology-pill" key={technology.name}>
                    <span
                      className="technology-icon"
                      style={{
                        maskImage: `url("${technology.icon}")`,
                        maskSize: technology.iconMaskSize,
                        '--technology-icon-width': technology.iconWidth,
                      }}
                      aria-hidden="true"
                    />
                    <span>{technology.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-certifications" aria-labelledby="certifications-heading">
        <Reveal as="h2" id="certifications-heading">Certifications</Reveal>
        <div className="certification-grid grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </section>
    </div>
  )
}
