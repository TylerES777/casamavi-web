import { Facebook, Instagram } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function TikTokIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}

function TripAdvisorIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <circle cx="6.8" cy="13.5" r="3.4" />
      <circle cx="17.2" cy="13.5" r="3.4" />
      <circle cx="6.8" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="17.2" cy="13.5" r="1.1" fill="currentColor" />
      <path d="M3.5 9.5h17M8.5 9.5C9.5 7.5 10.5 6.5 12 6.5s2.5 1 3.5 3" />
    </svg>
  );
}

const ICON_MAP: Record<string, ComponentType<IconProps>> = {
  Facebook: Facebook as unknown as ComponentType<IconProps>,
  Instagram: Instagram as unknown as ComponentType<IconProps>,
  TikTok: TikTokIcon,
  TripAdvisor: TripAdvisorIcon,
};

export function SocialIcons({
  tone = "ink",
  size = 17,
  className = "",
}: {
  tone?: "ink" | "ivory";
  size?: number;
  className?: string;
}) {
  const linkClasses =
    tone === "ivory"
      ? "text-ivory/60 hover:text-mustard border-ivory/20 hover:border-mustard"
      : "text-ink/55 hover:text-terracotta border-ink/15 hover:border-terracotta";

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ name, href }) => {
        const Icon = ICON_MAP[name];
        if (!Icon) return null;
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300 ${linkClasses}`}
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
