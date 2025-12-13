'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, Phone } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Početna', href: '/' },
    { label: 'Naše Biljke', href: '/biljke' },
    { label: 'Savjeti', href: '/blog' },
    { label: 'O Nama', href: '/o-nama' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex flex-col h-full'>
          {/* Header */}
          <div
            className='flex items-center justify-between px-4 py-2 border-b-2'
            style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
          >
            <Link href='/' onClick={onClose}>
              <Image
                src='/img/logo.svg'
                alt='Adrisbotanic Logo'
                width={100}
                height={100}
                className='w-24 h-24'
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
          </nav>

          {/* Bottom Contact */}
          <div
            className='border-t-2 p-5'
            style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
          >
            <a
              href='tel:+385919211069'
              className='flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-bold transition-all'
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
