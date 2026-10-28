// A small History API router keeps these three static routes dependency-free.
export default function RouteLink({ href, children, onClick, ...props }) {
  function navigate(event) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    event.preventDefault()
    if (window.location.pathname !== href) {
      window.history.pushState(null, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }

  return <a href={href} onClick={navigate} {...props}>{children}</a>
}
