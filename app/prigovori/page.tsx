import { Container } from '../components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pisani prigovor potrošača | Adrisbotanic',
  description:
    'Obavijest o načinu podnošenja pisanih prigovora potrošača — ADRIS BOTANIC d.o.o.',
  alternates: { canonical: 'https://adrisbotanic.com/prigovori' },
};

export default function PrigovoriPage() {
  return (
    <main className='py-16 md:py-24'>
      <Container>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='space-y-2'>
            <p className='text-sm font-semibold tracking-wide text-neutral-500'>
              ADRIS BOTANIC d.o.o.
            </p>
            <h1 className='text-3xl md:text-4xl font-bold text-neutral-900'>
              Obavijest o načinu podnošenja pisanih prigovora potrošača
            </h1>
          </div>

          <section className='space-y-4'>
            <p className='text-neutral-600 leading-relaxed'>
              Sukladno članku 10. Zakona o zaštiti potrošača (NN 19/22, 59/23
              i 59/26), obavještavamo potrošače da pisani prigovor mogu
              podnijeti:
            </p>
            <ul className='space-y-3 text-neutral-600 leading-relaxed list-disc pl-6'>
              <li>
                <strong className='text-neutral-900'>Osobno:</strong> u
                poslovnim prostorijama ADRIS BOTANIC d.o.o.
              </li>
              <li>
                <strong className='text-neutral-900'>Poštom na adresu:</strong>{' '}
                ADRIS BOTANIC d.o.o., Cesta pape Ivana Pavla II. 380, 21217
                Kaštel Štafilić
              </li>
              <li>
                <strong className='text-neutral-900'>
                  Elektroničkom poštom:
                </strong>{' '}
                <a
                  href='mailto:info@adrisbotanic.com'
                  className='underline hover:no-underline'
                  style={{ color: '#274223' }}
                >
                  info@adrisbotanic.com
                </a>
              </li>
            </ul>
          </section>

          <section className='space-y-4'>
            <p className='text-neutral-600 leading-relaxed'>
              Molimo potrošače da navedu svoje ime i prezime te adresu za
              dostavu odgovora.
            </p>
            <p className='text-neutral-600 leading-relaxed'>
              Primitak pisanog prigovora potvrdit ćemo bez odgađanja u pisanom
              obliku.
            </p>
            <p className='text-neutral-600 leading-relaxed'>
              Na pisani prigovor odgovorit ćemo u pisanom obliku najkasnije u
              roku od 15 dana od dana njegova zaprimanja, jasno navodeći
              prihvaćamo li osnovanost prigovora.
            </p>
            <p className='text-neutral-600 leading-relaxed'>
              Evidenciju pisanih prigovora vodimo i čuvamo na trajnom mediju
              godinu dana od dana primitka prigovora.
            </p>
          </section>

          <p className='font-semibold text-neutral-900'>ADRIS BOTANIC d.o.o.</p>
        </div>
      </Container>
    </main>
  );
}
