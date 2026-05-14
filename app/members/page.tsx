import Link from "next/link";

const ranks = [
  {
    label: "Adminstration",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    members: [
      { initials: "RP", name: "Redpanda026", role: "Owner", deliveries: null },
      { initials: "LG", name: "Loyal Gaming", role: "Co-Owner", deliveries: null },
    ],
  },
  {
    label: "Staff",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    members: [
      { initials: "SR", name: "SeniorDriver1", role: "Senior Driver", deliveries: 250 },
      { initials: "SR", name: "SeniorDriver2", role: "Senior Driver", deliveries: 180 },
    ],
  },
  {
    label: "Drivers",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    members: [
      { initials: "FK", name: "Arigasaki05", role: "Driver", deliveries: 0 },
      { initials: "DR", name: "Driver2", role: "Driver", deliveries: 45 },
      { initials: "DR", name: "Driver3", role: "Driver", deliveries: 32 },
    ],
  },
  {
    label: "Chats",
    color: "rgba(255,255,255,0.4)",
    bg: "rgba(255,255,255,0.07)",
    members: [
      { initials: "RC", name: "Recruit1", role: "Recruit", deliveries: 5 },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Members", href: "/members", active: true },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ナビバー */}
      <nav className="flex items-center justify-between px-12 py-6 border-b border-white/10 bg-black/90 backdrop-blur-md sticky top-0 z-20">
        <Link href="/" className="text-orange-500 font-black text-xl tracking-[4px] uppercase">
          RJL
        </Link>

        <ul className="flex items-center gap-9 list-none">
          {navLinks.map(({ label, href, active }) => (
            <li key={label}>
              <Link
                href={href}
                className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${active
                  ? "text-orange-500 border-b border-orange-500 pb-0.5"
                  : "text-white/60 hover:text-orange-400"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://discord.gg/ZejDZvATv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
        >
          Discord
        </a>
      </nav>

      {/* ページヘッダー */}
      <div className="bg-[#0d0d0d] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-12 py-14">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">
            Our Team
          </p>
          <h1 className="text-6xl font-black tracking-wider uppercase mb-2">
            Members
          </h1>
          <p className="text-sm text-white/45 font-light">
            The drivers who keep Royal Jiyu Logistics moving.
          </p>
        </div>
      </div>

      {/* メンバー一覧 */}
      <div className="max-w-5xl mx-auto px-12 py-12 pb-24 space-y-14">
        {ranks.map(({ label, color, bg, members }) => (
          <section key={label}>
            {/* ランクラベル */}
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span
                className="text-[11px] font-bold tracking-[3px] uppercase"
                style={{ color }}
              >
                {label}
              </span>
            </div>

            {/* カードグリッド */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#111] border border-white/[0.07] rounded-lg p-5 hover:bg-[#161616] transition-colors group"
                >
                  {/* アバター */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black mb-3"
                    style={{ background: bg, color }}
                  >
                    {member.initials}
                  </div>

                  <div className="text-sm font-bold tracking-wide mb-1">
                    {member.name}
                  </div>
                  <div
                    className="text-[11px] font-semibold tracking-[2px] uppercase"
                    style={{ color }}
                  >
                    {member.role}
                  </div>

                  <div className="text-xs text-white/35 mt-2.5 font-light">
                    Deliveries{" "}
                    <span className="text-white/65 font-medium">
                      {member.deliveries ?? "—"}
                    </span>
                  </div>

                  <div
                    className="inline-block text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded mt-2"
                    style={{ background: bg, color }}
                  >
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* フッター */}
      <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span>© 2026 Royal Jiyu Logistics · Freedom Across Asia</span>
      </footer>
    </main >
  );
}
