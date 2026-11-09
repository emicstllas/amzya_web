import Image from 'next/image';
import Link from 'next/link';
import { CONTACT, COPY, type Lang } from '@/lib/content';

const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg className="btn-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" {...STROKE}>
      {children}
    </svg>
  );
}

const WhatsAppIcon = () => (
  <Icon>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path
      transform="translate(7.2 7.2) scale(.4)"
      strokeWidth={4.4}
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </Icon>
);

const MailIcon = () => (
  <Icon>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

const Arrow = () => (
  <svg className="btn-arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" {...STROKE}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function Headline({ lang, primary }: { lang: Lang; primary: boolean }) {
  const lines = COPY[lang].headline;
  const Tag = primary ? 'h1' : 'p';
  return (
    <Tag className={`headline headline-${lang}`} lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {lines.map((line, i) => (
        <span key={i} className="headline-line">
          {line}
          {i < lines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

/** The steel mark under erection: a raster scene of three plates plus the cable and guide lines drawn in code. */
function Erection() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="scene-art">
      <div className="plate plate-steel">
        <Image src="/assets/plates/steel-mark.png" alt="" fill priority sizes="(max-width: 899px) 90vw, 43vw" />
      </div>
      <div className="plate plate-boom">
        <Image src="/assets/plates/crane-boom.png" alt="" fill priority sizes="(max-width: 899px) 60vw, 28vw" />
      </div>
      <div className="plate plate-rig">
        <span className="rig-cables" />
        <Image src="/assets/plates/crane-rig.png" alt="" fill priority sizes="(max-width: 899px) 55vw, 25vw" />
        <span className="rig-guide rig-guide-start" />
        <span className="rig-guide rig-guide-end" />
      </div>
      </div>
    </div>
  );
}

export default function UnderConstruction({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const other: Lang = lang === 'en' ? 'ar' : 'en';

  return (
    <div className="page amz-pattern-dark">
      <main className="stage" data-lang={lang}>
        <header className="masthead">
          <Link href={lang === 'en' ? '/' : '/ar'} className="logo" aria-label={lang === 'en' ? 'AMZYA Contracting LLC, home' : 'امزايا للمقاولات ذ.م.م، الصفحة الرئيسية'}>
            <img src="/assets/logo/amzya-horizontal-reverse.svg" alt="AMZYA Contracting LLC" width={4092} height={387} />
          </Link>
          <nav className="lang-toggle" aria-label={t.toggleLabel} dir="ltr">
            <Link href="/" lang="en" hrefLang="en" aria-current={lang === 'en' ? 'page' : undefined}>
              EN
            </Link>
            <Link href="/ar" lang="ar" hrefLang="ar" aria-current={lang === 'ar' ? 'page' : undefined}>
              عربي
            </Link>
          </nav>
        </header>

        <Erection />

        <div className="headlines">
          <Headline lang={lang} primary />
          <Headline lang={other} primary={false} />
        </div>

        <ul className="actions" aria-label={t.contactLabel}>
          <li>
            <a className="btn btn-solid" href={`https://wa.me/${CONTACT.whatsappNumber}`} aria-label={t.whatsappLabel} rel="noopener" target="_blank">
              <WhatsAppIcon />
              <span className="btn-label">{t.whatsapp}</span>
              <Arrow />
            </a>
          </li>
          <li>
            <a className="btn btn-outline" href={`mailto:${CONTACT.email}`} aria-label={t.emailLabel}>
              <MailIcon />
              <span className="btn-label">{t.email}</span>
              <Arrow />
            </a>
          </li>
        </ul>

        <ul className="services" aria-label={t.servicesLabel}>
          {t.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
