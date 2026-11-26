import { NextResponse } from 'next/server';
import { briksyCjenikUrl, danasCjenika, ispravanDatumCjenika } from '@/app/lib/cjenik';

/**
 * Dani za koje postoji cjenik (najnoviji prvi) — puni izbornik „Datum” u tablici cjenika.
 * Briksy svako jutro (07:00) sprema snimku cjenika; popis daje isti tajni link uz `?popis=datumi`.
 * Današnji dan je uvijek u popisu. Ako Briksy popis ne vrati, nudi se samo današnji cjenik.
 */
const CUVAJ_SEKUNDI = 15 * 60;

export async function GET() {
  const danas = danasCjenika();
  let datumi: string[] = [];
  const izvor = process.env.BRIKSY_CJENIK_URL;
  if (izvor) {
    try {
      const res = await fetch(briksyCjenikUrl(izvor, { popis: 'datumi' }), {
        next: { revalidate: CUVAJ_SEKUNDI },
        signal: AbortSignal.timeout(15000),
      });
      if (res.ok && (res.headers.get('Content-Type') ?? '').includes('json')) {
        const tijelo: unknown = await res.json();
        const popis = (tijelo as { datumi?: unknown } | null)?.datumi;
        if (Array.isArray(popis)) {
          datumi = popis.filter((d): d is string => ispravanDatumCjenika(d) && d <= danas);
        }
      } else if (!res.ok) console.error(`[cjenik] popis datuma: Briksy je vratio status ${res.status}`);
    } catch (e) {
      console.error(`[cjenik] popis datuma nije dohvaćen: ${e instanceof Error ? e.name : 'greška'}`);
    }
  }
  if (!datumi.includes(danas)) datumi.unshift(danas);
  return NextResponse.json({ datumi }, { headers: { 'Cache-Control': 'public, max-age=300' } });
}
