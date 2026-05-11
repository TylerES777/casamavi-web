import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";

export function DietaryNotice() {
  return (
    <section
      aria-labelledby="dietary-heading"
      className="bg-paper-deep border-y border-ink/10 py-24 md:py-28 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Hairline tone="mustard" width={88} className="mb-8" />

        <span
          id="dietary-heading"
          className="text-eyebrow text-terracotta block mb-6"
        >
          Adaptaciones · Sin Gluten · Vegano
        </span>

        <p className="font-serif text-ink text-2xl md:text-[1.85rem] lg:text-[2.05rem] leading-[1.3] tracking-tight mb-10 italic font-light">
          ¿Necesitas opciones sin gluten o adaptaciones veganas?
        </p>

        <p className="text-ink-soft text-base md:text-lg leading-[1.75] font-light mb-12">
          En nuestra Trattoria ofrecemos alternativas{" "}
          <span className="italic text-ink">sin gluten</span> en pizzas y
          pastas. Adaptamos nuestros platos auténticos con verduras frescas y
          masa original para comensales{" "}
          <span className="italic text-ink">veganos</span> bajo petición.
        </p>

        <Button href="/contacto" variant="secondary">
          Contáctanos
        </Button>
      </div>
    </section>
  );
}
