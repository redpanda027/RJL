'use client';

import Link from "next/link";
import { useState } from "react";

export default function AboutUs() {
    const [lang, setLang] = useState<"en" | "ja">("en");

    const t = {
        en: {
            home: "Home",
            about: "About Us",
            members: "Members",
            events: "Events",
            discord: "Discord",
            whoWeAre: "Who We Are",
            aboutTitle: "About Us",
            welcomeTitle: "Welcome to Royal Jiyū Logistics.",
            intro: "We are a TruckersMP VTC mainly focused on the Asian community. Our goal is simple: enjoy the road freely and casually together.",
            convoyInfo: "We sometimes organize convoy events, but participation is always optional. There is no pressure to join every event or stay active all the time.",
            motto: "Drive when you want. Join others when you feel like it.",
            communityDesc: "That is the kind of relaxed community we want to create. No matter where you are driving on the map, you are always welcome to say:",
            quote1: "\"I'm driving here right now.\"",
            quote2: "\"Anyone nearby wants to join?\"",
            interaction: "We value casual and natural interaction between members.",
            waysTitle: "You can enjoy TruckersMP in many different ways:",
            ways: ["Casual Driving", "Long Distance Trips", "Night Drives", "Photo Sessions", "Relaxed Driving While Chatting"],
            closing: "Whether you are a beginner, experienced driver, or solo player, everyone is welcome here. Join freely, drive together, and enjoy the road without pressure.",
            readyTitle: "Ready to Roll?",
            ctaSub: "Join our Discord and take your first step.",
            joinDiscord: "Join Discord",
            footer: "© 2026 Royal Jiyu Logistics · Freedom Across Asia",
        },
        ja: {
            home: "ホーム",
            about: "私たちについて",
            members: "メンバー",
            events: "イベント",
            discord: "Discord",
            whoWeAre: "私たちについて",
            aboutTitle: "私たちについて",
            welcomeTitle: "ロイヤルジユーロジスティクスへようこそ。",
            intro: "私たちはアジアコミュニティを中心に活動するTruckersMP VTCです。目標は単純明快：気軽に、自由に一緒に走ること。",
            convoyInfo: "時々コンボイイベントを開催していますが、参加は常にオプションです。毎回参加する必要もなく、常にアクティブである必要もありません。",
            motto: "行きたい時に走る。誰かと走りたい時に集まる。",
            communityDesc: "そんなリラックスしたコミュニティを作りたいんです。マップのどこを走っていても、こんなふうに声をかけてもらえます：",
            quote1: "「今ここ走ってます！」",
            quote2: "「近い人、一緒に走りませんか？」",
            interaction: "メンバー間の自然で気軽な交流を大切にしています。",
            waysTitle: "TruckersMP の楽しみ方はたくさんあります：",
            ways: ["のんびりドライブ", "長距離配送", "夜間走行", "写真撮影", "チャットしながらドライブ"],
            closing: "初心者さん、経験者さん、ソロプレイ派さん、みんなウェルカムです。気軽に参加して、一緒に走ろう。圧はかかりません。",
            readyTitle: "さあ、走ろう！",
            ctaSub: "Discordに参加して、最初の一歩を踏み出そう。",
            joinDiscord: "Discordに参加",
            footer: "© 2026 Royal Jiyu Logistics · 自由はアジア中に。",
        }
    }[lang];

    const navLinks = [
        { label: t.home, href: "/" },
        { label: t.about, href: "/about" },
        { label: t.members, href: "/members" },
        { label: t.events, href: "/events" },
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

            {/* ナビバー */}
            <nav className="relative z-10 flex items-center justify-between px-12 py-6 border-b border-white/10 backdrop-blur-sm bg-black/60">
                <a href="#" className="text-orange-500 font-black text-xl tracking-[4px] uppercase">RJL</a>
                <ul className="flex items-center gap-9 list-none">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <Link href={href}
                                className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${label === t.about
                                    ? "text-orange-500 border-b border-orange-500 pb-0.5"
                                    : "text-white/70 hover:text-orange-400"
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setLang(lang === "en" ? "ja" : "en")}
                        className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                    >
                        {lang === "en" ? "日本語" : "ENGLISH"}
                    </button>
                    <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
                        {t.discord}
                    </a>
                </div>
            </nav>

            {/* ヘッダー */}
            <section className="border-b border-white/[0.06] px-12 py-20 bg-[#0d0d0d]">
                <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">{t.whoWeAre}</p>
                <h1 className="text-6xl font-black tracking-wider uppercase">About <span className="text-orange-500">Us</span></h1>
            </section>

            {/* テキストセクション */}
            <section className="max-w-4xl mx-auto px-12 py-20">
                <div className="space-y-6 text-white/70 leading-relaxed text-base">
                    <p className="text-2xl font-black text-white uppercase tracking-wide">{t.welcomeTitle}</p>
                    <p>{t.intro}</p>
                    <p>{t.convoyInfo}</p>
                    <p className="text-white font-semibold">{t.motto}</p>
                    <p>{t.communityDesc} <span className="text-orange-400">{t.quote1}</span> <span className="text-orange-400">{t.quote2}</span> {t.interaction}</p>
                    <p>{t.waysTitle}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {t.ways.map((item) => (
                            <li key={item} className="border border-white/10 rounded-md px-4 py-2 text-sm text-white/60 bg-white/[0.03]">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p>{t.closing}</p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#1a0d00] to-[#0d0d0d] border-t border-orange-500/15 text-center px-12 py-20">
                <h2 className="text-5xl font-black tracking-wider uppercase mb-4">Ready to <span className="text-orange-500">Roll?</span></h2>
                <p className="text-base text-white/50 tracking-wider mb-9">{t.ctaSub}</p>
                <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[2px] uppercase px-9 py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5">
                    {t.joinDiscord}
                </a>
            </section>

            {/* フッター */}
            <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
                <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
                <span>{t.footer}</span>
            </footer>
        </main>
    );
}