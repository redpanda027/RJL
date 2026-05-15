'use client';

import Link from "next/link";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    date: "2026-09-26",
    titleEn: "Autumn Convoy 2026",
    titleJa: "秋のコンボイ 2026",
    route: "Amsterdam→Liege",
    server: "[JAPAN]ENJOYTRUCKERS - AUTUMN",
    slots: 10,
    filled: 2,
    status: "upcoming",
  },
];

const pastEvents = [
  {
    id: 1,
    date: "2001-01-01",
    titleEn: "new vtc test drive",
    titleJa: "新VTC テストドライブ",
    route: "Amsterdam→Liege",
    server: "tmp Simulation 2",
    slots: 10,
    filled: 2,
    status: "past",
  },
];

function EventCard({
  event,
  lang,
}: {
  event: {
    id: number;
    date: string;
    titleEn: string;
    titleJa: string;
    route: string;
    server: string;
    slots: number;
    filled: number;
    status: string;
  };
  lang: "en" | "ja";
}) {
  const t = {
    en: { finished: "Finished", full: "Full", open: "Open", members: "members" },
    ja: { finished: "終了", full: "満席", open: "参加可", members: "人" },
  }[lang];

  const isPast = event.status === "past";
  const isFull = event.filled >= event.slots;
  const fillPercent = Math.round((event.filled / event.slots) * 100);
  const title = lang === "en" ? event.titleEn : event.titleJa;

  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString(lang === "en" ? "en-US" : "ja-JP", { month: "short" }).toUpperCase();
  const day = dateObj.getDate();

  return (
    <div
      className={`bg-[#111] border rounded-lg p-6 flex gap-6 items-start transition-colors hover:bg-[#161616] ${isPast ? "border-white/[0.05] opacity-60" : "border-white/[0.07]"
        }`}
    >
      {/* 日付ブロック */}
      <div className="flex-shrink-0 w-14 text-center">
        <div className="text-[11px] font-bold tracking-[2px] text-orange-500">{month}</div>
        <div className="text-3xl font-black leading-none">{day}</div>
      </div>

      {/* 区切り */}
      <div className="w-px self-stretch bg-white/[0.07]" />

      {/* メイン情報 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h3 className="text-base font-black tracking-wide uppercase">{title}</h3>
          {isPast ? (
            <span className="text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded bg-white/[0.07] text-white/40">
              {t.finished}
            </span>
          ) : isFull ? (
            <span className="text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded bg-red-500/10 text-red-400">
              {t.full}
            </span>
          ) : (
            <span className="text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-400">
              {t.open}
            </span>
          )}
        </div>

        <div className="text-sm text-white/45 mb-3">
          📍 {event.route} &nbsp;·&nbsp; 🖥 {event.server}
        </div>

        {/* 参加者バー */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1 bg-white/[0.07] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-orange-500"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          <span className="text-xs text-white/40 font-light whitespace-nowrap">
            {event.filled} / {event.slots} {t.members}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [lang, setLang] = useState<"en" | "ja">("en");

  const t = {
    en: {
      home: "Home",
      about: "About Us",
      members: "Members",
      events: "Events",
      discord: "Discord",
      convoyEvents: "Convoy Events",
      eventsTitle: "Events",
      eventsDesc: "A list of past and upcoming convoy events.",
      upcoming: "Upcoming",
      pastEvents: "Past Events",
      footer: "© 2026 Royal Jiyu Logistics · Freedom Across Asia",
    },
    ja: {
      home: "ホーム",
      about: "私たちについて",
      members: "メンバー",
      events: "イベント",
      discord: "Discord",
      convoyEvents: "コンボイイベント",
      eventsTitle: "イベント",
      eventsDesc: "過去および今後のコンボイイベントのリスト。",
      upcoming: "今後のイベント",
      pastEvents: "過去のイベント",
      footer: "© 2026 Royal Jiyu Logistics · 自由はアジア中に。",
    },
  }[lang];

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.members, href: "/members" },
    { label: t.events, href: "/events", active: true },
  ];

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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            className="text-xs font-semibold tracking-[2px] uppercase border border-white/40 px-3 py-2 rounded-md hover:bg-white hover:text-black transition-all"
          >
            {lang === "en" ? "日本語" : "ENGLISH"}
          </button>
          <a
            href="https://discord.gg/ZejDZvATv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
          >
            {t.discord}
          </a>
        </div>
      </nav>

      {/* ページヘッダー */}
      <div className="bg-[#0d0d0d] border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-12 py-14">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-3">
            {t.convoyEvents}
          </p>
          <h1 className="text-6xl font-black tracking-wider uppercase mb-2">
            {t.eventsTitle}
          </h1>
          <p className="text-sm text-white/45 font-light">
            {t.eventsDesc}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-12 py-12 pb-24 space-y-14">

        {/* 今後のイベント */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-orange-500">
              {t.upcoming}
            </span>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} lang={lang} />
            ))}
          </div>
        </section>

        {/* 過去のイベント */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/40">
              {t.pastEvents}
            </span>
          </div>
          <div className="space-y-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} lang={lang} />
            ))}
          </div>
        </section>

      </div>

      {/* フッター */}
      <footer className="bg-black border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
