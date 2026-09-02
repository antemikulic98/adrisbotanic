import { Container } from '../components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politika privatnosti | Adrisbotanic',
  description: 'Politika privatnosti web stranice Adrisbotanic.',
  alternates: { canonical: 'https://adrisbotanic.com/privatnost' },
};

export default function PrivatnostPage() {
  return (
    <main className='py-16 md:py-24'>
      <Container>
        <div className='max-w-3xl mx-auto space-y-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-neutral-900'>
            Politika privatnosti
          </h1>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              1. Koje podatke prikupljamo
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Kada nam se javite putem kontakt forme, prikupljamo podatke koje
              nam sami dostavite: ime, e-mail adresu, broj telefona i sadržaj
              poruke. Ne prikupljamo druge osobne podatke niti koristimo
              kolačiće za praćenje.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              2. Kako koristimo podatke
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Vaše podatke koristimo isključivo kako bismo odgovorili na vaš
              upit. Ne prosljeđujemo ih trećim stranama niti ih koristimo za
              marketinške svrhe bez vaše privole.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              3. Čuvanje podataka
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Poruke zaprimljene putem kontakt forme čuvamo onoliko dugo
              koliko je potrebno za obradu upita, nakon čega se brišu.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              4. Vaša prava
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              U skladu s Općom uredbom o zaštiti podataka (GDPR), imate pravo
              zatražiti uvid, ispravak ili brisanje svojih osobnih podataka.
              Za ostvarivanje svojih prava kontaktirajte nas.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>5. Kontakt</h2>
            <p className='text-neutral-600 leading-relaxed'>
              Voditelj obrade: Adrisbotanic, Cesta pape Ivana Pavla II. 380,
              Kaštel Štafilić. Za sva pitanja o privatnosti pišite na{' '}
              <a
                href='mailto:info@adrisbotanic.com'
                className='underline hover:no-underline'
                style={{ color: '#274223' }}
              >
                info@adrisbotanic.com
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
