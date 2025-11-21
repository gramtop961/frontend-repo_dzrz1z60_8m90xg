import { useState } from 'react'
import { motion } from 'framer-motion'

const tags = ['All', 'AI', 'Macro', 'Crypto', 'Infra']

const posts = [
  {
    id: 1,
    title: 'Mapping Liquidity Regimes in Digital Asset Markets',
    tag: 'Macro',
    date: 'Sep 2025',
    excerpt: 'A framework for identifying regime shifts using cross-asset flows, basis spreads, and volatility term structure.',
  },
  {
    id: 2,
    title: 'Scaling Agents: The Unbundling of Apps into Intents',
    tag: 'AI',
    date: 'Aug 2025',
    excerpt: 'Why agentic pipelines and intent markets will reshape consumer experiences and enterprise workflows.',
  },
  {
    id: 3,
    title: 'Restaking, Security Budgets, and the Modular Future',
    tag: 'Crypto',
    date: 'Jul 2025',
    excerpt: 'How shared security and modular execution environments unlock new design space for applications.',
  },
  {
    id: 4,
    title: 'Latency, Liquidity, and the Edge Cloud',
    tag: 'Infra',
    date: 'Jun 2025',
    excerpt: 'The business of milliseconds: edge networks as a moat for real-time AI and spatial computing.',
  },
]

export default function Insights() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <section id="insights" className="relative py-24 bg-[#050d1b] text-white overflow-hidden">
      {/* subtle grid backdrop */}
      <div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'36px 36px'}} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Research & Insights</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Original research at the intersection of AI, crypto, and market structure. Signals distilled into first-principles narratives.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {tags.map((t) => (
              <button key={t} onClick={() => setActive(t)} className={`px-3 py-1.5 rounded-full text-sm transition border ${active===t ? 'border-teal-300 text-teal-200 bg-teal-300/10' : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'}`}>{t}</button>
            ))}
          </div>
        </div>

        {/* mobile filter */}
        <div className="md:hidden mb-6 flex gap-2 overflow-x-auto no-scrollbar">
          {tags.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`px-3 py-1.5 rounded-full text-sm transition border whitespace-nowrap ${active===t ? 'border-teal-300 text-teal-200 bg-teal-300/10' : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'}`}>{t}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-teal-300/0 to-teal-300/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="p-5 relative">
                <div className="text-xs uppercase tracking-wider text-white/60">{post.tag} • {post.date}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{post.excerpt}</p>
                <div className="mt-4 text-sm text-teal-200">Read insight →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
