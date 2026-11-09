// Page copy and contact details for both languages.

// PLACEHOLDERS: replace these two values with the real details before the page goes live.
export const CONTACT = {
  /** WhatsApp number in international format, digits only, e.g. 9715XXXXXXXX. */
  whatsappNumber: '971XXXXXXXXX',
  /** Public enquiries email address. */
  email: 'name@example.com',
} as const;

export type Lang = 'en' | 'ar';

export const COPY = {
  en: {
    headline: ['Our website is', 'under', 'construction.'],
    whatsapp: 'WhatsApp',
    email: 'Email',
    whatsappLabel: 'Message AMZYA Contracting on WhatsApp',
    emailLabel: 'Email AMZYA Contracting',
    contactLabel: 'Contact AMZYA Contracting',
    servicesLabel: 'Our services',
    toggleLabel: 'Language',
    services: [
      'Building construction',
      'Civil engineering & infrastructure',
      'MEP & specialized technical services',
      'Fit-out & renovation',
      'Maintenance',
    ],
  },
  ar: {
    headline: ['موقعنا', 'الإلكتروني', 'قيد الإنشاء.'],
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    whatsappLabel: 'راسل امزايا للمقاولات عبر واتساب',
    emailLabel: 'راسل امزايا للمقاولات عبر البريد الإلكتروني',
    contactLabel: 'تواصل مع امزايا للمقاولات',
    servicesLabel: 'خدماتنا',
    toggleLabel: 'اللغة',
    services: [
      'تشييد المباني',
      'الهندسة المدنية والبنية التحتية',
      'الأعمال الكهروميكانيكية والخدمات الفنية المتخصصة',
      'التجهيزات الداخلية والتجديد',
      'الصيانة',
    ],
  },
} as const;
