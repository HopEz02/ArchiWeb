import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

// "all" (default) keeps every existing usage of Button unchanged. "left"
// and "right" round only the outer edge, so two Buttons can be placed
// directly next to each other (no gap) and read as one combined block —
// used for the hero's "Book a consultation" / "View portfolio" pair.
type ButtonRadius = "all" | "left" | "right" | "none";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  children: React.ReactNode;
}

const baseStyles =
  "inline-flex min-h-[44px] items-center justify-center px-xl py-md text-[16px] transition-colors duration-200";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-cream hover:bg-onyx focus-visible:bg-onyx",
  secondary:
    "border border-gold text-navy hover:bg-gold/10 focus-visible:bg-gold/10",
};

const radiusStyles: Record<ButtonRadius, string> = {
  all: "rounded",
  left: "rounded-l rounded-r-none",
  right: "rounded-r rounded-l-none",
  none: "rounded-none",
};

/**
 * Button renders as a real anchor (<a>) because every current use case is
 * navigation (to /contact, /portfolio, etc.), not an in-page action. If a
 * future use case needs a form submit or JS action, add a separate
 * <button>-based component rather than overloading this one.
 */
export function Button({
  href,
  variant = "primary",
  radius = "all",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${radiusStyles[radius]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Link>
  );
}
