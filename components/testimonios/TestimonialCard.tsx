import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  date: string;
  rating: number;
  source: string;
  quote: string;
};

export function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const fullStars = Math.round(testimonial.rating);

  return (
    <article
      className={`relative bg-paper border border-ink/10 px-7 py-9 md:px-9 md:py-10 flex flex-col ${className}`}
    >
      {/* Mark */}
      <span
        aria-hidden="true"
        className="absolute top-5 right-7 font-serif italic text-mustard/35 text-[3.6rem] leading-none font-light pointer-events-none select-none"
      >
        “
      </span>

      {/* Rating */}
      <div className="flex items-center gap-1.5 mb-6" aria-label={`${fullStars} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={1.2}
            className={
              i < fullStars
                ? "fill-mustard text-mustard"
                : "text-ink/20"
            }
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif italic text-ink text-[1.1rem] md:text-[1.15rem] leading-[1.55] font-light mb-8 flex-1">
        {testimonial.quote}
      </blockquote>

      {/* Attribution */}
      <footer className="pt-6 border-t border-ink/10">
        <div className="flex items-baseline justify-between gap-4 mb-1.5">
          <cite className="font-serif text-ink not-italic text-[1.05rem]">
            {testimonial.name}
          </cite>
          <span className="text-eyebrow-sm text-ink/50 shrink-0">
            {testimonial.source}
          </span>
        </div>
        <span className="text-[0.78rem] text-ink-muted font-serif italic font-light">
          {testimonial.location} · {testimonial.date}
        </span>
      </footer>
    </article>
  );
}
