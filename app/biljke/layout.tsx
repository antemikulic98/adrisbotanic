import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naše Biljke - Masline, Palme, Agrumi i Mediteransko Bilje',
  description:
    'Pogledajte našu ponudu mediteranskih biljaka: masline svih veličina, palme (Trachycarpus, Phoenix, Chamaerops), agrumi, lavanda, ružmarin, oleander i više. Kvalitetne sadnice s garancijom. Dostava po cijeloj Hrvatskoj.',
  keywords: [
    'masline prodaja',
    'palme prodaja',
    'agrumi prodaja',
    'mediteranske biljke',
    'sadnice maslina',
    'sadnice palmi',
    'lavanda',
    'oleander',
    'bugenvilija',
    'rasadnik Split',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/biljke',
  },
  openGraph: {
    title: 'Naše Biljke | Adris Botanic - Masline, Palme, Agrumi',
    description:
      'Široka ponuda mediteranskih biljaka: masline, palme, agrumi, lavanda i više. Kvalitetne sadnice s garancijom.',
    url: 'https://adrisbotanic.com/biljke',
  },
};

export default function BiljkeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



