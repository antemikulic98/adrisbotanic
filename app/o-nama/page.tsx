import { Container } from '../components/ui/Container';
import {
  Heart,
  Award,
  Users,
  Leaf,
  Shield,
  Truck,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function ONamaPage() {
  const values = [
    {
      icon: Heart,
      title: 'Strast prema prirodi',
      description:
        'Ljubav prema mediteranskom bilju i prirodi vodi nas u svakom koraku.',
    },
    {
      icon: Award,
      title: 'Vrhunska kvaliteta',
      description:
        'Odabiremo samo najbolje biljke i pitare, testirane za hrvatske uvjete.',
    },
    {
      icon: Users,
      title: 'Podrška klijentima',
      description:
        'Tu smo za tebe od savjeta do sadnje. Tvoj uspjeh je naš uspjeh.',
    },
    {
      icon: Shield,
      title: 'Pouzdanost',
      description:
        '15+ godina iskustva i stotine zadovoljnih kupaca govore umjesto nas.',
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Stručno savjetovanje',
      description: 'Besplatna procjena i savjeti za tvoj projekt',
    },
    {
      icon: Truck,
      title: 'Dostava i sadnja',
      description: 'Organiziramo transport i profesionalnu sadnju',
    },
    {
      icon: Shield,
      title: 'Garancija',
      description: 'Svi proizvodi dolaze s garancijom kvalitete',
    },
    {
      icon: Phone,
      title: 'Podrška',
      description: 'Uvijek dostupni za sve tvoje upite i potrebe',
    },
  ];

  const stats = [
    { number: '15+', label: 'Godina iskustva' },
    { number: '500+', label: 'Zadovoljnih kupaca' },
    { number: '1000+', label: 'Uspješnih projekata' },
    { number: '50+', label: 'Vrsta biljaka' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className='relative py-20 md:py-28'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <div
          className='absolute top-10 right-10 w-[400px] h-[400px] rounded-full blur-3xl'
          style={{ backgroundColor: '#274223', opacity: 0.08 }}
        />

        <Container>
          <div className='text-center max-w-4xl mx-auto space-y-6'>
            <div
              className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg mb-2'
              style={{ backgroundColor: '#274223' }}
            >
              <Leaf className='w-4 h-4' />
              <span>O Nama</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              <span style={{ color: '#274223' }}>Adrisbotanic</span>
              <br />
              <span className='text-neutral-900'>
                Tvoj partner za mediteranski vrt
              </span>
            </h1>

            <p className='text-lg md:text-xl text-neutral-600 leading-relaxed'>
              Već preko 15 godina ponosno donosimo mediteransko zelenilo u
              hrvatske vrtove. Naša strast su masline, palme i sve što čini vrt
              posebnim.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className='py-16 md:py-24 bg-white'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Text */}
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-900'>
                Naša priča
              </h2>
              <div className='space-y-4 text-lg text-neutral-600 leading-relaxed'>
                <p>
                  Adrisbotanic je nastao iz ljubavi prema mediteranskom bilju i
                  želje da tu ljepotu učinimo dostupnom svima. Započeli smo
                  2010. godine s malom kolekcijom maslina, a danas nudimo široku
                  paletu biljaka i pitara.
                </p>
                <p>
                  Svaka biljka koju nudimo pažljivo je odabrana i prilagođena
                  hrvatskom klimatu. Radimo s provjerenim dobavljačima i
                  proizvodimo vlastite sadnice kako bismo osigurali najvišu
                  kvalitetu.
                </p>
                <p>
                  Naša misija nije samo prodaja - želimo biti tvoj partner u
                  stvaranju savršenog vrta. Od prvog savjeta do završne sadnje,
                  tu smo za tebe.
                </p>
              </div>

              <div className='flex flex-wrap gap-3 pt-4'>
                <Link href='/kontakt'>
                  <button
                    className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Phone className='w-5 h-5' />
                    Kontaktiraj nas
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div>
              <div
                className='aspect-square rounded-3xl overflow-hidden shadow-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, #f3f6f3 0%, #ffffff 100%)',
                }}
              >
                <div className='w-full h-full flex items-center justify-center p-12'>
                  <div className='text-center space-y-6'>
                    <div
                      className='w-40 h-40 mx-auto rounded-3xl flex items-center justify-center shadow-xl'
                      style={{ backgroundColor: '#274223' }}
                    >
                      <Leaf className='w-20 h-20 text-white' />
                    </div>
                    <div>
                      <p
                        className='text-2xl font-bold'
                        style={{ color: '#274223' }}
                      >
                        [O Nama Slika]
                      </p>
                      <p className='text-base text-neutral-600 mt-3'>
                        Fotografija tima, vrta ili rasadnika
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section
        className='py-16 md:py-20'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div
                  className='text-4xl md:text-5xl font-bold mb-2'
                  style={{ color: '#274223' }}
                >
                  {stat.number}
                </div>
                <div className='text-neutral-600 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className='py-16 md:py-24 bg-white'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
              Naše <span style={{ color: '#274223' }}>Vrijednosti</span>
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              Principi koji nas vode u radu i odnosu prema klijentima
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='text-center p-8 rounded-2xl transition-all hover:shadow-xl'
                  style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
                >
                  <div
                    className='w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-neutral-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section
        className='py-16 md:py-24'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
              Zašto odabrati{' '}
              <span style={{ color: '#274223' }}>Adrisbotanic</span>?
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              Što te čeka kada radiš s nama
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className='flex items-start gap-4 p-6 rounded-2xl bg-white border-2 transition-all hover:shadow-lg'
                  style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                >
                  <div
                    className='w-14 h-14 rounded-xl flex items-center justify-center shrink-0'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                      {benefit.title}
                    </h3>
                    <p className='text-neutral-600'>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-20 bg-white'>
        <Container>
          <div
            className='rounded-3xl p-12 md:p-16 text-center'
            style={{ backgroundColor: '#274223' }}
          >
            <div className='max-w-3xl mx-auto space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>
                Spremni smo započeti tvoj projekt!
              </h2>

              <p className='text-lg text-white/90'>
                Posjeti nas ili nas kontaktiraj za besplatno savjetovanje.
                Radujemo se suradnji s tobom!
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <Link href='/kontakt'>
                  <button
                    className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                    style={{ color: '#274223' }}
                  >
                    <Phone className='w-5 h-5' />
                    Kontaktiraj nas
                  </button>
                </Link>
                <Link href='/biljke'>
                  <button className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white'>
                    Pogledaj Biljke
                  </button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className='pt-8 flex flex-col md:flex-row gap-6 justify-center items-center text-white/90 text-sm border-t border-white/20 mt-8'>
                <div className='flex items-center gap-2'>
                  <Phone className='w-4 h-4' />
                  <span>+385 XX XXX XXXX</span>
                </div>
                <div className='hidden md:block w-px h-4 bg-white/30' />
                <div>
                  <span>Radno vrijeme: Pon-Pet 8:00-20:00, Sub 9:00-14:00</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

