import { Metadata } from 'next';
import { Hero } from './components/home/Hero';
import { Categories } from './components/home/Categories';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { CallToAction } from './components/home/CallToAction';

export const metadata: Metadata = {
  title: 'Adris Botanic | Rasadnik Mediteranskih Biljaka - Masline, Palme, Agrumi | Kaštel Štafilić',
  description:
    'Adris Botanic - Najkvalitetniji rasadnik mediteranskih biljaka u Hrvatskoj. Masline, palme, agrumi, lavanda i egzotično bilje. Profesionalno savjetovanje, dostava i sadnja. Posjetite nas u Kaštel Štafiliću!',
  alternates: {
    canonical: 'https://adrisbotanic.com',
  },
  openGraph: {
    title: 'Adris Botanic | Rasadnik Mediteranskih Biljaka',
    description: 'Najkvalitetniji rasadnik mediteranskih biljaka u Hrvatskoj. Masline, palme, agrumi i više.',
    url: 'https://adrisbotanic.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CallToAction />
    </>
  );
}
