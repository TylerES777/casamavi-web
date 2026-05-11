import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light";
type Size = "md" | "sm";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-terracotta text-ivory hover:bg-terracotta-deep border border-terracotta hover:border-terracotta-deep",
  secondary:
    "border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory bg-transparent",
  "ghost-light":
    "border border-ivory/50 text-ivory hover:bg-ivory hover:text-espresso bg-transparent",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-7 py-3.5 text-[0.78rem] tracking-[0.22em]",
  sm: "px-5 py-2.5 text-[0.7rem] tracking-[0.22em]",
};

const BASE =
  "inline-flex items-center justify-center uppercase font-medium transition-all duration-300 ease-out cursor-pointer";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${BASE} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as NativeButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
