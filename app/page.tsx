import { Hero } from './components/home/Hero';
import { Categories } from './components/home/Categories';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { CallToAction } from './components/home/CallToAction';

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
