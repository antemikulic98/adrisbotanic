import Link from 'next/link';
import { ShoppingCart, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Container } from '../ui/Container';

interface Product {
  id: string;
  name: string;
  price?: number;
  category: string;
  badge?: 'new' | 'popular';
  type: 'presentation' | 'shop';
  image: string;
  href: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={product.href}>
      <div
        className='group relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
        style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
      >
        {/* Image */}
        <div
          className='relative aspect-square overflow-hidden'
          style={{ backgroundColor: '#f3f6f3' }}
        >
          {/* Placeholder */}
          <div className='w-full h-full flex items-center justify-center p-6'>
            <div className='text-center'>
              <div className='w-20 h-20 mx-auto bg-white rounded-xl shadow-md flex items-center justify-center mb-3'>
                <span className='text-4xl'>🌿</span>
              </div>
              <p className='text-xs text-neutral-500 font-medium'>
                [Slika proizvoda]
              </p>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className='absolute top-3 left-3 z-10'>
              <div
                className='flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white'
                style={{
                  backgroundColor:
                    product.badge === 'new' ? '#1890FF' : '#274223',
                }}
              >
                <Sparkles className='w-3 h-3' />
                {product.badge === 'new' ? 'Novo' : 'Popularno'}
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
              {product.category}
            </div>
            <h3 className='text-base font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2'>
              {product.name}
            </h3>
          </div>

          {/* Price or CTA */}
          <div
            className='flex items-center justify-between pt-2'
            style={{ borderTop: '1px solid rgba(39, 66, 35, 0.1)' }}
          >
            {product.type === 'shop' && product.price ? (
              <>
                <div>
                  <div
                    className='text-xl font-bold'
                    style={{ color: '#274223' }}
                  >
                    {product.price}€
                  </div>
                  <div className='text-[10px] text-neutral-500'>sa PDV-om</div>
                </div>
                <button
                  className='w-9 h-9 rounded-lg text-white flex items-center justify-center transition-all hover:opacity-90'
                  style={{ backgroundColor: '#274223' }}
                >
                  <ShoppingCart className='w-4 h-4' />
                </button>
              </>
            ) : (
              <div
                className='flex items-center gap-1.5 text-sm font-semibold w-full'
                style={{ color: '#274223' }}
              >
                <Phone className='w-4 h-4' />
                <span>Pitaj za cijenu</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Maslina Oblica 1.5m',
      category: 'Masline',
      badge: 'popular',
      type: 'presentation',
      image: '/placeholder.jpg',
      href: '/biljke/masline/oblica',
    },
    {
      id: '2',
      name: 'Terracotta Pitar 50L',
      price: 65,
      category: 'Pitari',
      badge: 'new',
      type: 'shop',
      image: '/placeholder.jpg',
      href: '/shop/pitari/terracotta-50l',
    },
    {
      id: '3',
      name: 'Washingtonia Robusta',
      category: 'Palme',
      type: 'presentation',
      image: '/placeholder.jpg',
      href: '/biljke/palme/washingtonia',
    },
    {
      id: '4',
      name: 'Keramički Pitar 70L',
      price: 95,
      category: 'Pitari',
      badge: 'popular',
      type: 'shop',
      image: '/placeholder.jpg',
      href: '/shop/pitari/keramicki-70l',
    },
    {
      id: '5',
      name: 'Phoenix Canariensis',
      category: 'Palme',
      type: 'presentation',
      image: '/placeholder.jpg',
      href: '/biljke/palme/phoenix',
    },
    {
      id: '6',
      name: 'Betonski Pitar 100L',
      price: 120,
      category: 'Pitari',
      type: 'shop',
      image: '/placeholder.jpg',
      href: '/shop/pitari/betonski-100l',
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
              ISTAKNUTNO
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900'>
              Istaknuti <span style={{ color: '#274223' }}>Proizvodi</span>
            </h2>
            <p className='text-lg text-neutral-600 mt-2'>
              Najpopularniji izbor naših kupaca
            </p>
          </div>
          <Link href='/shop'>
            <button
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90'
              style={{ border: '2px solid #274223', color: '#274223' }}
            >
              Vidi Sve
              <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
