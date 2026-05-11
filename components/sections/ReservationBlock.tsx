import { Button } from "@/components/ui/Button";
import { CONTACT, STATS } from "@/lib/constants";

export function ReservationBlock() {
  return (
    <section
      aria-labelledby="reserva-heading"
      className="relative bg-espresso-deep overflow-hidden"
    >
      {/* Moody backdrop placeholder — wine + ember */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 25% 30%, rgba(139, 31, 42, 0.45), transparent 65%),
            radial-gradient(ellipse 60% 50% at 80% 75%, rgba(212, 162, 76, 0.20), transparent 65%),
            radial-gradient(ellipse 55% 45% at 50% 100%, rgba(31, 18, 8, 0.85), transparent 70%),
            linear-gradient(180deg, #2a1810 0%, #1a0a0c 50%, #1f1208 100%)
          `,
        }}
      />
      <span className="absolute top-6 right-6 md:right-10 lg:right-16 text-ivory/30 text-[0.55rem] tracking-[0.4em] uppercase z-10">
        Bar · placeholder
      </span>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-40">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-eyebrow text-mustard block mb-7">
            Reserva tu mesa
          </span>
          <h2
            id="reserva-heading"
            className="font-serif text-ivory text-[2.1rem] md:text-[2.8rem] lg:text-[3.4rem] leading-[1.08] tracking-tight mb-9"
          >
            Reserva tu Mesa en la Mejor Pizzería{" "}
            <span className="italic font-light">Napolitana</span> de Fuengirola
          </h2>
          <p className="text-ivory/75 text-base md:text-lg leading-[1.75] font-light max-w-2xl mx-auto mb-11">
            Vive una experiencia gastronómica única en nuestra Trattoria. Te
            esperamos en Los Boliches con los auténticos sabores de Italia, un
            ambiente cálido y el cariño de siempre.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Button href="/reservas" variant="primary">
              Reservar Ahora
            </Button>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="text-ivory/85 hover:text-mustard transition-colors text-eyebrow border-b border-ivory/30 hover:border-mustard pb-1"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* Hairline divider before stats */}
        <div className="flex justify-center mb-16 md:mb-20">
          <span aria-hidden="true" className="block h-px w-24 bg-ivory/25" />
        </div>

        {/* Stats — editorial fact strip */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-x-6 md:gap-x-8 lg:gap-x-12 max-w-5xl mx-auto">
          {STATS.map((stat, idx) => (
            <div
              key={stat.numeral}
              className={`text-center md:text-left relative ${
                idx > 0
                  ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-ivory/15 md:pl-8 lg:pl-12"
                  : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="block text-eyebrow-sm text-mustard/70 mb-3"
              >
                {stat.numeral}
              </span>
              <dd
                className="font-serif italic text-mustard text-[2.75rem] md:text-[3.25rem] lg:text-[3.6rem] leading-none font-light mb-4"
              >
                {stat.value}
              </dd>
              <dt className="text-eyebrow-sm text-ivory/65 leading-[1.5]">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
