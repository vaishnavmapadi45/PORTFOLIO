/**
 * Fixed, full-viewport aurora gradient background.
 * Pure CSS animation (no JS per-frame cost) — cheap for Lighthouse perf.
 * Sits behind all content via -z-10; pointer-events disabled so it never blocks clicks.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-base-950 pointer-events-none"
    >
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-aurora-violet/30 blur-[120px] animate-aurora-shift" />
      <div className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-aurora-cyan/20 blur-[120px] animate-aurora-shift [animation-delay:-6s]" />
      <div className="absolute bottom-[-20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-aurora-indigo/25 blur-[120px] animate-aurora-shift [animation-delay:-12s]" />

      {/* Subtle grain overlay to stop flat gradient banding */}
      <div className="absolute inset-0 bg-base-950/40" />
    </div>
  )
}