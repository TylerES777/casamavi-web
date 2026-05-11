import { Hairline } from "@/components/ui/Hairline";

type Pillar = {
  numeral: string;
  title: string;
  italicWord?: string;
  body: string;
  bullets: readonly string[];
};

const PILLARS: readonly Pillar[] = [
  {
    numeral: "I",
    title: "Pizzas Artesanales",
    italicWord: "Artesanales",
    body: "Pizzas napolitanas auténticas con masa de larga fermentación y horneadas en nuestro horno de piedra a 450°C.",
    bullets: [
      "Masa ligera y crujiente",
      "Ingredientes frescos importados",
      "Recetas tradicionales italianas",
    ],
  },
  {
    numeral: "II",
    title: "Pasta Fresca",
    italicWord: "Fresca",
    body: "Pasta fresca elaborada a diario siguiendo las técnicas tradicionales de la nonna. Disponible en versión sin gluten.",
    bullets: [
      "Pasta fresca hecha a mano",
      "Salsas caseras auténticas",
      "Opciones sin gluten y veganas",
    ],
  },
  {
    numeral: "III",
    title: "Ambiente Familiar",
    italicWord: "Familiar",
    body: "Un rincón acogedor en el corazón de Los Boliches donde cada visita se siente como en casa de la familia italiana.",
    bullets: [
      "Servicio cálido y personalizado",
      "Decoración italiana tradicional",
      "Perfecto para familias",
    ],
  },
];

function PillarTitle({ title, italic }: { title: string; italic?: string }) {
  if (!italic) {
    return <>{title}</>;
  }
  const idx = title.indexOf(italic);
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <span className="italic font-light">{italic}</span>
      {title.slice(idx + italic.length)}
    </>
  );
}

export function ThreePillars() {
  return (
    <section
      aria-labelledby="esencia-heading"
      className="relative bg-paper-warm py-28 md:py-36 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Subtle backdrop wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 18% 20%, rgba(212, 162, 76, 0.16), transparent 65%),
            radial-gradient(ellipse 50% 45% at 85% 85%, rgba(200, 75, 44, 0.10), transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-eyebrow text-terracotta block mb-6">
            Nuestra Esencia
          </span>
          <h2
            id="esencia-heading"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-8"
          >
            Sabor Italiano en{" "}
            <span className="italic font-light">Los Boliches</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-10">
            Somos una Trattoria familiar en Fuengirola donde cada plato cuenta
            una historia de autenticidad, tradición y amor por la cocina
            napolitana.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-10 lg:gap-x-20">
          {PILLARS.map((pillar, idx) => (
            <article
              key={pillar.numeral}
              className={`relative px-2 md:px-4 ${
                idx > 0
                  ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-8 md:before:bottom-8 md:before:w-px md:before:bg-ink/12"
                  : ""
              }`}
            >
              {/* Roman numeral */}
              <div
                aria-hidden="true"
                className="font-serif italic text-mustard/95 text-[3.5rem] md:text-[4rem] leading-none mb-8 font-light"
              >
                {pillar.numeral}
              </div>

              {/* Title */}
              <h3 className="font-serif text-ink text-[1.75rem] md:text-[2rem] leading-[1.1] mb-5 tracking-tight">
                <PillarTitle
                  title={pillar.title}
                  italic={pillar.italicWord}
                />
              </h3>

              {/* Body */}
              <p className="text-ink-soft text-[0.95rem] md:text-base leading-[1.7] mb-8 font-light">
                {pillar.body}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {pillar.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-3 text-[0.85rem] text-ink-soft leading-snug"
                  >
                    <span
                      aria-hidden="true"
                      className="text-mustard font-serif italic shrink-0 text-base leading-none translate-y-[1px]"
                    >
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Closing italic phrase */}
        <div className="text-center mt-24 md:mt-28">
          <p className="font-serif italic text-ink/55 text-lg md:text-xl font-light">
            La buona cucina è una questione di cuore.
          </p>
        </div>
      </div>
    </section>
  );
}
