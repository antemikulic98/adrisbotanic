import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Adris Botanic | Posjetite Nas u Kaštel Štafiliću',
  description:
    'Kontaktirajte Adris Botanic rasadnik. Adresa: Cesta pape Ivana Pavla II. 380, Kaštel Štafilić. Telefon: +385 91 921 1069. Radno vrijeme: Pon-Pet 8-20h, Sub 9-14h. Besplatno savjetovanje!',
  keywords: [
    'kontakt Adris Botanic',
    'rasadnik Kaštel Štafilić',
    'rasadnik Split',
    'vrtni centar kontakt',
    'mediteranske biljke Split',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/kontakt',
  },
  openGraph: {
    title: 'Kontakt | Adris Botanic - Posjetite Nas',
    description:
      'Posjetite Adris Botanic rasadnik u Kaštel Štafiliću. Telefon: +385 91 921 1069. Besplatno savjetovanje!',
    url: 'https://adrisbotanic.com/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



