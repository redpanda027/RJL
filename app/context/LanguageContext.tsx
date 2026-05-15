'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      en: {
        'home': 'Home',
        'members': 'Members',
        'events': 'Events',
        'partners': 'Partners',
        'discord': 'Discord',
        'our-team': 'Our Team',
        'members-title': 'Members',
        'members-desc': 'The drivers who keep Royal Jiyu Logistics moving.',
        'administration': 'Administration',
        'staff': 'Staff',
        'drivers': 'Drivers',
        'chats': 'Chats',
        'owner': 'Owner',
        'co-owner': 'Co-Owner',
        'senior-driver': 'Senior Driver',
        'driver': 'Driver',
        'recruit': 'Recruit',
        'deliveries': 'Deliveries',
        'footer': '© 2026 Royal Jiyu Logistics · Freedom Across Asia',
      },
      ja: {
        'home': 'ホーム',
        'members': 'メンバー',
        'events': 'イベント',
        'partners': 'パートナー',
        'discord': 'Discord',
        'our-team': 'チーム紹介',
        'members-title': 'メンバー',
        'members-desc': 'ロイヤルジユーロジスティクスを支えるドライバーたち。',
        'administration': '管理者',
        'staff': 'スタッフ',
        'drivers': 'ドライバー',
        'chats': 'チャット',
        'owner': 'オーナー',
        'co-owner': 'サブオーナー',
        'senior-driver': 'シニアドライバー',
        'driver': 'ドライバー',
        'recruit': 'リクルート',
        'deliveries': '配達回数',
        'footer': '© 2026 Royal Jiyu Logistics · 自由はアジア中に。',
      },
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
