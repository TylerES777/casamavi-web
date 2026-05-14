import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OpenStatusBadge } from "@/components/ui/OpenStatusBadge";
import { CONTACT } from "@/lib/constants";
import { STOCK } from "@/lib/stock-images";

export function Hero() {
  return (
    <section
      aria-label="Casa Mavi · Inicio"
      className="relative w-full h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden bg-espresso-deep"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={STOCK.hero}
          alt="Pizza napolitana saliendo del horno de piedra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Warm color wash to keep palette consistent with the brand */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 30%, rgba(74, 46, 28, 0.55), transparent 60%),
              radial-gradient(ellipse 70% 60% at 75% 70%, rgba(139, 31, 42, 0.45), transparent 65%),
              linear-gradient(180deg, rgba(42, 24, 16, 0.35) 0%, rgba(31, 18, 8, 0.55) 100%)
            `,
          }}
        />
        {/* Bottom-up gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,18,8,0.15) 0%, rgba(31,18,8,0.25) 35%, rgba(31,18,8,0.65) 75%, rgba(31,18,8,0.92) 100%)",
          }}
        />
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
