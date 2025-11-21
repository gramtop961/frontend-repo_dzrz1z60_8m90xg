import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A1E3A]">
      {/* Golden sunrise gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/20 via-[#0A1E3A] to-[#0A1E3A]" />

      {/* Ancient city silhouette on cliff */}
      <div className="absolute inset-x-0 bottom-0 h-2/3">
        <svg className="absolute inset-x-0 bottom-0 w-full h-full opacity-80" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cliff" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#112743" />
              <stop offset="100%" stopColor="#081729" />
            </linearGradient>
            <pattern id="mapTexture" patternUnits="userSpaceOnUse" width="200" height="200">
              <path d="M0 50 L200 50 M0 150 L200 150 M50 0 L50 200 M150 0 L150 200" stroke="rgba(199,168,117,0.15)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapTexture)" />
          <path d="M0,500 C200,440 300,420 480,480 C660,540 780,540 960,500 C1140,460 1260,460 1440,520 L1440,600 L0,600 Z" fill="url(#cliff)" />
          {/* Acropolis skyline */}
          <g fill="#0f2748">
            <rect x="220" y="280" width="18" height="100"/>
            <rect x="245" y="280" width="18" height="100"/>
            <rect x="270" y="280" width="18" height="100"/>
            <rect x="295" y="280" width="18" height="100"/>
            <rect x="206" y="260" width="120" height="20"/>
            <rect x="230" y="240" width="72" height="20"/>
          </g>
        </svg>
      </div>

      {/* faded sea routes + compass */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <g stroke="#C7A875" strokeWidth="0.6" strokeOpacity="0.35" fill="none">
            <path d="M-20 200 Q 300 260 620 180 T 1440 220" />
            <path d="M-20 380 Q 300 440 620 360 T 1440 400" />
            <circle cx="180" cy="180" r="70" />
            <g transform="translate(1180,160)">
              <circle r="60" />
              <path d="M0,-60 L0,60 M-60,0 L60,0" />
              <path d="M0,-60 L10,-10 L60,0 L10,10 Z" fill="#C7A875" fillOpacity="0.2"/>
            </g>
          </g>
        </svg>
      </div>

      {/* IC Monogram marble */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center px-6">
        <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-gradient-to-b from-[#d9d0bd] to-[#c9c0ad] shadow-[inset_0_2px_10px_rgba(255,255,255,0.6),inset_0_-6px_16px_rgba(0,0,0,0.25)] ring-1 ring-white/30 flex items-center justify-center">
          <span className="text-3xl tracking-[0.35em] font-semibold text-[#544F47]">IC</span>
        </div>
        <h1 className="text-4xl sm:text-6xl text-[#F9F7F2] font-semibold tracking-wide drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
          Where Legends Take Flight.
        </h1>
        <p className="mt-4 text-[#C7A875] text-lg">Ancient wisdom. Modern venture capital.</p>
      </motion.div>

      {/* Eagle silhouette */}
      <motion.svg
        initial={{ x: -200, y: -40, opacity: 0 }}
        animate={{ x: 200, y: -80, opacity: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        viewBox="0 0 200 80"
        className="absolute top-24 left-[-10%] w-48 text-[#C7A875]/80"
      >
        <path d="M10,40 C40,30 60,25 100,28 C120,29 140,32 170,40 C150,30 150,18 170,8 C150,16 130,20 110,16 C92,12 72,18 64,28 C50,20 36,20 24,28 Z" fill="currentColor"/>
      </motion.svg>

      {/* Constellations */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ duration: 1.2 }} className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <g stroke="#C7A875" strokeOpacity="0.35">
            <circle cx="320" cy="220" r="2" fill="#C7A875"/>
            <circle cx="380" cy="260" r="2" fill="#C7A875"/>
            <circle cx="440" cy="210" r="2" fill="#C7A875"/>
            <path d="M320 220 L380 260 L440 210" />
          </g>
        </svg>
      </motion.div>
    </section>
  )
}
