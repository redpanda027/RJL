'use client';

import { useLanguage } from '@/app/context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs font-semibold tracking-[2px] uppercase border border-white/35 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
      aria-label="Toggle language"
    >
      {language === 'en' ? '日本語' : 'English'}
    </button>
  );
};
