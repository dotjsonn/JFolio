import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import menuIcon from '../../assets/navigation/menu-2.svg'
import closeIcon from '../../assets/navigation/x.svg'
import RouteLink from './RouteLink.jsx'
import './Header.css'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export default function Header({ pathname }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  const navigationRef = useRef(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    let lastFocusedElement = document.activeElement

    function rememberFocus(event) {
      lastFocusedElement = event.target
    }

    function handleBreakpointChange(event) {
      // A media-query style can blur a hidden control before this event fires.
      const focusedElement = document.activeElement === document.body
        ? lastFocusedElement
        : document.activeElement

      if (event.matches) {
        setIsOpen(false)
        // Keep focus on a visible control when the toggle disappears.
        if (focusedElement === toggleRef.current) {
          navigationRef.current?.querySelector('[aria-current="page"]')?.focus()
        }
      } else if (navigationRef.current?.contains(focusedElement)) {
        toggleRef.current?.focus()
      }
    }

    function closeOnHistoryChange() {
      setIsOpen(false)
    }

    desktop.addEventListener('change', handleBreakpointChange)
    document.addEventListener('focusin', rememberFocus)
    window.addEventListener('popstate', closeOnHistoryChange)
    return () => {
      desktop.removeEventListener('change', handleBreakpointChange)
      document.removeEventListener('focusin', rememberFocus)
      window.removeEventListener('popstate', closeOnHistoryChange)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header flex items-center justify-between gap-5">
      <RouteLink href="/" className="wordmark" aria-label={`${portfolio.shortName} — Home`} onClick={() => setIsOpen(false)}>
        <img src={portfolio.logo} alt={`${portfolio.shortName} logo`} width="1376" height="1143" className="wordmark-image" />
      </RouteLink>
      <button
        ref={toggleRef}
        type="button"
        className="navigation-toggle"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span
          className="navigation-toggle-icon"
          style={{ maskImage: `url("${isOpen ? closeIcon : menuIcon}")` }}
          aria-hidden="true"
        />
      </button>
      <nav
        ref={navigationRef}
        id="site-navigation"
        className={`site-navigation${isOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-5 sm:gap-9">
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <RouteLink
                href={href}
                className="nav-link"
                aria-current={pathname === href ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </RouteLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
