'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const languages: { code: 'en' | 'ja' | 'hi' | 'ko'; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="text-xs font-semibold tracking-[2px] uppercase border border-white/25 px-4 py-2 rounded-full hover:border-orange-500/60 hover:shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all flex items-center gap-2 bg-white/[0.03]"
        aria-label="Select language"
      >
        <span className="text-sm">{current.flag}</span>
        <span>{current.label}</span>
        <svg className={`w-3 h-3 text-white/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`absolute right-0 top-full mt-2 bg-[#151515] border border-white/10 rounded-lg overflow-hidden z-30 min-w-[150px] shadow-xl transition-all duration-200 origin-top-right ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => { setLanguage(l.code); setOpen(false); }}
            className={`flex items-center gap-2 w-full text-left px-4 py-2.5 text-xs font-semibold tracking-[1px] transition-colors hover:bg-white/[0.06] ${l.code === language ? 'text-orange-500 bg-orange-500/[0.08]' : 'text-white/70'
              }`}
          >
            <span className="text-sm">{l.flag}</span>
            <span className="flex-1">{l.label}</span>
            {l.code === language && (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
