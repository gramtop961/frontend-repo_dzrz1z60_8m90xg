export default function Signals() {
  return (
    <section id="signals" className="relative py-28 bg-[#071427] text-[#F9F7F2] overflow-hidden">
      {/* Night city silhouettes */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <linearGradient id="night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E2546" />
            <stop offset="100%" stopColor="#071427" />
          </linearGradient>
          <rect width="100%" height="100%" fill="url(#night)" />
          <g fill="#0b1d39">
            <rect x="120" y="260" width="12" height="80"/>
            <rect x="140" y="240" width="12" height="100"/>
            <rect x="160" y="270" width="12" height="70"/>
            <rect x="320" y="250" width="18" height="90"/>
            <rect x="345" y="270" width="14" height="70"/>
          </g>
        </svg>
      </div>

      {/* constellation-like data streams */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none">
          <g stroke="#C7A875" strokeOpacity="0.5" fill="none">
            <path d="M100 120 C 200 60, 400 140, 520 90 S 800 60, 1040 120" />
            <circle cx="100" cy="120" r="2" fill="#C7A875" />
            <circle cx="520" cy="90" r="2" fill="#C7A875" />
            <circle cx="1040" cy="120" r="2" fill="#C7A875" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-wide text-[#C7A875] mb-6">
          Patterns Only the Gods Could See.
        </h2>
        <p className="text-[#F9F7F2]/80 max-w-3xl">
          Our in-house intelligence platform fuses alternative data, knowledge graphs and causal modeling to surface latent patterns ahead of the market.
          We turn noisy signals into conviction — so we can lead when others hesitate.
        </p>
      </div>
    </section>
  )
}
