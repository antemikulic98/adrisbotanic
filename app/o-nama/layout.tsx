import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Nama | Rasadnik Palmi i Maslina Split - Adris Botanic',
  description:
    'Adris Botanic - obiteljski rasadnik palmi i maslina u Splitu s dugogodišnjom tradicijom. Specijalizirani za uzgoj i prodaju palmi, maslina, agruma i mediteranskih biljaka. Dostava po cijeloj Hrvatskoj.',
  keywords: [
    'rasadnik palmi split',
    'rasadnik maslina split',
    'uzgoj palmi hrvatska',
    'uzgoj maslina hrvatska',
    'obiteljski rasadnik split',
    'mediteranske biljke uzgoj',
    'prodaja palmi dalmacija',
    'prodaja maslina dalmacija',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/o-nama',
  },
  openGraph: {
    title: 'O Nama | Rasadnik Palmi i Maslina Split - Adris Botanic',
    description:
      'Obiteljski rasadnik palmi i maslina u Splitu. Stručnost i kvaliteta u uzgoju mediteranskih biljaka.',
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




