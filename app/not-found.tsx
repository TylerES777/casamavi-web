import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { CONTACT } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-32 px-6 md:px-10 lg:px-16 flex items-center">
      <div className="max-w-2xl mx-auto text-center w-full">
        <span className="text-eyebrow text-terracotta block mb-7">
          404 · Página no encontrada
        </span>

        <h1 className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight mb-8">
          Esta página{" "}
          <span className="italic font-light">aún no está servida</span>
        </h1>

        <p className="text-ink-soft text-base md:text-lg leading-[1.75] font-light mb-10 max-w-xl mx-auto">
          Estamos preparando algo bueno. Vuelve al inicio para conocer Casa
          Mavi, o reserva tu mesa directamente y nos vemos en Los Boliches.
        </p>

        <Hairline tone="mustard" width={96} className="mb-12" />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button href="/" variant="primary">
            Volver al Inicio
          </Button>
          <Button href="/reservas" variant="secondary">
            Reservar Mesa
          </Button>
        </div>

        <p className="font-serif italic text-ink-muted text-base leading-relaxed">
          ¿Necesitas hablar con nosotros?{" "}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="text-terracotta hover:text-terracotta-deep border-b border-terracotta/40"
          >
            {CONTACT.phone}
          </a>
        </p>
      </div>
    </main>
  );
}
