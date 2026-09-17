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
// normal document rate. On every scroll frame we measure which title row
// is geometrically closest to the vertical center of the screen and mark
// that one "active" — highlighted, full opacity, paired with its own
// background photo. Because this is a direct position measurement (not an
// event that can be skipped between frames on a fast scroll/flick), it
// can't miss the middle item the way a narrow IntersectionObserver band
// could — and it naturally switches right at the midpoint between two
// adjacent titles, which is exactly where you'd expect the handoff to
// happen.
//
// This gives the same visual read as true scroll-jacking (the Kin-style
// reference) without actually hijacking scroll: the page still scrolls
// natively, so it stays usable with a trackpad, touch, keyboard (Tab), and
// screen readers, and it respects prefers-reduced-motion via the
// motion-safe: variants below (Tailwind's built-in reduced-motion variant,
// no extra dependency).
//
// ROW_HEIGHT_VH controls how much scroll it takes to move from one title
// to the next — intentionally much shorter than a full viewport (100vh),
// while still leaving the section taller than the viewport so the sticky
// background has room to stay pinned on every screen size.
const ROW_HEIGHT_VH = 40;

export function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame: number | null = null;

    const updateActive = () => {
      frame = null;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex
      );
    };

    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [services.length]);

  const scrollToRow = (index: number) => {
    const row = rowRefs.current[index];
    if (!row) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    row.scrollIntoView({
      block: "center",
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className="relative"
      style={{ height: `${services.length * ROW_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background photos + overlay. Purely decorative — the title
            text already conveys the information — so this layer is
            hidden from assistive tech. */}
        <div aria-hidden="true">
          {services.map((service, index) => (
            <img
              key={service.title}
              src={service.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-navy/75" />
        </div>

        {/* Progress dots: a real, keyboard-and-screen-reader-usable
            control (not decorative), so it lives outside the
            aria-hidden image layer above. Clicking one scrolls straight
            to that title. */}
        <div
          role="tablist"
          aria-label="Sari la un serviciu"
          className="absolute right-lg top-1/2 z-20 flex -translate-y-1/2 flex-col gap-md sm:right-2xl md:right-4xl"
        >
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={service.title}
              onClick={() => scrollToRow(index)}
              className={`h-[10px] w-[10px] rounded-full border border-cream/60 transition-colors motion-safe:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                index === activeIndex ? "border-gold bg-gold" : "bg-transparent"
              }`}
            />
          ))}
        </div>
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
            className="flex items-center px-lg sm:px-2xl md:px-4xl"
            style={{ height: `${ROW_HEIGHT_VH}vh` }}
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
                  className={`text-[40px] transition-colors motion-safe:duration-300 md:text-[64px] ${
                    index === activeIndex ? "text-gold" : "text-cream/60"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className={`max-w-prose pl-[52px] text-cream transition-opacity motion-safe:duration-300 md:pl-[76px] ${
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
