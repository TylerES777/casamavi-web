import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FEATURED_DISHES } from "@/lib/constants";
import { STOCK } from "@/lib/stock-images";

const DISH_IMAGES = [
  STOCK.dishes.margherita,
  STOCK.dishes.carbonara,
  STOCK.dishes.lasagna,
] as const;

export function FeaturedDishes() {
  return (
    <section
      aria-labelledby="carta-heading"
      className="bg-paper py-28 md:py-36 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-eyebrow text-terracotta block mb-6">
            Nuestra Carta
          </span>
          <h2
            id="carta-heading"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight max-w-3xl mx-auto mb-8"
          >
            Cada plato, un{" "}
            <span className="italic font-light">viaje a Italia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-[1.7] font-light mb-10">
            Pizzas napolitanas al horno de piedra, pasta fresca artesanal y
            recetas tradicionales italianas. En Casa Mavi, cada plato es un
            viaje a Italia sin salir de Fuengirola.
          </p>
          <Hairline tone="mustard" width={120} />
        </div>

        {/* Dish grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8 lg:gap-x-12">
          {FEATURED_DISHES.map((dish, idx) => (
            <article key={dish.numeral} className="group">
              <PlaceholderImage
                alt={dish.alt}
                aspect="4/5"
                src={DISH_IMAGES[idx]}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="mb-7"
              />

              <div
                aria-hidden="true"
                className="font-serif italic text-mustard/90 text-xl mb-3 font-light"
              >
                {dish.numeral}
              </div>

              <h3 className="font-serif text-ink text-[1.65rem] md:text-[1.8rem] leading-[1.1] tracking-tight mb-5">
                {dish.name}{" "}
                <span className="italic font-light">{dish.nameItalic}</span>
              </h3>

              {/* Price with leader dots */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-serif italic text-terracotta text-lg">
                  {dish.price}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-1 border-b border-dotted border-ink/25 translate-y-[-3px]"
                />
              </div>

              <p className="text-ink-soft text-[0.95rem] leading-[1.7] font-light">
                {dish.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-24">
          <Button href="/menu" variant="secondary">
            Ver Bodega Completa
          </Button>
        </div>
      </div>
    </section>
  );
}
