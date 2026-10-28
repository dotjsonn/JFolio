export default function Action({ href, icon, children, label, className = '', iconAfter = false }) {
  const actionIcon = icon && <img src={icon} alt="" className="action-icon" />
  const content = (
    <>
      {!iconAfter && actionIcon}
      {children}
      {iconAfter && actionIcon}
    </>
  )

  if (!href) {
    const unavailableLabel = `${label || children} — coming soon`
    return (
      <button
        type="button"
        disabled
        className={`action ${className}`}
        aria-label={unavailableLabel}
        title={unavailableLabel}
      >
        {content}
      </button>
    )
  }

  const external = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      className={`action ${className}`}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  )
}
