import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Container } from '../ui/Container';

interface Plant {
  id: string;
  name: string;
  category: string;
  badge?: 'new' | 'popular';
  image: string;
  href: string;
  description: string;
}

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  return (
    <Link href={plant.href}>
      <div
        className='group relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
        style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
      >
        {/* Image */}
        <div
          className='relative aspect-square overflow-hidden'
          style={{ backgroundColor: '#f3f6f3' }}
        >
          <Image
            src='/img/palme.jpeg'
            alt={plant.name}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-500'
          />

          {/* Badge */}
          {plant.badge && (
            <div className='absolute top-3 left-3 z-10'>
              <div
                className='flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white'
                style={{
                  backgroundColor:
                    plant.badge === 'new' ? '#1890FF' : '#274223',
                }}
              >
                <Sparkles className='w-3 h-3' />
                {plant.badge === 'new' ? 'Novo' : 'Popularno'}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-4 space-y-3'>
          <div>
            <div
              className='inline-block text-[10px] font-bold uppercase tracking-wide mb-1.5 px-2 py-0.5 rounded'
              style={{
                backgroundColor: 'rgba(39, 66, 35, 0.1)',
                color: '#274223',
              }}
            >
              {plant.category}
            </div>
            <h3 className='text-base font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2'>
              {plant.name}
            </h3>
            <p className='text-sm text-neutral-600 mt-1 line-clamp-2'>
              {plant.description}
            </p>
          </div>

          {/* CTA */}
          <div
            className='flex items-center justify-between pt-2'
            style={{ borderTop: '1px solid rgba(39, 66, 35, 0.1)' }}
          >
            <div
              className='flex items-center gap-1.5 text-sm font-semibold w-full'
              style={{ color: '#274223' }}
            >
              <Phone className='w-4 h-4' />
              <span>Pitaj za cijenu</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const FeaturedProducts: React.FC = () => {
  const plants: Plant[] = [
    {
      id: '1',
      name: 'Maslina Oblica',
      category: 'Masline',
      badge: 'popular',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Autohtona dalmatinska sorta, otporna na sušu i vjetar.',
    },
    {
      id: '2',
      name: 'Washingtonia Robusta',
      category: 'Palme',
      badge: 'new',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Elegantna palma s vitkim deblom, idealna za mediteranski ugođaj.',
    },
    {
      id: '3',
      name: 'Phoenix Canariensis',
      category: 'Palme',
      badge: 'popular',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Kanarska palma s gustom krunom, simbol mediterana.',
    },
    {
      id: '4',
      name: 'Maslina Leccino',
      category: 'Masline',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Talijanska sorta poznata po kvalitetnom ulju i otpornosti.',
    },
    {
      id: '5',
      name: 'Chamaerops Humilis',
      category: 'Palme',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Europska patuljasta palma, otporna na hladnoću.',
    },
    {
      id: '6',
      name: 'Maslina Pendolino',
      category: 'Masline',
      badge: 'new',
      image: '/placeholder.jpg',
      href: '/biljke',
      description: 'Oprašivač za druge sorte, prekrasno dekorativno stablo.',
    },
  ];

  return (
    <section className='py-16 md:py-20' style={{ backgroundColor: '#fafbfa' }}>
      <Container>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10'>
          <div>
            <div
              className='inline-block px-4 py-2 rounded-full text-xs font-bold text-white mb-3'
              style={{ backgroundColor: '#274223' }}
            >
              ISTAKNUTO
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900'>
              Naše <span style={{ color: '#274223' }}>Biljke</span>
            </h2>
            <p className='text-lg text-neutral-600 mt-2'>
              Mediteranske masline i palme za vaš vrt
            </p>
          </div>
          <Link href='/biljke'>
            <button
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90'
              style={{ border: '2px solid #274223', color: '#274223' }}
            >
              Pogledaj Sve Biljke
              <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
        </div>

        {/* Plants Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </Container>
    </section>
  );
};
