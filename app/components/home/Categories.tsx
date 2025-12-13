import Link from 'next/link';
import { ArrowRight, TreePine, Trees, Cherry, Flower2, Leaf, Sun } from 'lucide-react';
import { Container } from '../ui/Container';

interface CategoryCardProps {
  title: string;
  examples: string;
  icon: React.ReactNode;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  examples,
  icon,
  href,
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
          <span>Pregledaj</span>
          <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </div>
      </div>
    </Link>
  );
};

export const Categories: React.FC = () => {
  const categories = [
    {
      title: 'Masivna i sjenovita stabla',
      examples: 'Maslina, čempres, pinija, palme',
      icon: <TreePine className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: 'Veliki grmovi i manja stabla',
      examples: 'Oleandar, lovor, šipak, smokva',
      icon: <Trees className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: 'Agrumi',
      examples: 'Limun, naranča, limeta, grejp, mandarina',
      icon: <Cherry className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: 'Aromatični grmovi i trajnice',
      examples: 'Lavanda, ružmarin, kadulja, smilje',
      icon: <Flower2 className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: 'Penjačice',
      examples: 'Bugenvilija, jasmin, glicinija',
      icon: <Leaf className='w-7 h-7' />,
      href: '/biljke',
    },
    {
      title: 'Sukulenti i kaktuslike biljke',
      examples: 'Agava, kaktus, čuvarkuća',
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
            ŠTO NUDIMO
          </div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3'>
            Istražite Naš <span style={{ color: '#274223' }}>Asortiman</span>
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            Mediteransko bilje za vaš vrt, terasu i dom
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
};
