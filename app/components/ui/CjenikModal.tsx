'use client';

import { useEffect, useState } from 'react';
import { Download, Loader2, X } from 'lucide-react';
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
            <label className='flex flex-col gap-1 text-xs text-neutral-600'>
              {t.priceList.date}
              <select
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                className='rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 tabular-nums'
              >
                {datumi.map((d) => (
                  <option key={d} value={d}>
                    {hrDatum(d)}
                  </option>
                ))}
              </select>
            </label>
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
