'use client';

import { openCookieSettings } from '@/app/lib/consent';

/** Gumb/link koji otvara postavke kolačića (za server-komponente poput politike privatnosti). */
export const CookieSettingsButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, style }) => (
  <button type='button' onClick={openCookieSettings} className={className} style={style}>
    {children}
  </button>
);
