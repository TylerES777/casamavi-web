import { LanguageSelector } from "@/components/menu/LanguageSelector";
import { MenuClient } from "@/components/menu/MenuClient";
import { Hairline } from "@/components/ui/Hairline";
import { MENU_NOTICE } from "@/lib/menu-data";

export const metadata = {
  title: "La Carta · Casa Mavi",
  description:
    "La carta de Casa Mavi: pizzas napolitanas al horno de piedra, pasta fresca importada de Italia, especiales de la casa, postres caseros y bodega italiana.",
};

export default function MenuPage() {
  return (
    <main className="bg-paper">
      {/* Page hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-10 lg:px-16 bg-paper">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-eyebrow text-terracotta block mb-6">
            La Carta
          </span>
          <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight mb-7">
            Tradición napolitana,{" "}
            <span className="italic font-light">ingredientes italianos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-9">
            Cada plato sigue las recetas de la nonna, los ingredientes vienen
            directos de Italia y las pizzas salen del horno de piedra a 450°C.
            Esta es nuestra carta — un recorrido por el sur de Italia desde Los
            Boliches.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>
      </section>

      {/* Language + notice band */}
      <section className="px-6 md:px-10 lg:px-16 pb-12 md:pb-14 bg-paper">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <LanguageSelector />
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <span className="text-eyebrow-sm text-ink/55">Suplementos</span>
            <p className="font-serif italic text-ink/80 text-base md:text-[1.05rem] leading-relaxed font-light max-w-md">
              {MENU_NOTICE}
            </p>
          </div>
        </div>
      </section>

      {/* Filters + sticky nav + menu sections */}
      <MenuClient />
    </main>
  );
}
