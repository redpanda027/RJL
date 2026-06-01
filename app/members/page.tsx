'use client';

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";

const ranks = [
  {
    labelKey: "administration",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    members: [
      { initials: "RP", name: "Redpanda026", roleKey: "owner", deliveries: 9 },
      { initials: "LG", name: "Loyal Gaming", roleKey: "co-owner", deliveries: 9 },
    ],
  },
  {
    labelKey: "staff",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    members: [
      { initials: "/", name: "NO STAFF", roleKey: "NO STAFF", deliveries: null },
    ],
  },
  {
    labelKey: "drivers",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    members: [
      { initials: "FK", name: "Arigasaki0", roleKey: "driver", deliveries: 0 },
    ],
  },
  {
    labelKey: "chats",
    color: "rgba(255,255,255,0.4)",
    bg: "rgba(255,255,255,0.07)",
    members: [
      { initials: "RC", name: "NO RECRUITS", roleKey: "/", deliveries: 0 },
    ],
  },
];

const navLinksKeys = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/about" },
  { labelKey: "members", href: "/members", active: true },
  { labelKey: "events", href: "/events" },
];

export default function MembersPage() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ナビバー */}
      <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-6 border-b border-white/10 bg-black/90 backdrop-blur-md sticky top-0 z-20">
        <Link href="/" className="text-orange-500 font-black text-lg sm:text-xl tracking-[4px] uppercase">
          RJL
        </Link>

        {/* デスクトップナビ */}
        <ul className="hidden sm:flex items-center gap-9 list-none">
          {navLinksKeys.map(({ labelKey, href, active }) => (
            <li key={labelKey}>
              <Link
                href={href}
                className={`text-xs font-semibold tracking-[2px] uppercase transition-colors ${active
                  ? "text-orange-500 border-b border-orange-500 pb-0.5"
                  : "text-white/60 hover:text-orange-400"
                  }`}
              >
                {t(labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        {/* デスクトップ右側 */}
        <div className="hidden sm:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://discord.gg/ZejDZvATv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
          >
            {t('discord')}
          </a>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white/60" />
          <div className="w-6 h-0.5 bg-white/60" />
          <div className="w-6 h-0.5 bg-white/60" />
        </button>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <ul className="flex flex-col list-none p-4 space-y-3">
            {navLinksKeys.map(({ labelKey, href, active }) => (
              <li key={labelKey}>
                <Link
                  href={href}
                  className={`block text-sm font-semibold tracking-[2px] uppercase transition-colors py-2 ${active
                    ? "text-orange-500"
                    : "text-white/60 hover:text-orange-400"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 p-4 border-t border-white/10">
            <LanguageSwitcher />
            <a
              href="https://discord.gg/ZejDZvATv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all flex-1 text-center"
            >
              {t('discord')}
            </a>
          </div>
        </div>
      )}

      {/* ページヘッダー */}
      <div className="bg-[#0d0d0d] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-12 py-8 sm:py-14">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[4px] uppercase text-orange-500 mb-2 sm:mb-3">
            {t('our-team')}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wider uppercase mb-2">
            {t('members-title')}
          </h1>
          <p className="text-xs sm:text-sm text-white/45 font-light">
            {t('members-desc')}
          </p>
        </div>
      </div>

      {/* メンバー一覧 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-12 py-8 sm:py-12 pb-20 sm:pb-24 space-y-10 sm:space-y-14">
        {ranks.map(({ labelKey, color, bg, members }) => (
          <section key={labelKey}>
            {/* ランクラベル */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span
                className="text-[10px] sm:text-[11px] font-bold tracking-[3px] uppercase"
                style={{ color }}
              >
                {t(labelKey)}
              </span>
            </div>

            {/* カードグリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#111] border border-white/[0.07] rounded-lg p-4 sm:p-5 hover:bg-[#161616] transition-colors group"
                >
                  {/* アバター */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black mb-3"
                    style={{ background: bg, color }}
                  >
                    {member.initials}
                  </div>

                  <div className="text-sm sm:text-sm font-bold tracking-wide mb-1 break-words">
                    {member.name}
                  </div>
                  <div
                    className="text-[10px] sm:text-[11px] font-semibold tracking-[2px] uppercase"
                    style={{ color }}
                  >
                    {t(member.roleKey)}
                  </div>

                  <div className="text-xs text-white/35 mt-2.5 font-light">
                    {t('deliveries')}{" "}
                    <span className="text-white/65 font-medium">
                      {member.deliveries ?? "—"}
                    </span>
                  </div>

                  <div
                    className="inline-block text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded mt-2"
                    style={{ background: bg, color }}
                  >
                    {t(member.roleKey)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* フッター */}
      <footer className="bg-black border-t border-white/[0.06] px-4 sm:px-12 py-4 sm:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs text-white/30 tracking-wider">
        <span className="text-orange-500 font-black text-base tracking-widest">RJL</span>
        <span className="text-center sm:text-right">{t('footer')}</span>
      </footer>
    </main >
  );
}
