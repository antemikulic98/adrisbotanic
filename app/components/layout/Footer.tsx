'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { useTranslations } from '@/app/i18n';

export const Footer: React.FC = () => {
  const t = useTranslations();

  return (
    <footer className='bg-neutral-900 text-neutral-300'>
      {/* Main Footer */}
      <Container className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Kolona 1: O Nama */}
          <div>
            <div className='mb-4'>
              <Logo variant='white' />
            </div>
            <p className='text-sm leading-relaxed'>
              {t.footer.description}
            </p>
          </div>

          {/* Kolona 2: Linkovi */}
          <div>
            <h3 className='text-white font-semibold mb-4'>{t.footer.quickLinks}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/biljke'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.ourPlants}
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.tipsAndBlog}
                </Link>
              </li>
              <li>
                <Link
                  href='/o-nama'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href='/kontakt'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolona 3: Pomoć */}
          <div>
            <h3 className='text-white font-semibold mb-4'>
              {t.footer.customerSupport}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/faq'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link
                  href='/dostava'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.deliveryReturn}
                </Link>
              </li>
              <li>
                <Link
                  href='/uvjeti'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.termsOfUse}
                </Link>
              </li>
              <li>
                <Link
                  href='/privatnost'
                  className='text-sm hover:text-primary transition-colors'
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolona 4: Kontakt */}
          <div>
            <h3 className='text-white font-semibold mb-4'>{t.footer.contactUs}</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2'>
                <MapPin className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                <a
                  href='https://maps.google.com/?q=Cesta+pape+Ivana+Pavla+II.+380,+Kaštel+Štafilić'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm hover:text-primary transition-colors'
                >
                  Cesta pape Ivana Pavla II. 380
                  <br />
                  Kaštel Štafilić
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='w-5 h-5 text-primary shrink-0' />
                <a
                  href='tel:+385919211069'
                  className='text-sm hover:text-primary transition-colors'
                >
                  +385 91 921 1069
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='w-5 h-5 text-primary shrink-0' />
                <a
                  href='mailto:info@adrisbotanic.com'
                  className='text-sm hover:text-primary transition-colors'
                >
                  info@adrisbotanic.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className='flex gap-3 mt-6'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-neutral-800 p-2 rounded-lg hover:bg-primary transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-neutral-800 p-2 rounded-lg hover:bg-primary transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className='border-t border-neutral-800'>
        <Container className='py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
            <p>
              &copy; {new Date().getFullYear()} Adrisbotanic. {t.footer.copyright}
            </p>
            <div className='flex gap-6'>
              <Link
                href='/privatnost'
                className='hover:text-primary transition-colors'
              >
                {t.footer.privacy}
              </Link>
              <Link
                href='/uvjeti'
                className='hover:text-primary transition-colors'
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
