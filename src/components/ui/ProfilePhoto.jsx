import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import profileImg from '../../assets/images/profile.jpg'

/**
 * Hero profile photo — gradient glow ring behind it, gentle float
 * animation, and a subtle 3D tilt that follows the cursor on hover.
 * Falls back to a plain float (no tilt) on touch devices since there's
 * no cursor to track.
 */
export default function ProfilePhoto() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
      style={{ perspective: 800 }}
    >
      {/* Glow ring behind the photo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-violet via-aurora-indigo to-aurora-cyan blur-2xl opacity-40 animate-aurora-shift" />

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-full h-full animate-float"
      >
        <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-br from-aurora-violet via-aurora-indigo to-aurora-cyan shadow-glow">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-base-950 bg-base-900">
            <img
              src={profileImg}
              alt="Portrait"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
