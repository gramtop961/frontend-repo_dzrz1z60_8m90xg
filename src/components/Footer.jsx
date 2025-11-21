export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0A1E3A] text-[#F9F7F2]">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 10% 10%, rgba(199,168,117,.25) 0 2px, transparent 2px)', backgroundSize:'24px 24px'}} />
      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded bg-gradient-to-b from-[#C7A875] to-[#8C6239] flex items-center justify-center ring-1 ring-white/20 shadow-lg">
            <span className="text-white font-semibold tracking-widest">IC</span>
          </div>
          <div className="text-white font-semibold">Icarus Capital</div>
        </div>
        <div className="text-[#F9F7F2]/80 max-w-2xl">
          © {new Date().getFullYear()} Icarus Capital. All rights reserved.
        </div>
      </div>
      <div className="h-3 bg-[repeating-linear-gradient(90deg,rgba(199,168,117,0.6)_0_12px,transparent_12px_24px)]" />
    </footer>
  )
}
