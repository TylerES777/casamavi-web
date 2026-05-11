"use client";

import { useMemo, useState } from "react";
import { MenuItem } from "@/components/menu/MenuItem";
import { Hairline } from "@/components/ui/Hairline";
import {
  DIETARY_FILTERS,
  MENU,
  type Dish,
  type DishTag,
  type MenuCategory,
  type MenuSubcategory,
} from "@/lib/menu-data";

const ROMAN: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

function dishMatches(dish: Dish, active: ReadonlySet<DishTag>): boolean {
  if (active.size === 0) return true;
  const tags = dish.tags ?? [];
  for (const filter of active) {
    if (filter === "veg") {
      // Vegetarian filter includes vegan items
      if (!tags.includes("veg") && !tags.includes("vegan")) return false;
    } else if (!tags.includes(filter)) {
      return false;
    }
  }
  return true;
}

function visibleCount(category: MenuCategory, active: ReadonlySet<DishTag>) {
  if (category.subcategories) {
    return category.subcategories.reduce(
      (sum, sub) => sum + sub.items.filter((d) => dishMatches(d, active)).length,
      0,
    );
  }
  return (category.items ?? []).filter((d) => dishMatches(d, active)).length;
}

function CategoryNavLinks({
  active,
  filters,
}: {
  active: ReadonlySet<DishTag>;
  filters: ReadonlySet<DishTag>;
}) {
  return (
    <ul className="flex items-center gap-x-7 lg:gap-x-9 whitespace-nowrap">
      {MENU.map((cat, idx) => {
        const count = visibleCount(cat, filters);
        const dimmed = filters.size > 0 && count === 0;
        return (
          <li key={cat.id} className="flex items-baseline gap-1.5">
            <a
              href={`#${cat.id}`}
              className={`text-eyebrow-sm transition-colors duration-300 ${
                dimmed
                  ? "text-ink/25 pointer-events-none"
                  : active.has(cat.id as DishTag)
                  ? "text-terracotta"
                  : "text-ink/65 hover:text-terracotta"
              }`}
            >
              <span
                aria-hidden="true"
                className="text-mustard/70 mr-2 font-serif italic"
              >
                {ROMAN[idx + 1]}
              </span>
              {cat.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function SubcategoryBlock({
  sub,
  filters,
}: {
  sub: MenuSubcategory;
  filters: ReadonlySet<DishTag>;
}) {
  const visible = sub.items.filter((d) => dishMatches(d, filters));
  return (
    <div className="mb-14 last:mb-0">
      <header className="mb-7">
        <span className="text-eyebrow-sm text-mustard block mb-2">
          {sub.name}
        </span>
        {sub.notice && (
          <p className="font-serif italic text-ink/60 text-base leading-relaxed font-light max-w-2xl">
            {sub.notice}
          </p>
        )}
      </header>

      {visible.length === 0 ? (
        <p className="font-serif italic text-ink-muted text-sm">
          Sin opciones que coincidan con los filtros activos.
        </p>
      ) : (
        <ul className="space-y-7">
          {visible.map((dish, idx) => (
            <MenuItem key={`${sub.id}-${idx}`} dish={dish} />
          ))}
        </ul>
      )}
    </div>
  );
}

function CategoryBlock({
  category,
  index,
  filters,
}: {
  category: MenuCategory;
  index: number;
  filters: ReadonlySet<DishTag>;
}) {
  const visible = (category.items ?? []).filter((d) =>
    dishMatches(d, filters),
  );

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="scroll-mt-40 mb-28 md:mb-36 last:mb-0"
    >
      {/* Section header */}
      <header className="text-center mb-14 md:mb-16">
        <span
          aria-hidden="true"
          className="font-serif italic text-mustard text-[2rem] md:text-[2.4rem] leading-none block mb-4 font-light"
        >
          {ROMAN[index + 1]}
        </span>
        <h2
          id={`${category.id}-heading`}
          className="font-serif text-ink text-[2.4rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.05] tracking-tight mb-4"
        >
          {category.name}
          {category.italic && (
            <>
              {" "}
              <span className="italic font-light">{category.italic}</span>
            </>
          )}
        </h2>
        {category.subtitle && (
          <p className="font-serif italic text-ink-soft text-base md:text-[1.05rem] leading-relaxed font-light max-w-2xl mx-auto mb-6">
            {category.subtitle}
          </p>
        )}
        <Hairline tone="mustard" width={88} />
      </header>

      {/* Items */}
      <div className="max-w-3xl mx-auto">
        {category.subcategories ? (
          category.subcategories.map((sub) => (
            <SubcategoryBlock key={sub.id} sub={sub} filters={filters} />
          ))
        ) : visible.length === 0 ? (
          <p className="text-center font-serif italic text-ink-muted">
            Sin opciones que coincidan con los filtros activos.
          </p>
        ) : (
          <ul className="space-y-9">
            {visible.map((dish, idx) => (
              <MenuItem key={`${category.id}-${idx}`} dish={dish} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function MenuClient() {
  const [filters, setFilters] = useState<Set<DishTag>>(new Set());

  const filterSet = useMemo<ReadonlySet<DishTag>>(() => filters, [filters]);

  const toggleFilter = (tag: DishTag) => {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => setFilters(new Set());

  return (
    <>
      {/* Toolbar */}
      <div className="bg-paper-warm/60 border-y border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
            {/* Dietary filters */}
            <div className="flex-1">
              <span className="text-eyebrow-sm text-ink/55 block mb-3.5">
                Filtrar por
              </span>
              <ul className="flex flex-wrap gap-2.5">
                {DIETARY_FILTERS.map((f) => {
                  const active = filters.has(f.id as DishTag);
                  return (
                    <li key={f.id}>
                      <button
                        type="button"
                        onClick={() => toggleFilter(f.id as DishTag)}
                        aria-pressed={active}
                        className={`inline-flex items-center gap-2 px-4 py-2 border text-eyebrow-sm transition-all duration-300 ${
                          active
                            ? "bg-terracotta border-terracotta text-ivory"
                            : "border-ink/20 text-ink/75 hover:border-terracotta hover:text-terracotta"
                        }`}
                      >
                        <span>{f.label}</span>
                        {"note" in f && f.note && (
                          <span
                            className={`text-[0.6rem] ${
                              active ? "text-ivory/80" : "text-ink/45"
                            }`}
                          >
                            {f.note}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
                {filters.size > 0 && (
                  <li>
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="inline-flex items-center px-3 py-2 text-eyebrow-sm text-ink/55 hover:text-terracotta transition-colors"
                    >
                      Limpiar
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky category nav */}
      <nav
        aria-label="Categorías de la carta"
        className="sticky top-20 z-30 bg-paper/95 backdrop-blur-md border-b border-ink/10"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="overflow-x-auto py-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            <CategoryNavLinks active={new Set()} filters={filterSet} />
          </div>
        </div>
      </nav>

      {/* Menu sections */}
      <div className="bg-paper py-24 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          {MENU.map((cat, idx) => (
            <CategoryBlock
              key={cat.id}
              category={cat}
              index={idx}
              filters={filterSet}
            />
          ))}
        </div>
      </div>
    </>
  );
}
