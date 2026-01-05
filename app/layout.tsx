import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { SplashScreen } from './components/ui/SplashScreen';
import { LanguageProvider } from './i18n';

const GTM_ID = 'GTM-TWJHWD5G';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adrisbotanic.com'),
  title: {
    default: 'Prodaja Palmi i Maslina Split | Adris Botanic - Rasadnik Mediteranskih Biljaka Hrvatska',
    template: '%s | Adris Botanic - Prodaja Palmi i Maslina Split',
  },
  description:
    'Prodaja palmi, maslina i mediteranskih biljaka u Splitu i cijeloj Hrvatskoj. Washingtonia, Trachycarpus, stare masline 500+ godina, agrumi, yucca. Dostava i sadnja. Posjetite rasadnik u Kaštel Štafiliću kod Splita!',
  keywords: [
    // PRODAJA PALMI - Prioritetne ključne riječi
    'prodaja palmi',
    'prodaja palmi split',
    'prodaja palmi hrvatska',
    'palme split',
    'palme hrvatska',
    'kupiti palmu',
    'kupiti palmu split',
    'kupiti palmu hrvatska',
    'palma cijena',
    'palme cijena',
    'palme za vrt',
    'mediteranske palme',
    'egzotične palme',
    'trachycarpus prodaja',
    'washingtonia prodaja',
    'phoenix palma',
    'palma vrtni centar',
    // PRODAJA MASLINA - Prioritetne ključne riječi
    'prodaja maslina',
    'prodaja maslina split',
    'prodaja maslina hrvatska',
    'masline split',
    'masline hrvatska',
    'kupiti maslinu',
    'kupiti maslinu split',
    'stare masline prodaja',
    'masline 500 godina',
    'maslina cijena',
    'maslina stablo',
    'sadnica masline',
    'masline za vrt',
    'maslina bonsai',
    // RASADNIK I VRTNI CENTAR
    'rasadnik',
    'rasadnik split',
    'rasadnik hrvatska',
    'rasadnik dalmacija',
    'rasadnik mediteranskih biljaka',
    'vrtni centar split',
    'vrtni centar hrvatska',
    'vrtni centar dalmacija',
    'mediteranske biljke split',
    'mediteranske biljke hrvatska',
    'egzotične biljke split',
    'egzotične biljke hrvatska',
    // AGRUMI
    'agrumi prodaja',
    'agrumi split',
    'limun prodaja',
    'naranča prodaja',
    'agrumi hrvatska',
    // OSTALE BILJKE
    'yucca prodaja',
    'yucca split',
    'oleander prodaja',
    'oleander split',
    'strelitzia prodaja',
    'cycas prodaja',
    'lavanda',
    'ružmarin',
    'bugenvilija',
    // LOKACIJA
    'Kaštel Štafilić',
    'Split',
    'Kaštela',
    'Trogir',
    'Dalmacija',
    'Hrvatska',
    'biljke split',
    'biljke dalmacija',
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
    title: 'Prodaja Palmi i Maslina Split Hrvatska | Adris Botanic Rasadnik',
    description:
      'Prodaja palmi, maslina i mediteranskih biljaka u Splitu. Washingtonia, Trachycarpus, stare masline, agrumi, yucca. Rasadnik Kaštel Štafilić. Dostava Hrvatska.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adris Botanic - Prodaja palmi i maslina Split Hrvatska',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prodaja Palmi i Maslina Split | Adris Botanic',
    description:
      'Prodaja palmi, maslina i mediteranskih biljaka u Splitu i Hrvatskoj. Rasadnik s dostavom.',
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
      name: 'Adris Botanic - Prodaja Palmi i Maslina Split',
      alternateName: ['Rasadnik Adris Botanic', 'Adris Botanic Split', 'Vrtni centar Split'],
      image: 'https://adrisbotanic.com/img/hero.jpeg',
      description:
        'Prodaja palmi i maslina u Splitu i Hrvatskoj. Washingtonia, Trachycarpus, stare masline 500+ godina, agrumi, yucca, oleander. Rasadnik mediteranskih biljaka u Kaštel Štafiliću kod Splita. Dostava i sadnja.',
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
      areaServed: [
        { '@type': 'City', name: 'Split' },
        { '@type': 'City', name: 'Kaštela' },
        { '@type': 'City', name: 'Trogir' },
        { '@type': 'City', name: 'Solin' },
        { '@type': 'City', name: 'Omiš' },
        { '@type': 'AdministrativeArea', name: 'Splitsko-dalmatinska županija' },
        { '@type': 'AdministrativeArea', name: 'Dalmacija' },
        { '@type': 'Country', name: 'Hrvatska' },
      ],
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
        name: 'Prodaja palmi, maslina i mediteranskih biljaka',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Palme - Prodaja palmi Split',
              description: 'Washingtonia Robusta, Trachycarpus Fortunei, Phoenix i druge mediteranske palme. Prodaja palmi u Splitu i cijeloj Hrvatskoj.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Masline - Prodaja maslina Split',
              description: 'Stare masline 500+ godina, bonsai masline, mini masline. Prodaja maslina u Splitu i Hrvatskoj.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Agrumi - Limun, naranča',
              description: 'Limuni, naranče i drugi agrumi za vrt i terasu. Prodaja agruma Split.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Yucca i sukulenti',
              description: 'Yucca Elephantipes, Yucca Rostrata i druge egzotične biljke. Prodaja Split.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Oleander i mediteransko bilje',
              description: 'Oleander, Strelitzia, lavanda, ružmarin i mediteransko bilje.',
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
        {/* Google Tag Manager */}
        <Script
          id='gtm-script'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
