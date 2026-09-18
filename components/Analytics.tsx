"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  isCookieConsent,
  type CookieConsent,
} from "@/lib/cookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (isCookieConsent(stored)) {
      setConsent(stored);
    }
    setHydrated(true);

    const onConsentReset = () => setConsent(null);
    window.addEventListener("cookie-consent-reset", onConsentReset);
    return () =>
      window.removeEventListener("cookie-consent-reset", onConsentReset);
  }, []);

  const choose = (value: CookieConsent) => {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    setConsent(value);
  };

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {hydrated && consent === null && (
        <div
          role="dialog"
          aria-label="Consimtamant cookie-uri"
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col gap-lg border-t border-cream/20 bg-navy px-lg py-lg text-cream sm:flex-row sm:items-center sm:justify-between sm:px-2xl md:px-4xl"
        >
          <p className="max-w-prose text-[14px] text-cream/80">
            Folosim cookie-uri de analiza pentru a intelege cum este folosit
            site-ul. Le activam doar cu acordul dumneavoastra. Detalii in{" "}
            <a
              href="/politica-de-cookie"
              className="underline underline-offset-2 hover:text-cream"
            >
              Politica de cookie-uri
            </a>
            .
          </p>
          <div className="flex shrink-0 gap-md">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="text-[14px] text-cream/80 underline underline-offset-2 hover:text-cream focus-visible:text-cream"
            >
              Refuz
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="bg-gold px-lg py-sm text-[14px] text-navy hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
