import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <section
        className="relative min-h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.discordapp.net/attachments/1501146798750699640/1504795697990598766/ChatGPT_Image_May_15_2026_04_25_07_PM.png?ex=6a0849b4&is=6a06f834&hm=b1ca21e5cbd858de7094370c7c3bb7e311b060bebcf555bce063794f3928057f&=&format=webp&quality=lossless&width=912&height=513')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        <nav className="relative z-10 flex items-center justify-between px-12 py-6 border-b border-white/10 backdrop-blur-sm">
          <a href="#" className="text-orange-500 font-black text-xl tracking-[4px] uppercase">RJL</a>
          <ul className="flex items-center gap-9 list-none">
            {[
              { label: "Home", href: "/", active: true },
              { label: "About us", href: "/about", active: false },
              { label: "Members", href: "/members", active: false },
              { label: "Events", href: "/events", active: false },
            ].map(({ label, href, active }) => (
              <li key={label}>
                <Link href={href} className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${active ? "text-orange-500 border-b border-orange-500 pb-0.5" : "text-white/70 hover:text-orange-400"}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
            Discord
          </a>
        </nav>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-orange-500 border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 rounded-full mb-6">
            Virtual Trucking Company · ETS2
          </div>
          <h1 className="text-[clamp(56px,10vw,110px)] font-black leading-none tracking-wider uppercase drop-shadow-2xl mb-5">
            Royal <span className="text-orange-500">Jiyu</span><br />Logistics
          </h1>
          <p className="text-lg font-light tracking-[5px] uppercase text-white/55 mb-12">
            Freedom Across Asia
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://truckersmp.com/vtc/89349" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5">
              Join Us
            </a>
            <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-bold tracking-[2px] uppercase border border-white/35 px-9 py-3.5 rounded-md backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-0.5">
              Discord
            </a>
          </div>
        </div>
        <div className="relative z-10 flex justify-center border-t border-white/10 backdrop-blur-md bg-black/50">
          {[
            { num: "2+", label: "Active Drivers" },
            { num: "0+", label: "Deliveries" },
            { num: "Asia", label: "Coverage" },
            { num: "24/7", label: "Community" },
          ].map(({ num, label }, i) => (
            <div key={label} className={`flex-1 max-w-[200px] text-center py-7 px-6 ${i < 3 ? "border-r border-white/10" : ""}`}>
              <div className="text-4xl font-black tracking-wider text-orange-500">{num}</div>
              <div className="text-[11px] font-semibold tracking-[2px] uppercase text-white/45 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-12 py-20">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">About us</p>
          <h2 className="text-5xl font-black tracking-wider uppercase mb-12">Why Join RJL?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/[0.06] border border-white/[0.06] rounded-lg overflow-hidden">
            {[
              { icon: "🚛", title: "Drive when you want. Join others when you feel like it.", desc: "No schedules, no pressure. Hop in whenever you're ready to roll." },
              { icon: "🤝", title: "A relaxed community where you always belong.", desc: "No matter where you are on the map, feel free to say \"I'm here right now\" or \"Anyone nearby want to join?\" We value casual and natural interaction between members." },
              { icon: "📋", title: "Enjoy TruckersMP in your own way.", desc: "You can enjoy TruckersMP in many different ways." },
              { icon: "🌏", title: "Asia Focus", desc: "We are based around the Asian community" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#0d0d0d] hover:bg-[#141414] transition-colors p-8">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-black tracking-wide uppercase mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#1a0d00] to-[#0d0d0d] border-t border-orange-500/15 text-center px-12 py-20">
        <h2 className="text-6xl font-black tracking-wider uppercase mb-4">Ready to <span className="text-orange-500">Roll?</span></h2>
        <p className="text-base text-white/50 tracking-wider mb-9">Join our Discord and take your first step.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://truckersmp.com/vtc/89349" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5">
            Apply Now
          </a>
          <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-bold tracking-[2px] uppercase border border-white/35 px-9 py-3.5 rounded-md hover:bg-white/10 transition-all hover:-translate-y-0.5">
            Join Discord
          </a>
        </div>
      </section>
      <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span>© 2026 Royal Jiyu Logistics · Freedom Across Asia</span>
      </footer>
    </main>
  );
}