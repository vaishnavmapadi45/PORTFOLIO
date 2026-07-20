import { useMemo } from 'react'

/**
 * Lightweight decorative floating particles.
 * Uses a fixed count of CSS-animated divs rather than a canvas library —
 * keeps bundle size down and avoids a runtime perf hit.
 */
export default function ParticleField({ count = 24 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * -10,
      })),
    [count]
  )

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white/40 animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
