import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ variant = "primary", className = "", ...props }: ButtonProps | LinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
    variant === "primary" && "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-glow hover:scale-[1.01]",
    variant === "secondary" && "border border-white/10 bg-white/5 text-white hover:border-cyan-400/30 hover:bg-white/10",
    variant === "ghost" && "text-white/90 hover:text-white",
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, children, ...linkProps } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
