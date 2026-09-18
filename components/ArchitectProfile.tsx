// TODO(content): name, title, bio, and photo below are placeholders and
// must be replaced with the real architect's information before launch.
// The photo uses Lorem Picsum (see note in app/page.tsx) purely to preview
// layout weight, swap for a real portrait once available.
const ARCHITECT = {
  eyebrow: "TODO: Role label (e.g. Lead Architect)",
  name: "TODO: Full name",
  title: "TODO: Title (e.g. Founding Architect)",
  bio: "TODO: two or three sentences on background, philosophy, and focus.",
  photoSeed: "archiverse-architect-portrait",
  instagramUrl: "https://instagram.com/TODO",
};

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Compact companion card meant to sit beside the hero copy (see
 * app/page.tsx), not as its own full-width section. Keeps the top of
 * the homepage to a single visual row instead of two stacked blocks.
 *
 * Sized deliberately small and tight (64px portrait, 18px name, uppercase
 * "eyebrow" role label above the name) so this card reads as a compact
 * credential card next to the hero headline, not a second competing
 * headline of its own.
 */
export function ArchitectProfile() {
  return (
    <div className="flex flex-col gap-md border-t border-charcoal/15 pt-xl lg:border-t-0 lg:border-l lg:border-charcoal/15 lg:pl-2xl lg:pt-0">
      <div className="h-px w-12 bg-gold" aria-hidden="true" />

      <div className="flex items-center gap-md">
        {/* TODO: swap for next/image with the real portrait file once
            photography exists, plain <img> is fine for this temporary,
            dynamically-seeded preview only. */}
        <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-full">
          <img
            src={`https://picsum.photos/seed/${ARCHITECT.photoSeed}/240/240`}
            alt={`TODO: real, descriptive alt text: portrait of ${ARCHITECT.name}`}
            width={240}
            height={240}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
            {ARCHITECT.eyebrow}
          </p>
          <h2 className="mt-[2px] font-display text-[18px] text-navy">
            {ARCHITECT.name}
          </h2>
          <p className="mt-[2px] font-mono text-[11px] uppercase tracking-wide text-charcoal/70">
            {ARCHITECT.title}
          </p>
        </div>
      </div>

      <p className="text-[14px] text-charcoal">{ARCHITECT.bio}</p>

      <a
        href={ARCHITECT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center self-start border border-charcoal/15 text-navy transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
        aria-label={`${ARCHITECT.name} on Instagram (opens in a new tab)`}
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
