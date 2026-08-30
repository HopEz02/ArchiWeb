import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const baseStyles =
  "inline-flex min-h-[44px] items-center justify-center px-xl py-md text-[16px] transition-colors duration-200 rounded";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-cream hover:bg-onyx focus-visible:bg-onyx",
  secondary:
    "border border-gold text-navy hover:bg-gold/10 focus-visible:bg-gold/10",
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
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Link>
  );
}
