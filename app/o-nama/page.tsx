'use client';

import { Container } from '../components/ui/Container';
import Image from 'next/image';
import {
  Heart,
  Award,
  Users,
  Leaf,
  Shield,
  Truck,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/app/i18n';

export default function ONamaPage() {
  const t = useTranslations();

  const values = [
    {
      icon: Heart,
      title: t.aboutPage.values.passion.title,
      description: t.aboutPage.values.passion.description,
    },
    {
      icon: Award,
      title: t.aboutPage.values.quality.title,
      description: t.aboutPage.values.quality.description,
    },
    {
      icon: Users,
      title: t.aboutPage.values.support.title,
      description: t.aboutPage.values.support.description,
    },
    {
      icon: Shield,
      title: t.aboutPage.values.reliability.title,
      description: t.aboutPage.values.reliability.description,
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: t.aboutPage.benefits.advice.title,
      description: t.aboutPage.benefits.advice.description,
    },
    {
      icon: Truck,
      title: t.aboutPage.benefits.delivery.title,
      description: t.aboutPage.benefits.delivery.description,
    },
    {
      icon: Shield,
      title: t.aboutPage.benefits.guarantee.title,
      description: t.aboutPage.benefits.guarantee.description,
    },
    {
      icon: Phone,
      title: t.aboutPage.benefits.support.title,
      description: t.aboutPage.benefits.support.description,
    },
  ];

  const stats = [
    { number: '15+', label: t.aboutPage.yearsExperience },
    { number: '500+', label: t.aboutPage.satisfiedCustomers },
    { number: '1000+', label: t.aboutPage.successfulProjects },
    { number: '50+', label: t.aboutPage.plantTypes },
  ];

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
              <Leaf className='w-4 h-4' />
              <span>{t.aboutPage.badge}</span>
            </div>

            <h1 
              className='font-bold leading-[1.1]'
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.75rem)'
              }}
            >
              <span style={{ color: '#8fb588' }}>{t.aboutPage.title}</span>
              <br />
              <span className='text-white'>
                {t.aboutPage.subtitle}
              </span>
            </h1>

            <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
              {t.aboutPage.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className='py-16 md:py-24 bg-white'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Text */}
            <div className='space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-900'>
                {t.aboutPage.ourStory}
              </h2>
              <div className='space-y-4 text-lg text-neutral-600 leading-relaxed'>
                <p>{t.aboutPage.storyP1}</p>
                <p>{t.aboutPage.storyP2}</p>
                <p>{t.aboutPage.storyP3}</p>
              </div>

              <div className='flex flex-wrap gap-3 pt-4'>
                <Link href='/kontakt'>
                  <button
                    className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Phone className='w-5 h-5' />
                    {t.aboutPage.contactUs}
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className='aspect-square rounded-3xl overflow-hidden shadow-2xl relative'>
                <Image
                  src='/img/palme.jpeg'
                  alt='Adrisbotanic rasadnik'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section
        className='py-16 md:py-20'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div
                  className='text-4xl md:text-5xl font-bold mb-2'
                  style={{ color: '#274223' }}
                >
                  {stat.number}
                </div>
                <div className='text-neutral-600 font-medium'>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className='py-16 md:py-24 bg-white'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
              {t.aboutPage.ourValues} <span style={{ color: '#274223' }}>{t.aboutPage.valuesHighlight}</span>
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              {t.aboutPage.valuesDesc}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='text-center p-8 rounded-2xl transition-all hover:shadow-xl'
                  style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
                >
                  <div
                    className='w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-neutral-900 mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-neutral-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section
        className='py-16 md:py-24'
        style={{ backgroundColor: '#fafbfa' }}
      >
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-4'>
              {t.aboutPage.whyChoose}{' '}
              <span style={{ color: '#274223' }}>{t.aboutPage.whyChooseHighlight}</span>?
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              {t.aboutPage.whyChooseDesc}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className='flex items-start gap-4 p-6 rounded-2xl bg-white border-2 transition-all hover:shadow-lg'
                  style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                >
                  <div
                    className='w-14 h-14 rounded-xl flex items-center justify-center shrink-0'
                    style={{ backgroundColor: '#274223' }}
                  >
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                      {benefit.title}
                    </h3>
                    <p className='text-neutral-600'>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-20 bg-white'>
        <Container>
          <div
            className='rounded-3xl p-12 md:p-16 text-center'
            style={{ backgroundColor: '#274223' }}
          >
            <div className='max-w-3xl mx-auto space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>
                {t.aboutPage.readyToStart}
              </h2>

              <p className='text-lg text-white/90'>
                {t.aboutPage.readyDesc}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <Link href='/kontakt' className='w-full sm:w-auto'>
                  <button
                    className='w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50'
                    style={{ color: '#274223' }}
                  >
                    <Phone className='w-5 h-5' />
                    {t.aboutPage.contactUs}
                  </button>
                </Link>
                <Link href='/biljke' className='w-full sm:w-auto'>
                  <button className='w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white'>
                    {t.aboutPage.viewPlants}
                  </button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className='pt-8 flex flex-col md:flex-row gap-6 justify-center items-center text-white/90 text-sm border-t border-white/20 mt-8'>
                <a href='tel:+385919211069' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
                  <Phone className='w-4 h-4' />
                  <span>+385 91 921 1069</span>
                </a>
                <div className='hidden md:block w-px h-4 bg-white/30' />
                <div>
                  <span>{t.aboutPage.workHours}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
