import { useState } from 'react'
import { Menu } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Investment Thesis', href: '#thesis' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Signals', href: '#signals' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-[#0A1E3A]/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-gradient-to-b from-[#C7A875] to-[#8C6239] flex items-center justify-center ring-1 ring-white/20 shadow-lg">
                <span className="text-white font-semibold tracking-widest">IC</span>
              </div>
              <div className="text-white">
                <div className="text-sm leading-none opacity-80">Icarus</div>
                <div className="text-base font-semibold leading-none">Capital</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="relative text-sm text-white/90 hover:text-white transition">
                  <span className="pb-1 inline-block">{item.label}</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#C7A875] to-[#8C6239] transition-all group-hover:w-full"/>
                </a>
              ))}
            </nav>

            <button onClick={() => setOpen((o) => !o)} className="md:hidden text-white p-2">
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-2 bg-[#0A1E3A]/80">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Greek meander pattern underline */}
        <div className="h-2 bg-[linear-gradient(90deg,rgba(199,168,117,0.35)_0%,rgba(199,168,117,0.35)_50%,transparent_50%,transparent_100%)] bg-[length:16px_2px]"></div>
      </div>
    </header>
  )
}
