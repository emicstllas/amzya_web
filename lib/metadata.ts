import type { Metadata, Viewport } from 'next';

const SITE = 'https://amzyacontracting.com';

export const viewport: Viewport = { themeColor: '#242424', colorScheme: 'dark' };

export function pageMetadata(lang: 'en' | 'ar'): Metadata {
  const en = lang === 'en';
  return {
    metadataBase: new URL(SITE),
    title: en ? 'AMZYA Contracting LLC · Website under construction' : 'امزايا للمقاولات ذ.م.م · الموقع قيد الإنشاء',
    description: en
      ? 'AMZYA Contracting LLC, Dubai. Building construction, civil engineering and infrastructure, MEP, fit-out and maintenance. Our website is under construction; reach us on WhatsApp or by email.'
      : 'امزايا للمقاولات ذ.م.م، دبي. تشييد المباني والهندسة المدنية والبنية التحتية والأعمال الكهروميكانيكية والتجهيزات الداخلية والصيانة. موقعنا الإلكتروني قيد الإنشاء؛ تواصلوا معنا عبر واتساب أو البريد الإلكتروني.',
    alternates: { canonical: en ? '/' : '/ar', languages: { en: '/', ar: '/ar' } },
    icons: { icon: '/icon.svg' },
  };
}
