import { useEffect, useSyncExternalStore } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import RouteLink from './components/RouteLink.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import { portfolio } from './data/portfolio.js'

function subscribeToLocation(callback) {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}

function getPathname() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

const routes = {
  '/': {
    title: 'Home',
    Page: Home,
    description: `${portfolio.name} — ${portfolio.role}. Personal portfolio, featured projects, and contact information.`,
  },
  '/about': {
    title: 'About',
    Page: About,
    description: `About ${portfolio.name}. Background, technologies, tools, and certifications.`,
  },
  '/projects': {
    title: 'Projects',
    Page: Projects,
    description: `${portfolio.name} — ${portfolio.projectsPage.title}. ${portfolio.projectsPage.introduction}`,
  },
}

export default function App() {
  const pathname = useSyncExternalStore(subscribeToLocation, getPathname)
  const route = routes[pathname]
  const Page = route?.Page
  const title = route?.title || 'Page not found'
  const description = route?.description || `Page not found — ${portfolio.name}'s portfolio.`

  useEffect(() => {
    document.title = `${title} | ${portfolio.name}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header pathname={pathname} />
      <main id="main-content" tabIndex={-1}>
        {Page ? <Page /> : (
          <section className="route-placeholder">
            <h1>Page not found</h1>
            <p>This page could not be found.</p>
            <RouteLink href="/" className="back-home">Back to Home</RouteLink>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
