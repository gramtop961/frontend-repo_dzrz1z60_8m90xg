import { useState } from 'react'

const companies = [
  { id: 'apollo', name: 'Apollo Metrics', sector: 'AI Infra', irr: '38%', stage: 'Series A', x: 18, y: 42 },
  { id: 'labyrinth', name: 'Labyrinth Robotics', sector: 'Robotics', irr: '44%', stage: 'Seed', x: 42, y: 28 },
  { id: 'helios', name: 'Helios Energy', sector: 'Climate', irr: '31%', stage: 'Series A', x: 66, y: 50 },
  { id: 'trireme', name: 'Trireme Logistics', sector: 'Supply Chain', irr: '29%', stage: 'Seed', x: 78, y: 30 },
  { id: 'orichalcum', name: 'Orichalcum Finance', sector: 'Fintech', irr: '35%', stage: 'Seed', x: 30, y: 65 },
]

export default function Portfolio() {
  const [hover, setHover] = useState(null)

  return (
    <section id="portfolio" className="relative py-24 bg-[#0A1E3A] text-[#F9F7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-wide text-[#C7A875] mb-8">
          The City Map
        </h2>

        <div className="relative w-full aspect-[16/9] rounded-xl border border-white/10 overflow-hidden bg-gradient-to-b from-[#0E2546] to-[#071427]">
          <svg viewBox="0 0 100 56" className="absolute inset-0 w-full h-full">
            {/* golden trade routes */}
            <g stroke="#C7A875" strokeWidth="0.3" opacity="0.6" fill="none">
              <path d="M5 40 Q 32 20 55 30 T 95 12" />
              <path d="M10 10 Q 25 30 50 22 T 90 35" />
              <path d="M8 50 Q 40 42 70 46 T 96 40" />
            </g>
            {/* districts / temples */}
            {companies.map((c) => (
              <g key={c.id} transform={`translate(${c.x}, ${c.y})`}>
                <rect x="-3" y="-3" width="6" height="6" fill="#0f2748" stroke="#C7A875" strokeWidth="0.5" />
                <path d="M-3 -3 L0 -5 L3 -3" fill="#0f2748" stroke="#C7A875" strokeWidth="0.5"/>
              </g>
            ))}
          </svg>

          {/* interactive markers */}
          {companies.map((c) => (
            <div
              key={c.id}
              onMouseEnter={() => setHover(c)}
              onMouseLeave={() => setHover(null)}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#C7A875] rounded-full shadow-[0_0_12px_rgba(199,168,117,0.8)] cursor-pointer"
            />
          ))}

          {/* hover card */}
          {hover && (
            <div style={{ left: `${hover.x}%`, top: `${hover.y}%` }} className="absolute -translate-x-1/2 -translate-y-full mb-3 w-64 rounded-lg border border-[#C7A875]/40 bg-white/5 backdrop-blur-md p-4 text-white">
              <div className="text-sm font-semibold">{hover.name}</div>
              <div className="text-xs opacity-80">{hover.sector} • {hover.stage}</div>
              <div className="mt-2 text-xs">IRR: <span className="text-[#C7A875] font-semibold">{hover.irr}</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
