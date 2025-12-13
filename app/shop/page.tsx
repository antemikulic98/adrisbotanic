'use client';

import { Container } from '../components/ui/Container';
import {
  Package,
  Filter,
  ShoppingCart,
  Search,
} from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  material: string;
  size: string;
  capacity: string;
  image: string;
  inStock: boolean;
  badge?: 'sale' | 'new' | 'popular';
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Terracotta Pitar Premium',
      price: 65,
      oldPrice: 85,
      category: 'Terracotta',
      material: 'Keramika',
      size: '50cm x 40cm',
      capacity: '50L',
      image: '/img/pitar-1.jpg',
      inStock: true,
      badge: 'sale',
    },
    {
      id: '2',
      name: 'Betonski Pitar Large',
      price: 120,
      category: 'Beton',
      material: 'Beton',
      size: '70cm x 60cm',
      capacity: '100L',
      image: '/img/pitar-2.jpg',
      inStock: true,
      badge: 'popular',
    },
    {
      id: '3',
      name: 'Keramički Pitar Classic',
      price: 95,
      category: 'Keramika',
      material: 'Glazirana keramika',
      size: '60cm x 50cm',
      capacity: '70L',
      image: '/img/pitar-3.jpg',
      inStock: true,
    },
    {
      id: '4',
      name: 'Terracotta Mini Set (3 kom)',
      price: 45,
      category: 'Terracotta',
      material: 'Keramika',
      size: 'Mix 30-40cm',
      capacity: '15-25L',
      image: '/img/pitar-4.jpg',
      inStock: true,
      badge: 'new',
    },
    {
      id: '5',
      name: 'Mediteranski Pitar XL',
      price: 150,
      category: 'Keramika',
      material: 'Glazirana keramika',
      size: '80cm x 70cm',
      capacity: '150L',
      image: '/img/pitar-5.jpg',
      inStock: true,
    },
    {
      id: '6',
      name: 'Rustikalni Beton Medium',
      price: 85,
      category: 'Beton',
      material: 'Beton',
      size: '55cm x 45cm',
      capacity: '60L',
      image: '/img/pitar-6.jpg',
      inStock: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'Svi Pitari' },
    { id: 'Terracotta', label: 'Terracotta' },
    { id: 'Keramika', label: 'Keramika' },
    { id: 'Beton', label: 'Beton' },
  ];

  const priceRanges = [
    { id: 'all', label: 'Sve cijene' },
    { id: '0-50', label: '0€ - 50€' },
    { id: '50-100', label: '50€ - 100€' },
    { id: '100-200', label: '100€ - 200€' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    const matchesPrice = () => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return product.price >= min && product.price <= max;
    };

    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice() && matchesSearch;
  });

  const addToCart = (product: Product) => {
    // TODO: Implement cart functionality
    alert(`Dodano u košaricu: ${product.name}`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        className='relative py-16 md:py-20'
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
              <Package className='w-4 h-4' />
              <span>Online Shop</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='text-neutral-900'>Keramički Pitari</span>
              <br />
              <span style={{ color: '#274223' }}>Za Tvoj Vrt</span>
            </h1>

            <p className='text-lg md:text-xl text-neutral-600 leading-relaxed'>
              Premium kvaliteta, besplatna dostava diljem Hrvatske. Otporni na
              mraz i vremenske uvjete.
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto pt-4'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400' />
                <input
                  type='text'
                  placeholder='Pretraži pitare...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none transition-colors text-base'
                  style={{
                    borderColor: 'rgba(39, 66, 35, 0.2)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#274223';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(39, 66, 35, 0.2)';
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters & Products */}
      <section className='py-16 md:py-20 bg-white'>
        <Container>
          {/* Filters */}
          <div className='mb-12 space-y-6'>
            {/* Category Filter */}
            <div>
              <div className='flex items-center gap-2 mb-4'>
                <Filter className='w-5 h-5' style={{ color: '#274223' }} />
                <h3 className='text-lg font-bold text-neutral-900'>
                  Kategorije
                </h3>
              </div>
              <div className='flex flex-wrap gap-3'>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? 'text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                    style={{
                      backgroundColor:
                        selectedCategory === cat.id ? '#274223' : undefined,
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className='text-lg font-bold text-neutral-900 mb-4'>
                Cijena
              </h3>
              <div className='flex flex-wrap gap-3'>
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      priceRange === range.id
                        ? 'text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                    style={{
                      backgroundColor:
                        priceRange === range.id ? '#274223' : undefined,
                    }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className='mb-8'>
            <p className='text-neutral-600'>
              Pronađeno <strong>{filteredProducts.length}</strong> proizvoda
            </p>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className='group relative bg-white rounded-2xl border-2 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1'
                style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
              >
                {/* Badge */}
                {product.badge && (
                  <div className='absolute top-4 left-4 z-10'>
                    <div
                      className='px-3 py-1.5 rounded-full text-xs font-bold text-white'
                      style={{
                        backgroundColor:
                          product.badge === 'sale'
                            ? '#F5222D'
                            : product.badge === 'new'
                            ? '#1890FF'
                            : '#274223',
                      }}
                    >
                      {product.badge === 'sale'
                        ? 'POPUST'
                        : product.badge === 'new'
                        ? 'NOVO'
                        : 'POPULARNO'}
                    </div>
                  </div>
                )}

                {/* Stock Badge */}
                {!product.inStock && (
                  <div className='absolute top-4 right-4 z-10'>
                    <div className='px-3 py-1.5 rounded-full text-xs font-bold text-white bg-neutral-500'>
                      Rasprodano
                    </div>
                  </div>
                )}

                {/* Image */}
                <div
                  className='aspect-square overflow-hidden'
                  style={{ backgroundColor: '#f3f6f3' }}
                >
                  <div className='w-full h-full flex items-center justify-center p-8'>
                    <div className='text-center'>
                      <div
                        className='w-32 h-32 mx-auto rounded-2xl flex items-center justify-center shadow-xl mb-4'
                        style={{ backgroundColor: '#274223' }}
                      >
                        <Package className='w-16 h-16 text-white' />
                      </div>
                      <p className='text-sm text-neutral-600 font-medium'>
                        [Slika pitara]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 space-y-4'>
                  {/* Category & Name */}
                  <div>
                    <div
                      className='inline-block text-[10px] font-bold uppercase tracking-wide mb-2 px-2 py-0.5 rounded'
                      style={{
                        backgroundColor: 'rgba(39, 66, 35, 0.1)',
                        color: '#274223',
                      }}
                    >
                      {product.category}
                    </div>
                    <h3 className='text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors'>
                      {product.name}
                    </h3>
                  </div>

                  {/* Specs */}
                  <div className='space-y-1 text-sm text-neutral-600'>
                    <div className='flex justify-between'>
                      <span>Kapacitet:</span>
                      <span className='font-semibold'>{product.capacity}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Dimenzije:</span>
                      <span className='font-semibold'>{product.size}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Materijal:</span>
                      <span className='font-semibold'>{product.material}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div
                    className='pt-4 border-t-2'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.1)' }}
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div>
                        <div
                          className='text-2xl font-bold'
                          style={{ color: '#274223' }}
                        >
                          {product.price}€
                        </div>
                        {product.oldPrice && (
                          <div className='text-sm text-neutral-400 line-through'>
                            {product.oldPrice}€
                          </div>
                        )}
                      </div>
                      <div className='text-xs text-neutral-500'>sa PDV-om</div>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${
                        product.inStock
                          ? 'text-white shadow-lg hover:shadow-xl'
                          : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                      }`}
                      style={{
                        backgroundColor: product.inStock
                          ? '#274223'
                          : undefined,
                      }}
                    >
                      <ShoppingCart className='w-5 h-5' />
                      {product.inStock ? 'Dodaj u košaricu' : 'Nije dostupno'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className='text-center py-20'>
              <Package
                className='w-16 h-16 mx-auto mb-4 opacity-20'
                style={{ color: '#274223' }}
              />
              <h3 className='text-2xl font-bold text-neutral-900 mb-2'>
                Nema rezultata
              </h3>
              <p className='text-neutral-600 mb-6'>
                Pokušaj promijeniti filtere ili pretragu
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all'
                style={{ backgroundColor: '#274223' }}
              >
                Resetiraj filtere
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Info Section */}
      <section
        className='py-16 md:py-20'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div
              className='p-8 rounded-2xl text-center'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
            >
              <div
                className='w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'
                style={{ backgroundColor: '#274223' }}
              >
                <span className='text-3xl'>🚚</span>
              </div>
              <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                Besplatna Dostava
              </h3>
              <p className='text-neutral-600'>
                Za sve narudžbe iznad 100€ diljem Hrvatske
              </p>
            </div>

            <div
              className='p-8 rounded-2xl text-center'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
            >
              <div
                className='w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'
                style={{ backgroundColor: '#274223' }}
              >
                <span className='text-3xl'>❄️</span>
              </div>
              <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                Otpornost na Mraz
              </h3>
              <p className='text-neutral-600'>
                Svi pitari testrani za hrvatske zime
              </p>
            </div>

            <div
              className='p-8 rounded-2xl text-center'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
            >
              <div
                className='w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center'
                style={{ backgroundColor: '#274223' }}
              >
                <span className='text-3xl'>✓</span>
              </div>
              <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                Garancija Kvalitete
              </h3>
              <p className='text-neutral-600'>
                12 mjeseci garancije na sve proizvode
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

