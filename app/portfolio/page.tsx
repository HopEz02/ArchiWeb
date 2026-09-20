import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "TODO: replace with final meta description for the Portfolio page.",
};

// TEMPORARY placeholder data — random names and Lorem Picsum stock photos,
// used only so we can preview the gallery layout before real photography
// and project names exist. Picsum is a placeholder-image service backed
// by Unsplash photos, licensed specifically for prototyping use — not a
// copyright risk like scraping arbitrary Google Images results would be.
// Every entry here MUST be replaced with a real project before launch.
interface PlaceholderProject {
  id: string;
  name: string;
  location: string;
  year: string;
  area: string;
  imageSeed: string;
  size: "large" | "medium" | "small";
}

const PLACEHOLDER_PROJECTS: PlaceholderProject[] = [
  { id: "1", name: "Cairn House", location: "Cluj-Napoca", year: "2023", area: "142 m²", imageSeed: "archiverse-1", size: "large" },
  { id: "2", name: "Casa Ulmului", location: "Brașov", year: "2022", area: "98 m²", imageSeed: "archiverse-2", size: "medium" },
  { id: "3", name: "Atelier Nord", location: "Timișoara", year: "2024", area: "210 m²", imageSeed: "archiverse-3", size: "medium" },
  { id: "4", name: "Vila Solaris", location: "Sibiu", year: "2021", area: "175 m²", imageSeed: "archiverse-4", size: "small" },
  { id: "5", name: "Curtea de Piatră", location: "Oradea", year: "2023", area: "130 m²", imageSeed: "archiverse-5", size: "large" },
];

function pictureUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export default function PortfolioPage() {
  return (
    <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
      <section aria-labelledby="portfolio-heading" className="mb-4xl">
        <h1 id="portfolio-heading" className="text-[40px] md:text-[48px]">
          Portfolio
        </h1>
        <p className="mt-lg max-w-prose text-[18px] text-charcoal">
          TODO: one line introducing the body of work.
        </p>
        {/* Visible flag so this preview is never mistaken for final content. */}
        <p className="mt-md inline-block bg-charcoal/10 px-md py-xs text-[13px] text-charcoal">
          Preview layout — placeholder names &amp; stock photos, not final projects.
        </p>
      </section>

      {/*
        Asymmetric editorial grid, inspired by the reference screenshots:
        two columns at every breakpoint (including mobile, per Denis's
        request — the single-column mobile layout read too much like an
        Instagram feed rather than the editorial gallery it is on
        desktop), alternating items offset downward, one "featured"
        project per few items spanning both columns. DOM order stays a
        plain top-to-bottom list — the staggering is purely visual
        (margin-top), so keyboard/screen-reader order matches this simple
        reading order regardless of where things land on screen.
      */}
      <div className="grid grid-cols-2 gap-lg sm:gap-2xl md:gap-5xl">
        {PLACEHOLDER_PROJECTS.map((project, index) => {
          const isFeatured = project.size === "large";
          const isStaggered = !isFeatured && index % 2 === 1;
          const dims = isFeatured ? { w: 900, h: 700 } : { w: 700, h: 560 };

          return (
            <figure
              key={project.id}
              className={[isFeatured ? "col-span-2" : "", isStaggered ? "mt-xl sm:mt-2xl md:mt-5xl" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {/* TODO: swap for next/image with a real optimized file once
                  photography exists — plain <img> is fine for this
                  temporary, dynamically-seeded preview only. */}
              <img
                src={pictureUrl(project.imageSeed, dims.w, dims.h)}
                alt={`TODO: real, descriptive alt text for ${project.name} — what the space actually looks like`}
                width={dims.w}
                height={dims.h}
                className="w-full rounded object-cover"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <figcaption className="mt-sm">
                <span className="block text-[16px] text-navy">{project.name}</span>
                <span className="block font-mono text-[13px] text-charcoal/70">
                  {project.area} — {project.location} — {project.year}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
