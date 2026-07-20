import { motion } from 'framer-motion'
import { viewportOnce } from '../../lib/motionVariants'

/**
 * Section heading that wipes into view via clip-path (like a mask
 * sliding away) instead of a plain fade/slide — reads as more
 * "designed" for hero-style section titles.
 *
 * Usage: <RevealHeading>Featured <span className="gradient-text">Projects</span></RevealHeading>
 */
export default function RevealHeading({ children, className = '', as = 'h2', accent = true }) {
  const Tag = motion[as] || motion.h2

  return (
    <div className={className}>
      <Tag
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white"
      >
        {children}
      </Tag>
      {accent && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="h-[3px] w-16 bg-white mt-4 origin-left"
        />
      )}
    </div>
  )
}
