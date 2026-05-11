import {
  CalendarCheck,
  Clock,
  Users,
  XCircle,
  Sun,
  AlertCircle,
} from "lucide-react";
import { CancelForm } from "@/components/reservas/CancelForm";
import { ReservationForm } from "@/components/reservas/ReservationForm";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { CONTACT, HOURS } from "@/lib/constants";

export const metadata = {
  title: "Reservas · Casa Mavi",
  description:
    "Reserva tu mesa en Casa Mavi — Trattoria y Pizzería Napolitana en Los Boliches, Fuengirola. Confirmación en menos de 1 hora.",
};

const INFO_ITEMS = [
  {
    icon: CalendarCheck,
    title: "Confirmación",
    body: "Te confirmaremos tu reserva en un plazo máximo de 1 hora.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    body: "Ofrecemos 15 minutos de cortesía para tu llegada. Pasado ese tiempo, la reserva se cancela automáticamente.",
  },
  {
    icon: AlertCircle,
    title: "Anticipación",
    body: "Recomendamos reservar con 24h de antelación, especialmente fines de semana.",
  },
  {
    icon: Users,
    title: "Grupos grandes",
    body: "Para más de 8 personas, por favor llámanos directamente.",
  },
  {
    icon: XCircle,
    title: "Cancelaciones",
    body: "Si no puedes asistir, cancela tu reserva usando el ID recibido o tu email.",
  },
  {
    icon: Sun,
    title: "Domingos",
    body: "Permanecemos cerrados los domingos.",
  },
];

const WHY_CARDS = [
  {
    numeral: "I",
    title: "Horno de Piedra",
    body: "Pizzas napolitanas a 450°C, masa de larga fermentación, corteza ligera y crujiente.",
  },
  {
    numeral: "II",
    title: "Ingredientes Italianos",
    body: "Quesos DOP, aceite virgen extra, embutidos y harinas importadas directamente desde Italia.",
  },
  {
    numeral: "III",
    title: "Ambiente Familiar",
    body: "Servicio cálido y personalizado, decoración italiana tradicional, perfecto para familias.",
  },
  {
    numeral: "IV",
    title: "Certificado de Excelencia",
    body: "9 años consecutivos en TripAdvisor — 2017 a 2025. Nuestra mejor carta de presentación.",
  },
];

const PRIVACY_SECTIONS = [
  {
    title: "Responsable del Tratamiento",
    body: `Scala Giovanni, titular de Casa Mavi, con domicilio en ${CONTACT.address}. Email de contacto para protección de datos: casamavi2015@gmail.com.`,
  },
  {
    title: "Finalidad",
    body: "Gestión de la reserva solicitada, confirmación por email y/o teléfono, y comunicación de cualquier información relevante para la prestación del servicio en sala.",
  },
  {
    title: "Base de Legitimación",
    body: "Consentimiento expreso del usuario al aceptar la presente política y enviar el formulario de reserva, así como ejecución de la relación contractual derivada de la reserva.",
  },
  {
    title: "Categorías de Datos",
    body: "Datos identificativos (nombre), de contacto (email, teléfono) y los datos voluntariamente aportados en el campo de comentarios (alergias, preferencias, ocasiones especiales).",
  },
  {
    title: "Destinatarios",
    body: "Los datos no se comunican a terceros salvo obligación legal. Pueden ser tratados por encargados de tratamiento (proveedores de email transaccional) sujetos a las garantías del RGPD.",
  },
  {
    title: "Conservación",
    body: "Los datos se conservarán durante el tiempo necesario para gestionar la reserva y, posteriormente, durante los plazos legalmente exigibles.",
  },
  {
    title: "Derechos del Usuario",
    body: "El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a casamavi2015@gmail.com, adjuntando copia de un documento identificativo.",
  },
];

