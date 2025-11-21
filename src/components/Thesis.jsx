export default function Thesis() {
  return (
    <section id="thesis" className="relative py-24 bg-[#F9F7F2] text-[#0A1E3A]">
      <div className="absolute inset-0 pointer-events-none">
        {/* Marble slab background with faint map engravings */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(12,24,46,0.04),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(12,24,46,0.04),transparent_40%),linear-gradient(0deg,rgba(199,168,117,0.06),rgba(199,168,117,0.06))]" />
        <div className="absolute inset-6 border-2 border-[#C7A875]" style={{maskImage:'linear-gradient(black,black)'}} />
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 10% 15%, rgba(12,24,46,.08) 0 1px, transparent 1px)', backgroundSize:'16px 16px'}} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-wide text-[#544F47] mb-6">
          Our Philosophy is Older Than Time.
        </h2>
        <p className="text-lg leading-8 text-[#544F47]/90 max-w-3xl">
          We back founders who dare to fly higher. Icarus Capital blends timeless strategic thinking with modern quantitative insight. 
          Ambition is our oxygen; discipline is our compass. We pursue category-defining companies at seed and Series A, providing a rigorous framework for product-market fit, distribution velocity, and durable moats. We believe the best outcomes are forged at the edge — where courage meets analytical precision.
        </p>
      </div>
    </section>
  )
}
