/**
 * Infinite horizontal marquee band — scrolling text ticker like the
 * looping strips you see on agency/studio sites. Pure CSS animation
 * (translateX loop), no JS per-frame cost.
 *
 * Usage: <Marquee items={['Java', 'Spring Boot', 'React']} />
 * Pass invert to render a bold white-background/black-text strip —
 * a graphic contrast block instead of a quiet ticker.
 */
export default function Marquee({ items = [], speed = 28, invert = false }) {
  // Duplicate the list so the loop is seamless (second copy picks up
  // exactly where the first ends).
  const doubled = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden py-4 ${
        invert
          ? 'bg-white border-y border-white'
          : 'border-y border-glass-border bg-white/[0.02]'
      }`}
    >
      <div
        className="flex w-max gap-8 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-8 text-lg md:text-xl font-display font-bold uppercase tracking-wide ${
              invert ? 'text-black' : 'text-white/30'
            }`}
          >
            {item}
            <span className={invert ? 'text-black/40' : 'text-aurora-cyan/60'}>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
