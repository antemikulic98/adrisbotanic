'use client';

import { Container } from '../components/ui/Container';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Leaf,
  Droplets,
  Sun,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts, categories as dataCategories } from './data';

const categoryIcons = {
  all: BookOpen,
  njega: Droplets,
  sadnja: Leaf,
  sezona: Sun,
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = dataCategories.map((cat) => ({
    ...cat,
    icon: categoryIcons[cat.id as keyof typeof categoryIcons] || BookOpen,
  }));

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
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
              <BookOpen className='w-4 h-4' />
              <span>Stručni Savjeti</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='text-white'>Savjeti & Vodići</span>
              <br />
              <span style={{ color: '#8fb588' }}>Za Savršen Vrt</span>
            </h1>

            <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
              Stručni savjeti za njegu mediteranskih biljaka. Od sadnje do
              održavanja kroz sve sezone.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section
        className='py-8 md:py-12 bg-white border-b-2'
        style={{ borderColor: 'rgba(39, 66, 35, 0.1)' }}
      >
        <div className='overflow-x-auto scrollbar-hide px-4 md:px-0'>
          <Container>
            <div className='flex md:flex-wrap md:justify-center gap-3 md:gap-4 min-w-max md:min-w-0'>
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition-all whitespace-nowrap text-sm md:text-base ${
                      selectedCategory === cat.id
                        ? 'text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                    style={{
                      backgroundColor:
                        selectedCategory === cat.id ? '#274223' : undefined,
                    }}
                  >
                    <Icon className='w-4 h-4 md:w-5 md:h-5' />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* Blog Posts */}
      <section className='py-16 md:py-20 bg-white'>
        <Container>
          {/* Results Count */}
          <div className='mb-12'>
            <h2 className='text-2xl font-bold text-neutral-900'>
              {selectedCategory === 'all'
                ? 'Svi savjeti'
                : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className='text-neutral-600 mt-2'>
              {filteredPosts.length}{' '}
              {filteredPosts.length === 1 ? 'članak' : 'članaka'}
            </p>
          </div>

          {/* Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article
                    className='group bg-white rounded-2xl border-2 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer h-full'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                  >
                    {/* Image */}
                    <div className='aspect-video overflow-hidden relative'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                      />

                      {/* Category Badge */}
                      <div className='absolute top-4 left-4 z-10'>
                        <div
                          className='px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm'
                          style={{ backgroundColor: 'rgba(39, 66, 35, 0.9)' }}
                        >
                          {categories.find((c) => c.id === post.category)?.label}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='p-6 space-y-4'>
                      {/* Meta */}
                      <div className='flex items-center gap-4 text-sm text-neutral-500'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='w-4 h-4' />
                          <span>{post.date}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-4 h-4' />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className='text-xl font-bold text-neutral-900 group-hover:text-[#274223] transition-colors'>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className='text-neutral-600 leading-relaxed'>
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div
                        className='flex items-center gap-2 font-semibold text-sm pt-2'
                        style={{ color: '#274223' }}
                      >
                        <span>Pročitaj više</span>
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className='py-16 md:py-20'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div
            className='rounded-3xl p-12 md:p-16 text-center'
            style={{ backgroundColor: '#274223' }}
          >
            <div className='max-w-3xl mx-auto space-y-6'>
              <div className='w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-white/20 backdrop-blur-sm'>
                <Leaf className='w-8 h-8 text-white' />
              </div>

              <h2 className='text-3xl md:text-4xl font-bold text-white'>
                Trebaš pomoć sa svojim vrtom?
              </h2>

              <p className='text-lg text-white/90'>
                Naši stručnjaci su tu za sve tvoje upite. Besplatno savjetovanje
                i procjena za tvoj projekt.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <Link href='/kontakt' className='w-full sm:w-auto'>
                  <button
                    className='w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                    style={{ color: '#274223' }}
                  >
                    Kontaktiraj nas
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </Link>
                <Link href='/biljke' className='w-full sm:w-auto'>
                  <button className='w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white'>
                    Pogledaj Biljke
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

