'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from '@/app/i18n';
import {
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from '@/app/lib/consent';
import { applyConsent, clearTrackingCookies } from '@/app/lib/googleTags';

const NISTA: ConsentChoice = { analytics: false, marketing: false };
const SVE: ConsentChoice = { analytics: true, marketing: true };

const Prekidac: React.FC<{
  ukljucen: boolean;
  onChange?: (v: boolean) => void;
  label: string;
}> = ({ ukljucen, onChange, label }) => (
  <button
    type='button'
    role='switch'
    aria-checked={ukljucen}
    aria-label={label}
    disabled={!onChange}
    onClick={() => onChange?.(!ukljucen)}
    className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
      ukljucen ? 'bg-[#274223]' : 'bg-neutral-300'
    } ${onChange ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
        ukljucen ? 'translate-x-5' : ''
      }`}
    />
  </button>
);

/**
 * Klasična traka za kolačiće uz dno stranice. „Prilagodi postavke” proširuje istu traku
 * s kategorijama (nužni / analitički / marketinški) — bez modala i bez blokiranja stranice.
 * Dok posjetitelj ne pristane, Google skripte se uopće ne učitavaju (app/lib/googleTags.ts).
 */
export const CookieConsent: React.FC = () => {
  const t = useTranslations();
  const c = t.cookies;
  const [spremljeno, setSpremljeno] = useState<ConsentChoice | null>(null);
  const [vidljivo, setVidljivo] = useState(false);
  const [prosireno, setProsireno] = useState(false);
  const [odabir, setOdabir] = useState<ConsentChoice>(NISTA);

  // Učitaj raniji odabir; ako ga nema, pokaži banner
  useEffect(() => {
    const postojece = readConsent();
    if (postojece) {
      setSpremljeno(postojece);
      setOdabir(postojece);
      // Počisti kolačiće kategorija bez privole (npr. zaostale nakon povlačenja)
      clearTrackingCookies(postojece);
      applyConsent(postojece);
    } else {
      setVidljivo(true);
    }
  }, []);

  // Link „Postavke kolačića” iz podnožja / politike privatnosti: otvara traku s kategorijama
  useEffect(() => {
    const otvori = () => {
      setOdabir(readConsent() ?? NISTA);
      setProsireno(true);
      setVidljivo(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, otvori);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, otvori);
  }, []);

  // Zatvaranje bez promjene moguće je samo ako je odabir već ranije spremljen
  const mozeZatvoriti = spremljeno !== null;
  const zatvori = () => {
    setVidljivo(false);
    setProsireno(false);
  };

  const spremi = (novo: ConsentChoice) => {
    const povuceno =
      (spremljeno?.analytics && !novo.analytics) ||
      (spremljeno?.marketing && !novo.marketing);

    writeConsent(novo);
    setSpremljeno(novo);
    setOdabir(novo);
    setVidljivo(false);
    setProsireno(false);

    if (povuceno) {
      // Privola povučena: javi Googleu, obriši kolačiće i ponovno učitaj stranicu bez skripti za praćenje
      applyConsent(novo);
      clearTrackingCookies(novo);
      window.location.reload();
      return;
    }
    applyConsent(novo);
  };

  const gumbPrimarni =
    'px-4 py-2.5 rounded-lg bg-[#274223] text-white text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity cursor-pointer';
  const gumbSekundarni =
    'px-4 py-2.5 rounded-lg border border-[#274223] text-[#274223] text-sm font-semibold whitespace-nowrap hover:bg-neutral-50 transition-colors cursor-pointer';

  if (!vidljivo) return null;

  const kategorije = [
    { naslov: c.necessaryTitle, opis: c.necessaryDesc, ukljucen: true, onChange: undefined },
    {
      naslov: c.analyticsTitle,
      opis: c.analyticsDesc,
      ukljucen: odabir.analytics,
      onChange: (v: boolean) => setOdabir((o) => ({ ...o, analytics: v })),
    },
    {
      naslov: c.marketingTitle,
      opis: c.marketingDesc,
      ukljucen: odabir.marketing,
      onChange: (v: boolean) => setOdabir((o) => ({ ...o, marketing: v })),
    },
  ];

  return (
    <div
      role='region'
      aria-label={c.title}
      className='fixed bottom-0 inset-x-0 z-[150] bg-white text-neutral-900 border-t border-neutral-200 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] max-h-[85vh] overflow-y-auto'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        {prosireno && (
          <div className='mb-4'>
            <div className='flex items-start justify-between gap-4 mb-3'>
              <h2 className='text-base font-bold'>{c.settingsTitle}</h2>
              {mozeZatvoriti && (
                <button
                  type='button'
                  onClick={zatvori}
                  aria-label={c.close}
                  className='-mt-1 -mr-1 p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer'
                >
                  <X className='w-5 h-5' />
                </button>
              )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              {kategorije.map((k) => (
                <div key={k.naslov} className='rounded-xl border border-neutral-200 p-3'>
                  <div className='flex items-center justify-between gap-3'>
                    <h3 className='text-sm font-semibold'>{k.naslov}</h3>
                    <div className='flex items-center gap-2'>
                      {!k.onChange && (
                        <span className='text-xs text-neutral-500'>{c.alwaysActive}</span>
                      )}
                      <Prekidac ukljucen={k.ukljucen} onChange={k.onChange} label={k.naslov} />
                    </div>
                  </div>
                  <p className='text-xs text-neutral-600 leading-relaxed mt-1.5'>{k.opis}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8'>
          <p className='flex-1 text-sm text-neutral-600 leading-relaxed'>
            {!prosireno && <strong className='text-neutral-900'>{c.title}. </strong>}
            {prosireno ? c.settingsIntro : c.text}{' '}
            <Link href='/privatnost' className='underline text-[#274223] whitespace-nowrap'>
              {c.privacyLink}
            </Link>
          </p>
          <div className='flex flex-wrap items-center gap-2 shrink-0'>
            {prosireno ? (
              <button type='button' className={`${gumbSekundarni} flex-1 sm:flex-none`} onClick={() => spremi(odabir)}>
                {c.save}
              </button>
            ) : (
              <button
                type='button'
                className='w-full sm:w-auto px-3 py-2 text-sm font-medium text-neutral-700 underline hover:no-underline whitespace-nowrap cursor-pointer'
                onClick={() => setProsireno(true)}
              >
                {c.customize}
              </button>
            )}
            <button type='button' className={`${gumbSekundarni} flex-1 sm:flex-none`} onClick={() => spremi(NISTA)}>
              {c.rejectAll}
            </button>
            <button type='button' className={`${gumbPrimarni} flex-1 sm:flex-none`} onClick={() => spremi(SVE)}>
              {c.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
