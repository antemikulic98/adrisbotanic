'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { useTranslations } from '@/app/i18n';

interface Plant {
  id: string;
  nameKey:
    | 'washingtonia'
    | 'cycas'
    | 'oleaMiniCalabria'
    | 'oleaPataBonsai'
    | 'yuccaElephantipes'
    | 'ficusAustralis';
  badge?: 'new' | 'popular';
  image: string;
  href: string;
}

const PlantCard: React.FC<{
  plant: Plant;
  t: ReturnType<typeof useTranslations>;
}> = ({ plant, t }) => {
  const plantData = t.featured.plants[plant.nameKey];

  return (
    <Link href={plant.href}>
      <div
        className='group relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
        style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
      >
        {/* Image */}
        <div
          className='relative aspect-[4/5] overflow-hidden'
          style={{ backgroundColor: '#f3f6f3' }}
        >
          <Image
            src={plant.image}
            alt={plantData.name}
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
                {plant.badge === 'new' ? t.featured.new : t.featured.popular}
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
              {plantData.category}
            </div>
            <h3 className='text-base font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2'>
              {plantData.name}
            </h3>
            <p className='text-sm text-neutral-600 mt-1 line-clamp-2'>
              {plantData.description}
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
              <span>{t.featured.askPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const FeaturedProducts: React.FC = () => {
  const t = useTranslations();

  const plants: Plant[] = [
    {
      id: '1',
      nameKey: 'washingtonia',
      badge: 'popular',
      image: '/img/palme/washingtonia-robusta.jpg',
      href: '/biljke',
    },
    {
      id: '2',
      nameKey: 'cycas',
      image: '/img/palme/cycas-revoluta.jpg',
      href: '/biljke',
    },
    {
      id: '3',
      nameKey: 'oleaMiniCalabria',
      badge: 'new',
      image: '/img/palme/olea-mini-calabria.jpg',
      href: '/biljke',
    },
    {
      id: '4',
      nameKey: 'oleaPataBonsai',
      badge: 'popular',
      image: '/img/palme/olea-pata-bonsai.jpg',
      href: '/biljke',
    },
    {
      id: '5',
      nameKey: 'yuccaElephantipes',
      badge: 'new',
      image: '/img/palme/yucca-elephantipes.jpg',
      href: '/biljke',
    },
    {
      id: '6',
      nameKey: 'ficusAustralis',
      image: '/img/palme/ficcus-australis.jpg',
      href: '/biljke',
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
              {t.featured.badge}
            </div>
            <h2
              className='font-bold text-neutral-900'
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              }}
            >
              {t.featured.title}{' '}
              <span style={{ color: '#274223' }}>
                {t.featured.titleHighlight}
              </span>
            </h2>
            <p className='text-lg text-neutral-600 mt-2'>
              {t.featured.subtitle}
            </p>
          </div>
          <Link href='/biljke'>
            <button
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90'
              style={{ border: '2px solid #274223', color: '#274223' }}
            >
              {t.featured.viewAll}
              <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
        </div>

        {/* Plants Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
};
