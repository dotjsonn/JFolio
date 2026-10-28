import { portfolio, socialActions } from '../data/portfolio.js'
import Action from './Action.jsx'

export default function Footer() {
  const footerActions = ['github', 'linkedin', 'email'].map((id) => socialActions.find((action) => action.id === id))

  return (
    <footer className="site-footer grid gap-10 sm:grid-cols-2">
      <div>
        <h2 className="footer-heading">Social</h2>
        <ul className="footer-socials">
          {footerActions.map(({ id, label, href, icon }) => (
            <li key={id}>
              <Action href={href} icon={icon} className="footer-action">{label}</Action>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-credit sm:justify-self-end">
        <p>© {new Date().getFullYear()} {portfolio.copyrightName}</p>
        <img src={portfolio.signature} alt={`${portfolio.copyrightName}'s signature`} width="224" height="136" className="signature" loading="lazy" />
      </div>
    </footer>
  )
}
