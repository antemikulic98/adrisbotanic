import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#274223', // Tamno zelena (glavna boja)
          50: '#f3f6f3',
          100: '#e3e9e1',
          200: '#c7d3c4',
          300: '#a3b59d',
          400: '#7f9776',
          500: '#5f7a58',
          600: '#4a6042',
          700: '#3d4f37',
          800: '#32402d',
          900: '#274223', // Main
          950: '#1a2c17',
        },
        // Additional primary with opacity for backgrounds
        'primary-bg': {
          light: 'rgba(39, 66, 35, 0.05)',
          medium: 'rgba(39, 66, 35, 0.1)',
          strong: 'rgba(39, 66, 35, 0.15)',
          stronger: 'rgba(39, 66, 35, 0.2)',
          bold: 'rgba(39, 66, 35, 0.3)',
        },
        // Secondary Green
        secondary: {
          DEFAULT: '#4A6F42',
          light: '#5f8555',
          dark: '#3d5935',
        },
        // Accent (Zemljana smeđa za CTA)
        accent: {
          DEFAULT: '#8B5A2B',
          light: '#a37240',
          dark: '#6f4822',
        },
        // Neutral colors
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#1a1d20',
        },
        // Semantic colors
        success: '#52C41A',
        warning: '#FAAD14',
        error: '#F5222D',
        info: '#1890FF',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
