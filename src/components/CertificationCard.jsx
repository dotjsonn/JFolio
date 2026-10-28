import { icons, portfolio } from '../data/portfolio.js'
import Action from './Action.jsx'
import CardPreview from './CardPreview.jsx'
import Reveal from './Reveal.jsx'

export default function CertificationCard({ certification }) {
  return (
    <Reveal as="article" className="certification-card" aria-labelledby={`${certification.id}-title`}>
      <CardPreview
        image={certification.image}
        imageAlt={certification.imageAlt}
        imageClassName="certificate-image"
        emptyText={portfolio.certificateContent.noPreview}
      />
      <div className="project-title-row flex items-center justify-between gap-3">
        <h3 id={`${certification.id}-title`}>{certification.title}</h3>
        {certification.url && (
          <Action
            href={certification.url}
            icon={icons.external}
            label={`Verify ${certification.title}`}
            className="icon-action"
          />
        )}
      </div>
      {certification.issuer && (
        <p className="certificate-details">{certification.issuer}</p>
      )}
    </Reveal>
  )
}
