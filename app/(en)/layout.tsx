import '../globals.css';
import { fontVars } from '@/lib/fonts';
export { viewport } from '@/lib/metadata';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
