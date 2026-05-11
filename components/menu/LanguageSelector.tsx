import { SUPPORTED_LANGS } from "@/lib/menu-data";

export function LanguageSelector() {
  return (
    <div className="flex flex-col items-center md:items-start gap-2.5">
      <span className="text-eyebrow-sm text-ink/55">Idioma</span>
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {SUPPORTED_LANGS.map((lang, idx) => (
          <li key={lang.code} className="flex items-center gap-3">
            <span
              title={
                lang.available ? lang.label : `${lang.label} · próximamente`
              }
              aria-current={lang.available ? "true" : undefined}
              className={`text-eyebrow-sm transition-colors ${
                lang.available
                  ? "text-terracotta border-b border-terracotta/50 pb-0.5"
                  : "text-ink/30"
              }`}
            >
              {lang.code}
            </span>
            {idx < SUPPORTED_LANGS.length - 1 && (
              <span aria-hidden="true" className="text-ink/15 text-xs">
                ·
              </span>
            )}
          </li>
        ))}
      </ul>
      <span className="text-[0.7rem] tracking-wide text-ink-muted italic font-serif">
        Carta disponible próximamente en otros idiomas
      </span>
    </div>
  );
}
