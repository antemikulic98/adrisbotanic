import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Rasadnik Palmi i Maslina Split - Kaštel Štafilić',
  description:
    'Posjetite rasadnik palmi i maslina kod Splita. Adresa: Cesta pape Ivana Pavla II. 380, Kaštel Štafilić. Tel: +385 91 921 1069. Pon-Pet 8-20h, Sub 9-14h. Besplatno savjetovanje za palme i masline!',
  keywords: [
    'rasadnik split kontakt',
    'rasadnik palmi split',
    'rasadnik maslina split',
    'vrtni centar split',
    'rasadnik kaštel štafilić',
    'kupiti palmu split',
    'kupiti maslinu split',
    'prodaja palmi split lokacija',
    'prodaja maslina split lokacija',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/kontakt',
  },
  openGraph: {
    title: 'Kontakt | Rasadnik Palmi i Maslina Split - Adris Botanic',
    description:
      'Posjetite rasadnik palmi i maslina u Kaštel Štafiliću kod Splita. Tel: +385 91 921 1069. Besplatno savjetovanje!',
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




