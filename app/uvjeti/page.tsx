import { Container } from '../components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uvjeti korištenja | Adrisbotanic',
  description: 'Uvjeti korištenja web stranice Adrisbotanic.',
  alternates: { canonical: 'https://adrisbotanic.com/uvjeti' },
};

export default function UvjetiPage() {
  return (
    <main className='py-16 md:py-24'>
      <Container>
        <div className='max-w-3xl mx-auto space-y-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-neutral-900'>
            Uvjeti korištenja
          </h1>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              1. Opće odredbe
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Korištenjem web stranice adrisbotanic.com prihvaćate ove uvjete
              korištenja. Stranicom upravlja Adrisbotanic, Cesta pape Ivana
              Pavla II. 380, Kaštel Štafilić.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              2. Sadržaj i informacije
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Informacije o biljkama, dostupnosti i cijenama na ovoj stranici
              informativnog su karaktera i ne predstavljaju obvezujuću ponudu.
              Za točnu dostupnost i cijene kontaktirajte nas telefonom ili
              putem kontakt forme. Zadržavamo pravo izmjene sadržaja bez
              prethodne najave.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              3. Intelektualno vlasništvo
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Sav sadržaj na ovoj stranici (tekstovi, fotografije, logotip)
              vlasništvo je Adrisbotanica i ne smije se koristiti bez
              prethodnog pisanog odobrenja.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>
              4. Odgovornost
            </h2>
            <p className='text-neutral-600 leading-relaxed'>
              Adrisbotanic ne odgovara za štetu nastalu korištenjem ove
              stranice ili nemogućnošću njezina korištenja, u mjeri dopuštenoj
              važećim propisima.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-xl font-bold text-neutral-900'>5. Kontakt</h2>
            <p className='text-neutral-600 leading-relaxed'>
              Za sva pitanja o ovim uvjetima obratite nam se na{' '}
              <a
                href='mailto:info@adrisbotanic.com'
                className='underline hover:no-underline'
                style={{ color: '#274223' }}
              >
                info@adrisbotanic.com
              </a>{' '}
              ili na +385 91 921 1069.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
