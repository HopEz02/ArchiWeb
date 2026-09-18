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

// ROW_HEIGHT_VH is how much scroll it takes to move from one title to the
// next (kept short and snappy per an earlier round of feedback).
//
// The section's total height is deliberately NOT just
// services.length * ROW_HEIGHT_VH. It's built as:
//   100vh                              (one full screen, so the pinned
//                                        background has room to hold)
//   + (services.length - 1) * ROW_HEIGHT_VH   (one "step" of scroll
//                                        between each pair of consecutive
//                                        titles)
// with matching padding of (100vh - ROW_HEIGHT_VH) / 2 above the first
// title, so the FIRST title starts out already centered on screen (not
// half cut off at the top) and the LAST title finishes centered exactly
// when the pinned range runs out.
//
// Without this, the sticky background used to let go early — while you
// were still on the first or last title — and the whole page would start
// scrolling underneath it instead of just the three titles moving.
const ROW_HEIGHT_VH = 60;

export function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const paddingVh = (100 - ROW_HEIGHT_VH) / 2;
  const wrapperHeightVh = 100 + (services.length - 1) * ROW_HEIGHT_VH;

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
    <div className="relative" style={{ height: `${wrapperHeightVh}vh` }}>
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
            to that title.
            The BUTTON is the tap/click target and is kept at a fixed
            24x24px hit area (meets WCAG 2.2 2.5.8 minimum target size)
            regardless of state. The visual dot is a smaller inner <span>
            so it can shrink for the unselected state without shrinking
            the actual clickable area. */}
        <div
          role="tablist"
          aria-label="Sari la un serviciu"
          className="absolute right-lg top-1/2 z-20 flex -translate-y-1/2 flex-col gap-lg sm:right-2xl md:right-4xl"
        >
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={service.title}
              onClick={() => scrollToRow(index)}
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span
                aria-hidden="true"
                className={`rounded-full border-2 transition-all motion-safe:duration-300 ${
                  index === activeIndex
                    ? "h-[14px] w-[14px] border-gold bg-gold"
                    : "h-[8px] w-[8px] border-cream/70 bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Title list, absolutely positioned over the full scroll range so
          it moves with the page while the pinned background behind it
          stays put. The leading spacer centers the first title on
          mount instead of starting it half off-screen. */}
      <div className="absolute inset-0 flex flex-col">
        <div style={{ height: `${paddingVh}vh` }} aria-hidden="true" />
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
