// Google Tag Manager + Google Analytics — učitavaju se ISKLJUČIVO nakon privole
// (app/components/ui/CookieConsent.tsx). Bez privole se ne šalje nijedan zahtjev Googleu.
import type { ConsentChoice } from './consent';

const GTM_ID = 'GTM-TWJHWD5G';
const GA_ID = 'G-S73QEY6Y0Q';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let consentInitialized = false;
let gaLoaded = false;
let gtmLoaded = false;

// gtag mora u dataLayer gurnuti baš `arguments` objekt (ne polje) da ga Google prepozna.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer!.push(arguments);
}

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Primjenjuje odabir: postavlja Consent Mode v2 signale i učitava dopuštene skripte. */
export function applyConsent(choice: ConsentChoice) {
  const anyGranted = choice.analytics || choice.marketing;
  if (!anyGranted && !consentInitialized) return; // ništa nije dopušteno — ništa se ne učitava

  window.dataLayer = window.dataLayer || [];
  const g = (ok: boolean) => (ok ? 'granted' : 'denied');
  const state = {
    analytics_storage: g(choice.analytics),
    ad_storage: g(choice.marketing),
    ad_user_data: g(choice.marketing),
    ad_personalization: g(choice.marketing),
  };
  gtag('consent', consentInitialized ? 'update' : 'default', state);
  consentInitialized = true;

  if (choice.analytics && !gaLoaded) {
    gaLoaded = true;
    gtag('js', new Date());
    gtag('config', GA_ID);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }

  if (anyGranted && !gtmLoaded) {
    gtmLoaded = true;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  }
}

/** Briše Googleove kolačiće onih kategorija za koje nema privole. */
export function clearTrackingCookies(choice: ConsentChoice) {
  const zaBrisanje: RegExp[] = [];
  if (!choice.analytics) zaBrisanje.push(/^(_ga|_gid|_gat)/);
  if (!choice.marketing) zaBrisanje.push(/^(_gcl|_gac)/);
  if (zaBrisanje.length === 0) return;

  const host = location.hostname;
  const parts = host.split('.');
  const domains = ['', host, `.${host}`];
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join('.')}`);

  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!zaBrisanje.some((re) => re.test(name))) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}
