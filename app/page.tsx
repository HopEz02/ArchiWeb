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

// Same Unsplash-licensed photo used for the "Design" showcase above,
// reused here purely as a placeholder for the hero's decorative fading
// photo (layout weight only). Swap for real project photography before
// launch — see FEATURED_PROJECTS note above re: licensing.
const HERO_FADE_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden px-lg py-4xl sm:px-2xl md:px-4xl md:py-5xl"
      >
        {/* Decorative fading photograph anchored to the right edge of the
            hero. Purely atmospheric — carries no information — so it's
            aria-hidden and non-interactive, and hidden below lg so it
            never competes with the heading/buttons on small screens. The
            CSS mask fades it to fully transparent well before it reaches
            the architect card's text, so text contrast isn't affected. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] lg:block"
          style={{
            maskImage: "linear-gradient(to left, black 15%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 15%, transparent 75%)",
          }}
        >
          <img
            src={HERO_FADE_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        {/* Capped at max-w-content (1200px) and centered so the hero row
            reads as one composed unit even on very wide screens. relative
            z-10 keeps it above the fading photo layer. */}
        <div className="relative z-10 mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-3xl lg:grid-cols-2 lg:items-center lg:gap-4xl">
            <div>
              <h1 id="hero-heading" className="max-w-prose text-[40px] md:text-[64px]">
                Spații definite de lumină, proporție și scop.
              </h1>
              <p className="mt-lg max-w-prose text-[18px] text-charcoal">
                Servicii complete de arhitectură: de la concept la execuție.
              </p>
            </div>

            <ArchitectProfile />
          </div>

          {/* Buttons live in their own row below both columns (heading
              and architect card), horizontally centered across the full
              hero width, rather than tucked under the heading — a
              deliberate third row, not part of either column. The two
              Buttons sit directly against each other (no gap) with
              radius only on their outer edge, so they read as one
              combined block rather than two separate buttons. */}
          <div className="mt-2xl flex justify-center lg:mt-3xl">
            <div className="inline-flex flex-wrap">
              <Button href="/contact#booking" variant="primary" radius="left">
                Book a consultation
              </Button>
              <Button href="/portfolio" variant="secondary" radius="right">
                View portfolio
              </Button>
            </div>
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
