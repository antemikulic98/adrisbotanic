'use client';

import { Container } from '../ui/Container';
import { ArrowRight, Phone, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/app/i18n';

export const Hero: React.FC = () => {
  const t = useTranslations();

  return (
    <section className='relative overflow-hidden -mt-[64px] sm:-mt-[80px] lg:mt-0 pt-[64px] sm:pt-[80px] lg:pt-0'>
      {/* Mobile Background Image with wavy bottom - ide od vrha ekrana */}
      <div className='absolute inset-0 lg:hidden'>
        {/* SVG for wavy bottom clip */}
        <svg
          className='absolute bottom-0 left-0 w-full pointer-events-none z-10'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          style={{ height: '80px' }}
        >
          <path
            d='M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z'
            fill='#ffffff'
          />
        </svg>

        <div
          className='absolute inset-0'
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <Image
            src='/img/hero.jpeg'
            alt='Adrisbotanic Background'
            fill
            className='object-cover'
            priority
            sizes='100vw'
            quality={75}
          />
          {/* Darker overlay za bolji kontrast */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.75) 100%)',
            }}
          />
        </div>
      </div>

      {/* Desktop Background */}
      <div
        className='absolute inset-0 hidden lg:block'
        style={{
          background: '#ffffff',
        }}
      />

      {/* Zeleni decorative accent - samo desktop */}
      <div
        className='absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl hidden lg:block'
        style={{ backgroundColor: '#274223', opacity: 0.05 }}
      />

      <div className='relative'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[83vh] lg:min-h-[85vh]'>
            {/* Lijeva strana - Tekst (7 kolona) */}
            <div className='lg:col-span-7 space-y-5 md:space-y-6 py-16 md:py-16 lg:py-20 relative z-10'>
              {/* Veliki naslov sa zelenom */}
              <div className='space-y-3 md:space-y-4'>
                <h1
                  className='font-extrabold leading-[1.1] tracking-tight'
                  style={{ 
                    fontSize: 'clamp(2.25rem, 5vw, 4.5rem)'
                  }}
                >
                  <span className='text-white lg:text-neutral-900'>
                    {t.hero.title1}
                  </span>
                  <br />
                  <span
                    className='text-white lg:text-[#274223]'
                    style={{
                      textShadow: 'lg:none 2px 4px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {t.hero.title2}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/95 lg:text-neutral-600 leading-relaxed max-w-2xl'>
                  {t.hero.subtitle}{' '}
                  <strong className='text-white lg:text-[#274223]'>
                    {t.hero.subtitleHighlight}
                  </strong>{' '}
                  {t.hero.subtitleEnd}
                </p>
              </div>

              {/* CTA gumbi */}
              <div className='flex flex-col sm:flex-row flex-wrap gap-3 pt-2'>
                <Link href='/biljke'>
                  <button
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-2xl transition-all hover:scale-105'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Leaf className='w-4 sm:w-5 h-4 sm:h-5' />
                    {t.hero.explorePlants}
                    <ArrowRight className='w-4 sm:w-5 h-4 sm:h-5' />
                  </button>
                </Link>
                <Link href='/kontakt'>
                  <button
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-bold bg-white/95 hover:bg-white transition-all shadow-xl backdrop-blur-sm lg:bg-white lg:backdrop-blur-none'
                    style={{ border: '2px solid #274223', color: '#274223' }}
                  >
                    <Phone className='w-4 sm:w-5 h-4 sm:h-5' />
                    {t.hero.contact}
                  </button>
                </Link>
              </div>

              {/* Trust badges - umjesto statistika */}
              <div className='flex flex-wrap gap-2 sm:gap-4 pt-4'>
                <div className='flex items-center gap-2 px-0 lg:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold'>
                  <span className='text-base sm:text-lg text-white lg:text-[#274223]'>
                    ✓
                  </span>
                  <span className='text-white lg:text-neutral-800'>
                    {t.hero.freeDelivery}
                  </span>
                </div>
                <div className='flex items-center gap-2 px-0 lg:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold'>
                  <span className='text-base sm:text-lg text-white lg:text-[#274223]'>
                    ✓
                  </span>
                  <span className='text-white lg:text-neutral-800'>
                    {t.hero.qualityGuarantee}
                  </span>
                </div>
                <div className='flex items-center gap-2 px-0 lg:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold'>
                  <span className='text-base sm:text-lg text-white lg:text-[#274223]'>
                    ✓
                  </span>
                  <span className='text-white lg:text-neutral-800'>
                    {t.hero.expertAdvice}
                  </span>
                </div>
              </div>
            </div>

            <div className='lg:col-span-5'></div>
          </div>
        </Container>

        {/* Hero Image - ide do kraja stranice */}
        <div className='absolute top-0 right-0 w-[45%] h-full hidden lg:block'>
          {/* SVG za flowing wave */}
          <svg
            className='absolute left-0 top-0 h-full w-full pointer-events-none'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <defs>
              <clipPath id='flowing-wave' clipPathUnits='objectBoundingBox'>
                <path
                  d='M 0.06,0 
                     Q 0.02,0.15 0.05,0.33
                     Q 0.08,0.50 0.02,0.67
                     Q -0.01,0.85 0.04,1
                     L 1,1
                     L 1,0
                     Z'
                />
              </clipPath>
            </defs>
          </svg>
          <div
            className='w-full h-full relative'
            style={{
              clipPath: 'url(#flowing-wave)',
            }}
          >
            <Image
              src='/img/hero.jpeg'
              alt='Adrisbotanic - Mediteranske biljke i pitari'
              fill
              className='object-cover'
              priority
              sizes='45vw'
              quality={80}
            />
            {/* Tamni overlay preko slike */}
            <div
              className='absolute inset-0 z-10'
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.20)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
