import Link from "next/link";
import { Button } from "@/components/Button";
import { ArchitectProfile } from "@/components/ArchitectProfile";

// TODO(content): every field below marked TODO is placeholder and must be
// replaced with real photography, copy, and project data before launch.
// Nothing here should ship as-is.
//
// Images use Lorem Picsum (a placeholder-image service backed by Unsplash
// photos, licensed specifically for prototyping) — not copyrighted photos
// scraped from a search engine — purely so this section can be previewed
// with real photographic weight before actual project photography exists.
const FEATURED_PROJECTS = [
  { name: "TODO: Project name", meta: "TODO: m² — location — year", imageSeed: "archiverse-home-1" },
  { name: "TODO: Project name", meta: "TODO: m² — location — year", imageSeed: "archiverse-home-2" },
  { name: "TODO: Project name", meta: "TODO: m² — location — year", imageSeed: "archiverse-home-3" },
  { name: "TODO: Project name", meta: "TODO: m² — location — year", imageSeed: "archiverse-home-4" },
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
        <div className="grid grid-cols-1 gap-3xl lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h1 id="hero-heading" className="max-w-prose text-[40px] md:text-[64px]">
              Spații definite de lumină, proporție și scop.
            </h1>
            <p className="mt-lg max-w-prose text-[18px] text-charcoal">
              Servicii complete de arhitectură — de la concept la execuție.
            </p>
            <div className="mt-xl flex flex-wrap gap-lg">
              <Button href="/contact#booking" variant="primary">
                Book a consultation
              </Button>
              <Button href="/portfolio" variant="secondary">
                View portfolio
              </Button>
            </div>
          </div>

          <ArchitectProfile />
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
            <figure key={index} className="group">
              {/* TODO: swap for next/image with a real optimized file once
                  photography exists — plain <img> is fine for this
                  temporary, dynamically-seeded preview only. */}
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${project.imageSeed}/800/600`}
                  alt={`TODO: real, descriptive alt text for ${project.name} — what the space actually looks like`}
                  width={800}
                  height={600}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
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

      <section
        aria-labelledby="services-heading"
        className="px-lg py-4xl sm:px-2xl md:px-4xl"
      >
        <h2 id="services-heading" className="text-[32px]">
          What we do
        </h2>
        {/* Thin gold rule — the same signature detail used elsewhere,
            not a new color. */}
        <div className="mt-lg h-px w-16 bg-gold" aria-hidden="true" />

        <div className="mt-2xl grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-charcoal/15">
          {SERVICES.map((service, index) => (
            <Link
              key={service.title}
              href="/services"
              className="group block border-t border-charcoal/15 pt-lg transition-colors duration-200 hover:border-t-gold focus-visible:border-t-gold md:px-2xl md:first:pl-0 md:last:pr-0"
            >
              <span className="block font-mono text-[13px] text-charcoal/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-sm text-[24px] transition-colors duration-200 group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mt-sm text-charcoal">{service.blurb}</p>
              <span className="mt-lg inline-block text-[14px] text-navy transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TODO(content): credentials/proof section intentionally omitted —
          per the working agreement, I won't fabricate years-active,
          project counts, or client quotes. Flag me with the real content
          and I'll add this section. */}
    </>
  );
}
