import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prodaja Palmi i Maslina Split | Washingtonia, Trachycarpus, Stare Masline',
  description:
    'Prodaja palmi Split - Washingtonia, Trachycarpus, Phoenix. Prodaja maslina - stare masline 500+ godina, bonsai masline. Agrumi, yucca, oleander. Rasadnik Kaštel Štafilić. Dostava po Hrvatskoj.',
  keywords: [
    // Palme - prioritetno
    'prodaja palmi split',
    'prodaja palmi hrvatska',
    'palme split',
    'kupiti palmu split',
    'washingtonia prodaja',
    'trachycarpus prodaja',
    'trachycarpus split',
    'palme cijena',
    'mediteranske palme',
    // Masline - prioritetno
    'prodaja maslina split',
    'prodaja maslina hrvatska',
    'masline split',
    'kupiti maslinu split',
    'stare masline prodaja',
    'masline 500 godina',
    'bonsai maslina',
    'maslina cijena',
    // Ostale biljke
    'yucca prodaja split',
    'oleander prodaja',
    'strelitzia prodaja',
    'cycas prodaja',
    'agrumi split',
    'limun prodaja',
    'naranča prodaja',
    // Lokacija
    'rasadnik split',
    'vrtni centar split',
    'mediteranske biljke split',
    'egzotične biljke split',
    'biljke split',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/biljke',
  },
  openGraph: {
    title: 'Prodaja Palmi i Maslina Split | Adris Botanic',
    description:
      'Prodaja palmi i maslina u Splitu. Washingtonia, Trachycarpus, stare masline 500+ godina, agrumi, yucca. Dostava po Hrvatskoj.',
    url: 'https://adrisbotanic.com/biljke',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prodaja palmi i maslina Split - Adris Botanic',
      },
    ],
  },
};

import { translations } from '@/app/i18n/translations';

// ItemList schema — pomaže Googleu razumjeti ponudu biljaka
const plantNames = Object.values(translations.hr.featured.plants).map(
  (p) => p.name
);

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mediteranske biljke - Adris Botanic',
  url: 'https://adrisbotanic.com/biljke',
  numberOfItems: plantNames.length,
  itemListElement: plantNames.map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
  })),
};

export default function BiljkeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}




