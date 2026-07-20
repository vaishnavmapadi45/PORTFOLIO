import { motion } from 'framer-motion'

/**
 * Reusable glass-panel card. Wraps children in the glassmorphism style
 * defined in index.css (.glass-panel) plus an optional hover lift.
 *
 * Usage: <GlassCard className="p-6">...</GlassCard>
 */
export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-panel ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
