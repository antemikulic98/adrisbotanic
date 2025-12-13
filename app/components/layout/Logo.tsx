'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  // Na mobilnoj: koristi variant prop direktno
  // Na desktopu: uvijek default (tamni) logo
  const logoSrc = variant === 'white' ? '/img/logo-white.svg' : '/img/logo.svg';

  return (
    <Link href='/' className='block group'>
      <Image
        src={logoSrc}
        alt='Adrisbotanic Logo'
        width={150}
        height={150}
        className='w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-[144px] lg:h-[144px] transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] lg:drop-shadow-none'
        priority
      />
    </Link>
  );
};
