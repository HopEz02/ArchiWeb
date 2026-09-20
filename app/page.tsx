import { Button } from "@/components/Button";
import { ArchitectProfile } from "@/components/ArchitectProfile";
import { ServicesShowcase, type Service } from "@/components/ServicesShowcase";

// TODO(content): every field below marked TODO is placeholder and must be
// replaced with real photography, copy, and project data before launch.
// Nothing here should ship as-is.
//
// Images use Lorem Picsum (a placeholder-image service backed by Unsplash
// photos, licensed specifically for prototyping), not copyrighted photos
// scraped from a search engine, purely so this section can be previewed
// with real photographic weight before actual project photography exists.
const FEATURED_PROJECTS = [
  { name: "TODO: Project name", meta: "TODO: m² · location · year", imageSeed: "archiverse-home-1" },
  { name: "TODO: Project name", meta: "TODO: m² · location · year", imageSeed: "archiverse-home-2" },
  { name: "TODO: Project name", meta: "TODO: m² · location · year", imageSeed: "archiverse-home-3" },
  { name: "TODO: Project name", meta: "TODO: m² · location · year", imageSeed: "archiverse-home-4" },
];

// Background photography for the interactive "What we do" showcase below
// is sourced directly from Unsplash under the Unsplash License (free for
// commercial use, no attribution required) — not scraped from a generic
// search engine, and topically representative of each service rather than
// random. Swap these for ArchiVerse's own project photography before
// launch. Credits: Daniel McCullough, Jacek Dylag, Dylan Gillis
// (unsplash.com).
const SERVICES: Service[] = [
  {
    title: "Design",
    blurb: "TODO: one sentence describing the design offering.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Build",
    blurb: "TODO: one sentence describing the build offering.",
    image:
      "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Consulting",
    blurb: "TODO: one sentence describing the consulting offering.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop",
  },
];

// Hero full-bleed background photo. Unsplash License (free for
// commercial use, no attribution required), credit: Thomas Bennie
// (unsplash.com) — a bright, warm-toned minimal desk/plant/window scene
// with no people or dark clothing, chosen specifically because it stays
// light across its full frame at wide, short crop ratios (unlike the
// "Design" service photo above, which has a dark area that only shows up
// at this section's aspect ratio). TODO(content): swap for ArchiVerse's
// own real project photography before launch — see FEATURED_PROJECTS
// note above re: licensing of placeholder imagery in this file.
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1679153369902-50687ca31379?q=80&w=2400&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden px-lg py-3xl sm:px-2xl md:px-4xl md:py-5xl"
      >
        {/* Full-bleed background photograph. Purely atmospheric — carries
            no information — so it's aria-hidden and non-interactive. */}
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        {/* Cream scrim over the photo so the heading and body text stay
            readable no matter which photo eventually replaces the
            placeholder above: solid on mobile (content is full-width and
            stacked, so it needs full coverage), fading left-to-right on
            desktop (content sits in a column on the left, photo reads on
            its own further right) — this is what guarantees WCAG contrast
            here rather than relying on any one photo being light enough. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream/95 to-cream/80 lg:bg-gradient-to-r lg:from-cream lg:via-cream/85 lg:to-cream/10"
        />

        {/* Bottom fade: separate from the scrim above, this one only
            covers a band at the very base of the section and always goes
            fully opaque cream by the bottom edge — otherwise the photo
            (still ~20% visible under the scrim right up to the edge) cuts
            off abruptly where the hero meets "Selected work" below,
            reading as a hard, unintentional-looking line. Sits above the
            scrim (-z-[5] vs -z-10) so it can push all the way to solid
            regardless of the scrim's own opacity at that point. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-[5] h-20 bg-gradient-to-b from-transparent to-cream sm:h-28 md:h-36"
        />

        <div className="relative mx-auto max-w-content">
          <div className="flex items-center gap-md">
            <div className="h-px w-10 bg-gold" aria-hidden="true" />
            <p className="font-mono text-[12px] uppercase tracking-wide text-charcoal/70">
              Architecture / Interiors / Spaces
            </p>
          </div>

          <div className="mt-xl grid grid-cols-1 gap-3xl lg:grid-cols-2 lg:items-center lg:gap-4xl">
            <div>
              <h1 id="hero-heading" className="max-w-prose text-[40px] md:text-[64px]">
                Spații definite de lumină, proporție și scop.
              </h1>
              <p className="mt-lg max-w-prose text-[18px] text-charcoal">
                Servicii complete de arhitectură: de la concept la execuție.
              </p>
            </div>

            {/* Translucent cream backing on large screens only: at that
                breakpoint the card sits further right, where the scrim
                above has faded closer to transparent and more of the raw
                photo shows through, so the card needs its own contrast
                guarantee for its denser text (bio paragraph, meta line).
                On mobile/tablet the section-wide scrim is solid enough
                already, so no extra backing is added there. */}
            <div className="lg:rounded-sm lg:bg-cream/90 lg:p-xl lg:backdrop-blur-sm">
              <ArchitectProfile />
            </div>
          </div>

          {/* Buttons live in their own row below both columns, horizontally
              centered across the full hero width. Separate pill-shaped
              buttons with a gap and a small arrow icon, matching Denis's
              reference — a deliberate change from the earlier "joined,
              square-cornered" pair. */}
          <div className="mt-2xl flex flex-wrap justify-center gap-md lg:mt-3xl">
            <Button href="/contact#booking" variant="primary" radius="pill" showArrow>
              Book a consultation
            </Button>
            <Button href="/portfolio" variant="secondary" radius="pill" showArrow>
              View portfolio
            </Button>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        className="px-lg py-4xl sm:px-2xl md:px-4xl"
      >
        <h2 id="work-heading" className="text-[32px]">
          Selected work
        </h2>

        <div className="mt-2xl grid grid-cols-1 gap-3xl md:grid-cols-2">
          {FEATURED_PROJECTS.map((project, index) => (
            <figure key={index}>
              {/* TODO: swap for next/image with a real optimized file once
                  photography exists, plain <img> is fine for this
                  temporary, dynamically-seeded preview only.
                  No hover motion here by design: a static, editorial
                  gallery reads calmer and more premium than a zoom
                  effect, and these thumbnails aren't linked yet anyway. */}
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${project.imageSeed}/800/600`}
                  alt={`TODO: real, descriptive alt text for ${project.name}: what the space actually looks like`}
                  width={800}
                  height={600}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-sm">
                <span className="block text-[16px] text-navy">
                  {project.name}
                </span>
                <span className="block font-mono text-[13px] text-charcoal/70">
                  {project.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Button
          href="/portfolio"
          variant="secondary"
          className="mt-2xl"
        >
          View full portfolio
        </Button>
      </section>

      <section aria-labelledby="services-heading">
        <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
          <h2 id="services-heading" className="text-[32px]">
            What we do
          </h2>
          {/* Thin gold rule, the same signature detail used elsewhere,
              not a new color. */}
          <div className="mt-lg h-px w-16 bg-gold" aria-hidden="true" />
        </div>

        <ServicesShowcase services={SERVICES} />
      </section>

      {/* TODO(content): credentials/proof section intentionally omitted,
          per the working agreement, I won't fabricate years-active,
          project counts, or client quotes. Flag me with the real content
          and I'll add this section. */}
    </>
  );
}
