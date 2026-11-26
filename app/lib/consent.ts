// Privola za kolačiće: odabir se čuva u localStorage (nužno za rad bannera, ne traži privolu).

export const CONSENT_KEY = 'adrisbotanic-cookie-consent';
export const OPEN_SETTINGS_EVENT = 'adrisbotanic:open-cookie-settings';

// Povećati kad se promijene kategorije/svrhe — posjetitelje se tada ponovno pita.
const VERSION = 1;
// Privola se ponovno traži nakon 12 mjeseci.
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (p?.v !== VERSION || typeof p.ts !== 'number') return null;
    if (Date.now() - p.ts > MAX_AGE_MS) return null;
    return { analytics: p.analytics === true, marketing: p.marketing === true };
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ v: VERSION, ts: Date.now(), ...choice }),
    );
  } catch {
    // localStorage nedostupan (npr. privatni način) — odabir vrijedi samo za ovaj prikaz
  }
}

/** Otvara postavke kolačića (link u podnožju, gumb u politici privatnosti). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
