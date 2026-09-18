// Shared between the consent banner (components/Analytics.tsx) and the
// "change your mind" control (components/CookieSettingsButton.tsx) so
// they always agree on the storage key and the value shape.
export const COOKIE_CONSENT_STORAGE_KEY = "archiverse-cookie-consent";

export type CookieConsent = "granted" | "denied";

export function isCookieConsent(value: string | null): value is CookieConsent {
  return value === "granted" || value === "denied";
}
