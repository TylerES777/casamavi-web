import { Button } from "@/components/ui/Button";
import { OpenStatusBadge } from "@/components/ui/OpenStatusBadge";
import { CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section
      aria-label="Casa Mavi · Inicio"
      className="relative w-full h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden bg-espresso-deep"
    >
      {/* Photo placeholder — warm trattoria gradient evoking firelight + dim interior */}
      <div className="absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 28% 35%, rgba(212, 162, 76, 0.22), transparent 60%),
              radial-gradient(ellipse 60% 50% at 78% 70%, rgba(200, 75, 44, 0.28), transparent 65%),
              radial-gradient(ellipse 80% 60% at 50% 100%, rgba(31, 18, 8, 0.85), transparent 70%),
              linear-gradient(180deg, #2a1810 0%, #3d2818 45%, #1f1208 100%)
            `,
          }}
        />
        {/* Bottom-up gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,18,8,0.0) 0%, rgba(31,18,8,0.1) 35%, rgba(31,18,8,0.55) 75%, rgba(31,18,8,0.85) 100%)",
          }}
        />
        {/* Placeholder hint */}
        <span className="absolute top-24 right-6 md:right-10 lg:right-16 text-ivory/35 text-[0.55rem] tracking-[0.4em] uppercase">
          Hero photography · placeholder
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16 pb-28 md:pb-32 lg:pb-36">
          {/* TripAdvisor badge */}
          <div className="inline-flex items-center gap-3 border border-ivory/40 px-4 py-2.5 mb-10">
            <span className="w-1 h-1 rounded-full bg-mustard" />
            <span className="text-eyebrow-sm text-ivory">
              Certificado de Excelencia · TripAdvisor 2017–2025
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-ivory leading-[0.98] tracking-tight mb-9 max-w-4xl">
            <span className="block text-[2.75rem] md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Pizzería{" "}
              <span className="italic text-mustard/95 font-light">
                Napolitana
              </span>
            </span>
            <span className="block text-[2.75rem] md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light">
              en Fuengirola
            </span>
            <span className="block mt-5 text-2xl md:text-3xl lg:text-[2rem] font-light text-ivory/75 italic">
              — Casa Mavi
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-ivory/85 text-base md:text-lg leading-[1.65] max-w-xl mb-10 font-light">
            Bienvenidos a Casa Mavi, tu Trattoria y Pizzería Napolitana en
            Fuengirola. Saborea pizzas auténticas al{" "}
            <span className="italic text-mustard">horno de piedra</span>, pasta
            fresca y los mejores sabores de{" "}
            <span className="italic text-mustard">Italia</span>. Ofrecemos
            opciones sin gluten y adaptamos nuestros platos para comensales
            veganos bajo petición.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button href="/reservas" variant="primary">
              Reservar Mesa
            </Button>
            <Button href="/menu" variant="ghost-light">
              Ver la Carta
            </Button>
          </div>
        </div>

        {/* Quick info strip */}
        <div className="border-t border-ivory/15 bg-espresso-deep/40 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16 py-5 flex flex-wrap items-center gap-x-8 gap-y-2 text-[0.78rem] tracking-wide text-ivory/80">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="hover:text-mustard transition-colors duration-300"
            >
              {CONTACT.phone}
            </a>
            <span className="text-ivory/25">·</span>
            <span>{CONTACT.addressShort}</span>
            <span className="text-ivory/25 hidden sm:inline">·</span>
            <OpenStatusBadge className="text-mustard/90 italic" />
          </div>
        </div>
      </div>
    </section>
  );
}
