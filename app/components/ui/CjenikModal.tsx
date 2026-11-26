'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, Download, Loader2, X } from 'lucide-react';
import { useTranslations } from '@/app/i18n';
import { useModalBehavior } from '@/app/lib/useModalBehavior';
import { danasCjenika, ispravanDatumCjenika, parsirajCsv } from '@/app/lib/cjenik';

interface CjenikModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Brojčani stupci (cijene) — poravnati desno, tabularne znamenke
const BROJCANI = new Set(['CijenaZaOsnovnuJedinicuMjere', 'ProdajnaCijena', 'SidrenaCijena']);

/** Cjenik za dan: današnji bez parametra (isti URL kao poveznica u podnožju), prošli uz ?datum=. */
const putanja = (datum: string) =>
  datum === danasCjenika() ? '/cjenik.csv' : `/cjenik.csv?datum=${datum}`;

/** YYYY-MM-DD → 26.11.2026. */
const hrDatum = (iso: string) => {
  const [g, m, d] = iso.split('-');
  return `${d}.${m}.${g}.`;
};

interface DatumIzbornikProps {
  oznaka: string;
  datumi: string[];
  datum: string;
  onOdabir: (datum: string) => void;
}

/** Izbornik dana cjenika (vlastiti popis umjesto sistemskog <select>): miš, strelice, Enter, Escape. */
const DatumIzbornik: React.FC<DatumIzbornikProps> = ({ oznaka, datumi, datum, onOdabir }) => {
  const [otvoren, setOtvoren] = useState(false);
  const [aktivan, setAktivan] = useState(0);
  const okvir = useRef<HTMLDivElement>(null);
  const popis = useRef<HTMLUListElement>(null);
  const id = useId();

  const otvori = () => {
    setAktivan(Math.max(0, datumi.indexOf(datum)));
    setOtvoren(true);
  };
  const odaberi = (d: string) => {
    onOdabir(d);
    setOtvoren(false);
  };

  // klik izvan izbornika ga zatvara
  useEffect(() => {
    if (!otvoren) return;
    const izvan = (e: MouseEvent) => {
      if (!okvir.current?.contains(e.target as Node)) setOtvoren(false);
    };
    document.addEventListener('mousedown', izvan);
    return () => document.removeEventListener('mousedown', izvan);
  }, [otvoren]);

  // aktivna stavka ostaje vidljiva dok se lista strelicama
  useEffect(() => {
    if (otvoren) popis.current?.children[aktivan]?.scrollIntoView({ block: 'nearest' });
  }, [otvoren, aktivan]);

  const tipka = (e: React.KeyboardEvent) => {
    if (!otvoren) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        otvori();
      }
      return;
    }
    if (e.key === 'Escape') {
      // Escape zatvara samo izbornik, ne i cijeli prozor cjenika
      e.stopPropagation();
      setOtvoren(false);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const pomak = e.key === 'ArrowDown' ? 1 : -1;
      setAktivan((i) => Math.min(datumi.length - 1, Math.max(0, i + pomak)));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (datumi[aktivan]) odaberi(datumi[aktivan]);
    } else if (e.key === 'Tab') setOtvoren(false);
  };

  return (
    <div ref={okvir} className='relative flex flex-col gap-1' onKeyDown={tipka}>
      <span id={`${id}-oznaka`} className='text-xs text-neutral-600'>
        {oznaka}
      </span>
      <button
        type='button'
        role='combobox'
        aria-haspopup='listbox'
        aria-expanded={otvoren}
        aria-controls={`${id}-popis`}
        aria-labelledby={`${id}-oznaka`}
        aria-activedescendant={otvoren ? `${id}-${aktivan}` : undefined}
        onClick={() => (otvoren ? setOtvoren(false) : otvori())}
        className={`inline-flex items-center justify-between gap-3 min-w-[10.5rem] rounded-full border bg-white pl-4 pr-3 py-2 text-sm font-medium text-neutral-900 tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#274223]/30 ${
          otvoren ? 'border-[#274223]' : 'border-neutral-300 hover:border-neutral-400'
        }`}
      >
        {hrDatum(datum)}
        <ChevronDown
          className={`w-4 h-4 text-neutral-500 transition-transform ${otvoren ? 'rotate-180' : ''}`}
        />
      </button>
      {otvoren && (
        <ul
          ref={popis}
          id={`${id}-popis`}
          role='listbox'
          aria-labelledby={`${id}-oznaka`}
          className='absolute left-0 top-full mt-1.5 z-30 min-w-full max-h-64 overflow-auto rounded-2xl border border-neutral-200 bg-white p-1 shadow-xl'
        >
          {datumi.map((d, i) => (
            <li
              key={d}
              id={`${id}-${i}`}
              role='option'
              aria-selected={d === datum}
              onMouseEnter={() => setAktivan(i)}
              onClick={() => odaberi(d)}
              className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm tabular-nums cursor-pointer whitespace-nowrap ${
                i === aktivan ? 'bg-[#274223]/10' : ''
              } ${d === datum ? 'font-semibold text-[#274223]' : 'text-neutral-800'}`}
            >
              {hrDatum(d)}
              {d === datum && <Check className='w-4 h-4' />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/** Tablica „CSV Cjenik robe” iz podnožja — čita istu datoteku koju nudi za preuzimanje (/cjenik.csv). */
export const CjenikModal: React.FC<CjenikModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations();
  const [redci, setRedci] = useState<string[][] | null>(null);
  const [greska, setGreska] = useState(false);
  // dani za koje postoji cjenik (najnoviji prvi) i odabrani dan; '' = još nije učitano
  const [datumi, setDatumi] = useState<string[]>([]);
  const [datum, setDatum] = useState('');

  useModalBehavior(isOpen, onClose);

  // otvaranje: popis dana, odabran današnji
  useEffect(() => {
    if (!isOpen) return;
    let aktivno = true;
    const danas = danasCjenika();
    setDatumi([danas]);
    setDatum(danas);
    fetch('/api/cjenik-datumi')
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { datumi?: unknown } | null) => {
        if (!aktivno || !Array.isArray(j?.datumi)) return;
        const popis = j.datumi.filter((d): d is string => ispravanDatumCjenika(d));
        if (popis.length) setDatumi(popis.includes(danas) ? popis : [danas, ...popis]);
      })
      .catch(() => {});
    return () => {
      aktivno = false;
    };
  }, [isOpen]);

  // cjenik odabranog dana
  useEffect(() => {
    if (!isOpen || !datum) return;
    let aktivno = true;
    setGreska(false);
    setRedci(null);
    fetch(putanja(datum))
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((csv) => {
        if (!aktivno) return;
        const svi = parsirajCsv(csv);
        if (svi.length < 2) throw new Error('prazno');
        setRedci(svi);
      })
      .catch(() => aktivno && setGreska(true));
    return () => {
      aktivno = false;
    };
  }, [isOpen, datum]);

  if (!isOpen) return null;

  const zaglavlje = redci?.[0] ?? [];
  const podaci = redci?.slice(1) ?? [];
  const datoteka = `cjenik-adrisbotanic-${datum}.csv`;

  return (
    <div
      className='fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6'
      role='dialog'
      aria-modal='true'
      aria-label={t.priceList.title}
    >
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} />

      <div className='relative bg-white text-neutral-900 rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col'>
        <div className='flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-neutral-200'>
          <div className='min-w-0'>
            <h2 className='text-lg sm:text-xl font-semibold truncate'>{t.priceList.title}</h2>
            <p className='text-xs text-neutral-500 mt-0.5'>{t.priceList.daily}</p>
          </div>
          <div className='flex items-center gap-2 shrink-0'>
            <a
              href={datum ? putanja(datum) : '/cjenik.csv'}
              download
              className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#274223] text-white text-sm font-medium hover:opacity-90 transition-opacity'
            >
              <Download className='w-4 h-4' />
              <span className='hidden sm:inline'>{t.priceList.download}</span>
            </a>
            <button
              onClick={onClose}
              className='inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors'
            >
              <span className='hidden sm:inline'>{t.priceList.close}</span>
              <X className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* Dnevni cjenik: datum na koji se cjenik odnosi + naziv datoteke za taj dan */}
        {datum && (
          <div className='px-4 sm:px-6 py-3 border-b border-neutral-200 bg-neutral-50 flex flex-wrap items-end gap-x-6 gap-y-2'>
            <DatumIzbornik oznaka={t.priceList.date} datumi={datumi} datum={datum} onOdabir={setDatum} />
            <p className='text-xs sm:text-sm text-neutral-600 pb-2 min-w-0 break-all'>
              {datoteka} · {t.priceList.forDate}{' '}
              <span className='font-semibold text-neutral-900'>{hrDatum(datum)}</span>
              {redci && ` · ${podaci.length} ${t.priceList.items}`}
            </p>
          </div>
        )}

        <div className='flex-1 min-h-0 overflow-auto'>
          {greska ? (
            <p className='p-8 text-center text-sm text-neutral-600'>{t.priceList.unavailable}</p>
          ) : !redci ? (
            <div className='h-full flex items-center justify-center text-neutral-500'>
              <Loader2 className='w-6 h-6 animate-spin' />
            </div>
          ) : (
            <table className='w-full text-sm border-collapse'>
              <thead className='sticky top-0 bg-neutral-100 z-10'>
                <tr>
                  {zaglavlje.map((s) => (
                    <th
                      key={s}
                      className={`px-4 py-3 font-semibold whitespace-nowrap border-b border-neutral-200 ${
                        BROJCANI.has(s) ? 'text-right' : 'text-left'
                      }`}
                    >
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {podaci.map((r, i) => (
                  <tr key={i} className='border-b border-neutral-100 hover:bg-neutral-50'>
                    {zaglavlje.map((s, j) => (
                      <td
                        key={s}
                        className={`px-4 py-2.5 ${
                          BROJCANI.has(s)
                            ? 'text-right tabular-nums whitespace-nowrap'
                            : j === 1
                              ? 'min-w-[16rem]'
                              : 'whitespace-nowrap'
                        }`}
                      >
                        {r[j] ?? ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
