import { NextResponse } from 'next/server';
import { cjenikRobe, cjenikRobeCsv } from '@/app/lib/cjenik';

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
 * BRIKSY_CJENIK_LOKACIJA (neobavezno): naziv lokacije cijena u Briksyju (npr. Split). Bez nje se uzima prva.
 * Oblik izlaza i stupci: app/lib/cjenik.ts.
 */
const CUVAJ_SEKUNDI = 15 * 60;
const BOM = '﻿'; // da Excel prepozna UTF-8 (č, ć, š, ž, đ)

const nedostupno = (razlog: string) => {
  console.error(`[cjenik] ${razlog}`);
  return new NextResponse('Cjenik trenutno nije dostupan. Pokušajte ponovno kasnije.', {
    status: 503,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
};

export async function GET() {
  const izvor = process.env.BRIKSY_CJENIK_URL;
  if (!izvor) return nedostupno('BRIKSY_CJENIK_URL nije postavljen');

  let briksyCsv: string;
  try {
    const res = await fetch(izvor, {
      next: { revalidate: CUVAJ_SEKUNDI },
      signal: AbortSignal.timeout(15000),
    });
    // status namjerno bez URL-a u logu — URL sadrži tajni ključ
    if (!res.ok) return nedostupno(`Briksy je vratio status ${res.status}`);
    briksyCsv = await res.text();
  } catch (e) {
    return nedostupno(`dohvat nije uspio: ${e instanceof Error ? e.name : 'greška'}`);
  }

  // Briksy na grešku nikad ne vraća CSV; ako odgovor nije cjenik (ili je prazan), ne objavljuj ga
  const redci = cjenikRobe(briksyCsv, process.env.BRIKSY_CJENIK_LOKACIJA);
  if (!redci) return nedostupno('odgovor nije cjenik');
  if (redci.length === 0) return nedostupno('cjenik nema nijednog artikla s cijenom');

  const datum = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Zagreb' }); // YYYY-MM-DD
  return new NextResponse(BOM + cjenikRobeCsv(redci), {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="cjenik-adrisbotanic-${datum}.csv"`,
      'Cache-Control': 'public, max-age=300',
    },
  });
}
