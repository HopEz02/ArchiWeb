"use client";

import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookieConsent";

// GDPR requires withdrawing consent to be as easy as giving it — this is
// that control. It clears the stored choice and tells the (already
// mounted) Analytics component to show the banner again, no page reload
// needed.
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
        window.dispatchEvent(new Event("cookie-consent-reset"));
      }}
      className="text-[13px] text-cream/60 underline underline-offset-2 hover:text-cream focus-visible:text-cream"
    >
      Setări cookie-uri
    </button>
  );
}
