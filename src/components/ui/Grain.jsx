/**
 * Fixed full-viewport film-grain texture, layered over everything via
 * mix-blend-mode. This is what stops a black & white design from
 * feeling flat/digital — adds a subtle editorial, printed-paper grit.
 * Pure SVG feTurbulence filter, no image asset, negligible perf cost.
 */
export default function Grain() {
  return (
    <svg
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-40 pointer-events-none mix-blend-overlay opacity-[0.06]"
    >
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  )
}
