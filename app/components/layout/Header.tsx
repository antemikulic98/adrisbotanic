'use client';

import React, { useState, useEffect } from 'react';
import { Plus, X, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useTranslations } from '@/app/i18n';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

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
              <span>{t.header.phone}</span>
            </a>
            <div className='flex items-center gap-4'>
              <span>{t.header.workHours}</span>
              <div className='w-px h-4 bg-white/30' />
              <LanguageSwitcher variant='desktop' />
            </div>
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
            <NavLink href='/'>{t.nav.home}</NavLink>
            <NavLink href='/biljke'>{t.nav.plants}</NavLink>
            <NavLink href='/blog'>{t.nav.blog}</NavLink>
            <NavLink href='/o-nama'>{t.nav.about}</NavLink>
            <NavLink href='/kontakt'>{t.nav.contact}</NavLink>
          </nav>

          {/* Mobile: Language switcher + Menu toggle */}
          <div className='flex items-center gap-2 lg:hidden'>
            {/* Language Switcher - mobile header */}
            <div className={isScrolled ? '' : '[&_button]:bg-white/20'}>
              <LanguageSwitcher variant='mobile-header' />
            </div>
            
            {/* Mobile menu toggle - Plus icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                isScrolled 
                  ? 'bg-[#274223]/10 text-neutral-800' 
                  : 'bg-white/20 text-white'
              }`}
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Plus className='w-6 h-6' />
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
