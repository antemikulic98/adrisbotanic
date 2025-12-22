'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { useTranslations } from '@/app/i18n';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const t = useTranslations();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.plants, href: '/biljke' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.about, href: '/o-nama' },
    { label: t.nav.contact, href: '/kontakt' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-[9998] lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-sm bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden overflow-hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex flex-col h-full overflow-hidden'>
          {/* Header */}
          <div
            className='flex items-center justify-between px-4 py-5 border-b-2'
            style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
          >
            <Link href='/' onClick={onClose}>
              <Image
                src='/img/logo.svg'
                alt='Adrisbotanic Logo'
                width={80}
                height={40}
                className='w-20 h-auto'
              />
            </Link>
            <button
              onClick={onClose}
              className='text-neutral-600 hover:text-primary w-8 h-8 flex items-center justify-center rounded-full transition-colors'
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.08)' }}
              aria-label='Close menu'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='flex-1 overflow-y-auto py-4'>
            <ul className='space-y-2 px-4'>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className='flex items-center px-4 py-3 text-base font-semibold text-neutral-700 rounded-xl transition-all hover:shadow-md'
                    style={{
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'rgba(39, 66, 35, 0.08)';
                      e.currentTarget.style.color = '#274223';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className='mt-6 mx-4 p-4 rounded-xl space-y-3 text-sm' style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}>
              <a 
                href='https://maps.google.com/?q=Cesta+pape+Ivana+Pavla+II.+380,+Kaštel+Štafilić' 
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start gap-3 text-neutral-600 hover:text-[#274223] transition-colors'
              >
                <MapPin className='w-4 h-4 mt-0.5 flex-shrink-0' style={{ color: '#274223' }} />
                <div>
                  <p>Cesta pape Ivana Pavla II. 380</p>
                  <p>Kaštel Štafilić</p>
                </div>
              </a>
              <a 
                href='mailto:info@adrisbotanic.com'
                className='flex items-center gap-3 text-neutral-600 hover:text-[#274223] transition-colors'
              >
                <Mail className='w-4 h-4 flex-shrink-0' style={{ color: '#274223' }} />
                <span>info@adrisbotanic.com</span>
              </a>
              <div className='flex items-start gap-3 text-neutral-600'>
                <Clock className='w-4 h-4 mt-0.5 flex-shrink-0' style={{ color: '#274223' }} />
                <div>
                  <p>{t.mobileMenu.workHours}</p>
                  <p>{t.mobileMenu.satHours}</p>
                </div>
              </div>
            </div>
          </nav>

          {/* Bottom Contact */}
          <div
            className='border-t-2 p-5'
            style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
          >
            <a
              href='tel:+385919211069'
              className='flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-bold transition-all hover:opacity-90'
              style={{ backgroundColor: '#274223' }}
            >
              <Phone className='w-5 h-5' />
              <span>+385 91 921 1069</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
