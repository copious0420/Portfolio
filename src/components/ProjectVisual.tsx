import type { Project } from '../lib/data'

/** Stylised, code-drawn previews so the cards look finished without screenshots. */
export default function ProjectVisual({ variant }: { variant: Project['variant'] }) {
  if (variant === 'radar') return <Radar />
  if (variant === 'robot') return <Robot />
  return <Calendar />
}

function Robot() {
  const readouts = [
    { k: 'DIST', v: '42 cm' },
    { k: 'PIR', v: 'MOTION' },
    { k: 'MQ-135', v: '312 ppm' },
  ]
  return (
    <div className="relative grid h-full place-items-center">
      <svg viewBox="0 0 120 100" className="w-[72%] max-w-[320px]">
        {/* ultrasonic ping */}
        {[10, 16, 22].map((r, i) => (
          <path
            key={r}
            d={`M${60 - r * 0.7} ${22 - r * 0.55} Q60 ${22 - r * 0.95} ${60 + r * 0.7} ${22 - r * 0.55}`}
            fill="none"
            stroke="rgba(0,200,150,0.5)"
            strokeWidth="0.8"
            className="animate-pulse"
            style={{ animationDelay: `${i * 300}ms` }}
          />
        ))}
        {/* chassis + wheels */}
        {[
          [22, 30],
          [88, 30],
          [22, 64],
          [88, 64],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="18" rx="2" fill="#151A1E" stroke="rgba(0,200,150,0.35)" strokeWidth="0.6" />
        ))}
        <rect x="32" y="24" width="56" height="64" rx="6" fill="#101417" stroke="rgba(0,200,150,0.45)" strokeWidth="0.8" />
        {/* ESP32 board */}
        <rect x="44" y="40" width="32" height="20" rx="2" fill="rgba(0,200,150,0.12)" stroke="rgba(0,200,150,0.6)" strokeWidth="0.6" />
        <text x="60" y="52" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="#00C896">ESP32</text>
        {/* ultrasonic eyes */}
        <circle cx="52" cy="30" r="3.5" fill="none" stroke="#00C896" strokeWidth="0.8" />
        <circle cx="68" cy="30" r="3.5" fill="none" stroke="#00C896" strokeWidth="0.8" />
        {/* motor driver */}
        <rect x="48" y="66" width="24" height="12" rx="1.5" fill="#151A1E" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <text x="60" y="73.5" textAnchor="middle" fontSize="3.6" fontFamily="monospace" fill="#71717a">L298N</text>
      </svg>
      <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] text-mint/70">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
        WS · CONNECTED
      </div>
      <dl className="absolute bottom-4 right-4 space-y-0.5 text-right font-mono text-[10px]">
        {readouts.map((r) => (
          <div key={r.k}>
            <dt className="inline text-zinc-500">{r.k} </dt>
            <dd className="inline text-mint/80">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Radar() {
  const contacts = [
    { x: 68, y: 34, threat: true },
    { x: 32, y: 62, threat: false },
    { x: 58, y: 72, threat: false },
  ]
  return (
    <div className="relative grid h-full place-items-center">
      <div className="relative aspect-square w-[78%] max-w-[300px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {[48, 36, 24, 12].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(0,200,150,0.18)" strokeWidth="0.4" />
          ))}
          <path d="M50 2v96M2 50h96" stroke="rgba(0,200,150,0.12)" strokeWidth="0.4" />
        </svg>
        <div
          className="absolute inset-[4%] animate-[spin_5s_linear_infinite] rounded-full"
          style={{ background: 'conic-gradient(from 0deg, rgba(0,200,150,0.35), transparent 22%)' }}
        />
        {contacts.map((c, i) => (
          <span
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            <span className={`absolute -inset-2 animate-ping rounded-full ${c.threat ? 'bg-red-500/40' : 'bg-mint/30'}`} style={{ animationDelay: `${i * 400}ms` }} />
            <span className={`relative block h-2 w-2 rounded-full ${c.threat ? 'bg-red-400' : 'bg-mint'}`} />
          </span>
        ))}
      </div>
      <div className="absolute left-4 top-4 font-mono text-[10px] leading-relaxed text-mint/70">
        <div>TRK-0412 · HOSTILE</div>
        <div className="text-zinc-500">ALT 120m · 34 km/h</div>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-zinc-500">3 CONTACTS · LIVE</div>
    </div>
  )
}

function Calendar() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const blocks: Record<number, { row: number; span: number; label: string; filled: boolean }[]> = {
    0: [{ row: 0, span: 2, label: 'Math · R. Patel', filled: true }],
    1: [{ row: 1, span: 1, label: 'Open', filled: false }, { row: 3, span: 1, label: 'Bio · S. Rao', filled: true }],
    2: [{ row: 2, span: 2, label: 'English · A. Khan', filled: true }],
    3: [{ row: 0, span: 1, label: 'Open', filled: false }],
    4: [{ row: 1, span: 2, label: 'History · M. Das', filled: true }],
  }
  return (
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Week 44</span>
        <span className="rounded-full bg-mint/10 px-2 py-0.5 font-mono text-[10px] text-mint">12 / 14 covered</span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-1.5">
        {days.map((d, i) => (
          <div key={d} className="flex flex-col gap-1.5">
            <span className="text-center font-mono text-[10px] text-zinc-500">{d}</span>
            <div className="relative grid flex-1 grid-rows-4 gap-1.5">
              {[0, 1, 2, 3].map((r) => (
                <div key={r} className="rounded-md bg-ink-800/60" style={{ gridRow: r + 1 }} />
              ))}
              {blocks[i]?.map((b) => (
                <div
                  key={b.row}
                  className={`z-10 flex items-end rounded-md p-1.5 text-[9px] leading-tight transition-transform duration-500 group-hover:-translate-y-0.5 ${
                    b.filled ? 'bg-mint/15 text-mint ring-1 ring-mint/30' : 'border border-dashed border-amber-400/40 text-amber-300/80'
                  }`}
                  style={{ gridRow: `${b.row + 1} / span ${b.span}`, gridColumn: 1 }}
                >
                  <span className="hidden sm:inline">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
