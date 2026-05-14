import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { SocialIcons } from "@/components/ui/SocialIcons";
import {
  CONTACT,
  HOURS,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
} from "@/lib/constants";

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="shrink-0 w-9 h-9 inline-flex items-center justify-center rounded-full border border-ink/15 text-ink/60 group-hover:text-terracotta group-hover:border-terracotta/40 transition-colors duration-300">
        <Icon size={15} strokeWidth={1.5} />
      </span>
      <div className="min-w-0 pt-1">
        <span className="text-eyebrow-sm text-ink/55 block mb-1.5">
          {label}
        </span>
        <span className="font-serif text-ink text-[1.05rem] md:text-[1.1rem] leading-snug">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        {content}
      </a>
    );
  }
  return <div className="group">{content}</div>;
}

export function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-paper py-28 md:py-36 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-eyebrow text-terracotta block mb-6">
            Encuéntranos
          </span>
          <h2
            id="location-heading"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-8"
          >
            En el{" "}
            <span className="italic font-light">Corazón de Fuengirola</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-10">
            Casa Mavi te espera en Los Boliches, el lugar perfecto para
            disfrutar de auténticos sabores italianos en un ambiente familiar y
            acogedor. Ven a visitarnos y déjate envolver por la calidez de
            Italia.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>

        {/* Map + Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Google Maps embed */}
          <div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden border border-ink/10 bg-paper-warm">
              <iframe
                title="Mapa de Casa Mavi en Av. de los Boliches, 106, Fuengirola"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-eyebrow-sm text-terracotta hover:text-terracotta-deep border-b border-terracotta/40 hover:border-terracotta-deep pb-1 transition-colors"
              aria-label="Ver Casa Mavi en Google Maps"
            >
              <MapPin size={13} strokeWidth={1.5} />
              <span>Cómo llegar →</span>
            </a>
          </div>

          {/* Info column */}
          <div>
            {/* Address */}
            <div className="mb-12 pb-12 border-b border-ink/10">
              <InfoRow
                icon={MapPin}
                label="Dirección"
                value={CONTACT.address}
                href={MAP_DIRECTIONS_URL}
                external
              />
            </div>

            {/* Hours summary (current season only — full schedule lives in HoursBlock above) */}
            <div className="mb-12 pb-12 border-b border-ink/10">
              <span className="text-eyebrow-sm text-ink/55 block mb-5">
                Horario · {HOURS.trattoria.summer.label}
              </span>
              <dl className="space-y-2.5">
                {HOURS.trattoria.summer.rows.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-baseline gap-4"
                  >
                    <dt className="text-eyebrow-sm text-ink/65 shrink-0">
                      {row.day}
                    </dt>
                    <dd className="font-serif text-ink text-[0.95rem] md:text-base text-right">
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-ink-muted text-xs italic font-serif font-light">
                Pizzería · Bar abierto en horario continuo · Mar–Sáb 13:00–22:30
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-7 mb-12">
              <InfoRow
                icon={MessageCircle}
                label="WhatsApp"
                value={CONTACT.phone}
                href={CONTACT.whatsapp}
                external
              />
              <InfoRow
                icon={Phone}
                label="Teléfono"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phoneTel}`}
              />
              <InfoRow
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
            </div>

            {/* Social */}
            <div className="mb-12">
              <span className="text-eyebrow-sm text-ink/55 block mb-5">
                Síguenos
              </span>
              <SocialIcons tone="ink" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button href="/reservas" variant="primary">
                Reservar Mesa
              </Button>
              <Button href={`tel:${CONTACT.phoneTel}`} variant="secondary">
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
