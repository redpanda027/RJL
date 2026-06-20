'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const languages: { code: 'en' | 'ja' | 'hi' | 'ko'; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ko', label: '한국어' },
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
        className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all flex items-center gap-2"
        aria-label="Select language"
      >
        <span>{current.label}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[#1a1a1a] border border-white/15 rounded-md overflow-hidden z-30 min-w-[140px]">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLanguage(l.code); setOpen(false); }}
              className={`block w-full text-left px-4 py-2 text-xs font-semibold tracking-[1px] transition-colors hover:bg-white/10 ${l.code === language ? 'text-orange-500 bg-orange-500/10' : 'text-white/70'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