function InfoCard() {
  return (
    <aside className="bg-paper-warm/60 border border-ink/10 px-7 py-9 md:px-9 md:py-11">
      <span className="text-eyebrow text-terracotta block mb-6">
        Información importante
      </span>
      <ul className="space-y-7">
        {INFO_ITEMS.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="shrink-0 w-9 h-9 inline-flex items-center justify-center rounded-full border border-ink/15 text-ink/55">
              <item.icon size={15} strokeWidth={1.4} />
            </span>
            <div>
              <h4 className="font-serif text-ink text-[1.05rem] mb-1.5 tracking-tight">
                {item.title}
              </h4>
              <p className="text-ink-soft text-[0.92rem] leading-[1.65] font-light">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function WhatsAppCard() {
  return (
    <aside className="bg-espresso-deep text-ivory px-7 py-9 md:px-9 md:py-11 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 25% 30%, rgba(212, 162, 76, 0.20), transparent 65%),
            radial-gradient(ellipse 55% 50% at 80% 80%, rgba(139, 31, 42, 0.30), transparent 65%)
          `,
        }}
      />
      <div className="relative">
        <span className="text-eyebrow text-mustard block mb-5">
          Atajo
        </span>
        <h3 className="font-serif text-ivory text-2xl md:text-[1.6rem] leading-tight italic font-light mb-5">
          ¿Prefieres reservar directamente?
        </h3>
        <p className="text-ivory/75 text-[0.95rem] leading-[1.65] font-light mb-7">
          Escríbenos por WhatsApp y reservamos tu mesa al momento.
        </p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-[0.78rem] tracking-[0.22em] uppercase font-medium border border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso transition-colors"
        >
          WhatsApp · {CONTACT.phone}
        </a>
      </div>
    </aside>
  );
}

function HoursCard() {
  return (
    <aside className="bg-paper border border-ink/10 px-7 py-9 md:px-9 md:py-11">
      <span className="text-eyebrow text-terracotta block mb-6">
        Horario · Verano
      </span>
      <dl className="space-y-3.5">
        {HOURS.trattoria.summer.rows.map((row) => (
          <div
            key={row.day}
            className="flex justify-between items-baseline gap-4 border-b border-ink/10 pb-3 last:border-0"
          >
            <dt className="text-eyebrow-sm text-ink/65 shrink-0">{row.day}</dt>
            <dd className="font-serif text-ink text-[0.95rem] text-right">
              {row.hours}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-[0.82rem] text-ink-muted italic font-serif font-light leading-relaxed">
        Pizzería · Bar abierto en horario continuo de Mar a Sáb 13:00–22:30.
      </p>
    </aside>
  );
}

export default function ReservasPage() {
  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-eyebrow text-terracotta block mb-6">
            Reserva tu Mesa
          </span>
          <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight mb-7">
            Reserva tu{" "}
            <span className="italic font-light">Experiencia Italiana</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-9">
            Asegura tu mesa en Casa Mavi y prepárate para disfrutar de la
            auténtica cocina italiana en un ambiente familiar y acogedor.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-28 md:pb-36 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <span className="text-eyebrow text-mustard block mb-5">
              Formulario de Reserva
            </span>
            <h2 className="font-serif text-ink text-3xl md:text-[2.4rem] leading-tight tracking-tight mb-10">
              Cuéntanos cuándo te{" "}
              <span className="italic font-light">esperamos</span>
            </h2>
            <ReservationForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <InfoCard />
            <WhatsAppCard />
            <HoursCard />
          </div>
        </div>
      </section>

      {/* Cancel reservation */}
      <section
        id="cancelar"
        aria-labelledby="cancelar-heading"
        className="bg-paper-deep border-y border-ink/10 py-24 md:py-28 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-eyebrow text-terracotta block mb-5">
              ¿Necesitas cancelar?
            </span>
            <h2
              id="cancelar-heading"
              className="font-serif text-ink text-3xl md:text-[2.4rem] leading-tight tracking-tight mb-6"
            >
              Cancelar mi <span className="italic font-light">reserva</span>
            </h2>
            <p className="text-ink-soft leading-relaxed font-light max-w-2xl mx-auto">
              Introduce el ID de reserva que recibiste en tu correo electrónico
              de confirmación.
            </p>
          </div>
          <CancelForm />
        </div>
      </section>

      {/* Why reserve at Casa Mavi */}
      <section className="bg-paper py-28 md:py-36 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-eyebrow text-terracotta block mb-5">
              ¿Por Qué Reservar Aquí?
            </span>
            <h2 className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-7">
              Una mesa en Casa Mavi es una{" "}
              <span className="italic font-light">tarde en Italia</span>
            </h2>
            <Hairline tone="mustard" width={120} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 lg:gap-x-14">
            {WHY_CARDS.map((card, idx) => (
              <article
                key={card.numeral}
                className={`relative px-2 ${
                  idx > 0
                    ? "lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-4 lg:before:bottom-4 lg:before:w-px lg:before:bg-ink/12 lg:pl-8"
                    : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="font-serif italic text-mustard text-[2.6rem] leading-none mb-6 font-light"
                >
                  {card.numeral}
                </div>
                <h3 className="font-serif text-ink text-[1.5rem] tracking-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-ink-soft text-[0.92rem] leading-[1.7] font-light">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="relative bg-espresso-deep overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 25% 30%, rgba(139, 31, 42, 0.40), transparent 65%),
              radial-gradient(ellipse 60% 50% at 80% 75%, rgba(212, 162, 76, 0.18), transparent 65%),
              linear-gradient(180deg, #2a1810 0%, #1a0a0c 50%, #1f1208 100%)
            `,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-32 text-center">
          <Hairline tone="mustard" width={88} className="mb-7" />
          <h2 className="font-serif text-ivory text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight italic font-light mb-7">
            Tu mesa te está esperando.
          </h2>
          <p className="text-ivory/75 text-base md:text-lg leading-[1.7] font-light max-w-xl mx-auto mb-9">
            No pierdas la oportunidad de disfrutar de la auténtica cocina
            italiana. Reserva ahora y vive la experiencia Casa Mavi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#" variant="primary">
              Volver al Formulario
            </Button>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="text-eyebrow-sm text-ivory/85 hover:text-mustard border-b border-ivory/30 hover:border-mustard pb-1"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Privacy policy */}
      <section
        id="politica"
        aria-labelledby="politica-heading"
        className="bg-paper py-24 md:py-28 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-eyebrow text-terracotta block mb-5">
              RGPD · Tratamiento de Datos
            </span>
            <h2
              id="politica-heading"
              className="font-serif text-ink text-3xl md:text-[2.4rem] leading-tight tracking-tight mb-5"
            >
              Política de <span className="italic font-light">Privacidad</span>
            </h2>
          </div>

          <ol className="space-y-9">
            {PRIVACY_SECTIONS.map((section, idx) => (
              <li key={section.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="font-serif italic text-mustard text-xl shrink-0 leading-none translate-y-1 font-light w-7"
                >
                  {idx + 1}.
                </span>
                <div>
                  <h3 className="font-serif text-ink text-[1.2rem] tracking-tight mb-2.5">
                    {section.title}
                  </h3>
                  <p className="text-ink-soft text-[0.95rem] leading-[1.75] font-light">
                    {section.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
