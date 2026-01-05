'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if user has seen splash before in this session
    // This helps with PageSpeed scores while keeping nice UX for first visit
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }
    
    sessionStorage.setItem('hasSeenSplash', 'true');
    
    const animateTimer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 2800);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(animateTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#274223] transition-opacity duration-700 ${
        isAnimatingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Elegant Palm Tree */}
      <div className="relative mb-12 animate-palm-enter">
        <svg
          width="120"
          height="150"
          viewBox="0 0 120 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A86C" />
              <stop offset="50%" stopColor="#E0C992" />
              <stop offset="100%" stopColor="#C9A86C" />
            </linearGradient>
          </defs>
          
          {/* Trunk with subtle curve */}
          <path
            d="M57 150 C57 150 56 100 57 70 Q58 58 60 55 Q62 58 63 70 C64 100 63 150 63 150"
            fill="url(#trunkGrad)"
            className="animate-trunk-grow"
          />
          
          {/* Fronds */}
          <g className="animate-fronds-appear">
            {/* Far back fronds (darkest) */}
            <path
              d="M60 56 Q38 52 8 58 Q12 54 20 50 Q40 46 60 54"
              fill="#3D6B38"
              className="animate-frond-1"
            />
            <path
              d="M60 56 Q82 52 112 58 Q108 54 100 50 Q80 46 60 54"
              fill="#3D6B38"
              className="animate-frond-2"
            />
            
            {/* Back diagonal fronds */}
            <path
              d="M60 54 Q32 38 5 30 Q15 34 25 38 Q45 46 60 52"
              fill="#4A7F44"
              className="animate-frond-3"
            />
            <path
              d="M60 54 Q88 38 115 30 Q105 34 95 38 Q75 46 60 52"
              fill="#4A7F44"
              className="animate-frond-4"
            />
            
            {/* Middle swooping fronds */}
            <path
              d="M60 52 Q25 35 0 42 Q8 38 18 35 Q42 32 60 50"
              fill="#5A9B52"
              className="animate-frond-5"
            />
            <path
              d="M60 52 Q95 35 120 42 Q112 38 102 35 Q78 32 60 50"
              fill="#5A9B52"
              className="animate-frond-6"
            />
            
            {/* Front diagonal fronds */}
            <path
              d="M60 50 Q40 25 22 8 Q32 18 42 28 Q54 42 60 48"
              fill="#6BB562"
              className="animate-frond-7"
            />
            <path
              d="M60 50 Q80 25 98 8 Q88 18 78 28 Q66 42 60 48"
              fill="#6BB562"
              className="animate-frond-8"
            />
            
            {/* Center top frond */}
            <path
              d="M60 48 Q58 25 60 2 Q62 25 60 48"
              fill="#7DC974"
              className="animate-frond-center"
            />
            
            {/* Accent highlights on front fronds */}
            <path
              d="M60 50 Q45 32 30 18"
              stroke="#8BD882"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
              className="animate-frond-7"
            />
            <path
              d="M60 50 Q75 32 90 18"
              stroke="#8BD882"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
              className="animate-frond-8"
            />
          </g>
        </svg>
      </div>

      {/* Logo */}
      <div className="animate-logo-reveal">
        <Image
          src="/img/loader-logo.svg"
          alt="Adris Botanic"
          width={229}
          height={140}
          priority
          className="w-52 md:w-64 h-auto"
        />
      </div>

      {/* Subtle loading indicator */}
      <div className="mt-10 w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white/70 rounded-full animate-loading-bar"></div>
      </div>
    </div>
  );
}
