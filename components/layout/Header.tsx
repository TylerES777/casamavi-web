"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the homepage hero gets the transparent-over-photo treatment.
  // Every other route renders the solid header from the start.
  const overHero = isHome && !scrolled && !mobileOpen;
  const isSolid = !overHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-paper/95 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Casa Mavi · Inicio"
        >
          <Image
            src="/assets/logo.png"
            alt="Casa Mavi"
            width={56}
            height={56}
            priority
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-eyebrow-sm transition-colors duration-300 ${
                overHero
                  ? "text-ivory/85 hover:text-mustard"
                  : "text-ink/75 hover:text-terracotta"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center shrink-0">
          <Button href="/reservas" variant="primary" size="sm">
            Reservar Mesa
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 transition-colors ${
            overHero ? "text-ivory" : "text-ink"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-eyebrow text-ink/80 hover:text-terracotta"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-ink/10">
              <Button href="/reservas" variant="primary" size="sm">
                Reservar Mesa
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
