'use client';

import Link from "next/link";
import { useState } from "react";

export default function AboutUs() {
    const [lang, setLang] = useState<"en" | "ja" | "hi">("en");

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
            intro: "We are a TruckersMP VTC mainly focused on the Asian community, built for drivers who want to enjoy the road in a relaxed, friendly, and pressure-free environment. Our goal is simple: enjoy TruckersMP freely and casually together.",
            convoyInfo: "At Royal Jiyū Logistics, we believe that TruckersMP does not always need to feel competitive or overly serious. Sometimes the best moments come from quiet night drives, random conversations on the road, or suddenly deciding to travel across the map together with other drivers. We want to create a community where people can freely enjoy those moments without feeling forced to participate in everything.",
            motto: "Drive when you want. Join others when you feel like it.",
            communityDesc: "That is the kind of relaxed community we want to create. No matter where you are driving on the map, you are always welcome to say:",
            convoyInfo2: "We sometimes organize convoy events and community activities, but participation is always optional. There is no pressure to join every event, stay constantly active, or follow strict attendance requirements. Everyone has their own pace, and we respect that.",
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

            welcomeTitle: "ようこそ、Royal Jiyū Logisticsへ。",

            intro: "私たちは、アジア圏を中心に活動しているTruckersMPのVTCです。このVTCでは、「自由に楽しむこと」を何より大切にしています。",

            intro2: "TruckersMPには、いろいろな楽しみ方があります。大人数で走るconvoy、静かな夜道をのんびり走る時間、VCで雑談しながらの配送、景色を楽しむ長距離ドライブ――Royal Jiyū Logisticsは、そんな自由な楽しみ方を共有できるコミュニティです。",

            convoyInfo: "私たちは時々convoyイベントやコミュニティ活動を開催していますが、参加は完全自由です。毎回イベントに参加したり、常に活動したりする必要はありません。",

            convoyInfo2: "毎日走る人も、たまに気分転換でログインする人も、自分のペースで楽しめる場所を目指しています。",

            motto: "行きたい時に走る。誰かと走りたい時に集まる。",

            communityDesc: "そんな気軽で自然なコミュニティを目指しています。マップのどこを走っていても、自由に声をかけ合える雰囲気を大切にしています。",

            quote1: "「今ここを走ってる！」",
            quote2: "「近い人、一緒に行こう！」",
            quote3: "「今夜長距離やる人いる？」",

            interaction: "無理に活動する必要はありません。ふと誰かと一緒に走りたくなった時に、気軽に集まれる。そんな関係を大切にしています。",

            waysTitle: "また、convoyだけではなく、",

            ways: [
                "のんびりドライブ",
                "長距離配送",
                "夜間走行",
                "写真撮影",
                "雑談しながらの運転",
                "景色を楽しむクルージング",
                "ソロで気ままに走行",
                "リアル志向の運転"
            ],

            closing: "初心者でも、経験者でも、ソロ勢でも大歓迎。自由に参加して、気軽に楽しめる場所です。",

            closing2: "Royal Jiyū Logisticsの「Jiyū」は、“自由”という意味です。ルールやプレッシャーに縛られすぎず、それぞれのスタイルでTruckersMPを楽しめるコミュニティを目指しています。",

            closing3: "一緒に楽しいコミュニティを作っていきましょう！",

            readyTitle: "さあ、走ろう！",

            ctaSub: "Discordに参加して、新しい仲間と一緒に走り出そう。",

            joinDiscord: "Discordに参加",

            footer: "© 2026 Royal Jiyū Logistics · 自由に、気軽に、一緒に。"
        },
        hi: {
            home: "होम",
            about: "हमारे बारे में",
            members: "सदस्य",
            events: "ईवेंट",
            discord: "डिस्कॉर्ड",

            whoWeAre: "हम कौन हैं",
            aboutTitle: "हमारे बारे में",

            welcomeTitle: "Royal Jiyū Logistics में आपका स्वागत है।",

            intro: "हम एक TruckersMP VTC हैं जो मुख्य रूप से एशियाई समुदाय पर केंद्रित है, जो उन ड्राइवरों के लिए बनाया गया है जो एक आरामदायक, मैत्रीपूर्ण और दबाव-मुक्त वातावरण में सड़क का आनंद लेना चाहते हैं। हमारा लक्ष्य सरल है: एक साथ आज़ादी और सहजता से TruckersMP का आनंद लेना।",

            convoyInfo: "Royal Jiyū Logistics में, हम मानते हैं कि TruckersMP को हमेशा प्रतिस्पर्धी या अत्यधिक गंभीर होने की आवश्यकता नहीं है। कभी-कभी सबसे अच्छे पल शांत रात की ड्राइव, सड़क पर यादृच्छिक बातचीत, या अचानक अन्य ड्राइवरों के साथ मैप पार करने का निर्णय लेने से आते हैं। हम एक ऐसा समुदाय बनाना चाहते हैं जहाँ लोग बिना किसी दबाव के उन पलों का आनंद ले सकें।",

            motto: "जब चाहो चलाओ। जब मन करे दूसरों के साथ जुड़ो।",

            communityDesc: "हम एक ऐसा शांत और स्वाभाविक समुदाय बनाना चाहते हैं। मैप पर आप जहाँ भी ड्राइव कर रहे हों, आप हमेशा यह कहने के लिए स्वागत हैं:",
            convoyInfo2: "हम कभी-कभी कॉन्वॉय इवेंट और सामुदायिक गतिविधियों का आयोजन करते हैं, लेकिन भागीदारी हमेशा वैकल्पिक होती है। हर इवेंट में शामिल होने, लगातार सक्रिय रहने या सख्त उपस्थिति नियमों का पालन करने का कोई दबाव नहीं है। हर किसी की अपनी गति होती है, और हम उसका सम्मान करते हैं।",

            quote1: "\"मैं अभी यहाँ चला रहा हूँ।\"",
            quote2: "\"पास में कोई है जो जुड़ना चाहे?\"",

            interaction: "हम सदस्यों के बीच स्वाभाविक बातचीत को महत्व देते हैं।",

            waysTitle: "आप TruckersMP का आनंद कई अलग-अलग तरीकों से ले सकते हैं:",
            ways: [
                "सामान्य ड्राइविंग",
                "लंबी दूरी की यात्राएँ",
                "रात की ड्राइव",
                "फोटो सेशन",
                "बातचीत करते हुए आराम से ड्राइव",
                "दृश्यों का आनंद लेते हुए क्रूज़िंग",
                "अकेले मनमानी ड्राइव",
                "यथार्थवादी ड्राइविंग"
            ],

            closing: "चाहे आप शुरुआती हों, अनुभवी ड्राइवर हों, या अकेले खेलने वाले हों, यहाँ सभी का स्वागत है। आज़ादी से जुड़ें, एक साथ चलाएँ, और बिना दबाव के सड़क का आनंद लें।",

            readyTitle: "चलने के लिए तैयार?",

            ctaSub: "हमारे Discord से जुड़ें और अपना पहला कदम उठाएँ।",

            joinDiscord: "Discord से जुड़ें",

            footer: "© 2026 Royal Jiyū Logistics · आज़ादी से, सहजता से, एक साथ।"
        }
    }[lang];

    const navLinks = [
        { label: t.home, href: "/" },
        { label: t.about, href: "/about" },
        { label: t.members, href: "/members" },
        { label: t.events, href: "/events" },
    ];

    const langButtonLabel = lang === "en" ? "日本語" : lang === "ja" ? "हिन्दी" : "ENGLISH";

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
                        onClick={() => setLang(lang === "en" ? "ja" : lang === "ja" ? "hi" : "en")}
                        className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                    >
                        {langButtonLabel}
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
