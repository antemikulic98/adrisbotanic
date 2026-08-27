'use client';

import { Container } from '../components/ui/Container';
import {
  TreePine,
  Trees,
  Cherry,
  Flower2,
  Leaf,
  Sun,
  Phone,
  Check,
  X,
} from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { plantImages, palmeHero } from '../lib/images';
import { ContactModal } from '../components/ui/ContactModal';
import { useState } from 'react';
import { useTranslations } from '@/app/i18n';

type CategoryId = 'trees' | 'shrubs' | 'citrus' | 'aromatic' | 'climbers' | 'succulents';
type ProductId = 
  | 'washingtonia' 
  | 'cycas' 
  | 'oleaMiniCalabria' 
  | 'oleaPataBonsai' 
  | 'yuccaElephantipes' 
  | 'ficusAustralis'
  | 'trachycarpus'
  | 'limun'
  | 'naranca'
  | 'sipak'
  | 'yuccaRostrata'
  | 'neriumOleander'
  | 'strelitziaRegina'
  | 'oleaSpecimen'
  | 'oleaMiniPataBonsai'
  | 'dasylirion'
  | 'oleaBall'
  | 'oleaSmallMushroom'
  | 'oleaArbequino'
  | 'oleaBonsai'
  | 'oleaFrantoio'
  | 'oleaOlivarum'
  | 'oleaEtruscoHighTrunk'
  | 'oleaEstaguilaIntensivo';

interface Product {
  id: ProductId;
  image: StaticImageData;
  category: CategoryId;
}

const products: Product[] = [
  // Masivna i sjenovita stabla
  {
    id: 'washingtonia',
    image: plantImages.washingtoniaRobusta,
    category: 'trees',
  },
  {
    id: 'trachycarpus',
    image: plantImages.trachycarpus,
    category: 'trees',
  },
  {
    id: 'oleaMiniCalabria',
    image: plantImages.oleaMiniCalabria,
    category: 'trees',
  },
  {
    id: 'oleaPataBonsai',
    image: plantImages.oleaPataBonsai,
    category: 'trees',
  },
  {
    id: 'oleaMiniPataBonsai',
    image: plantImages.oleaMiniPataBonsai,
    category: 'trees',
  },
  {
    id: 'oleaSpecimen',
    image: plantImages.oleaSpecimen,
    category: 'trees',
  },
  // Veliki grmovi i manja stabla
  {
    id: 'cycas',
    image: plantImages.cycasRevoluta,
    category: 'shrubs',
  },
  {
    id: 'ficusAustralis',
    image: plantImages.ficcusAustralis,
    category: 'shrubs',
  },
  {
    id: 'sipak',
    image: plantImages.sipak,
    category: 'shrubs',
  },
  {
    id: 'neriumOleander',
    image: plantImages.neriumOleander,
    category: 'shrubs',
  },
  {
    id: 'oleaBall',
    image: plantImages.oleaBall,
    category: 'shrubs',
  },
  {
    id: 'oleaSmallMushroom',
    image: plantImages.oleaSmallMushroom,
    category: 'shrubs',
  },
  {
    id: 'oleaArbequino',
    image: plantImages.oleaArabequino,
    category: 'shrubs',
  },
  {
    id: 'oleaBonsai',
    image: plantImages.oleaBonsai,
    category: 'shrubs',
  },
  {
    id: 'oleaFrantoio',
    image: plantImages.oleaFrantoio,
    category: 'shrubs',
  },
  {
    id: 'oleaOlivarum',
    image: plantImages.oleaOlivarum,
    category: 'shrubs',
  },
  {
    id: 'oleaEtruscoHighTrunk',
    image: plantImages.oleaEtruscoHighTrunk,
    category: 'trees',
  },
  {
    id: 'oleaEstaguilaIntensivo',
    image: plantImages.oleaEstaguilaIntesivo,
    category: 'shrubs',
  },
  // Agrumi
  {
    id: 'limun',
    image: plantImages.limun,
    category: 'citrus',
  },
  {
    id: 'naranca',
    image: plantImages.naranca,
    category: 'citrus',
  },
  // Sukulenti i kaktuslike biljke
  {
    id: 'yuccaElephantipes',
    image: plantImages.yuccaElephantipes,
    category: 'succulents',
  },
  {
    id: 'yuccaRostrata',
    image: plantImages.yuccaRostrata,
    category: 'succulents',
  },
  {
    id: 'strelitziaRegina',
    image: plantImages.strellitziaRegina,
    category: 'succulents',
  },
  {
    id: 'dasylirion',
    image: plantImages.dasyliriona,
    category: 'succulents',
  },
];

