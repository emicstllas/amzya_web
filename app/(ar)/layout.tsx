import '../globals.css';
import { fontVars } from '@/lib/fonts';
export { viewport } from '@/lib/metadata';

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
