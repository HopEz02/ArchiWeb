"use client";

import Script from "next/script";

// Public identifiers, not secrets — safe to expose in the browser bundle.
// They only say *which* Cal.com calendar to render, not how to access it.
const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME;
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG;

export function CalBooking() {
  if (!CAL_USERNAME || !CAL_EVENT_SLUG) {
    return (
      <p role="status" className="border border-charcoal/20 bg-charcoal/5 p-lg text-charcoal">
        Booking calendar not yet configured. Set{" "}
        <code>NEXT_PUBLIC_CAL_USERNAME</code> and{" "}
        <code>NEXT_PUBLIC_CAL_EVENT_SLUG</code> in your environment once your
        Cal.com account is set up.
      </p>
    );
  }

  const calLink = `${CAL_USERNAME}/${CAL_EVENT_SLUG}`;

  return (
    <div>
      {/* Fixed min-height reserves space before the iframe loads, to avoid
          layout shift (CLS) as the calendar renders in. */}
      <div
        id="cal-booking-embed"
        style={{ minHeight: 600 }}
        aria-label="Consultation booking calendar"
      />

      <noscript>
        <p>
          JavaScript is required for the interactive calendar. You can book
          directly at{" "}
          <a href={`https://cal.com/${calLink}`}>cal.com/{calLink}</a>.
        </p>
      </noscript>

      {/* Official Cal.com vanilla-JS embed loader. Trusted, developer-authored
          script — not user input — so inline execution here is standard
          practice for third-party embed snippets in Next.js. */}
      <Script id="cal-embed-init" strategy="afterInteractive">
        {`
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === "string") {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else {
                  p(cal, ar);
                }
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");

          Cal("init", "consultation", { origin: "https://cal.com" });

          Cal.ns.consultation("inline", {
            elementOrSelector: "#cal-booking-embed",
            calLink: "${calLink}",
            config: { layout: "month_view" },
          });

          Cal.ns.consultation("ui", {
            theme: "light",
            styles: { branding: { brandColor: "#101B30" } },
            hideEventTypeDetails: false,
          });
        `}
      </Script>
    </div>
  );
}