// Product Detail Modal
const ProductModal: React.FC<{
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onContact: (name: string) => void;
  t: ReturnType<typeof useTranslations>;
}> = ({ product, isOpen, onClose, onContact, t }) => {
  if (!isOpen || !product) return null;

  const plantData = t.featured.plants[product.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Even Bigger */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-neutral-700" />
        </button>

        <div className="flex flex-col md:flex-row md:min-h-[600px]">
          {/* Image */}
          <div className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-auto">
            <Image
              src={product.image}
              alt={plantData.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={70}
              placeholder="blur"
            />
          </div>

          {/* Content - More space */}
          <div className="p-6 md:p-12 md:w-[55%] overflow-y-auto max-h-[50vh] md:max-h-none flex flex-col justify-center">
            <span
              className="self-start text-xs font-bold uppercase tracking-wide mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(39, 66, 35, 0.1)',
                color: '#274223',
              }}
            >
              {plantData.category}
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {plantData.name}
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-8 text-base">
              {plantData.description}
            </p>

            {/* Features */}
            <div
              className="p-5 rounded-xl mb-8"
              style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
            >
              <h3 className="font-bold text-neutral-900 mb-4">
                {t.featured.characteristics}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {plantData.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#274223' }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onContact(plantData.name)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:opacity-90"
              style={{ backgroundColor: '#274223' }}
            >
              <Phone className="w-5 h-5" />
              {t.featured.askAvailability}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Small product card with image and overlay
const ProductCard: React.FC<{
  product: Product;
  onClick: () => void;
  t: ReturnType<typeof useTranslations>;
}> = ({ product, onClick, t }) => {
  const plantData = t.featured.plants[product.id];

  return (
    <button
      onClick={onClick}
      className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
    >
      <Image
        src={product.image}
        alt={plantData.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 50vw, 25vw"
        loading="lazy"
        quality={70}
        placeholder="blur"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-white font-bold text-sm md:text-base drop-shadow-lg">
          {plantData.name}
        </h4>
      </div>
    </button>
  );
};

export default function BiljkePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<CategoryId>('trees');
  const t = useTranslations();

  const openContactModal = (category: string) => {
    setSelectedCategory(category);
    setIsContactModalOpen(true);
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleProductContact = (productName: string) => {
    setIsProductModalOpen(false);
    setSelectedCategory(productName);
    setIsContactModalOpen(true);
  };

  const categories: {
    id: CategoryId;
    title: string;
    examples: string;
    icon: React.ElementType;
    description: string;
    features: string[];
  }[] = [
    {
      id: 'trees',
      title: t.categories.items.trees.title,
      examples: t.categories.items.trees.examples,
      icon: TreePine,
      description:
        'Masivna stabla koja donose sjenu i veličanstven izgled vašem vrtu. Maslina, palme i čempresi su temelj svakog mediteranskog vrta - otporni, dugovječni i impresivni.',
      features: [
        'Visina: 1m - 5m+',
        'Otpornost: -10°C do +40°C',
        'Sadnja: Proljeće i jesen',
        'Idealni za velike vrtove',
        'Dugogodišnje biljke',
        'Donose sjenu i privatnost',
      ],
    },
    {
      id: 'shrubs',
      title: t.categories.items.shrubs.title,
      examples: t.categories.items.shrubs.examples,
      icon: Trees,
      description:
        'Grmovi i manja stabla koja obogaćuju vrt teksturom i bojom. Oleandri, lovor i šipak savršeni su za živice, ukrasne grupacije ili samostalne akcente.',
      features: [
        'Visina: 0.5m - 3m',
        'Cvjetanje: Proljeće-ljeto',
        'Održavanje: Umjereno',
        'Idealni za živice',
        'Bogato lišće i cvijeće',
        'Privlače pčele i leptire',
      ],
    },
    {
      id: 'citrus',
      title: t.categories.items.citrus.title,
      examples: t.categories.items.citrus.examples,
      icon: Cherry,
      description:
        'Aromatični agrumi donose svježinu i miris Mediterana. Limuni, naranče i mandarine savršeni su za terasu ili vrt - dekorativni i daju plodove.',
      features: [
        'Visina: 0.5m - 2.5m',
        'Plodovi: Cijele godine',
        'Potrebna zaštita od mraza',
        'Idealni za terase',
        'Aromatični cvjetovi',
        'Jestivi plodovi',
      ],
    },
    {
      id: 'aromatic',
      title: t.categories.items.aromatic.title,
      examples: t.categories.items.aromatic.examples,
      icon: Flower2,
      description:
        'Mirisne biljke koje oplemenjuju svaki prostor. Lavanda, ružmarin i kadulja savršeni su za kuhanje, aromaterapiju i privlačenje pčela.',
      features: [
        'Visina: 0.3m - 1m',
        'Cvjetanje: Proljeće-ljeto',
        'Održavanje: Minimalno',
        'Otporni na sušu',
        'Aromatični listovi',
        'Koriste se u kuhinji',
      ],
    },
    {
      id: 'climbers',
      title: t.categories.items.climbers.title,
      examples: t.categories.items.climbers.examples,
      icon: Leaf,
      description:
        'Penjačice koje transformiraju zidove, ograde i pergole u zelene oaze. Bugenvilija, jasmin i glicinija donose dramatičnu ljepotu i miris.',
      features: [
        'Visina: 3m - 10m+',
        'Cvjetanje: Proljeće-jesen',
        'Brzi rast',
        'Idealne za pergole',
        'Spektakularno cvjetanje',
        'Privlače pčele',
      ],
    },
    {
      id: 'succulents',
      title: t.categories.items.succulents.title,
      examples: t.categories.items.succulents.examples,
      icon: Sun,
      description:
        'Robusne biljke koje zahtijevaju minimalnu njegu. Agave, kaktusi i yucce savršeni su za sušne uvjete i moderne vrtove.',
      features: [
        'Visina: 0.2m - 3m',
        'Održavanje: Minimalno',
        'Otpornost na sušu: Visoka',
        'Idealni za kamenjare',
        'Dekorativni oblici',
        'Dugovječne biljke',
      ],
    },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab)!;
  const filteredProducts = products.filter((p) => p.category === activeTab);
  const ActiveIcon = activeCategory.icon;

  return (
    <>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        category={selectedCategory}
      />
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onContact={handleProductContact}
        t={t}
      />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={palmeHero}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              quality={70}
              priority
              placeholder="blur"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg mb-2"
                style={{ backgroundColor: '#274223' }}
              >
                <TreePine className="w-4 h-4" />
                <span>{t.plantsPage.badge}</span>
              </div>

              <h1
                className="font-bold leading-[1.1]"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                }}
              >
                <span className="text-white">{t.plantsPage.title}</span>
                <br />
                <span style={{ color: '#8fb588' }}>
                  {t.plantsPage.titleHighlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                {t.plantsPage.subtitle}
              </p>
            </div>
          </Container>
        </section>

        {/* Tabs & Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            {/* Category Tabs - Scrollable on mobile */}
            <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-3 md:flex-wrap md:justify-center scrollbar-hide">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={isActive ? { backgroundColor: '#274223' } : {}}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Category Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Left: Description & Features */}
              <div className="lg:col-span-1 space-y-6">
                {/* Title & Description */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0"
                    style={{ backgroundColor: '#274223' }}
                  >
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
                      {activeCategory.title}
                    </h2>
                    <p
                      className="text-sm font-medium mt-1"
                      style={{ color: '#274223' }}
                    >
                      {activeCategory.examples}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Features */}
                <div
                  className="p-5 rounded-xl"
                  style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
                >
                  <h3 className="font-bold text-neutral-900 mb-4">
                    {t.featured.characteristics}
                  </h3>
                  <div className="space-y-3">
                    {activeCategory.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: '#274223' }}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-neutral-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => openContactModal(activeCategory.title)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:opacity-90"
                  style={{ backgroundColor: '#274223' }}
                >
                  <Phone className="w-5 h-5" />
                  {t.featured.askAvailability}
                </button>
              </div>

              {/* Right: Products Grid */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold text-neutral-900 mb-6">
                  Dostupni proizvodi
                </h3>
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => openProductModal(product)}
                        t={t}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className="text-center py-16 rounded-xl"
                    style={{ backgroundColor: 'rgba(39, 66, 35, 0.05)' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'rgba(39, 66, 35, 0.1)' }}
                    >
                      <ActiveIcon className="w-8 h-8" style={{ color: '#274223' }} />
                    </div>
                    <p className="text-neutral-600 font-medium">
                      Uskoro dodajemo proizvode u ovu kategoriju
                    </p>
                    <p className="text-neutral-500 text-sm mt-2">
                      Kontaktirajte nas za dostupnost
                    </p>
                    <button
                      onClick={() => openContactModal(activeCategory.title)}
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: '#274223' }}
                    >
                      <Phone className="w-4 h-4" />
                      Kontaktiraj nas
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-20 text-white"
          style={{ backgroundColor: '#274223' }}
        >
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.plantsPage.notSure}
              </h2>
              <p className="text-lg text-white/90">{t.plantsPage.notSureDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => openContactModal(t.plantsPage.generalInquiry)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-white transition-all hover:bg-neutral-50"
                  style={{ color: '#274223' }}
                >
                  <Phone className="w-5 h-5" />
                  {t.plantsPage.contactUs}
                </button>
                <Link href="/" className="w-full sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 border-2 border-white">
                    {t.plantsPage.backToHome}
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
