const team = [
  { name: 'Ariadne K.', title: 'Managing Partner', img: '', initials: 'AK' },
  { name: 'Theseus M.', title: 'General Partner', img: '', initials: 'TM' },
  { name: 'Daedalus P.', title: 'Platform & Research', img: '', initials: 'DP' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-[#F9F7F2] text-[#0A1E3A]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-wide text-[#544F47] mb-10">
          The Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="relative rounded-xl border border-[#C7A875]/40 bg-white/70 p-6">
              <div className="mx-auto w-28 h-28 rounded-full bg-[#0A1E3A] text-[#C7A875] flex items-center justify-center text-3xl font-semibold ring-2 ring-[#C7A875]/50 shadow-inner shadow-black/20">
                {m.initials}
              </div>
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-[#0A1E3A]">{m.name}</div>
                <div className="text-sm text-[#544F47]">{m.title}</div>
                <div className="mt-2 inline-block text-xs text-[#C7A875] border border-[#C7A875]/40 rounded-full px-3 py-1">Laurel Member</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
