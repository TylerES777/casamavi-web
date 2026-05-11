type Tone = "mustard" | "terracotta" | "ink" | "ivory";

const TONE_CLASSES: Record<Tone, string> = {
  mustard: "text-mustard",
  terracotta: "text-terracotta",
  ink: "text-ink/30",
  ivory: "text-ivory/40",
};

export function Hairline({
  tone = "mustard",
  width = 96,
  className = "",
}: {
  tone?: Tone;
  width?: number;
  className?: string;
}) {
  const half = (width - 6) / 2;
  return (
    <span
      className={`inline-flex items-center ${TONE_CLASSES[tone]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${width} 6`}
        width={width}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="3"
          x2={half}
          y2="3"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <circle cx={width / 2} cy="3" r="1.6" fill="currentColor" />
        <line
          x1={width - half}
          y1="3"
          x2={width}
          y2="3"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
    </span>
  );
}
