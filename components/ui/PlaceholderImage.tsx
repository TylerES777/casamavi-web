import Image from "next/image";

type Tone = "warm" | "ember" | "wine" | "neutral" | "shadow";
type Aspect = "4/5" | "3/4" | "1/1" | "16/9" | "3/2" | "16/10" | "21/9";

const TONE_BG: Record<Tone, string> = {
  warm: `
    radial-gradient(ellipse 65% 55% at 28% 35%, rgba(212, 162, 76, 0.28), transparent 60%),
    radial-gradient(ellipse 60% 50% at 78% 78%, rgba(200, 75, 44, 0.22), transparent 65%),
    linear-gradient(180deg, #4a2e1c 0%, #3d2818 55%, #2a1810 100%)
  `,
  ember: `
    radial-gradient(ellipse 60% 50% at 40% 50%, rgba(200, 75, 44, 0.42), transparent 60%),
    radial-gradient(ellipse 50% 45% at 80% 20%, rgba(212, 162, 76, 0.28), transparent 65%),
    linear-gradient(180deg, #2a1810 0%, #3d2818 40%, #1f1208 100%)
  `,
  wine: `
    radial-gradient(ellipse 55% 45% at 65% 30%, rgba(139, 31, 42, 0.38), transparent 65%),
    radial-gradient(ellipse 60% 50% at 25% 80%, rgba(212, 162, 76, 0.18), transparent 65%),
    linear-gradient(180deg, #1a0a0c 0%, #2a1810 50%, #1a0e06 100%)
  `,
  neutral: `
    radial-gradient(ellipse 55% 50% at 35% 30%, rgba(212, 162, 76, 0.20), transparent 65%),
    radial-gradient(ellipse 55% 50% at 75% 75%, rgba(200, 75, 44, 0.10), transparent 65%),
    linear-gradient(180deg, #efe4d2 0%, #e0d0b4 100%)
  `,
  shadow: `
    radial-gradient(ellipse 60% 50% at 50% 100%, rgba(31, 18, 8, 0.85), transparent 70%),
    linear-gradient(180deg, #2a1810 0%, #1f1208 100%)
  `,
};

const ASPECT_CLASS: Record<Aspect, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "3/2": "aspect-[3/2]",
  "16/10": "aspect-[16/10]",
  "21/9": "aspect-[21/9]",
};

export function PlaceholderImage({
  alt,
  aspect = "4/5",
  tone = "warm",
  className = "",
  fill = false,
  showLabel = true,
  label = "Foto · placeholder",
  src,
  sizes,
  priority = false,
}: {
  alt: string;
  aspect?: Aspect;
  tone?: Tone;
  className?: string;
  fill?: boolean;
  showLabel?: boolean;
  label?: string;
  /** Optional real image URL. When provided, renders via next/image. */
  src?: string;
  /** Required when `src` is set to pick the right responsive variant. */
  sizes?: string;
  priority?: boolean;
}) {
  const wrapperClass = `relative overflow-hidden ${
    fill ? "absolute inset-0" : ASPECT_CLASS[aspect]
  } ${className}`;

  if (src) {
    return (
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div role="img" aria-label={alt} className={wrapperClass}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: TONE_BG[tone] }}
      />
      {showLabel && (
        <span className="absolute bottom-3 left-3 text-[0.55rem] tracking-[0.4em] uppercase text-ivory/45 font-medium pointer-events-none">
          {label}
        </span>
      )}
    </div>
  );
}
