'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja' | 'hi' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      en: {
        'home': 'Home',
        'members': 'Members',
        'events': 'Events',
        'about': 'About Us',
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
        'about': '私たちについて',
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
      hi: {
        'home': 'होम',
        'members': 'सदस्य',
        'events': 'ईवेंट',
        'about': 'हमारे बारे में',
        'partners': 'पार्टनर',
        'discord': 'डिस्कॉर्ड',
        'our-team': 'हमारी टीम',
        'members-title': 'सदस्य',
        'members-desc': 'वे ड्राइवर जो Royal Jiyu Logistics को चलाते रहते हैं।',
        'administration': 'प्रशासन',
        'staff': 'स्टाफ़',
        'drivers': 'ड्राइवर',
        'chats': 'चैट',
        'owner': 'मालिक',
        'co-owner': 'सह-मालिक',
        'senior-driver': 'सीनियर ड्राइवर',
        'driver': 'ड्राइवर',
        'recruit': 'रिक्रूट',
        'deliveries': 'डिलीवरी',
        'footer': '© 2026 Royal Jiyu Logistics · पूरे एशिया में आज़ादी',
      },
      ko: {
        'home': '홈',
        'members': '멤버',
        'events': '이벤트',
        'about': '소개',
        'partners': '파트너',
        'discord': '디스코드',
        'our-team': '우리 팀',
        'members-title': '멤버',
        'members-desc': 'Royal Jiyu Logistics를 움직이는 드라이버들입니다.',
        'administration': '관리진',
        'staff': '스태프',
        'drivers': '드라이버',
        'chats': '채팅',
        'owner': '소유주',
        'co-owner': '공동 소유주',
        'senior-driver': '시니어 드라이버',
        'driver': '드라이버',
        'recruit': '리크루트',
        'deliveries': '배송',
        'footer': '© 2026 Royal Jiyu Logistics · 아시아 전역의 자유',
      },
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
