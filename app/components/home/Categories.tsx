'use client';

import Link from 'next/link';
import { ArrowRight, TreePine, Trees, Cherry, Flower2, Leaf, Sun } from 'lucide-react';
import { Container } from '../ui/Container';
import { useTranslations } from '@/app/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface CategoryCardProps {
  title: string;
  examples: string;
  icon: React.ReactNode;
  href: string;
  viewText: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  examples,
  icon,
  href,
  viewText,
}) => {
  return (
    <Link href={href}>
      <div
        className='group relative h-full bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2'
        style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
      >
        {/* Icon */}
        <div
          className='w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110'
          style={{ backgroundColor: '#274223' }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className='text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors'>
          {title}
        </h3>

        {/* Examples */}
        <p className='text-sm text-neutral-600 leading-relaxed mb-4'>
          {examples}
        </p>

        {/* CTA */}
        <div
          className='flex items-center gap-2 font-semibold text-sm'
          style={{ color: '#274223' }}
        >
          <span>{viewText}</span>
          <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </div>
      </div>
    </Link>
  );
};

export const Categories: React.FC = () => {
  const t = useTranslations();

  const categories = [
    {
      title: t.categories.items.trees.title,
      examples: t.categories.items.trees.examples,
      icon: <TreePine className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: t.categories.items.shrubs.title,
      examples: t.categories.items.shrubs.examples,
      icon: <Trees className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: t.categories.items.citrus.title,
      examples: t.categories.items.citrus.examples,
      icon: <Cherry className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: t.categories.items.aromatic.title,
      examples: t.categories.items.aromatic.examples,
      icon: <Flower2 className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: t.categories.items.climbers.title,
      examples: t.categories.items.climbers.examples,
      icon: <Leaf className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: t.categories.items.succulents.title,
      examples: t.categories.items.succulents.examples,
      icon: <Sun className='w-7 h-7' />,
      href: '/biljke',
    },
  ];

  return (
    <section className='py-16 md:py-20' style={{ backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <div
            className='inline-block px-4 py-2 rounded-full text-xs font-bold text-white mb-4'
            style={{ backgroundColor: '#274223' }}
          >
            {t.categories.badge}
          </div>
          <h2 
            className='font-bold text-neutral-900 mb-3'
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 3rem)'
            }}
          >
            {t.categories.title} <span style={{ color: '#274223' }}>{t.categories.titleHighlight}</span>
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            {t.categories.subtitle}
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className='md:hidden'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            className='categories-swiper'
          >
            {categories.map((category) => (
              <SwiperSlide key={category.title} className='h-auto'>
                <CategoryCard {...category} viewText={t.categories.view} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} viewText={t.categories.view} />
          ))}
        </div>
      </Container>
    </section>
  );
};
