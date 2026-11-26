/**
 * Cjenik robe — čiste funkcije (bez dohvata), dijele ih ruta /cjenik.csv i tablica u podnožju.
 *
 * Izvor je CSV iz Briksyja (razdjelnik `;`, tekst u navodnicima, decimalna točka):
 *   lokacija; sifra; naziv; barkod; kategorija; grupa; jedinica_mjere; pdv_stopa;
 *   prodajna_cijena; sidrena_cijena; prodajna_cijena_s_pdv; sidrena_cijena_s_pdv
 * Objavljuje se u obliku „Cjenik robe” (stupci ispod). Cijene su maloprodajne (s PDV-om).
 */
export const CJENIK_STUPCI = [
  'ŠifraRobe',
  'NazivRobe',
  'OpisRobe',
  'JedinicaMjere',
  'CijenaZaOsnovnuJedinicuMjere',
  'ProdajnaCijena',
  'PosebniUvjetiProdaje',
  'SidrenaCijena',
  'BarCode',
  'Dostupno',
] as const;

/** CSV → redci polja. Podržava navodnike, `""` unutar polja i novi red unutar navodnika. */
export function parsirajCsv(tekst: string, razdjelnik = ';'): string[][] {
  const redci: string[][] = [];
  let polje = '';
  let redak: string[] = [];
  let uNavodnicima = false;
  const t = tekst.replace(/^﻿/, '');
  for (let i = 0; i < t.length; i++) {
    const z = t[i];
    if (uNavodnicima) {
      if (z === '"') {
        if (t[i + 1] === '"') {
          polje += '"';
          i++;
        } else uNavodnicima = false;
      } else polje += z;
    } else if (z === '"') uNavodnicima = true;
    else if (z === razdjelnik) {
      redak.push(polje);
      polje = '';
    } else if (z === '\n' || z === '\r') {
      if (z === '\r' && t[i + 1] === '\n') i++;
      redak.push(polje);
      polje = '';
      if (redak.some((p) => p !== '')) redci.push(redak);
      redak = [];
    } else polje += z;
  }
  redak.push(polje);
  if (redak.some((p) => p !== '')) redci.push(redak);
  return redci;
}

/** Briksy u tekst koji počinje s = + - @ stavlja apostrof (zaštita za Excel) — za prikaz ga mičemo. */
const bezApostrofa = (s: string) => (/^'[=+\-@]/.test(s) ? s.slice(1) : s);

/**
 * Briksy CSV → redci cjenika robe. Uzima jednu lokaciju cijena (`lokacija`; bez nje prvu u datoteci) i samo
 * artikle koji imaju prodajnu cijenu. Vraća null ako datoteka nije Briksy cjenik.
 */
export function cjenikRobe(briksyCsv: string, lokacija?: string): string[][] | null {
  const svi = parsirajCsv(briksyCsv);
  const zaglavlje = svi[0];
  if (!zaglavlje) return null;
  const st = (ime: string) => zaglavlje.indexOf(ime);
  const i = {
    lokacija: st('lokacija'),
    sifra: st('sifra'),
    naziv: st('naziv'),
    barkod: st('barkod'),
    jm: st('jedinica_mjere'),
    prodajna: st('prodajna_cijena_s_pdv'),
    sidrena: st('sidrena_cijena_s_pdv'),
  };
  if (Object.values(i).some((x) => x < 0)) return null;

  const podaci = svi.slice(1);
  const trazena = (lokacija ?? '').trim().toLowerCase();
  const odabrana = trazena
    ? trazena
    : (podaci[0]?.[i.lokacija] ?? '').trim().toLowerCase();

  return podaci
    .filter((r) => (r[i.lokacija] ?? '').trim().toLowerCase() === odabrana && r[i.prodajna])
    .map((r) => [
      bezApostrofa(r[i.sifra] ?? ''),
      bezApostrofa(r[i.naziv] ?? ''),
      '', // OpisRobe
      r[i.jm] ?? '',
      '', // CijenaZaOsnovnuJedinicuMjere
      r[i.prodajna] ?? '',
      '', // PosebniUvjetiProdaje
      r[i.sidrena] ?? '',
      r[i.barkod] ?? '',
      'Da',
    ]);
}

const polje = (v: string) => {
  // tekst koji bi Excel izvršio kao formulu dobiva apostrof; navodnici kad polje sadrži ; " ili novi red
  const s = /^[=+\-@\t\r]/.test(v) && !/^-?\d+([.,]\d+)?$/.test(v) ? `'${v}` : v;
  return /[;"\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** Redci cjenika robe → CSV (`;`, CRLF, zaglavlje u prvom retku). */
export function cjenikRobeCsv(redci: string[][]): string {
  return [CJENIK_STUPCI.join(';'), ...redci.map((r) => r.map(polje).join(';'))].join('\r\n') + '\r\n';
}

/** Današnji dan u Hrvatskoj, 'YYYY-MM-DD' — dan na koji se odnosi cjenik bez zadanog datuma. */
export const danasCjenika = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Zagreb' });

/** Strogo 'YYYY-MM-DD' i stvaran kalendarski dan. */
export function ispravanDatumCjenika(v: string | null | undefined): v is string {
  if (!v || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  const d = new Date(`${v}T00:00:00Z`);
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v;
}

/** Tajni Briksy link + upit (`datum=…` ili `popis=datumi`). Link nikad ne ide u preglednik ni u log. */
export function briksyCjenikUrl(izvor: string, upit?: Record<string, string>): string {
  const u = new URL(izvor);
  for (const [k, v] of Object.entries(upit ?? {})) u.searchParams.set(k, v);
  return u.toString();
}
