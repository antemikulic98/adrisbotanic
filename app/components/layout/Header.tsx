'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Heart, User, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className='fixed lg:sticky top-0 z-50 bg-transparent lg:bg-white/95 lg:backdrop-blur-md lg:border-b lg:shadow-sm w-full'
      style={
        {
          borderBottomColor: 'rgba(39, 66, 35, 0.1)',
        } as React.CSSProperties
      }
    >
      {/* Top bar - Kontakt info - samo desktop */}
      <div
        className='py-2 hidden lg:block'
        style={{ backgroundColor: '#274223', color: 'white' }}
      >
        <Container>
          <div className='flex justify-between items-center text-xs'>
            <div className='flex items-center gap-2'>
              <Phone className='w-3.5 h-3.5' />
              <span>+385 XX XXX XXXX</span>
            </div>
            <span>Radimo: Pon-Pet 8:00-20:00, Sub 9:00-14:00</span>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6'>
            <NavLink href='/'>Početna</NavLink>
            <NavLink href='/biljke'>Naše Biljke</NavLink>
            <NavLink href='/shop'>Shop</NavLink>
            <NavLink href='/blog'>Savjeti</NavLink>
            <NavLink href='/o-nama'>O Nama</NavLink>
            <NavLink href='/kontakt'>Kontakt</NavLink>
          </nav>

          {/* Icons */}
          <div className='flex items-center gap-3'>
            {/* Desktop icons */}
            <div className='hidden md:flex items-center gap-3'>
              <Link
                href='/wishlist'
                className='text-neutral-600 hover:text-primary transition-colors'
              >
                <Heart className='w-5 h-5' />
              </Link>
              <Link
                href='/shop/cart'
                className='relative text-neutral-600 hover:text-primary transition-colors'
              >
                <ShoppingCart className='w-5 h-5' />
                <span
                  className='absolute -top-1.5 -right-1.5 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]'
                  style={{ backgroundColor: '#274223' }}
                >
                  0
                </span>
              </Link>
              <Link
                href='/account'
                className='text-neutral-600 hover:text-primary transition-colors'
              >
                <User className='w-5 h-5' />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='lg:hidden text-white lg:text-neutral-800 hover:text-primary transition-colors'
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
