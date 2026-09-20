import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

// "all" (default) keeps every existing usage of Button unchanged. "left"
// and "right" round only the outer edge, so two Buttons can be placed
// directly next to each other (no gap) and read as one combined block.
// "pill" is fully rounded (rounded-full) — used for standalone CTAs like
// the hero's "Book a consultation" / "View portfolio" pair, each kept as
// its own separate button with a gap between them.
type ButtonRadius = "all" | "left" | "right" | "none" | "pill";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  /** Appends a small right-pointing arrow after the label. Purely
   * decorative — aria-hidden, doesn't affect the link's accessible name
   * (which still comes from the text children). */
  showArrow?: boolean;
  children: React.ReactNode;
}

// gap-sm only takes effect when there's more than one flex child (i.e.
// when showArrow is used), so this is a no-op for every existing
// text-only Button usage.
const baseStyles =
  "inline-flex min-h-[44px] items-center justify-center gap-sm px-xl py-md text-[16px] transition-colors duration-200";

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
  pill: "rounded-full",
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

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
  showArrow = false,
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
      {showArrow && <ArrowIcon />}
    </Link>
  );
}
