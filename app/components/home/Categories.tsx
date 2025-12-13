import Link from 'next/link';
import { ArrowRight, TreePine, Palmtree, Flower2, Package } from 'lucide-react';
import { Container } from '../ui/Container';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  type: 'presentation' | 'shop';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  href,
  type,
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

        {/* Type badge */}
        <div
          className='inline-block px-3 py-1 rounded-full text-xs font-bold mb-3'
          style={{ backgroundColor: 'rgba(39, 66, 35, 0.1)', color: '#274223' }}
        >
          {type === 'presentation' ? 'PREZENTACIJA' : 'ONLINE PRODAJA'}
        </div>

        {/* Text */}
        <h3
          className='text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors'
        >
          {title}
        </h3>
        <p className='text-neutral-600 text-sm leading-relaxed mb-4'>
          {description}
        </p>

        {/* CTA */}
        <div
          className='flex items-center gap-2 font-semibold text-sm'
          style={{ color: '#274223' }}
        >
          <span>{type === 'presentation' ? 'Pregledaj' : 'Kupi Online'}</span>
          <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </div>
      </div>
    </Link>
  );
};

export const Categories: React.FC = () => {
  const categories = [
    {
      title: 'Masline',
      description:
        'Različite sorte mediteranskih maslina. Pitajte za dostupnost i cijenu.',
      icon: <TreePine className='w-7 h-7' />,
      href: '/biljke/masline',
      type: 'presentation' as const,
    },
    {
      title: 'Palme',
      description:
        'Washingtonia, Phoenix, Chamaerops i druge otporne vrste palmi.',
      icon: <Palmtree className='w-7 h-7' />,
      href: '/biljke/palme',
      type: 'presentation' as const,
    },
    {
      title: 'Vanjske Biljke',
      description:
        'Mediteranske i otporne biljke idealne za vaš vrt ili terasu.',
      icon: <Flower2 className='w-7 h-7' />,
      href: '/biljke/vanjske',
      type: 'presentation' as const,
    },
    {
      title: 'Keramički Pitari',
      description:
        'Kvalitetni pitari u različitim veličinama. Kupujte direktno online!',
      icon: <Package className='w-7 h-7' />,
      href: '/shop/pitari',
      type: 'shop' as const,
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
            ŠTO NUDIMO
          </div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3'>
            Istražite Naš <span style={{ color: '#274223' }}>Asortiman</span>
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            Od mediteranskih maslina do kvalitetnih keramičkih pitara
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.href} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
};
