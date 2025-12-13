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
  Wind,
  LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  icon: LucideIcon;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Svi Savjeti', icon: BookOpen },
    { id: 'njega', label: 'Njega Biljaka', icon: Droplets },
    { id: 'sadnja', label: 'Sadnja & Presađivanje', icon: Leaf },
    { id: 'sezona', label: 'Sezonski Savjeti', icon: Sun },
  ];

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Kako pravilno zalijevati masline i palme',
      excerpt:
        'Zalijevanje mediteranskih biljaka zahtijeva posebnu pažnju. Saznaj kako pravilno zalijevati masline i palme kroz sve sezone.',
      category: 'njega',
      readTime: '5 min',
      date: '15. Listopad 2024',
      image: '/img/blog-1.jpg',
      icon: Droplets,
    },
    {
      id: '2',
      title: 'Priprema mediteranskih biljaka za zimu',
      excerpt:
        'Zima dolazi! Nauči kako zaštititi svoje masline, palme i druge mediteranske biljke od hladnoće i mraza.',
      category: 'sezona',
      readTime: '8 min',
      date: '10. Listopad 2024',
      image: '/img/blog-2.jpg',
      icon: Wind,
    },
    {
      id: '3',
      title: 'Najbolje vrijeme za sadnju maslina',
      excerpt:
        'Proljeće ili jesen? Saznaj koje je optimalno vrijeme za sadnju maslinovog stabla i kako osigurati najbolji rezultat.',
      category: 'sadnja',
      readTime: '6 min',
      date: '5. Listopad 2024',
      image: '/img/blog-3.jpg',
      icon: Leaf,
    },
    {
      id: '4',
      title: 'Odabir pravog pitara za tvoje biljke',
      excerpt:
        'Veličina, materijal, odvodni otvori - sve što trebaš znati pri odabiru savršenog pitara za mediteranske biljke.',
      category: 'njega',
      readTime: '4 min',
      date: '1. Listopad 2024',
      image: '/img/blog-4.jpg',
      icon: Droplets,
    },
    {
      id: '5',
      title: 'Presađivanje palmi: Korak po korak vodič',
      excerpt:
        'Detaljne upute za uspješno presađivanje palmi. Od pripreme tla do završnog zalijevanja.',
      category: 'sadnja',
      readTime: '10 min',
      date: '28. Rujan 2024',
      image: '/img/blog-5.jpg',
      icon: Leaf,
    },
    {
      id: '6',
      title: 'Ljetna njega mediteranskog vrta',
      excerpt:
        'Vruća ljeta mogu biti izazov. Saznaj kako održati svoj vrt svježim i zdravim tijekom najtoplijih mjeseci.',
      category: 'sezona',
      readTime: '7 min',
      date: '25. Rujan 2024',
      image: '/img/blog-6.jpg',
      icon: Sun,
    },
  ];

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
            {filteredPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.id}
                  className='group bg-white rounded-2xl border-2 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                  style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                >
                  {/* Image */}
                  <div
                    className='aspect-video overflow-hidden relative'
                    style={{ backgroundColor: '#f3f6f3' }}
                  >
                    <div className='w-full h-full flex items-center justify-center'>
                      <div className='text-center'>
                        <div
                          className='w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-xl mb-3'
                          style={{ backgroundColor: '#274223' }}
                        >
                          <Icon className='w-10 h-10 text-white' />
                        </div>
                        <p className='text-xs text-neutral-600 font-medium'>
                          [Hero slika članka]
                        </p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className='absolute top-4 left-4'>
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
                    <h3 className='text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors'>
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
              );
            })}
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
                <Link href='/kontakt'>
                  <button
                    className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                    style={{ color: '#274223' }}
                  >
                    Kontaktiraj nas
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </Link>
                <Link href='/biljke'>
                  <button className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white'>
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

