import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

// "About" points at /studio, matching the label Header.tsx already uses
// for the same destination. That page doesn't exist yet (pre-existing
// gap, not introduced here) - create app/studio/page.tsx with real
// content when it's ready; until then this link 404s.
const FOOTER_LINKS = [
  { href: "/studio", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-de-confidentialitate", label: "Privacy" },
  { href: "/termeni-si-conditii", label: "Terms" },
  { href: "/politica-de-cookie", label: "Cookies" },
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

      <div className="mt-xl flex flex-col gap-xs text-[13px] text-cream/60">
        <p>© {new Date().getFullYear()} ArchiVerse.</p>
        {/* TODO(content): mandatory legal transparency data for a
            Romanian business website (Legea 26/1990, OUG nr. 99/2000) -
            replace every bracketed placeholder with the firm's real
            registration details before launch. */}
        <p>
          [Nume_Firma_SRL/BIA] · CUI: [Cod_Fiscal] · Reg. Com:{" "}
          [Numar_Inregistrare]
        </p>
        <CookieSettingsButton />
      </div>
    </footer>
  );
}
