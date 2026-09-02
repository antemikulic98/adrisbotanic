import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from './components/home/Hero';

// Sekcije ispod folda (koriste Swiper) — lazy load da hero krene što prije
const Categories = dynamic(() =>
  import('./components/home/Categories').then((m) => m.Categories)
);
const FeaturedProducts = dynamic(() =>
  import('./components/home/FeaturedProducts').then((m) => m.FeaturedProducts)
);
const CallToAction = dynamic(() =>
  import('./components/home/CallToAction').then((m) => m.CallToAction)
);

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
