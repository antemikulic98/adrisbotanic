# 📍 Placeholder Lokacije - Gdje Popuniti Sadržaj

## ✏️ Tekstovi za Ažuriranje

### 🏠 Homepage - Hero Sekcija

**File:** `app/components/home/Hero.tsx`

| Linija | Što Ažurirati      | Trenutni Placeholder                    |
| ------ | ------------------ | --------------------------------------- |
| 12     | Dobrodošlica tekst | "🌿 Dobrodošli u Adrisbotanic"          |
| 16-17  | Glavni naslov      | "Masline, Palme & Hortikultira"         |
| 21-23  | Opis               | "Vaš pouzdani partner..."               |
| 52-54  | Statistike         | "15+", "500+", "100%" (brojevi i opisi) |

**Što dodati:**

- ✅ Tvoj branding message
- ✅ Uvjerljiv opis tvoje usluge
- ✅ Prave statistike (godine poslovanja, broj kupaca)

---

### 🏷️ Homepage - Kategorije

**File:** `app/components/home/Categories.tsx`

| Linija | Što Ažurirati    | Trenutni Placeholder            |
| ------ | ---------------- | ------------------------------- |
| 63     | Naslov sekcije   | "Istražite Naše Kategorije"     |
| 66     | Opis sekcije     | "Od maslina i palmi..."         |
| 71-114 | Kategorije array | Imena, opisi, linkovi           |
| 123    | Info banner      | "💡 Savjet: Masline i palme..." |

**Kategorije za ažuriranje:**

1. **Masline** - Ažuriraj opis sorta koje nudiš
2. **Palme** - Ažuriraj vrste palmi
3. **Vanjske Biljke** - Ažuriraj opis
4. **Pitari & Oprema** - Ažuriraj što nudiš

---

### 🛍️ Homepage - Featured Products

**File:** `app/components/home/FeaturedProducts.tsx`

| Linija | Što Ažurirati  | Trenutni Placeholder                             |
| ------ | -------------- | ------------------------------------------------ |
| 82     | Naslov sekcije | "Istaknuti Proizvodi"                            |
| 85     | Podnaslov      | "Najpopularniji izbor..."                        |
| 95-144 | Products array | Svi proizvodi (naziv, cijena, kategorija, slike) |

**Proizvodi za dodati/ažurirati:**

```tsx
{
  id: "1",
  name: "TVOJ PROIZVOD",           // ✏️ Naziv
  price: 65,                        // ✏️ Cijena (undefined za presentation)
  category: "TVOJA KATEGORIJA",    // ✏️ Kategorija
  badge: "new",                     // new | popular | sale | undefined
  type: "shop",                     // shop | presentation
  image: "/images/tvoja-slika.jpg", // ✏️ Path do slike
  href: "/shop/tvoj-link",          // ✏️ Link
}
```

---

### 🧭 Header Navigation

**File:** `app/components/layout/Header.tsx`

| Linija | Što Ažurirati    | Trenutni Placeholder                    |
| ------ | ---------------- | --------------------------------------- |
| 17     | Telefon          | "+385 XX XXX XXXX"                      |
| 19     | Radno vrijeme    | "Pon-Pet 8:00-20:00, Sub 9:00-14:00"    |
| 29-34  | Navigation links | Imena i linkovi (ako želiš promijeniti) |

---

### 🦶 Footer

**File:** `app/components/layout/Footer.tsx`

| Linija  | Što Ažurirati  | Trenutni Placeholder                   |
| ------- | -------------- | -------------------------------------- |
| 16-19   | O nama opis    | "Vaš partner za masline..."            |
| 24-46   | Brzi Linkovi   | Nazivi linkova (ako želiš promijeniti) |
| 51-72   | Pomoć linkovi  | Nazivi linkova                         |
| 88-90   | Adresa         | "Ulica i Broj, Grad, 00000"            |
| 95-96   | Telefon        | "+385 XX XXX XXXX"                     |
| 101-102 | Email          | "info@adrisbotanic.com"                |
| 109     | Facebook link  | "https://facebook.com"                 |
| 116     | Instagram link | "https://instagram.com"                |

---

### 🎨 Logo

**File:** `app/components/layout/Logo.tsx`

| Linija | Što Ažurirati | Trenutni Placeholder             |
| ------ | ------------- | -------------------------------- |
| 9      | Glavni naziv  | "Adrisbotanic"                   |
| 10     | Tagline       | "Masline • Palme • Hortikultira" |

**Opcija:** Zamijeni cijelu komponentu sa `<Image>` ako imaš logo sliku.

---

### 🔍 SEO Meta Tags

**File:** `app/layout.tsx`

| Linija | Što Ažurirati | Trenutni Placeholder                           |
| ------ | ------------- | ---------------------------------------------- |
| 14     | Title         | "Adrisbotanic - Masline, Palme & Hortikultira" |
| 15     | Description   | "Vaš pouzdani partner..."                      |
| 16     | Keywords      | "masline, palme, hortikultira..."              |

---

## 🖼️ Slike za Dodati

### Gdje staviti slike:

1. Kreiraj folder: `/public/images/`
2. Stavi sve slike tamo
3. Reference u kodu kao: `/images/naziv-slike.jpg`

### Potrebne slike:

#### 1. **Hero Slika** (Prioritet: Visok 🔴)

