import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/studio", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="mt-5xl bg-navy px-lg py-3xl text-cream sm:px-2xl md:px-4xl">
      <nav aria-label="Footer" className="flex flex-wrap gap-xl">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[14px] text-cream/80 hover:text-cream focus-visible:text-cream"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-xl text-[13px] text-cream/60">
        © {new Date().getFullYear()} ArchiVerse.
      </p>
    </footer>
  );
}
