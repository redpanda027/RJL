export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.steamusercontent.com/ugc/2483255848411260999/A502F530516B6D6759D0366022F781A62129218D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')",
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />

        {/* ナビバー */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-6 border-b border-white/10 backdrop-blur-sm">
          <a href="#" className="text-orange-500 font-black text-xl tracking-[4px] uppercase">
            RJL
          </a>

          <ul className="flex items-center gap-9 list-none">
            {[
              { label: "Home", active: true },
              { label: "Members", active: false },
              { label: "Events", active: false },
              { label: "Partners", active: false },
            ].map(({ label, active }) => (
              <li key={label}>
                <a
                  href="#"
                  className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${active
                    ? "text-orange-500 border-b border-orange-500 pb-0.5"
                    : "text-white/70 hover:text-orange-400"
                    }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://discord.gg/ZejDZvATv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
          >
            Discord
          </a>
        </nav>

        {/* ヒーローコンテンツ */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* バッジ */}
          <div className="text-xs font-semibold tracking-[3px] uppercase text-orange-500 border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 rounded-full mb-6">
            Virtual Trucking Company · ETS2
          </div>

          {/* タイトル */}
          <h1 className="text-[clamp(56px,10vw,110px)] font-black leading-none tracking-wider uppercase drop-shadow-2xl mb-5">
            Royal{" "}
            <span className="text-orange-500">Jiyu</span>
            <br />
            Logistics
          </h1>

          {/* サブタイトル */}
          <p className="text-lg font-light tracking-[5px] uppercase text-white/55 mb-12">
            Freedom Across Asia
          </p>

          {/* ボタン */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5"
            >
              Join Us
            </a>
            <a
              href="https://discord.gg/ZejDZvATv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-bold tracking-[2px] uppercase border border-white/35 px-9 py-3.5 rounded-md backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Discord
            </a>
          </div>
        </div>

        {/* スタッツバー */}
        <div className="relative z-10 flex justify-center border-t border-white/10 backdrop-blur-md bg-black/50">
          {[
            { num: "50+", label: "Active Drivers" },
            { num: "1000+", label: "Deliveries" },
            { num: "Asia", label: "Coverage" },
            { num: "24/7", label: "Community" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              className={`flex-1 max-w-[200px] text-center py-7 px-6 ${i < 3 ? "border-r border-white/10" : ""
                }`}
            >
              <div className="text-4xl font-black tracking-wider text-orange-500">
                {num}
              </div>
              <div className="text-[11px] font-semibold tracking-[2px] uppercase text-white/45 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT / FEATURES ===== */}
      <section className="bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-12 py-20">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">
            About us
          </p>
          <h2 className="text-5xl font-black tracking-wider uppercase mb-12">
            Why Join RJL?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/[0.06] border border-white/[0.06] rounded-lg overflow-hidden">
            {[
              {
                icon: "🚛",
                title: "Weekly Convoys",
                desc: "アジア全土を走る定期コンボイイベント。仲間と一緒に長距離を走ろう。",
              },
              {
                icon: "🤝",
                title: "Active Community",
                desc: "Discordで常に活発なコミュニティ。いつでも話しかけられる仲間がいる。",
              },
              {
                icon: "📋",
                title: "Rank System",
                desc: "配達実績に応じてランクアップ。自分の成長を可視化できる仕組み。",
              },
              {
                icon: "🌏",
                title: "Asia Focus",
                desc: "アジアマップを中心に活動。日本を含むアジア圏のルートを走り尽くせ。",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0d0d0d] hover:bg-[#141414] transition-colors p-8"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-black tracking-wide uppercase mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-br from-[#1a0d00] to-[#0d0d0d] border-t border-orange-500/15 text-center px-12 py-20">
        <h2 className="text-6xl font-black tracking-wider uppercase mb-4">
          Ready to <span className="text-orange-500">Roll?</span>
        </h2>
        <p className="text-base text-white/50 tracking-wider mb-9">
          Discordに参加して、最初の一歩を踏み出そう。
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5"
          >
            Apply Now
          </a>
          <a
            href="https://discord.gg/ZejDZvATv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-bold tracking-[2px] uppercase border border-white/35 px-9 py-3.5 rounded-md hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            Join Discord
          </a>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span>© 2026 Royal Jiyu Logistics · Freedom Across Asia</span>
      </footer>
    </main>
  );
}
