import { Star, ExternalLink } from "lucide-react";
import { TestimonialCard } from "@/components/testimonios/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { GALLERY_ITEMS, TESTIMONIALS, TRIPADVISOR_URL } from "@/lib/constants";
import { STOCK } from "@/lib/stock-images";

export const metadata = {
  title: "Testimonios y Galería · Casa Mavi",
  description:
    "Lo que dicen nuestros comensales · Casa Mavi · Trattoria y Pizzería Napolitana en Fuengirola. Certificado de Excelencia TripAdvisor 2017–2025.",
};

export default function TestimoniosPage() {
  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-eyebrow text-terracotta block mb-6">
            Testimonios y Galería
          </span>
          <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight mb-7">
            Lo que dicen{" "}
            <span className="italic font-light">nuestros comensales</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-10">
            La mejor carta de presentación la escriben nuestros comensales.
            Aquí una selección de momentos que hemos compartido con familias
            de toda Europa, año tras año.
          </p>

          {/* TripAdvisor seal */}
          <div className="inline-flex items-center gap-4 border border-ink/15 bg-paper-warm/50 px-6 py-4">
            <div
              aria-hidden="true"
              className="flex items-center gap-1"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  strokeWidth={1.2}
                  className="fill-mustard text-mustard"
                />
              ))}
            </div>
            <div className="text-left">
              <span className="text-eyebrow-sm text-mustard block mb-0.5">
                Certificado de Excelencia
              </span>
              <span className="font-serif italic text-ink text-[1rem] font-light">
                TripAdvisor · 2017 – 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section
        aria-labelledby="reviews-heading"
        className="bg-paper-warm/60 border-y border-ink/10 py-28 md:py-36 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-eyebrow text-terracotta block mb-6">
              Reseñas
            </span>
            <h2
              id="reviews-heading"
              className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-7"
            >
              Las palabras de{" "}
              <span className="italic font-light">nuestra familia</span>
            </h2>
            <Hairline tone="mustard" width={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-eyebrow-sm text-terracotta hover:text-terracotta-deep border-b border-terracotta/40 hover:border-terracotta-deep pb-1 transition-colors"
            >
              Leer todas las reseñas en TripAdvisor
              <ExternalLink size={12} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        aria-labelledby="gallery-heading"
        className="py-28 md:py-36 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-eyebrow text-terracotta block mb-6">
              Galería
            </span>
            <h2
              id="gallery-heading"
              className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-7"
            >
              Una mesa,{" "}
              <span className="italic font-light">cien historias</span>
            </h2>
            <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-9">
              Los platos que servimos, el horno que enciende cada noche, la
              sala donde se reúne nuestra familia. Un vistazo al alma de Casa
              Mavi.
            </p>
            <Hairline tone="mustard" width={120} />
          </div>

          {/* Masonry-style gallery using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [&>*]:mb-5 md:[&>*]:mb-6 [&>*]:break-inside-avoid">
            {GALLERY_ITEMS.map((item, idx) => (
              <PlaceholderImage
                key={item.id}
                alt={item.alt}
                aspect={item.aspect}
                src={STOCK.gallery[idx]}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="border border-ink/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-espresso-deep overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 25% 30%, rgba(139, 31, 42, 0.40), transparent 65%),
              radial-gradient(ellipse 60% 50% at 80% 75%, rgba(212, 162, 76, 0.20), transparent 65%),
              linear-gradient(180deg, #2a1810 0%, #1a0a0c 50%, #1f1208 100%)
            `,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-32 text-center">
          <Hairline tone="mustard" width={88} className="mb-7" />
          <span className="text-eyebrow text-mustard block mb-6">
            Tu turno
          </span>
          <h2 className="font-serif text-ivory text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight italic font-light mb-7">
            Escribe tu propia historia.
          </h2>
          <p className="text-ivory/75 text-base md:text-lg leading-[1.7] font-light max-w-xl mx-auto mb-10">
            Reserva una mesa, comparte un plato con quien quieras, y
            cuéntanoslo en TripAdvisor. Tu reseña ayuda a otra familia a
            encontrarnos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/reservas" variant="primary">
              Reservar Mesa
            </Button>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.78rem] tracking-[0.22em] uppercase font-medium border border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso transition-colors"
            >
              Dejar una Reseña
              <ExternalLink size={12} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
