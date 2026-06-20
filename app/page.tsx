"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ja" | "hi">("en");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 複数の背景画像
  const backgroundImages = [
    "url('https://images.steamusercontent.com/ugc/11684572301905860205/C5B8D256A9FBB3948809681DB87FC839C965CC57/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')",
    "url('https://images.steamusercontent.com/ugc/9287020850455943368/5B215A9CCE6043AF547BDE26DA76C4F6D800C015/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')",
  ];

  // 背景画像を自動的に変更
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // 6秒ごとに変更

    return () => clearInterval(interval);
  }, []);

  const t = {
    en: {
      badge: "Virtual Trucking Company · ETS2",
      subtitle: "No pressure. No limits. drive anytime together.",
      joinUs: "Join Us",
      aboutLabel: "About us",
      whyJoin: "Why Join RJL?",
      features: [
        { icon: "🚛", title: "Drive when you want. Join others when you feel like it.", desc: "No schedules, no pressure. Hop in whenever you're ready to roll." },
        { icon: "🤝", title: "A relaxed community where you always belong.", desc: "No matter where you are on the map, feel free to say \"I'm here right now\" or \"Anyone nearby want to join?\" We value casual and natural interaction between members." },
        { icon: "📋", title: "Enjoy TruckersMP in your own way.", desc: "You can enjoy TruckersMP in many different ways." },
        { icon: "🌏", title: "Asia Focus", desc: "We are based around the Asian community. we often play together at asian time." },
      ],
      ctaSub: "Join our Discord and take your first step.",
      applyNow: "Apply Now",
      joinDiscord: "Join Discord",
      footer: "© 2026 Royal Jiyu Logistics · Freedom Across Asia",
      stats: ["Active Drivers", "Deliveries", "Coverage", "Community"],
      nav: ["Home", "About us", "Members", "Events"],
    },
    ja: {
      badge: "バーチャルトラッキング会社 · ETS2",
      subtitle: "自由に、みんないつでも一緒に走ろう。",
      joinUs: "参加する",
      aboutLabel: "私たちについて",
      whyJoin: "なぜRJLに？",
      features: [
        { icon: "🚛", title: "行きたい時に走る。誰かと走りたい時に集まる。", desc: "スケジュールなし、プレッシャーなし。準備ができたらいつでも参加できます。" },
        { icon: "🤝", title: "いつでも居場所があるコミュニティ。", desc: "マップのどこを走っていても大丈夫。「今ここを走ってる！」「近い人、一緒に行こう！」そんなふうに自由に声をかけ合えます。" },
        { icon: "📋", title: "自分のスタイルで楽しむ。", desc: "のんびりドライブ、長距離配送、夜間走行、写真撮影など、様々な楽しみ方ができます。" },
        { icon: "🌏", title: "アジア重視", desc: "アジアコミュニティを中心に活動しています。アジア時間に合わせてプレイします。" },
      ],
      ctaSub: "Discordに参加して最初の一歩を。",
      applyNow: "申請する",
      joinDiscord: "Discordに参加",
      footer: "© 2026 Royal Jiyu Logistics · アジアを自由に",
      stats: ["アクティブドライバー", "配送数", "エリア", "コミュニティ"],
      nav: ["ホーム", "私たちについて", "メンバー", "イベント"],
    },
    hi: {
      badge: "वर्चुअल ट्रकिंग कंपनी · ETS2",
      subtitle: "कोई दबाव नहीं। कोई सीमा नहीं। कभी भी साथ चलें।",
      joinUs: "जुड़ें",
      aboutLabel: "हमारे बारे में",
      whyJoin: "RJL में क्यों शामिल हों?",
      features: [
        { icon: "🚛", title: "जब चाहो चलाओ। जब मन करे दूसरों के साथ जुड़ो।", desc: "कोई शेड्यूल नहीं, कोई दबाव नहीं। जब भी तैयार हों, आ जाइए।" },
        { icon: "🤝", title: "एक शांत समुदाय जहाँ आप हमेशा अपनेपन का एहसास करें।", desc: "मैप पर जहाँ भी हों, बेझिझक कहें \"मैं अभी यहाँ चला रहा हूँ\" या \"पास में कोई है जो जुड़ना चाहे?\" हम सदस्यों के बीच स्वाभाविक बातचीत को महत्व देते हैं।" },
        { icon: "📋", title: "अपने तरीके से TruckersMP का आनंद लें।", desc: "आप TruckersMP का आनंद कई अलग-अलग तरीकों से ले सकते हैं।" },
        { icon: "🌏", title: "एशिया फोकस", desc: "हम एशियाई समुदाय पर केंद्रित हैं। हम अक्सर एशियाई समय पर एक साथ खेलते हैं।" },
      ],
      ctaSub: "हमारे Discord से जुड़ें और अपना पहला कदम उठाएँ।",
      applyNow: "आवेदन करें",
      joinDiscord: "Discord से जुड़ें",
      footer: "© 2026 Royal Jiyu Logistics · पूरे एशिया में आज़ादी",
      stats: ["सक्रिय ड्राइवर", "डिलीवरी", "कवरेज", "समुदाय"],
      nav: ["होम", "हमारे बारे में", "सदस्य", "ईवेंट"],
    },
  }[lang];

  const navHrefs = ["/", "/about", "/members", "/events"];

  const langButtonLabel = lang === "en" ? "日本語" : lang === "ja" ? "हिन्दी" : "ENGLISH";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <section
        className="relative min-h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: backgroundImages[currentBgIndex],
          transition: "background-image 1.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6 border-b border-white/10 backdrop-blur-sm">
          <a href="#" className="text-orange-500 font-black text-lg sm:text-xl tracking-[4px] uppercase">RJL</a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-9 list-none">
            {t.nav.map((label, i) => (
              <li key={label}>
                <Link href={navHrefs[i]} className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${i === 0 ? "text-orange-500 border-b border-orange-500 pb-0.5" : "text-white/70 hover:text-orange-400"}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ja" : lang === "ja" ? "hi" : "en")}
              className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all"
            >
              {langButtonLabel}
            </button>
            <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
              Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-20"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 z-10 bg-black/95 backdrop-blur-sm border-b border-white/10">
            <ul className="flex flex-col list-none py-4">
              {t.nav.map((label, i) => (
                <li key={label}>
                  <Link href={navHrefs[i]} onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 text-sm font-semibold tracking-[2px] uppercase transition-colors ${i === 0 ? "text-orange-500 bg-orange-500/10" : "text-white/70 hover:text-orange-400 hover:bg-white/5"}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 px-4 py-4 border-t border-white/10">
              <button
                onClick={() => {
                  setLang(lang === "en" ? "ja" : lang === "ja" ? "hi" : "en");
                  setMobileMenuOpen(false);
                }}
                className="w-full text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all"
              >
                {langButtonLabel}
              </button>
              <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all text-center">
                Discord
              </a>
            </div>
          </div>
        )}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-0">
          <div className="text-xs font-semibold tracking-[3px] uppercase text-orange-500 border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 rounded-full mb-4 sm:mb-6">
            {t.badge}
          </div>
          <h1 className="text-[clamp(36px,8vw,110px)] font-black leading-none tracking-wider uppercase drop-shadow-2xl mb-3 sm:mb-5">
            Royal <span className="text-orange-500">Jiyu</span><br />Logistics
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-light tracking-[3px] sm:tracking-[5px] uppercase text-white/55 mb-8 sm:mb-12">{t.subtitle}</p>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center w-full sm:w-auto">
            <a href="https://truckersmp.com/vtc/89349" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold tracking-[2px] uppercase px-4 sm:px-9 py-3 sm:py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5 min-w-[120px] sm:min-w-auto">
              {t.joinUs}
            </a>
            <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-white text-xs sm:text-sm font-bold tracking-[2px] uppercase border border-white/35 px-4 sm:px-9 py-3 sm:py-3.5 rounded-md backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-0.5 min-w-[120px] sm:min-w-auto">
              Discord
            </a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center border-t border-white/10 backdrop-blur-md bg-black/50">
          {["2+", "0+", "Asia", "24/7"].map((num, i) => (
            <div key={i} className={`flex-1 text-center py-5 sm:py-7 px-4 sm:px-6 ${i < 3 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""}`}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-orange-500">{num}</div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[1px] sm:tracking-[2px] uppercase text-white/45 mt-1">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[3px] sm:tracking-[4px] uppercase text-orange-500 mb-3">{t.aboutLabel}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase mb-8 sm:mb-12">{t.whyJoin}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/[0.06] border border-white/[0.06] rounded-lg overflow-hidden">
            {t.features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#0d0d0d] hover:bg-[#141414] transition-colors p-4 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black tracking-wide uppercase mb-2">{title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#1a0d00] to-[#0d0d0d] border-t border-orange-500/15 text-center px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-wider uppercase mb-3 sm:mb-4">Ready to <span className="text-orange-500">Roll?</span></h2>
        <p className="text-xs sm:text-sm lg:text-base text-white/50 tracking-wider mb-6 sm:mb-9">{t.ctaSub}</p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <a href="https://truckersmp.com/vtc/89349" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold tracking-[2px] uppercase px-6 sm:px-9 py-3 sm:py-3.5 rounded-md shadow-[0_0_32px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5 min-w-[120px] text-center">
            {t.applyNow}
          </a>
          <a href="https://discord.gg/ZejDZvATv" target="_blank" rel="noopener noreferrer" className="text-white text-xs sm:text-sm font-bold tracking-[2px] uppercase border border-white/35 px-6 sm:px-9 py-3 sm:py-3.5 rounded-md hover:bg-white/10 transition-all hover:-translate-y-0.5 min-w-[120px] text-center">
            {t.joinDiscord}
          </a>
        </div>
      </section>
      <footer className="bg-black border-t border-white/[0.06] px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center sm:items-center text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span className="text-center sm:text-right">{t.footer}</span>
      </footer>
    </main>
  );
}
