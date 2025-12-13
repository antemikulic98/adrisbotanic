'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed lg:sticky top-0 z-[100] w-full transition-all duration-300 lg:bg-white/95 lg:backdrop-blur-md lg:border-b lg:shadow-sm ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottomColor: 'rgba(39, 66, 35, 0.1)',
      }}
    >
      {/* Top bar - Kontakt info - samo desktop */}
      <div
        className='py-2 hidden lg:block'
        style={{ backgroundColor: '#274223', color: 'white' }}
      >
        <Container>
          <div className='flex justify-between items-center text-xs'>
            <a href='tel:+385919211069' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <Phone className='w-3.5 h-3.5' />
              <span>+385 91 921 1069</span>
            </a>
            <span>Radimo: Pon-Pet 8:00-20:00, Sub 9:00-14:00</span>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          {/* Logo - na mobilnoj bijeli kad nije scrollano, tamni kad je scrollano */}
          {/* Na desktopu uvijek default jer ima bijelu pozadinu */}
          <div className='lg:hidden'>
            <Logo variant={isScrolled ? 'default' : 'white'} />
          </div>
          <div className='hidden lg:block'>
            <Logo variant='default' />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6'>
            <NavLink href='/'>Početna</NavLink>
            <NavLink href='/biljke'>Naše Biljke</NavLink>
            <NavLink href='/blog'>Savjeti</NavLink>
            <NavLink href='/o-nama'>O Nama</NavLink>
            <NavLink href='/kontakt'>Kontakt</NavLink>
          </nav>

          {/* Mobile menu toggle */}
          <div className='flex items-center gap-3'>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden hover:opacity-80 transition-colors ${
                isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
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
