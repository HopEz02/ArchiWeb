import Link from "next/link";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

/**
 * Responsive without JS: on narrow screens the wordmark and nav simply
 * wrap onto two lines via flex-wrap, rather than collapsing behind a
 * hamburger menu. With only two links this stays scannable and avoids
 * hiding navigation behind an extra interaction.
 *
 * Sticky: pinned to the top of the viewport during scroll so Portfolio/
 * Contact stay reachable on long pages. Needs an opaque background
 * (bg-cream) since page content now scrolls underneath it, and a thin
 * hairline shadow (literal rgba value, not a CSS-var opacity modifier —
 * see the note in globals.css about those being unreliable) to separate
 * it from that content without a heavy drop shadow.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-lg bg-cream px-lg py-lg shadow-[0_1px_0_0_rgba(16,27,48,0.08)] sm:px-2xl md:px-4xl">
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
