import { Button } from "@/components/Button";

// TODO(content): every field below marked TODO is placeholder and must be
// replaced with real photography, copy, and project data before launch.
// Nothing here should ship as-is.
const FEATURED_PROJECTS = [
  { name: "TODO: Project name", meta: "TODO: m² — location — year" },
  { name: "TODO: Project name", meta: "TODO: m² — location — year" },
  { name: "TODO: Project name", meta: "TODO: m² — location — year" },
];

const SERVICES = [
  {
    title: "Design",
    blurb: "TODO: one sentence describing the design offering.",
  },
  {
    title: "Build",
    blurb: "TODO: one sentence describing the build offering.",
  },
  {
    title: "Consulting",
    blurb: "TODO: one sentence describing the consulting offering.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="px-lg py-4xl sm:px-2xl md:px-4xl md:py-5xl"
      >
        <h1 id="hero-heading" className="max-w-prose text-[40px] md:text-[64px]">
          TODO: one confident sentence about the studio&apos;s approach.
        </h1>
        <p className="mt-lg max-w-prose text-[18px] text-charcoal">
          TODO: one supporting line — what kind of work, for whom.
        </p>
        <div className="mt-xl flex flex-wrap gap-lg">
          <Button href="/contact#booking" variant="primary">
            Book a consultation
          </Button>
          <Button href="/portfolio" variant="secondary">
            View portfolio
          </Button>
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
              {/* TODO(content): replace with a real, optimized photograph
                  (next/image) and descriptive alt text once photography
                  is available. This placeholder is intentionally visible
                  as a placeholder, not silently blank. */}
              <div
                role="img"
                aria-label="Placeholder — project photograph not yet added"
                className="flex aspect-[4/3] items-center justify-center border border-charcoal/20 bg-charcoal/5 text-[14px] text-charcoal/60"
              >
                Image placeholder
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

      <section
        aria-labelledby="services-heading"
        className="px-lg py-4xl sm:px-2xl md:px-4xl"
      >
        <h2 id="services-heading" className="text-[32px]">
          What we do
        </h2>
        <div className="mt-2xl grid grid-cols-1 gap-2xl md:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title}>
              <h3 className="text-[24px]">{service.title}</h3>
              <p className="mt-sm text-charcoal">{service.blurb}</p>
            </article>
          ))}
        </div>
        <Button href="/services" variant="secondary" className="mt-2xl">
          Explore services
        </Button>
      </section>

      {/* TODO(content): credentials/proof section intentionally omitted —
          per the working agreement, I won't fabricate years-active,
          project counts, or client quotes. Flag me with the real content
          and I'll add this section. */}
    </>
  );
}
