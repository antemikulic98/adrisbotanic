# 🌿 Adrisbotanic.com

Moderna web stranica za vrtni centar - Masline, Palme & Hortikultira

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

---

## 📁 Struktura Projekta

```
app/
├── components/
│   ├── ui/              # Reusable UI komponente
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Badge.tsx
│   ├── layout/          # Layout komponente
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── NavLink.tsx
│   │   └── MobileMenu.tsx
│   └── home/            # Homepage komponente
│       ├── Hero.tsx
│       ├── Categories.tsx
│       └── FeaturedProducts.tsx
├── lib/
│   └── utils.ts         # Helper funkcije
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Homepage
```

---

## 🎨 Design System

### Boje

- **Primary:** `#274223` (Tamno Zelena)
- **Secondary:** `#4A6F42` (Svijetlija Zelena)
- **Accent:** `#8B5A2B` (Zemljana Smeđa - za CTA)
- **Neutralne:** Gray scale
- **Success:** `#52C41A`
- **Warning:** `#FAAD14`
- **Error:** `#F5222D`

### Komponente

Sve komponente su u `app/components/` i su **reusable** i **customizable**.

#### Button

```tsx
import { Button } from '@/app/components/ui/Button';

<Button variant='primary' size='lg'>
  Click Me
</Button>;
```

Variants: `primary`, `secondary`, `accent`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

#### Card

```tsx
import { Card } from '@/app/components/ui/Card';

<Card hover padding='md'>
  Content here
</Card>;
```

#### Badge

```tsx
import { Badge } from '@/app/components/ui/Badge';

<Badge variant='new'>Novo</Badge>;
```

Variants: `new`, `popular`, `sale`, `default`

---

## ✏️ Kako Popuniti Placeholder Sadržaj

### 1. **Tekstovi**

Svi placeholder tekstovi su označeni sa:

- "Placeholder tekst"
- "Lorem ipsum..."
- "[Naziv]"

**Gdje ih naći:**

- `app/components/home/Hero.tsx` - Hero sekcija tekstovi
- `app/components/layout/Header.tsx` - Kontakt info (telefon)
- `app/components/layout/Footer.tsx` - Adresa, telefon, email, social media linkovi

**Kako ažurirati:**

1. Otvori file
2. Pronađi placeholder tekst (npr. "+385 XX XXX XXXX")
3. Zamijeni sa pravim tekstom
4. Save

### 2. **Slike**

Trenutno sve slike su **placeholder** (emoji ikone i text).

**Gdje dodati prave slike:**

#### Hero Sekcija (`app/components/home/Hero.tsx`)

Zamijeni `<div className="aspect-square...">` blok sa:

```tsx
<Image
  src='/images/hero-masline.jpg'
  alt='Masline i palme'
  width={600}
  height={600}
  className='rounded-2xl shadow-2xl'
/>
```

#### Featured Products (`app/components/home/FeaturedProducts.tsx`)

Zamijeni placeholder u `ProductCard` komponenti:

```tsx
<Image src={product.image} alt={product.name} fill className='object-cover' />
```

**Preporučene dimenzije slika:**

- Hero slika: 1200x1200px (square)
- Product slike: 600x600px (square)
- Logo: 200x50px (transparent PNG)

**Gdje staviti slike:**

- `/public/images/` folder (kreiraj ga)
- Reference u kodu kao: `/images/naziv-slike.jpg`

### 3. **Proizvodi (Featured Products)**

Ažuriraj `products` array u `app/components/home/FeaturedProducts.tsx`:

```tsx
const products: Product[] = [
  {
    id: '1',
    name: 'Maslina Oblica 1.5m', // ✏️ Tvoj naziv
    category: 'Masline', // ✏️ Tvoja kategorija
    badge: 'popular', // new | popular | sale
    type: 'presentation', // presentation ili shop
    image: '/images/maslina-oblica.jpg', // ✏️ Tvoja slika
    href: '/biljke/masline/oblica', // ✏️ Tvoj link
  },
  // Dodaj više proizvoda...
];
```

### 4. **Kategorije**

Ažuriraj `categories` array u `app/components/home/Categories.tsx`:

```tsx
{
  title: "Masline",                     // ✏️ Tvoj naslov
  description: "Tvoj opis...",          // ✏️ Tvoj opis
  icon: <TreePine className="w-8 h-8" />, // Ikona (može ostati)
  href: "/biljke/masline",              // ✏️ Tvoj link
  type: "presentation",
}
```

### 5. **Kontakt Informacije**

#### Header (`app/components/layout/Header.tsx`)

```tsx
<span>+385 XX XXX XXXX</span>  // ✏️ Tvoj broj
<span>Radimo: Pon-Pet 8:00-20:00, Sub 9:00-14:00</span> // ✏️ Tvoje radno vrijeme
```

#### Footer (`app/components/layout/Footer.tsx`)

```tsx
<span className="text-sm">
  Ulica i Broj<br />      // ✏️ Tvoja adresa
  Grad, 00000
</span>

<a href="tel:+385XXXXXXXXX">  // ✏️ Tvoj tel
  +385 XX XXX XXXX
</a>

<a href="mailto:info@adrisbotanic.com">  // ✏️ Tvoj email
  info@adrisbotanic.com
</a>

<a href="https://facebook.com">  // ✏️ Tvoj Facebook
<a href="https://instagram.com"> // ✏️ Tvoj Instagram
```

### 6. **Logo**

Logo je trenutno tekst + ikona. Za pravi logo:

**Opcija 1:** Zamijeni u `app/components/layout/Logo.tsx`:

```tsx
<Image src='/images/logo.png' alt='Adrisbotanic' width={180} height={50} />
```

**Opcija 2:** Zadrži trenutni dizajn i samo ažuriraj tekst.

### 7. **Meta Tags (SEO)**

Ažuriraj u `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Adrisbotanic - Masline, Palme & Hortikultira', // ✏️ Tvoj title
  description: 'Tvoj opis...', // ✏️ Tvoj opis
  keywords: 'masline, palme...', // ✏️ Tvoje keywords
};
```

---

## 🎯 Sljedeći Koraci - Razvoj

### Faza 1: Content ✅ (Done)

- [x] Homepage struktura
- [x] Header & Footer
- [x] Basic komponente

### Faza 2: Prezentacijski Katalog (Biljke) 🔜

- [ ] `/biljke` stranica (grid prikaz)
- [ ] `/biljke/[kategory]` stranice (masline, palme, vanjske)
- [ ] `/biljke/[category]/[slug]` detail stranice
- [ ] "Pitaj za cijenu" forma

### Faza 3: E-Commerce (Shop) 🔜

- [ ] `/shop` stranica
- [ ] `/shop/[category]` stranice (pitari, oprema, supstrati)
- [ ] `/shop/cart` košarica
- [ ] `/shop/checkout` checkout proces
- [ ] Payment integracija

### Faza 4: Dodatno 🔜

- [ ] `/blog` stranica
- [ ] `/kontakt` stranica
- [ ] `/o-nama` stranica
- [ ] Admin panel (CMS)

---

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Package Manager:** Yarn

---

## 🐛 Troubleshooting

### Port već zauzet

```bash
# Kill process na portu 3000
kill -9 $(lsof -t -i:3000)

# Ili pokreni na drugom portu
yarn dev -p 3001
```

### Styling ne radi

```bash
# Clear cache i rebuild
rm -rf .next
yarn dev
```

---

## 📞 Podrška

Za pitanja ili pomoć sa popunjavanjem sadržaja, kontaktiraj developera.

**Happy Coding!** 🌿🚀
