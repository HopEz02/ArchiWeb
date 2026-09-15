// TODO(content): name, title, bio, and photo below are placeholders and
// must be replaced with the real architect's information before launch.
// The photo uses Lorem Picsum (see note in app/page.tsx) purely to preview
// layout weight — swap for a real portrait once available.
const ARCHITECT = {
  name: "TODO: Full name",
  title: "TODO: Title — e.g. Founding Architect",
  bio: "TODO: two or three sentences on background, philosophy, and focus.",
  photoSeed: "archiverse-architect-portrait",
  instagramUrl: "https://instagram.com/TODO",
};

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
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

export function ArchitectProfile() {
  return (
    <section
      aria-labelledby="architect-heading"
      className="px-lg py-4xl sm:px-2xl md:px-4xl"
    >
      <div className="flex flex-col gap-2xl md:flex-row md:items-stretch">
        {/* Portrait — the one deliberate circular accent on the site;
            everything else keeps the sharp/near-sharp corners defined by
            the theme's borderRadius tokens. */}
        <div className="mx-auto h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full md:mx-0 md:h-[240px] md:w-[240px]">
          {/* TODO: swap for next/image with the real portrait file once
              photography exists — plain <img> is fine for this temporary,
              dynamically-seeded preview only. */}
          <img
            src={`https://picsum.photos/seed/${ARCHITECT.photoSeed}/480/480`}
            alt={`TODO: real, descriptive alt text — portrait of ${ARCHITECT.name}`}
            width={480}
            height={480}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info panel — ivory ground, thin gold rule instead of a shadow
            or gradient, so the accent reads as an architectural detail
            rather than decoration. */}
        <div className="flex flex-1 flex-col justify-center border-t border-charcoal/15 pt-xl md:border-t-0 md:border-l md:border-charcoal/15 md:pl-2xl md:pt-0">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h2
            id="architect-heading"
            className="mt-lg font-display text-[28px] text-navy md:text-[32px]"
          >
            {ARCHITECT.name}
          </h2>
          <p className="mt-xs font-mono text-[13px] uppercase tracking-wide text-charcoal/70">
            {ARCHITECT.title}
          </p>
          <p className="mt-lg max-w-prose text-charcoal">{ARCHITECT.bio}</p>

          <div className="mt-xl">
            <a
              href={ARCHITECT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-charcoal/15 text-navy transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
              aria-label={`${ARCHITECT.name} on Instagram (opens in a new tab)`}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
