import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Nama - Adris Botanic | Obiteljski Rasadnik s Tradicijom',
  description:
    'Upoznajte Adris Botanic - obiteljski rasadnik mediteranskih biljaka s dugogodišnjom tradicijom. Specijalizirani za uzgoj maslina, palmi i egzotičnog bilja. Stručnost i kvaliteta koju možete osjetiti.',
  keywords: [
    'rasadnik Adris Botanic',
    'obiteljski rasadnik',
    'uzgoj maslina',
    'uzgoj palmi',
    'rasadnik Kaštel Štafilić',
    'mediteranske biljke Split',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/o-nama',
  },
  openGraph: {
    title: 'O Nama | Adris Botanic - Obiteljski Rasadnik',
    description:
      'Obiteljski rasadnik mediteranskih biljaka s dugogodišnjom tradicijom. Stručnost i kvaliteta.',
    url: 'https://adrisbotanic.com/o-nama',
  },
};

export default function ONamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

