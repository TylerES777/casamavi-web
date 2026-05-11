import type { Dish, DishTag } from "@/lib/menu-data";
import { TAG_SHORT } from "@/lib/menu-data";

const TAG_TONE: Record<DishTag, string> = {
  veg: "text-olive border-olive/40",
  vegan: "text-olive border-olive/40",
  gf: "text-mustard border-mustard/40",
  "lactose-free": "text-mustard border-mustard/40",
  spicy: "text-terracotta border-terracotta/40",
};

export function MenuItem({
  dish,
  hidden = false,
}: {
  dish: Dish;
  hidden?: boolean;
}) {
  return (
    <li
      className={`group transition-opacity duration-300 ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="flex items-baseline gap-3 mb-1.5">
        <h3 className="font-serif text-ink text-[1.15rem] md:text-[1.25rem] leading-snug tracking-tight shrink-0 max-w-[80%]">
          {dish.name}
          {dish.italic && (
            <>
              {" "}
              <span className="italic font-light text-ink/85">
                {dish.italic}
              </span>
            </>
          )}
        </h3>
        <span
          aria-hidden="true"
          className="flex-1 border-b border-dotted border-ink/20 translate-y-[-3px] min-w-4"
        />
        {dish.price && (
          <span className="font-serif italic text-terracotta text-[1.05rem] shrink-0">
            {dish.price}
          </span>
        )}
      </div>

      {dish.description && (
        <p className="text-ink-soft text-[0.92rem] leading-[1.65] font-light max-w-2xl pr-0 md:pr-12">
          {dish.description}
        </p>
      )}

      {dish.tags && dish.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3" aria-label="Etiquetas">
          {dish.tags.map((tag) => (
            <li
              key={tag}
              className={`inline-flex items-center px-2 py-0.5 text-[0.6rem] tracking-[0.25em] uppercase border ${TAG_TONE[tag]} bg-paper/40`}
            >
              {TAG_SHORT[tag]}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
