import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'motion/react'

const elements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  ul: motion.ul,
}
const visible = { opacity: 1, y: 0 }
const viewport = { once: true, amount: 0.1 }
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(callback) {
  const preference = window.matchMedia(reducedMotionQuery)
  preference.addEventListener('change', callback)
  return () => preference.removeEventListener('change', callback)
}

function getReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches
}

export default function Reveal({ as = 'div', entrance = false, delay = 0, children, ...props }) {
  const initialPreference = useReducedMotion()
  // Motion's hook reads the initial preference; also subscribe to live changes.
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, () => initialPreference ?? true)
  const [skipAnimation, setSkipAnimation] = useState(reducedMotion)
  if (reducedMotion && !skipAnimation) setSkipAnimation(true)
  const immediate = reducedMotion || skipAnimation
  const distance = entrance ? 8 : 12
  const opacity = useMotionValue(reducedMotion ? 1 : 0)
  const y = useMotionValue(reducedMotion ? 0 : distance)
  const Element = elements[as]

  useLayoutEffect(() => {
    if (immediate) {
      opacity.jump(1)
      y.jump(0)
    }
  }, [immediate, opacity, y])

  function finishOnFocus() {
    setSkipAnimation(true)
    opacity.jump(1)
    y.jump(0)
  }

  return (
    <Element
      {...props}
      data-reveal=""
      style={{ opacity, y }}
      initial={immediate ? false : { opacity: 0, y: distance }}
      animate={entrance || immediate ? visible : undefined}
      whileInView={entrance ? undefined : visible}
      viewport={viewport}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: immediate ? 0 : entrance ? 0.35 : 0.4,
        delay: immediate ? 0 : Math.min(delay, 0.12),
      }}
      onFocusCapture={finishOnFocus}
    >
      {children}
    </Element>
  )
}
