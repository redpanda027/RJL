import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

            {/* ナビバー */}
            <nav className="relative z-10 flex items-center justify-between px-12 py-6 border-b border-white/10 backdrop-blur-sm bg-black/60">
                <a href="#" className="text-orange-500 font-black text-xl tracking-[4px] uppercase">RJL</a>
                <ul className="flex items-center gap-9 list-none">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Members", href: "/members" },
                        { label: "Events", href: "/events" },
                        { label: "About Us", href: "/about" },
                    ].map(({ label, href }) => (
                        <li key={label}>
                            <Link href={href}
                                className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${label === "About Us"
                                    ? "text-orange-500 border-b border-orange-500 pb-0.5"
                                    : "text-white/70 hover:text-orange-400"
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
                    Discord
                </a>
            </nav>

            {/* ヘッダー */}
            <section className="border-b border-white/[0.06] px-12 py-20 bg-[#0d0d0d]">
                <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">Who We Are</p>
                <h1 className="text-6xl font-black tracking-wider uppercase">About <span className="text-orange-500">Us</span></h1>
            </section>

            {/* 英語テキスト */}
            <section className="max-w-4xl mx-auto px-12 py-20">
                <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-6">English</p>
                <div className="space-y-6 text-white/70 leading-relaxed text-base">
                    <p className="text-2xl font-black text-white uppercase tracking-wide">Welcome to Royal Jiyū Logistics.</p>
                    <p>We are a TruckersMP VTC mainly focused on the Asian community. Our goal is simple: enjoy the road freely and casually together.</p>
                    <p>We sometimes organize convoy events, but participation is always optional. There is no pressure to join every event or stay active all the time.</p>
                    <p className="text-white font-semibold">Drive when you want. Join others when you feel like it.</p>
                    <p>That is the kind of relaxed community we want to create. No matter where you are driving on the map, you are always welcome to say: <span className="text-orange-400">"I'm driving here right now."</span> <span className="text-orange-400">"Anyone nearby wants to join?"</span> We value casual and natural interaction between members.</p>
                    <p>You can enjoy TruckersMP in many different ways:</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {["Casual Driving", "Long Distance Trips", "Night Drives", "Photo Sessions", "Relaxed Driving While Chatting"].map((item) => (
                            <li key={item} className="border border-white/10 rounded-md px-4 py-2 text-sm text-white/60 bg-white/[0.03]">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p>Whether you are a beginner, experienced driver, or solo player, everyone is welcome here. Join freely, drive together, and enjoy the road without pressure.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#1a0d00] to-[#0d0d0d] border-t border-orange-500/15 text-center px-12 py-20">
                <h2 className="text-5xl font-black tracking-wider uppercase mb-4">Ready to <span className="text-orange-500">Roll?</span></h2>
                <p className="text-base text-white/50 tracking-wider mb-9">Join our Discord and take your first step.</p>
                <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5">
                    Join Discord
                </a>
            </section>

            {/* フッター */}
            <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
                <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
                <span>© 2026 Royal Jiyu Logistics · Freedom Across Asia</span>
            </footer>
        </main>
    );
}