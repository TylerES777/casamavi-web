import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { SocialIcons } from "@/components/ui/SocialIcons";
import {
  CONTACT,
  HOURS,
  LEGAL_LINKS,
  NAV_ITEMS,
  TAGLINE,
} from "@/lib/constants";

function FooterScheduleColumn({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ day: string; hours: string }>;
}) {
  return (
    <div className="space-y-2.5">
      <span className="text-eyebrow-sm text-mustard/80 block mb-2">
        {title}
      </span>
      {rows.map((row) => (
        <div key={row.day} className="flex flex-col gap-0.5">
          <span className="text-[0.7rem] tracking-wider uppercase text-ivory/45">
            {row.day}
          </span>
          <span className="font-serif text-ivory/85 text-[0.95rem] leading-snug">
            {row.hours}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-espresso-deep text-ivory">
      {/* Subtle warm wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 15% 0%, rgba(212, 162, 76, 0.08), transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 100%, rgba(139, 31, 42, 0.10), transparent 70%)
          `,
        }}
      />

      {/* CTA band */}
      <div className="relative border-b border-ivory/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center">
          <Hairline tone="mustard" width={88} className="mb-7" />
          <p className="font-serif italic text-ivory text-2xl md:text-[2rem] lg:text-[2.4rem] leading-[1.25] font-light max-w-3xl mx-auto mb-8">
            Tu mesa te está esperando en Los Boliches.
          </p>
          <Button href="/reservas" variant="primary">
            Reservar Mesa
          </Button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center mb-7"
              aria-label="Casa Mavi · Inicio"
            >
              <Image
                src="/assets/logo.png"
                alt="Casa Mavi"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </Link>
            <p className="font-serif italic text-ivory/80 text-base md:text-[1.05rem] leading-[1.6] font-light max-w-sm mb-7">
              {TAGLINE}
            </p>
            <p className="text-eyebrow-sm text-ivory/50">
              Trattoria · Pizzería Napoletana
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 lg:col-span-2">
            <span className="text-eyebrow-sm text-mustard/80 block mb-5">
              Navegación
            </span>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-serif text-ivory/85 hover:text-mustard transition-colors text-[1rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <span className="text-eyebrow-sm text-mustard/80 block mb-5">
              Contacto
            </span>
            <ul className="space-y-4">
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-ivory/85 hover:text-mustard transition-colors text-[1rem] block"
                >
                  WhatsApp · {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="font-serif text-ivory/85 hover:text-mustard transition-colors text-[1rem] block"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-serif text-ivory/85 hover:text-mustard transition-colors text-[1rem] block break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="font-serif text-ivory/75 text-[0.95rem] leading-[1.55] pt-2">
                {CONTACT.address}
              </li>
            </ul>

            <div className="mt-7">
              <SocialIcons tone="ivory" />
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-12 lg:col-span-3">
            <span className="text-eyebrow-sm text-mustard/80 block mb-5">
              Horario
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <FooterScheduleColumn
                title={`Trattoria · ${HOURS.trattoria.winter.label}`}
                rows={HOURS.trattoria.winter.rows}
              />
              <FooterScheduleColumn
                title={`Trattoria · ${HOURS.trattoria.summer.label}`}
                rows={HOURS.trattoria.summer.rows}
              />
              <FooterScheduleColumn
                title="Pizzería · Bar"
                rows={HOURS.pizzeria.rows}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative border-t border-ivory/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-[0.78rem] text-ivory/55">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <span>© {new Date().getFullYear()} Casa Mavi · Scala Giovanni</span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-mustard transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="font-serif italic text-ivory/45 text-[0.85rem]">
            Italia in cuore, Fuengirola in casa.
          </span>
        </div>
      </div>
    </footer>
  );
}
