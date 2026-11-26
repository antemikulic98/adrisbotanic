import { NextRequest, NextResponse } from 'next/server';
import {
  briksyCjenikUrl,
  cjenikRobe,
  cjenikRobeCsv,
  danasCjenika,
  ispravanDatumCjenika,
} from '@/app/lib/cjenik';

/**
 * Javni cjenik robe (CSV) — link „Cjenik (CSV)” u podnožju otvara tablicu koja čita ovu rutu.
 *
 * Cijene se vode u Briksyju. Briksy izdaje TAJNI link na CSV cjenik firme (Briksy → Tvrtke → Adris Botanic →
 * kartica „Cjenik za web” → „Kopiraj link”); taj se link upisuje u env varijablu BRIKSY_CJENIK_URL i nikad
 * ne ide u preglednik posjetitelja — ova ruta ga dohvaća SA SERVERA i posjetitelju daje samo cjenik robe.
 *
 * Briksy dopušta 100 dohvata u 15 min po IP adresi, pa se cjenik ovdje čuva 15 minuta: koliko god
 * posjetitelja kliknulo, prema Briksyju ide najviše jedan dohvat u 15 min.
 *
 * Cjenik je DNEVNI: Briksy svako jutro (07:00) sprema snimku cjenika. `/cjenik.csv` daje današnji,
 * `/cjenik.csv?datum=YYYY-MM-DD` cjenik tog dana (popis dana: /api/cjenik-datumi). Dan za koji snimka ne
 * postoji → 404. Prošli dani se više ne mijenjaju pa se čuvaju cijeli dan.
 *
 * BRIKSY_CJENIK_LOKACIJA (neobavezno): naziv lokacije cijena u Briksyju (npr. Split). Bez nje se uzima prva.
 * Oblik izlaza i stupci: app/lib/cjenik.ts.
 */
const CUVAJ_SEKUNDI = 15 * 60;
const CUVAJ_PROSLI_DAN_SEKUNDI = 24 * 60 * 60;
const BOM = '﻿'; // da Excel prepozna UTF-8 (č, ć, š, ž, đ)

const tekst = (poruka: string, status: number) =>
  new NextResponse(poruka, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const nedostupno = (razlog: string) => {
  console.error(`[cjenik] ${razlog}`);
  return tekst('Cjenik trenutno nije dostupan. Pokušajte ponovno kasnije.', 503);
};

const nemaZaDan = () => tekst('Za odabrani datum nema cjenika.', 404);

export async function GET(request: NextRequest) {
  const danas = danasCjenika();
  const trazeni = request.nextUrl.searchParams.get('datum');
  if (trazeni !== null && (!ispravanDatumCjenika(trazeni) || trazeni > danas)) return nemaZaDan();
  const datum = trazeni ?? danas;
  const prosliDan = datum < danas;

  const izvor = process.env.BRIKSY_CJENIK_URL;
  if (!izvor) return nedostupno('BRIKSY_CJENIK_URL nije postavljen');

  let briksyCsv: string;
  try {
    const res = await fetch(prosliDan ? briksyCjenikUrl(izvor, { datum }) : izvor, {
      next: { revalidate: prosliDan ? CUVAJ_PROSLI_DAN_SEKUNDI : CUVAJ_SEKUNDI },
      signal: AbortSignal.timeout(15000),
    });
    if (prosliDan && res.status === 404) return nemaZaDan();
    // status namjerno bez URL-a u logu — URL sadrži tajni ključ
    if (!res.ok) return nedostupno(`Briksy je vratio status ${res.status}`);
    // prošli dan mora doći iz snimke baš tog dana — nikad današnje cijene pod starim datumom
    if (prosliDan && res.headers.get('X-Cjenik-Datum') !== datum) return nemaZaDan();
    briksyCsv = await res.text();
  } catch (e) {
    return nedostupno(`dohvat nije uspio: ${e instanceof Error ? e.name : 'greška'}`);
  }

  // Briksy na grešku nikad ne vraća CSV; ako odgovor nije cjenik (ili je prazan), ne objavljuj ga
  const redci = cjenikRobe(briksyCsv, process.env.BRIKSY_CJENIK_LOKACIJA);
  if (!redci) return nedostupno('odgovor nije cjenik');
  if (redci.length === 0) return nedostupno('cjenik nema nijednog artikla s cijenom');

  return new NextResponse(BOM + cjenikRobeCsv(redci), {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="cjenik-adrisbotanic-${datum}.csv"`,
      'X-Cjenik-Datum': datum,
      'Cache-Control': 'public, max-age=300',
    },
  });
}
