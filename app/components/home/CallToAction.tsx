'use client';

import React from 'react';
import { Container } from '@/app/components/ui/Container';
import { Phone, Mail, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/app/i18n';

export const CallToAction: React.FC = () => {
  const t = useTranslations();

  return (
    <section
      className='py-16 md:py-20 text-white relative overflow-hidden'
      style={{ backgroundColor: '#274223' }}
    >
      {/* Decorative elements */}
      <div
        className='absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl'
        style={{ backgroundColor: '#3d4f37', opacity: 0.3 }}
      />
      <div
        className='absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl'
        style={{ backgroundColor: '#1a2c17', opacity: 0.3 }}
      />

      <Container>
        <div className='relative z-10 text-center space-y-6 max-w-3xl mx-auto'>
          <div
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-2'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <Leaf className='w-4 h-4' />
            {t.cta.badge}
          </div>

          <h2 
            className='font-bold'
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 3rem)'
            }}
          >
            {t.cta.title}
          </h2>

          <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
            {t.cta.subtitle}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
            <a
              href='tel:+385919211069'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold bg-white transition-all hover:bg-neutral-50'
              style={{ color: '#274223' }}
            >
              <Phone className='w-5 h-5' />
              {t.cta.callUs}
            </a>
            <Link href='/kontakt'>
              <button
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10'
                style={{ border: '2px solid white' }}
              >
                <Mail className='w-5 h-5' />
                {t.cta.sendInquiry}
              </button>
            </Link>
          </div>

          {/* Contact info */}
          <div className='pt-6 flex flex-col md:flex-row gap-6 justify-center items-center text-white/90 text-sm'>
            <a href='tel:+385919211069' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <Phone className='w-4 h-4' />
              <span>+385 91 921 1069</span>
            </a>
            <div className='hidden md:block w-px h-4 bg-white/30' />
            <div className='flex items-center gap-2'>
              <Mail className='w-4 h-4' />
              <span>info@adrisbotanic.com</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
