import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gradient bar pinned to the top of the viewport, fills as the user
 * scrolls through the page. Purely decorative, cheap (uses Framer's
 * scroll-linked motion value, no manual scroll listeners).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-aurora-violet via-aurora-indigo to-aurora-cyan"
    />
  )
}