- **File:** `app/components/home/Hero.tsx`, linija ~48
- **Dimenzije:** 1200x1200px (square)
- **Što prikazati:** Masline ili palme, lifestyle shot, vrt, terasa
- **Format:** JPG/PNG/WebP

```tsx
// Zamijeni cijeli <div> blok sa:
<Image
  src='/images/hero-masline.jpg'
  alt='Masline i palme Adrisbotanic'
  width={600}
  height={600}
  className='rounded-2xl shadow-2xl object-cover'
  priority
/>
```

#### 2. **Product Slike** (Prioritet: Visok 🔴)

- **File:** `app/components/home/FeaturedProducts.tsx`, linija ~23
- **Dimenzije:** 600x600px (square)
- **Format:** JPG/PNG/WebP

Za **svaki proizvod** u `products` array:

```tsx
// Update product object:
{
  image: "/images/maslina-oblica.jpg",  // Tvoja slika
}

// U ProductCard komponenti, zamijeni placeholder (linija 23-32):
<Image
  src={product.image}
  alt={product.name}
  fill
  className="object-cover"
/>
```

#### 3. **Logo** (Prioritet: Srednji 🟡)

- **File:** `app/components/layout/Logo.tsx`
- **Dimenzije:** 200x50px (landscape) ili 80x80px (square)
- **Format:** PNG (transparent background)

```tsx
<Image src='/images/logo.png' alt='Adrisbotanic Logo' width={180} height={50} />
```

#### 4. **Favicon** (Prioritet: Nizak 🟢)

- **File:** `/public/favicon.ico`
- **Dimenzije:** 32x32px
- Trenutno je Next.js default - zamijeni sa svojim

---

## 📝 Data / Content za Pripremiti

### 1. **Lista Maslina** (za presentation catalog)

Pripremi Excel/CSV sa:

- Sorta (npr. "Oblica", "Leccino", "Pendolino")
- Opis (2-3 rečenice)
- Karakteristike (otpornost, veličina, uzgoj)
- Dostupne veličine (50cm, 1m, 1.5m, 2m+)
- Fotografije (3-4 po sorti)

### 2. **Lista Palmi** (za presentation catalog)

- Vrsta (npr. "Washingtonia Robusta", "Phoenix Canariensis")
- Opis
- Otpornost na zimu (USDA zona)
- Dostupne veličine
- Fotografije

### 3. **Lista Pitara** (za e-commerce)

Pripremi sa:

- Naziv (npr. "Terracotta Pitar 50L")
- **Cijena** (sa i bez PDV-a)
- Materijal (Keramika, Beton, Terracotta)
- Dimenzije (visina, promjer)
- Kapacitet (litri)
- Težina
- Stock quantity
- Fotografije (2-3 po pitaru)

### 4. **Lista Opreme** (za e-commerce)

- Naziv
- Cijena
- Opis
- Stock
- Fotografije

### 5. **Lista Supstrata** (za e-commerce)

- Naziv
- Cijena
- Veličina pakiranja (litri)
- Sastav
- Za koju vrstu biljaka
- Stock
- Fotografije

---

## 🎯 Prioritet Ažuriranja

### HITNO 🔴 (Prvo napraviti)

1. ✅ **Kontakt informacije** (telefon, email, adresa) - Footer & Header
2. ✅ **Social media linkovi** (Facebook, Instagram) - Footer
3. ✅ **Hero slika** - Homepage
4. ✅ **Featured products** (barem 3-6 proizvoda sa slikama i cijenama)

### VAŽNO 🟡 (Uskoro)

1. ✅ **Hero tekst** - Tvoj branding message
2. ✅ **O nama opis** - Footer
3. ✅ **Kategorije opisi** - Homepage
4. ✅ **Logo** (ako imaš)
5. ✅ **Radno vrijeme**

### KASNIJE 🟢 (Može pričekati)

1. ✅ **SEO meta tags** - title, description, keywords
2. ✅ **Statistike** (godine, broj kupaca)
3. ✅ **Favicon**

---

## 🚀 Kako Početi

### Korak 1: Pripremi Content

- [ ] Excel sa proizvodima (masline, palme, pitari)
- [ ] Fotografije (Hero, proizvodi)
- [ ] Tekstovi (O nama, kategorije)
- [ ] Kontakt info (tel, email, adresa, social media)

### Korak 2: Ažuriraj Placeholder

- [ ] Kontakt info (Header, Footer)
- [ ] Hero sekcija (tekst + slika)
- [ ] Featured products (barem 6)
- [ ] Kategorije (opisi)

### Korak 3: Dodaj Slike

- [ ] Hero slika
- [ ] Product slike (upload u `/public/images/`)
- [ ] Logo (opciono)

### Korak 4: Provjeri

- [ ] Otvori `localhost:3000`
- [ ] Provjeri da sve izgleda dobro
- [ ] Test na mobile (responsive)

---

## 💡 Pro Tips

### Za Brže Ažuriranje

1. **Search & Replace:** Koristi VS Code Find (Cmd/Ctrl + Shift + F) za brzo pronalaženje svih "+385 XX XXX XXXX" i zamjenu sa pravim brojem
2. **Bulk Image Upload:** Stavi sve slike odjednom u `/public/images/` i referiraj ih u kodu
3. **Copy-Paste Products:** Kopiraj jedan product object i samo promijeni podatke

### Za Testiranje

```bash
# Dev mode - vidiš promjene odmah
yarn dev

# Refresh browser za promjene u content
# Hot reload radi automatski za code
```

---

Sretno! 🌿🚀
