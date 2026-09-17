"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Service = {
  title: string;
  blurb: string;
  image: string;
};

type ServicesShowcaseProps = {
  services: Service[];
};

// Scroll-driven showcase: a background image stays pinned in the viewport
// (position: sticky) while the list of titles scrolls past it at the
// normal document rate. An IntersectionObserver watches which title row is
// crossing a thin band at the vertical center of the screen and marks that
// one "active" — highlighted, full opacity, paired with its own
// background photo.
//
// This gives the same visual read as true scroll-jacking (the Kin-style
// reference) without actually hijacking scroll: the page still scrolls
// natively, so it stays usable with a trackpad, touch, keyboard (Tab), and
// screen readers, and it respects prefers-reduced-motion via the
// motion-safe: variants below (Tailwind's built-in reduced-motion variant,
// no extra dependency).
export function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      // Shrinks the observation root to a thin horizontal strip at the
      // vertical center of the viewport, so a row is only reported as
      // "intersecting" while it's crossing that center line.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    const rows = rowRefs.current;
    rows.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, [services.length]);

  return (
    <div
      className="relative"
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Pinned background layer. Purely decorative — the title text
          already conveys the information — so it's hidden from
          assistive tech. */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        aria-hidden="true"
      >
        {services.map((service, index) => (
          <img
            key={service.title}
            src={service.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Title list, absolutely positioned over the full scroll range so
          it moves with the page while the pinned background behind it
          stays put. */}
      <div className="absolute inset-0 flex flex-col">
        {services.map((service, index) => (
          <div
            key={service.title}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            data-index={index}
            className="flex h-screen items-center px-lg sm:px-2xl md:px-4xl"
          >
            <Link
              href="/services"
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="group flex flex-col gap-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold"
            >
              <div className="flex items-baseline gap-lg">
                <span className="font-mono text-[13px] text-cream/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`text-[40px] transition-colors motion-safe:duration-500 md:text-[64px] ${
                    index === activeIndex ? "text-gold" : "text-cream/60"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className={`max-w-prose pl-[52px] text-cream transition-opacity motion-safe:duration-500 md:pl-[76px] ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.blurb}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
