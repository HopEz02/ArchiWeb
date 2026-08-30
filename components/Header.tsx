import Link from "next/link";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

/**
 * Responsive without JS: on narrow screens the wordmark and nav simply
 * wrap onto two lines via flex-wrap, rather than collapsing behind a
 * hamburger menu. With only four links this stays scannable and avoids
 * hiding navigation behind an extra interaction.
 */
export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-lg px-lg py-lg sm:px-2xl md:px-4xl">
      <Link
        href="/"
        className="font-display text-[20px] tracking-wide text-navy"
      >
        ArchiVerse
      </Link>

      <nav aria-label="Primary" className="flex flex-wrap gap-xl">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[16px] text-charcoal hover:text-navy focus-visible:text-navy"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
