import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { SplashScreen } from './components/ui/SplashScreen';
import { LanguageProvider } from './i18n';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adrisbotanic.com'),
  title: {
    default: 'Adris Botanic | Rasadnik Mediteranskih Biljaka - Masline, Palme, Agrumi | Kaštel Štafilić',
    template: '%s | Adris Botanic - Rasadnik Mediteranskih Biljaka',
  },
  description:
    'Adris Botanic - Vodeći rasadnik mediteranskih biljaka u Hrvatskoj. Prodaja maslina, palmi, agruma, lavande i egzotičnog bilja. Stručno savjetovanje, dostava i sadnja. Posjetite nas u Kaštel Štafiliću!',
  keywords: [
    // Glavni pojmovi
    'rasadnik',
    'rasadnik biljaka',
    'vrtni centar',
    'mediteranske biljke',
    'mediteransko bilje',
    // Masline
    'masline',
    'maslina prodaja',
    'maslina cijena',
    'maslina stablo',
    'sadnica masline',
    'masline za vrt',
    'kupnja maslina',
    // Palme
    'palme',
    'palma prodaja',
    'palma cijena',
    'palme za vrt',
    'mediteranske palme',
    'trachycarpus',
    'phoenix palma',
    // Agrumi
    'agrumi',
    'limun',
    'naranča',
    'mandarina',
    'agrumi prodaja',
    // Ostale biljke
    'lavanda',
    'ružmarin',
    'oleander',
    'bugenvilija',
    'čempres',
    'lovor',
    // Lokacija
    'Kaštel Štafilić',
    'Split',
    'Dalmacija',
    'Hrvatska',
    'vrtni centar Split',
    'rasadnik Dalmacija',
    'rasadnik Split',
  ],
  authors: [{ name: 'Adris Botanic' }],
  creator: 'Adris Botanic',
  publisher: 'Adris Botanic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://adrisbotanic.com',
  },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://adrisbotanic.com',
    siteName: 'Adris Botanic',
    title: 'Adris Botanic | Rasadnik Mediteranskih Biljaka - Masline, Palme, Agrumi',
    description:
      'Vodeći rasadnik mediteranskih biljaka u Hrvatskoj. Masline, palme, agrumi, lavanda i egzotično bilje. Stručno savjetovanje i dostava. Kaštel Štafilić.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adris Botanic - Rasadnik mediteranskih biljaka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adris Botanic | Rasadnik Mediteranskih Biljaka',
    description:
      'Vodeći rasadnik mediteranskih biljaka u Hrvatskoj. Masline, palme, agrumi i više.',
    images: ['/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Dodaj svoje verification kodove kad ih dobiješ
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
  category: 'business',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://adrisbotanic.com/#organization',
      name: 'Adris Botanic',
      url: 'https://adrisbotanic.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adrisbotanic.com/img/logo.svg',
        width: 200,
        height: 60,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+385-91-921-1069',
        contactType: 'customer service',
        availableLanguage: ['Croatian', 'English'],
        areaServed: 'HR',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cesta pape Ivana Pavla II. 380',
        addressLocality: 'Kaštel Štafilić',
        addressRegion: 'Splitsko-dalmatinska županija',
        postalCode: '21217',
        addressCountry: 'HR',
      },
      sameAs: [
        'https://www.facebook.com/adrisbotanic',
        'https://www.instagram.com/adrisbotanic',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://adrisbotanic.com/#localbusiness',
      name: 'Adris Botanic - Rasadnik Mediteranskih Biljaka',
      image: 'https://adrisbotanic.com/img/hero.jpeg',
      description:
        'Rasadnik mediteranskih biljaka u Kaštel Štafiliću. Prodaja maslina, palmi, agruma, lavande i egzotičnog bilja. Stručno savjetovanje, dostava i profesionalna sadnja.',
      url: 'https://adrisbotanic.com',
      telephone: '+385919211069',
      email: 'info@adrisbotanic.com',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cesta pape Ivana Pavla II. 380',
        addressLocality: 'Kaštel Štafilić',
        addressRegion: 'Splitsko-dalmatinska županija',
        postalCode: '21217',
        addressCountry: 'HR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.5503,
        longitude: 16.3367,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mediteranske biljke',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Masline',
              description: 'Kvalitetne sadnice maslina različitih sorti i veličina',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Palme',
              description: 'Mediteranske i egzotične palme za vrt i terasu',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Agrumi',
              description: 'Limuni, naranče, mandarine i ostali agrumi',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Aromatično bilje',
              description: 'Lavanda, ružmarin, kadulja i mediteransko začinsko bilje',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adrisbotanic.com/#website',
      url: 'https://adrisbotanic.com',
      name: 'Adris Botanic',
      description: 'Rasadnik mediteranskih biljaka - masline, palme, agrumi',
      publisher: {
        '@id': 'https://adrisbotanic.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://adrisbotanic.com/biljke?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'hr',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hr' className={plusJakarta.variable}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#274223' />
        <meta name='geo.region' content='HR-17' />
        <meta name='geo.placename' content='Kaštel Štafilić' />
        <meta name='geo.position' content='43.5503;16.3367' />
        <meta name='ICBM' content='43.5503, 16.3367' />
      </head>
      <body className={`flex flex-col min-h-screen ${plusJakarta.className}`}>
        <SplashScreen />
        <LanguageProvider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
