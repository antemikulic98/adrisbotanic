'use client';

import { Container } from '../components/ui/Container';
import { TreePine, Palmtree, Flower2, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactModal } from '../components/ui/ContactModal';
import { useState } from 'react';

export default function BiljkePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };
  const categories = [
    {
      id: 'masline',
      title: 'Masline',
      icon: TreePine,
      description: 'Mediteransko blago vašeg vrta',
      longDescription:
        'Maslinovo stablo (Olea europaea) je simbol Mediterana i savršen izbor za vaš vrt. Naše masline su uzgojene s pažnjom, otporne na klimatske uvjete i idealne za hrvatski krajolik.',
      features: [
        'Starost: 5-15+ godina',
        'Visina: 1.5m - 4m',
        'Otpornost: -10°C do +40°C',
        'Sadnja: Proljeće i jesen',
      ],
      varieties: [
        'Oblica - tradicionalna hrvatska sorta',
        'Leccino - talijanska, visok prinos',
        'Pendolino - oprašivač, dekorativna',
        'Frantoio - kvalitetno ulje',
      ],
      image: '/img/masline.jpg',
    },
    {
      id: 'palme',
      title: 'Palme',
      icon: Palmtree,
      description: 'Tropski šarm za svaki prostor',
      longDescription:
        'Palme donose egzotičan izgled i mediteranski ugođaj. Sve naše palme su prilagođene hrvatskom klimatu i mogu izdržati i blaže zime uz minimalnu njegu.',
      features: [
        'Vrste: Phoenix, Washingtonia, Chamaerops',
        'Visina: 0.8m - 3.5m',
        'Otpornost: -5°C do +35°C',
        'Održavanje: Jednostavno',
      ],
      varieties: [
        'Phoenix canariensis - kanarijska palma',
        'Washingtonia robusta - meksička palma',
        'Chamaerops humilis - patuljasta palma',
        'Trachycarpus fortunei - kineska palma',
      ],
      image: '/img/palme.jpg',
    },
    {
      id: 'vanjske',
      title: 'Vanjske Biljke',
      icon: Flower2,
      description: 'Mediteranski vrt pun boja i mirisa',
      longDescription:
        'Obogatite svoj vrt mediteranskim biljem koje ne zahtijeva puno održavanja. Od aromatičnih biljaka do cvjetnih grmova, nudimo širok izbor za svaki ukus.',
      features: [
        'Lavanda - mirišna i dekorativna',
        'Ružmarin - aromatična začinska biljka',
        'Bougainvillea - bujna cvjetna ljepota',
        'Oleander - cvjetni grm',
      ],
      varieties: [
        'Lavandula angustifolia - prava lavanda',
        'Rosmarinus officinalis - ružmarin',
        'Bougainvillea glabra - bugenvilija',
        'Nerium oleander - oleander',
      ],
      image: '/img/vanjske.jpg',
    },
  ];

  return (
    <>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
      />
      <main>
        {/* Hero Section */}
        <section className='relative py-24 md:py-32 overflow-hidden'>
          {/* Background Image */}
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{ backgroundImage: 'url(/img/palme.jpeg)' }}
          />
          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black/60' />

          <Container className='relative z-10'>
            <div className='text-center max-w-4xl mx-auto space-y-6'>
              <div
                className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg mb-2'
                style={{ backgroundColor: '#274223' }}
              >
                <TreePine className='w-4 h-4' />
                <span>Naše Biljke</span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='text-white'>Mediteranske Biljke</span>
                <br />
                <span style={{ color: '#8fb588' }}>Za Tvoj Savršeni Vrt</span>
              </h1>

              <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
                Pažljivo odabrane i uzgojene biljke prilagođene hrvatskom
                klimatu. Stručno savjetovanje i podrška u svakom koraku.
              </p>

              {/* Category Pills */}
              <div className='flex flex-wrap justify-center gap-2 md:gap-4 pt-6 md:pt-8'>
                <div
                  className='flex items-center gap-1.5 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm'
                >
                  <TreePine className='w-4 h-4 md:w-5 md:h-5 text-white' />
                  <span className='text-white font-bold text-sm md:text-base'>Masline</span>
                </div>
                <div
                  className='flex items-center gap-1.5 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm'
                >
                  <Palmtree className='w-4 h-4 md:w-5 md:h-5 text-white' />
                  <span className='text-white font-bold text-sm md:text-base'>Palme</span>
                </div>
                <div
                  className='flex items-center gap-1.5 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm'
                >
                  <Flower2 className='w-4 h-4 md:w-5 md:h-5 text-white' />
                  <span className='text-white font-bold text-sm md:text-base'>
                    Mediteransko
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className='flex justify-center gap-4 md:gap-8 pt-4 md:pt-6 text-center'>
                <div>
                  <div className='text-2xl md:text-3xl font-bold text-white'>
                    15+
                  </div>
                  <div className='text-xs md:text-sm text-white/80 font-medium'>
                    Vrsta biljaka
                  </div>
                </div>
                <div
                  className='w-px h-10 md:h-12 self-center bg-white/30'
                />
                <div>
                  <div className='text-2xl md:text-3xl font-bold text-white'>
                    100%
                  </div>
                  <div className='text-xs md:text-sm text-white/80 font-medium'>
                    Za klimu
                  </div>
                </div>
                <div
                  className='w-px h-10 md:h-12 self-center bg-white/30'
                />
                <div>
                  <div className='text-2xl md:text-3xl font-bold text-white'>
                    5-15
                  </div>
                  <div className='text-xs md:text-sm text-white/80 font-medium'>
                    God. starosti
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Categories */}
        <section className='py-16 md:py-24 bg-white'>
          <Container>
            <div className='space-y-24'>
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={category.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Content */}
                    <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                      {/* Icon & Title */}
                      <div className='flex items-center gap-4'>
                        <div
                          className='w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg'
                          style={{ backgroundColor: '#274223' }}
                        >
                          <Icon className='w-8 h-8' />
                        </div>
                        <div>
                          <h2 className='text-3xl md:text-4xl font-bold text-neutral-900'>
                            {category.title}
                          </h2>
                          <p
                            className='text-sm font-semibold'
                            style={{ color: '#274223' }}
                          >
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Long Description */}
                      <p className='text-lg text-neutral-600 leading-relaxed'>
                        {category.longDescription}
                      </p>

                      {/* Features */}
                      <div>
                        <h3 className='text-lg font-bold text-neutral-900 mb-3'>
                          Karakteristike:
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          {category.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-2 text-sm'
                            >
                              <div
                                className='w-1.5 h-1.5 rounded-full mt-1.5 shrink-0'
                                style={{ backgroundColor: '#274223' }}
                              />
                              <span className='text-neutral-700'>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Varieties */}
                      <div>
                        <h3 className='text-lg font-bold text-neutral-900 mb-3'>
                          Dostupne vrste:
                        </h3>
                        <div className='space-y-2'>
                          {category.varieties.map((variety, idx) => (
                            <div
                              key={idx}
                              className='flex items-center gap-3 px-4 py-2 rounded-lg'
                              style={{
                                backgroundColor: 'rgba(39, 66, 35, 0.05)',
                              }}
                            >
                              <ArrowRight
                                className='w-4 h-4 shrink-0'
                                style={{ color: '#274223' }}
                              />
                              <span className='text-sm text-neutral-700 font-medium'>
                                {variety}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => openModal(category.title)}
                        className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl'
                        style={{ backgroundColor: '#274223' }}
                      >
                        <Phone className='w-5 h-5' />
                        Pitaj za dostupnost
                      </button>
                    </div>

                    {/* Image */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div
                        className='relative aspect-square rounded-3xl overflow-hidden shadow-2xl'
                        style={{ border: '4px solid #274223' }}
                      >
                        <Image
                          src='/img/palme.jpeg'
                          alt={category.title}
                          fill
                          className='object-cover'
                        />
                        {/* Overlay with category icon */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                        <div className='absolute bottom-6 left-6 flex items-center gap-3'>
                          <div
                            className='w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg'
                            style={{ backgroundColor: '#274223' }}
                          >
                            <Icon className='w-6 h-6' />
                          </div>
                          <span className='text-white font-bold text-lg drop-shadow-lg'>
                            {category.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section
          className='py-16 md:py-20 text-white'
          style={{ backgroundColor: '#274223' }}
        >
          <Container>
            <div className='text-center max-w-3xl mx-auto space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Nisi siguran što ti treba?
              </h2>
              <p className='text-lg text-white/90'>
                Naši stručnjaci će ti pomoći odabrati savršene biljke za tvoj
                prostor. Besplatno savjetovanje i procjena!
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <button
                  onClick={() => openModal('Opći upit')}
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                  style={{ color: '#274223' }}
                >
                  <Phone className='w-5 h-5' />
                  Kontaktiraj nas
                </button>
                <Link href='/' className='w-full sm:w-auto'>
                  <button className='w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white'>
                    Natrag na početnu
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
