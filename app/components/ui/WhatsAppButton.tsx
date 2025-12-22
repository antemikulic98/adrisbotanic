'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from '@/app/i18n';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations();
  
  // Hide button when body has overflow hidden (mobile menu is open)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isMenuOpen = document.body.style.overflow === 'hidden';
      setIsVisible(!isMenuOpen);
    });
    
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['style'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Format: +385 91 921 1069 -> 385919211069 (bez razmaka i +)
  const whatsappNumber = '385919211069';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95'
      style={{
        backgroundColor: '#25D366', // WhatsApp zelena boja
      }}
      aria-label={t.whatsapp.tooltip}
    >
      <MessageCircle className='w-7 h-7 text-white' fill='white' />
    </a>
  );
};
