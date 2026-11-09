// Brand fonts, self-hosted from app/fonts (SIL Open Font License; licences alongside the files).
import localFont from 'next/font/local';

export const jost = localFont({
  src: [
    { path: '../app/fonts/jost-latin-400-normal.woff2', weight: '400' },
    { path: '../app/fonts/jost-latin-500-normal.woff2', weight: '500' },
    { path: '../app/fonts/jost-latin-600-normal.woff2', weight: '600' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const plexSans = localFont({
  src: [
    { path: '../app/fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400' },
    { path: '../app/fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const kufi = localFont({
  src: [
    { path: '../app/fonts/noto-kufi-arabic-arabic-600-normal.woff2', weight: '600' },
    { path: '../app/fonts/noto-kufi-arabic-arabic-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-display-ar',
  display: 'swap',
});

export const plexArabic = localFont({
  src: [
    { path: '../app/fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2', weight: '400' },
    { path: '../app/fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2', weight: '500' },
    { path: '../app/fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2', weight: '600' },
    { path: '../app/fonts/ibm-plex-sans-arabic-latin-400-normal.woff2', weight: '400' },
    { path: '../app/fonts/ibm-plex-sans-arabic-latin-500-normal.woff2', weight: '500' },
    { path: '../app/fonts/ibm-plex-sans-arabic-latin-600-normal.woff2', weight: '600' },
  ],
  variable: '--font-body-ar',
  display: 'swap',
});

export const fontVars = [jost.variable, plexSans.variable, kufi.variable, plexArabic.variable].join(' ');
