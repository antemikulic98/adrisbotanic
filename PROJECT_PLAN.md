# 🌿 ADRISBOTANIC.COM - Projektni Plan

## 📋 Pregled Projekta

**Adrisbotanic.com** - Premijum web stranica za vrtni centar specijaliziran za masline, palme i hortikulturne proizvode.

### 🛒 Poslovni Model

**E-Commerce (Online Prodaja):**

- **Pitari** (vanjske posude - keramika, beton, terracotta)
- Vrtna oprema i alati
- Supstrati i gnojiva
- Dekoracija i dodaci za vrt

**Prezentacijski Katalog (Upit za Cijenu):**

- **Masline** (različite sorte i veličine - broj sorta TBD)
- **Palme** (Washingtonia, Phoenix, Chamaerops, Trachycarpus, etc. - broj vrsta TBD)
- **Vanjske biljke** (mediteranske i otporne vrste - fokus proizvoda)
- Sobne biljke (po potrebi)
- _Detaljni opisi, fotografije, karakteristike → Kontakt forma za cijenu/dostupnost_

**Napomena:** Točan broj sorta/vrsta će se definirati tokom pripreme sadržaja. Framework je fleksibilan za dodavanje.

**Glavna Boja:** `#274223` (Tamno Zelena - Prirodna, Elegantna)

**Tehnologije:**

- Next.js 15 (React 19)
- TypeScript
- Tailwind CSS
- SEO Optimizacija
- Moderne Animacije (Framer Motion)

---

## 🎯 Ciljevi Projekta

1. **Moderna & Elegantan Dizajn** - 200x bolji od postojećih konkurenata
2. **Odlična UX** - Intuitivna navigacija, brzo učitavanje
3. **E-Commerce Funkcionalnost** - Jednostavna kupovina
4. **SEO Optimizacija** - Visok ranking na Google-u
5. **Mobile-First** - Perfektna responzivnost
6. **Educiranje Klijenata** - Blog i savjeti

---

## 🚀 FAZA 1: Core Features (Tjedani 1-2)

### 1.1 Homepage (Landing Page)

- **Hero Sekcija**
  - Full-screen banner sa visokim kvalitetom slika maslina/palmi
  - CTA dugmad: "Pregledaj Katalog", "Kontaktiraj Nas"
  - Animirani tekst predstavljanja
- **Istaknuti Proizvodi**

  - Grid prikaz top 6-8 proizvoda
  - Hover efekti sa quick view opcijom
  - Badges: "Novo", "Popularno", "Na Akciji"

- **Kategorije Brz Pristup**

  - **E-Commerce Kategorije:** Pitari & Posude, Oprema, Supstrati, Dekoracija
  - **Prezentacijski Katalog:** Masline, Palme, Vanjske Biljke
  - Velike kartice sa ikonama i fotografijama
  - Jasna distinkcija između "Shop Now" i "Pregledaj Katalog"

- **O Nama Sekcija**

  - Kratka priča o vrtnom centru
  - Vizija i misija
  - Godine iskustva, broj zadovoljnih kupaca

- **Testimonials/Reviews**

  - Slider sa recenzijama kupaca
  - 5-zvjezdice rating sistem
  - Fotografije zadovoljnih kupaca (ako dostupno)

- **Instagram Feed Integration**

  - Najnovije fotografije sa Instagram profila
  - Link na social media

- **Newsletter Signup**
  - Elegant forma za pretplatu
  - Benefit highlight (popusti, novosti)

### 1.2 Navigacija & Header

- **Sticky Navigation Bar**
  - Logo (klijentan za homepage)
  - Kategorije proizvoda (mega menu)
  - Search bar (sa auto-complete)
  - Ikone: Favoriti, Košarica, User Account
  - Kontakt info (telefon, email)
- **Mobile Menu**
  - Hamburger menu sa smooth animacijom
  - Touch-friendly dugmad

### 1.3 Footer

- **Multi-Column Footer**
  - Kolona 1: O nama, Kontakt
  - Kolona 2: Linkovi (Proizvodi, Kategorije)
  - Kolona 3: Pomoć (FAQ, Dostava, Povrat)
  - Kolona 4: Social Media & Newsletter
  - Copyright & Pravne informacije

---

## 🌿 FAZA 2A: Prezentacijski Katalog - Biljke (Tjedan 3)

**Cilj:** Prezentacija maslina, palmi i biljaka sa detaljnim informacijama. **NIJE** direktna online prodaja.

### 2A.1 Plant Showcase - Browse Catalog

- **Plant Catalog Grid**
  - Filter po: Tip (Masline/Palme/Sobne/Vanjske), Veličina, Otpornost na zimu, Potrebe za suncem
  - Sort by: Naziv, Popularnost
  - Beautiful grid layout sa high-quality fotografijama
- **Plant Card (Prezentacijski)**
  - Profesionalna fotografija biljke
  - Hrvatski i latinsko ime
  - Kratki opis (1-2 rečenice)
  - Ikone karakteristika (☀️ sunce, 💧 voda, 🌡️ temperatura, 🌱 težina njege)
  - **"Saznaj Više"** dugme (NEMA cijene vidljive, NEMA Add to Cart)

### 2A.2 Plant Detail Page (Prezentacijski)

- **Image Gallery**
  - Glavni slider sa thumbnail pregledom
  - Zoom funkcionalnost
  - Slike biljke u različitim godišnjim dobima / veličinama
- **Detailed Plant Information**
  - Puni opis biljke i njenih karakteristika
  - Latinsko ime i sinonimi
  - **Specifikacije:**
    - Visina i širina (min/max)
    - Otpornost na zimu (USDA zona)
    - Potrebe za suncem (puno sunce, polu-sjena, sjena)
    - Potrebe za vodom
    - Tip tla (pH, dreniranje)
    - Brzina rasta
  - Savjeti za sadnju
  - Bolesti i štetnici
- **Sorte i Varijante (Informativno)**
  - Različite sorte maslina (Oblica, Leccino, Pendolino, Istarska Bjelica, etc.)
  - Različite vrste palmi (Washingtonia robusta, Phoenix canariensis, Trachycarpus fortunei, etc.)
  - Informativni prikaz različitih veličina koje nudite (50cm, 1m, 1.5m, etc.)
- **📞 Contact for Price (umjesto Add to Cart)**
  - **"Pitaj za Dostupnost i Cijenu"** - prominentno zeleno dugme
  - **Quick Contact Form** (inline ili modal):
    - Ime, Email, Telefon
    - Veličina koja zanima (dropdown)
    - Količina
    - Dodatna poruka
  - **"Pozovi Nas"** - direktan broj telefona sa click-to-call
  - **"Posjeti Nas"** - link na lokaciju i radno vrijeme
- **Educational Tabs**
  - Tab 1: Detaljni Opis
  - Tab 2: Njega kroz Godinu (kalendar aktivnosti po mjesecima)
  - Tab 3: Savjeti za Sadnju
  - Tab 4: Najčešća Pitanja
- **Similar Plants**
  - "Slične biljke koje bi vas mogle zanimati"

---

## 🛍️ FAZA 2B: E-Commerce - Pitari & Oprema (Tjedan 4)

**Cilj:** Direktna online prodaja pitara (vanjske posude), opreme, supstrata i dekoracije.

### 2B.1 Shop - Katalog Proizvoda (E-Commerce)

- **Filter & Sort Sistem**
  - Filter po: Kategorija (Pitari/Oprema/Supstrati/Dekoracija), Cijena, Materijal, Veličina, Boja
  - Sort by: Cijena (Low-High, High-Low), Popularnost, Najnovije, Best Sellers
  - Sidebar filters sa checkbox-ovima
  - **Specifični filteri za Pitare:** Materijal (Keramika, Beton, Terracotta, Plastika), Kapacitet (L), Za vanjske/unutarnje
- **Product Grid/List View**
  - Mogućnost prebacivanja između grid i list prikaza
  - Lazy loading za brže učitavanje
  - Paginacija ili infinite scroll
- **Product Card (E-Commerce)**
  - Slika proizvoda (hover za dodatne slike)
  - Naziv proizvoda
  - **Cijena (sa i bez PDV-a)** - vidljivo
  - Rating (zvjezdice)
  - **Quick Add to Cart dugme** ✅
  - Wishlist ikona
  - Badge: "Novo", "Rasprodaja", "Best Seller"

### 2B.2 Product Detail Page (E-Commerce)

- **Image Gallery**
  - Glavni slider sa thumbnail pregledom
  - Zoom funkcionalnost
  - Lightbox za full-screen
- **Product Information**
  - Detaljni opis
  - **Specifikacije:**
    - Materijal (keramika, plastika, beton, etc.)
    - Dimenzije (visina, promjer)
    - Kapacitet (litri)
    - Težina
    - Boja
  - **Cijena jasno vidljiva** (sa i bez PDV-a)
  - Dostupnost (u skladištu, preorder, uskoro dostupno)
- **Varijante (ako primjenjivo)**
  - Različite veličine (S, M, L ili specifične dimenzije)
  - Različite boje
  - Set opcije (pojedinačno ili set od 3/5)
- **Add to Cart Section** ✅
  - Quantity selector (+/- ili input)
  - **Add to Cart dugme** (prominentno, velika)
  - Add to Wishlist
  - Share (social media ikone)
- **Tabbed Sections**
  - Tab 1: Detaljni Opis
  - Tab 2: Specifikacije
  - Tab 3: Dostava & Povrat
  - Tab 4: Recenzije Kupaca
- **Related Products**
  - "Kupci također kupili"
  - "Pogledajte i ovo"

### 2B.3 Shopping Cart (Samo E-Commerce Proizvodi)

- **Cart Page**
  - Lista proizvoda (slika, naziv, cijena, količina)
  - Update quantity ili remove opcije
  - Subtotal, dostava, PDV, ukupno
  - Promo kod input
  - Estimated delivery date
  - Continue Shopping & Proceed to Checkout dugmad
- **Mini Cart (Dropdown)**
  - Hover ili klik na cart ikonu (badge sa brojem proizvoda)
  - Quick view proizvoda u košarici
  - Quick checkout dugme
  - "Vaš total: XXX €"

### 2B.4 Checkout Process

- **Multi-Step Checkout**
  - Korak 1: Dostava informacije
  - Korak 2: Način plaćanja
  - Korak 3: Pregled i potvrda
- **Payment Integration**
  - Kreditne kartice (Stripe ili lokalni gateway)
  - PayPal
  - Plaćanje prilikom dostave
  - Virman / Online Banking
- **Order Confirmation**
  - Thank you page
  - Email notifikacija
  - Tracking informacije

### 2B.5 User Account

- **Registration & Login**
  - Email/Password
  - Social login (Google, Facebook - opciono)
- **User Dashboard**
  - Moje narudžbe (history - samo e-commerce proizvodi)
  - Moji upiti (history kontakt formi za biljke)
  - Wishlist (pitari i oprema)
  - Omiljene biljke (saved plants iz prezentacijskog kataloga)
  - Adresna knjiga
  - Postavke profila
  - Prethodne recenzije

---

## 🔗 FAZA 2C: Cross-Sell Funkcionalnost (Tjedan 4-5)

**"Kombinuj Biljku sa Pitarom"** - Povezivanje prezentacijskog kataloga sa e-commerce-om

### 2C.1 Smart Recommendations

- **Na Plant Detail stranici (maslina, palma):**

  - Sekcija "Preporučeni Pitari za ovu Biljku"
  - Grid prikaz 3-4 odgovarajuća pitara
  - Prijedlozi odgovarajuće veličine (npr. za maslinu 1.5m → pitar 40-50L)
  - Quick Add to Cart za pitar direktno sa plant page
  - "Dodaj i supstrat" opcija

- **Na Pitar Product Page (e-commerce):**

  - "Savršen za:" sa linkovima/slikama biljaka
  - "Pogledaj naše masline/palme koje odgovaraju"
  - Link na prezentacijski katalog

- **Smart Logic:**
  - Ako korisnik gleda maslinu 1.5m → preporuči pitar 40-50L
  - Ako gleda palmu outdoor → preporuči frost-resistant pitar (keramika, beton)
  - Mediterranean biljke → terracotta pitari
  - Velike vanjske biljke → betonski ili veliki keramički pitari
  - Preporuka na osnovu veličine biljke, tipa, i klimatskih uvjeta

### 2C.2 Bundle Suggestions

- "Kompletni Set" opcija:
  - Pitar + Supstrat + Gnojivo (za određenu biljku)
  - Bundle discount (5-10%)
  - "Sve što trebate za vašu maslinu" paket
  - "Palma Starter Kit" - pitar + mediteranski supstrat + palma gnojivo

---

## 📚 FAZA 3: Content & Education (Tjedan 6)

### 3.1 Blog / Savjeti

- **Blog Homepage**
  - Featured članak (veliki banner)
  - Grid prikaz članaka (sa slikom, naslov, excerpt, datum)
  - Kategorije (Njega, Sezonski Savjeti, How-To, Novosti)
- **Blog Post Page**
  - Hero slika
  - Čitljiv typography
  - Social share buttons
  - Related posts
  - Comment sekcija
- **Categories & Tags**
  - Filter po kategorijama
  - Tag cloud

### 3.2 Plant Care Guides

- **Interaktivni Vodič**
  - Odabir biljke → detaljan vodič za njegu
  - Kalendar njege (što kada raditi)
  - Problemi i rješenja (bolesti, štete)

### 3.3 FAQ Page

- **Accordion Layout**
  - Česta pitanja o proizvodima
  - Dostava i povrat
  - Plaćanje
  - Njega biljaka

---

## 📞 FAZA 4: Contact & Services (Tjedan 6)

### 4.1 Contact Page

- **Kontakt Forma**
  - Ime, Email, Telefon, Poruka
  - Izbor teme (Upit, Podrška, Sugestija)
  - File upload (za slike biljaka ako trebaju pomoć)
- **Lokacija**
  - Google Maps integracija
  - Adresa, radno vrijeme
  - Ikone za telefon, email, društvene mreže

### 4.2 Services Pages

- **Landscape Design**
  - Usluge hortikulturnog dizajna
  - Portfolio radova
  - Kontakt forma za ponudu
- **Briga i Održavanje**
  - Redovno održavanje vrtova
  - Sezonski servisi
  - Pricing packages

### 4.3 About Us

- **Naša Priča**
  - Detaljnija povijest tvrtke
  - Tim (fotografije i biografije)
  - Certifikati i nagrade
- **Our Values**
  - Održivost
  - Kvaliteta
  - Korisnička podrška

---

## 🎨 FAZA 5: Design System & Branding (Kontinuirano)

### 5.1 Color Palette

**Primarna Boja:** `#274223` (Tamno Zelena)

**Dodatne Boje:**

- **Sekundarna:** `#4A6F42` (Svijetlija zelena)
- **Accent:** `#8B5A2B` (Zemljana smeđa - za CTA)
- **Neutralne:**
  - `#F8F9FA` (Light background)
  - `#E9ECEF` (Borders)
  - `#212529` (Text)
- **Success:** `#52C41A` (Zelena za uspjeh)
- **Warning:** `#FAAD14` (Žuta za upozorenja)
- **Error:** `#F5222D` (Crvena za greške)

### 5.2 Typography

- **Headings:** Playfair Display ili Merriweather (elegantno, čitljivo)
- **Body:** Inter ili Open Sans (moderno, clean)
- **Accents:** Georgia ili Crimson Text (za quotes i special sections)

### 5.3 Komponente

- **Buttons:** Zaobljeni kutovi, hover efekti, različite veličine
- **Cards:** Shadow efekti, hover lift animacije
- **Forms:** Clear labels, validation states, helper tekst
- **Icons:** Consistent set (Heroicons ili Lucide)
- **Images:** High-quality, optimizirane (WebP format)

### 5.4 Animacije

- **Page Transitions:** Smooth fade-in
- **Scroll Animations:** Framer Motion (fade-up, scale)
- **Hover Effects:** Subtle transitions
- **Loading States:** Skeleton screens, spinners

---

## 🔧 FAZA 6: Advanced Features (Tjedani 7-8)

### 6.1 Search Functionality

- **Advanced Search**
  - Full-text search
  - Auto-suggestions
  - Filter rezultati dok korisnik tipka
  - Search history (za prijavljene korisnike)

### 6.2 Wishlist & Favorites

- **Save for Later**
  - Dodaj u wishlist
  - Share wishlist (link)
  - Email reminder za proizvode na popustu

### 6.3 Review System

- **Customer Reviews**
  - 5-star rating
  - Text review sa slikama
  - Helpful button (da/ne)
  - Moderacija (admin approval)

### 6.4 Live Chat Support

- **Chat Widget**
  - Intercom ili Tawk.to integracija
  - Quick responses
  - Radno vrijeme indikator

### 6.5 Newsletter

- **Email Marketing Integration**
  - Mailchimp ili SendGrid
  - Segmented lists
  - Automated campaigns (dobrodošlica, abandonce cart)

### 6.6 Multi-Language Support (Opciono)

- **i18n**
  - Hrvatski (primarni)
  - Engleski
  - Talijanski / Njemački (turistička područja)

---

## 📈 FAZA 7: SEO & Performance (Tjedan 9)

### 7.1 SEO Optimizacija

- **On-Page SEO**
  - Meta titles i descriptions (svaka stranica)
  - Semantic HTML (h1, h2, alt tags)
  - Schema.org markup (Product, Organization, Local Business)
  - Open Graph tags (social sharing)
  - Sitemap.xml
  - Robots.txt
- **Technical SEO**
  - Fast loading times (<3s)
  - Mobile-first indexing
  - HTTPS
  - Canonical URLs
  - 301 redirects (ako potrebno)

### 7.2 Performance Optimization

- **Image Optimization**
  - Next.js Image component
  - WebP format
  - Lazy loading
  - Responsive images
- **Code Splitting**
  - Dynamic imports
  - Route-based splitting
- **Caching**
  - Browser caching
  - CDN (Vercel, CloudFlare)
- **Core Web Vitals**
  - LCP (<2.5s)
  - FID (<100ms)
  - CLS (<0.1)

### 7.3 Analytics

- **Google Analytics 4**
  - Traffic tracking
  - Conversion tracking
  - E-commerce events
- **Google Search Console**
  - Index monitoring
  - Search performance
- **Hotjar / Microsoft Clarity**
  - Heatmaps
  - Session recordings
  - User behavior analysis

---

## 🛡️ FAZA 8: Admin Panel (Tjedani 10-11)

### 8.1 Dashboard

- **Overview**
  - Sales statistics
  - Recent orders
  - Low stock alerts
  - Quick actions

### 8.2 Product Management

- **CRUD Operations**
  - Add/Edit/Delete products
  - Bulk operations
  - Image upload & gallery management
  - Inventory tracking
  - Categories & tags management

### 8.3 Order Management

- **Order Processing**
  - View all orders
  - Update order status
  - Print invoices
  - Refund processing

### 8.4 Customer Management

- **Customer Database**
  - View customer details
  - Order history
  - Contact customers
  - Segmentation

### 8.5 Content Management

- **Blog Editor**
  - Rich text editor
  - Image upload
  - Publish/Draft/Schedule
  - Categories & tags
- **Page Editor**
  - Edit static pages
  - Homepage banners
  - Testimonials management

### 8.6 Settings

- **General Settings**
  - Site information
  - Contact details
  - Social media links
- **Payment & Shipping**
  - Payment gateway configuration
  - Shipping zones & rates
  - Tax settings
- **Email Templates**
  - Order confirmation
  - Shipping notification
  - Newsletter templates

---

## 🧪 FAZA 9: Testing & QA (Tjedan 12)

### 9.1 Testing

- **Manual Testing**
  - Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - Mobile testing (iOS, Android)
  - Tablet testing
- **Automated Testing**
  - Unit tests (Jest)
  - Integration tests
  - E2E tests (Playwright)
- **Performance Testing**
  - Lighthouse scores
  - Load testing
- **Security Testing**
  - OWASP top 10
  - Payment security
  - Data protection

### 9.2 Bug Fixing

- Priority-based fixing
- Regression testing

---

## 🚀 FAZA 10: Launch & Post-Launch (Tjedan 13+)

### 10.1 Pre-Launch Checklist

- [ ] All content added
- [ ] All images optimized
- [ ] SEO meta tags complete
- [ ] Analytics installed
- [ ] Payment gateway tested
- [ ] SSL certificate active
- [ ] Backup system configured
- [ ] Email notifications tested
- [ ] Legal pages (Privacy, Terms) added
- [ ] 404 & error pages styled

### 10.2 Soft Launch

- Beta testing sa odabranim korisnicima
- Feedback collection
- Final adjustments

### 10.3 Official Launch

- Press release
- Social media announcement
- Email campaign
- Google Ads / Facebook Ads

### 10.4 Post-Launch

- **Monitoring**
  - Uptime monitoring
  - Error tracking (Sentry)
  - Performance monitoring
- **Maintenance**
  - Regular updates
  - Security patches
  - Content updates
- **Marketing**
  - SEO ongoing
  - Content marketing (blog posts)
  - Social media management
  - Email campaigns

---

## 📊 Success Metrics (KPIs)

### Business Metrics

- **Conversion Rate:** >2%
- **Average Order Value:** Tracking & optimization
- **Customer Retention:** >30% repeat customers
- **Cart Abandonment Rate:** <70%

### Technical Metrics

- **Page Load Time:** <3s
- **Uptime:** >99.9%
- **Core Web Vitals:** All in green
- **Mobile Traffic:** >50%

### Marketing Metrics

- **Organic Traffic Growth:** +20% mjesečno
- **Email Open Rate:** >25%
- **Social Media Engagement:** Growing followers
- **Return on Ad Spend (ROAS):** >3:1

---

## 💰 Tehnički Stack Detalji

### Frontend

- **Next.js 15** - Server & Client Components
- **React 19** - Latest features
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Validation

### Backend & Database

- **Next.js API Routes** - Backend logic
- **Prisma** - ORM (optional)
- **PostgreSQL** ili **MongoDB** - Database
- **NextAuth.js** - Authentication
- **Stripe** - Payment processing

### Hosting & Infrastructure

- **Vercel** - Hosting (Next.js optimized)
- **Cloudinary** - Image storage & optimization
- **SendGrid** - Email service

### Tools & Services

- **Git & GitHub** - Version control
- **ESLint & Prettier** - Code quality
- **Figma** - Design handoff
- **Postman** - API testing

---

## 📅 Timeline Summary

| Faza                       | Trajanje     | Deliverables                                          |
| -------------------------- | ------------ | ----------------------------------------------------- |
| Faza 1: Core               | 2 tjedna     | Homepage, Navigation, Footer                          |
| Faza 2A: Plant Catalog     | 1 tjedan     | Prezentacijski katalog biljaka (Masline, Palme, etc.) |
| Faza 2B: E-Commerce Shop   | 1-2 tjedna   | Shop za lonce/opremu, Cart, Checkout                  |
| Faza 2C: Cross-Sell        | 0.5 tjedna   | Povezivanje biljaka sa loncima                        |
| Faza 3: Content            | 1 tjedan     | Blog, Guides, FAQ                                     |
| Faza 4: Contact & Services | 1 tjedan     | Contact, Services, About                              |
| Faza 5: Design             | Kontinuirano | Branding, UI Components                               |
| Faza 6: Advanced           | 1-2 tjedna   | Search, Wishlist, Reviews, Lead Management            |
| Faza 7: SEO                | 1 tjedan     | Optimization, Analytics                               |
| Faza 8: Admin              | 2 tjedna     | Admin Dashboard (Products, Orders, Inquiries)         |
| Faza 9: Testing            | 1 tjedan     | QA, Bug Fixes                                         |
| Faza 10: Launch            | 1+ tjedan    | Deployment, Monitoring                                |

**Ukupno:** ~12-14 tjedana za MVP (Minimum Viable Product)

---

## 🎯 Prioriteti za MVP (Prvo Lansiranje)

### Must Have (Priority 1) - Minimum za Launch

**Prezentacijski Katalog (Biljke):**

1. Homepage sa hero sekcijom
2. Plant catalog grid (Masline, Palme, Sobne, Vanjske) - minimum 10-15 biljaka
3. Plant detail pages sa opisima i karakteristikama
4. "Pitaj za cijenu" kontakt forma
5. Responzivni dizajn

**E-Commerce (Pitari & Oprema):**

1. Shop katalog sa filterima (minimum 15-25 pitara + osnovna oprema)
2. Product detail pages
3. Shopping cart
4. Basic checkout (dostava + plaćanje)
5. Payment integration (1-2 metode)

**Općenito:**

1. Contact page
2. About Us page
3. Basic SEO (meta tags, sitemap)
4. Google Analytics

### Should Have (Priority 2) - Lansiranje do 2 tjedna nakon MVP-a

1. Cross-sell funkcionalnost (preporučeni pitari na plant pages)
2. User accounts (basic)
3. Wishlist za pitare i opremu
4. "Omiljene biljke" bookmarking
5. Blog (sa 5-10 članaka o njezi mediteranskih biljaka, maslina, palmi)
6. FAQ sekcija
7. Plant care guides (kalendar njege)
8. Newsletter signup
9. Instagram feed integracija
10. Search funkcionalnost (basic)

### Nice to Have (Priority 3) - Post-Launch Improvements

1. Reviews sistem za pitare i opremu
2. Advanced search (filters, autocomplete)
3. Bundle packages (pitar + supstrat + gnojivo)
4. Live chat support
5. Multi-language (EN, IT, DE - za turiste)
6. Landscape design services pages (dizajn vrta/terasa)
7. Advanced analytics & heatmaps
8. Social media integration (share buttons)
9. Email automation (cart abandonment, follow-up za plant inquiries)
10. Mobile app (future)

---

## 🎨 Inspiracija & Reference

**Design Style:**

- Clean & Modern
- Nature-inspired (zemljani tonovi, zelena paleta)
- High-quality photography
- Whitespace (breathing room)
- Minimalistički ali topao

**Similar Sites (za inspiraciju dizajna):**

- The Sill (thesill.com) - Clean plant shop
- Patch Plants (patchplants.com) - Modern UX
- Bloomscape (bloomscape.com) - E-commerce excellence

**Competitive Advantages:**

- Brže učitavanje od konkurencije
- Bolji dizajn i UX
- Edukativni sadržaj (blog, guides)
- Excellent mobile experience
- Lokalni SEO fokus

---

## 📝 Sljedeći Koraci

1. **Odobrenje plana** - Review i potvrda feature lista
2. **Design mockups** - Wireframes → High-fidelity dizajn
3. **Development setup** - Environment, dependencies
4. **Sprint planning** - Breakdown tasks, assign timeline
5. **Start coding** - Faza 1 implementation

---

## 🗂️ URL Struktura & Navigacija

### Glavna Navigacija

```
adrisbotanic.com/
├── Početna (/)
├── Naše Biljke (/biljke) 🌿 PREZENTACIJSKI
│   ├── Masline (/biljke/masline)
│   ├── Palme (/biljke/palme)
│   └── Vanjske Biljke (/biljke/vanjske)
├── Shop (/shop) 🛍️ E-COMMERCE
│   ├── Pitari (/shop/pitari)
│   ├── Oprema (/shop/oprema)
│   ├── Supstrati (/shop/supstrati)
│   └── Dekoracija (/shop/dekoracija)
├── Savjeti (/blog)
├── Usluge (/usluge)
│   ├── Landscape Design (/usluge/dizajn)
│   └── Održavanje (/usluge/odrzavanje)
├── O Nama (/o-nama)
└── Kontakt (/kontakt)
```

### Primjeri URL-ova

**Prezentacijske Stranice (Biljke):**

- `/biljke/masline/oblica` - Maslina Oblica detalji
- `/biljke/masline/leccino` - Maslina Leccino detalji
- `/biljke/palme/washingtonia-robusta` - Palma Washingtonia detalji
- `/biljke/palme/phoenix-canariensis` - Palma Phoenix Canariensis
- `/biljke/vanjske/lovor` - Lovor detalji
- `/biljke/vanjske/bor` - Alepski bor detalji

**E-Commerce Stranice (Proizvodi):**

- `/shop/pitari/terracotta-pitar-50l` - Terracotta pitar 50L
- `/shop/pitari/betonski-pitar-100l` - Betonski pitar 100L
- `/shop/oprema/vrtne-makaze-felco` - Oprema proizvod
- `/shop/supstrati/mediteranski-supstrat-50l` - Supstrat proizvod
- `/shop/cart` - Košarica
- `/shop/checkout` - Checkout

---

## 🎯 Razlika između DVA tipa stranica

### 🌿 PREZENTACIJSKI KATALOG (Biljke)

| Aspect             | Implementacija                                     |
| ------------------ | -------------------------------------------------- |
| **Svrha**          | Edukacija, prezentacija, generiranje upita         |
| **Call-to-Action** | "Pitaj za Cijenu", "Kontaktiraj Nas"               |
| **Cijena**         | ❌ NIJE vidljiva                                   |
| **Add to Cart**    | ❌ NEMA                                            |
| **Forma**          | ✅ Contact form za upit o dostupnosti/cijeni       |
| **Lead Capture**   | ✅ Email, Telefon (CRM integracija)                |
| **Sadržaj**        | Opsežan (njega, karakteristike, savjeti)           |
| **SEO Fokus**      | "Kupiti maslinu Oblica", "Palme za hrvatsku obalu" |

**Primjer User Flow:**

1. Korisnik dolazi na stranicu → "Masline"
2. Gleda različite sorte, čita opise
3. Odabere Maslina Oblica 1.5m
4. Vidi karakteristike, savjete za njegu
5. Klikne "Pitaj za Dostupnost i Cijenu"
6. Popuni formu: Ime, Email, Tel, Veličina, Količina
7. Vas tim dobije notifikaciju → kontaktira klijenta

---

### 🛍️ E-COMMERCE SHOP (Lonci & Oprema)

| Aspect             | Implementacija                                                                 |
| ------------------ | ------------------------------------------------------------------------------ |
| **Svrha**          | Direktna online prodaja                                                        |
| **Call-to-Action** | "Dodaj u košaricu"                                                             |
| **Cijena**         | ✅ Jasno vidljiva (sa i bez PDV-a)                                             |
| **Add to Cart**    | ✅ DA                                                                          |
| **Checkout**       | ✅ Multi-step sa plaćanjem                                                     |
| **Payment**        | ✅ Stripe, PayPal, ili lokalni gateway                                         |
| **Sadržaj**        | Praktičan (dimenzije, materijal, kako koristiti)                               |
| **SEO Fokus**      | "Kupiti pitar za masline", "Veliki pitari za palme", "Keramički pitari cijena" |

**Primjer User Flow:**

1. Korisnik dolazi na stranicu → "Shop" → "Pitari"
2. Filtrira po veličini (kapacitet) i materijalu
3. Odabere Terracotta pitar 50L - 65€
4. Klikne "Dodaj u košaricu"
5. Vidi "Dodajte i mediteranski supstrat?" → doda i supstrat
6. Nastavlja shopping ili ide na Checkout
7. Unese dostavu i plaćanje
8. Potvrdi narudžbu → automatski payment processing
9. Dobije email potvrdu

---

## 💡 Key Insights & Business Logic

### Zašto Ova Strategija?

**1. Kompleksnost Prodaje Biljaka:**

- Veličine variraju (50cm, 1m, 2m, 3m+) - različite cijene
- Dostupnost se mijenja sezonski
- Transport velikih biljaka zahtijeva posebnu logistiku
- Klijenti često žele vidjeti uživo prije kupnje
- Potreban je personalizirani pristup (savjeti, lokacija, njega)

**2. Jednostavnost Prodaje Pitara/Opreme:**

- Standardne veličine i specifikacije (5L, 10L, 20L, 50L, 100L, etc.)
- Relativno lako za shipping (ovisno o veličini)
- Fiksne cijene
- Može se čuvati na lageru dugoročno
- Ne zahtijeva posebnu njegu
- Margins često bolji nego na biljkama

**3. Cross-Sell Mogućnosti:**

- Korisnik dolazi zbog masline → kupuje pitar online (average order value ↑)
- Korisnik kupuje pitar → vidi preporuku za maslinu → kontaktira vas (lead generation)
- Bundle ponude generiraju više prihoda (pitar + supstrat + gnojivo = 20-30% više)
- "Kompletan set za vašu biljku" positioning

**4. SEO & Marketing Prednosti:**

- Prezentacijski sadržaj = excellent SEO content (blog-like quality)
- E-Commerce stranice = conversion-optimized
- Oboje drive traffic, različite namjere korisnika

---

## 📧 Lead Management & CRM

**Za Upite o Biljkama:**

1. **Lead Capture Form** na svakoj plant detail stranici
2. **Email Notifikacije** - vas tim dobije instant alert
3. **CRM Integracija** (opciono - HubSpot, Pipedrive)
   - Status: Novi Upit → Kontaktiran → Ponuda Poslana → Pretvoren/Odbijen
4. **Follow-up Automation**:
   - Automatski email: "Hvala na upitu, kontaktiramo vas u 24h"
   - Reminder za vas tim ako nije odgovoreno u 24h
5. **Analytics**:
   - Koje biljke generiraju najviše upita?
   - Conversion rate (upiti → prodaja)

**Admin Dashboard - Lead Management:**

- Lista svih upita
- Filter po: Datum, Tip biljke, Status
- Quick actions: Mark as Contacted, Send Quote, Close Deal
- Notes & History za svaki lead

---

## 🚀 Go-to-Market Strategy

### Faza 1: Soft Launch (Tjedan 1-2)

- Launch prezentacijski katalog (10-15 biljaka - fokus masline, palme, vanjske)
- Launch shop sa osnovnim proizvodima (15-25 pitara + osnovna oprema/supstrati)
- Beta testiranje sa prijateljima/obitelji
- Prikupljanje feedbacka
- Testiranje lead capture forme za biljke

### Faza 2: Local SEO Push (Tjedan 3-4)

- Google My Business optimizacija
- Lokalni blog content ("Najbolje palme za Dalmaciju", "Masline otporne na buru")
- Facebook/Instagram ads (targetiranje lokalno)

### Faza 3: Content Marketing (Tjedan 5-8)

- 2 blog posta tjedno
- Instagram/Facebook redoviti postovi
- Email newsletter (mjesečno)

### Faza 4: Scale (Mjesec 3+)

- Dodavanje novih proizvoda
- Advanced features (reviews, advanced search)
- Retargeting campaigns
- Influencer partnerships (local gardening influencers)

---

**Napomena:** Ovaj plan je fleksibilan i može se prilagoditi prema vašim potrebama i feedbacku. Možemo početi sa MVP-om i postepeno dodavati advanced feature-e.

**Sljedeći Koraci:**

1. ✅ Odobrenje koncepta (prezentacijski + e-commerce)
2. Definiranje inicijalnih proizvoda (koje biljke, koji lonci za MVP?)
3. Priprema sadržaja (opisi biljaka, fotografije)
4. Start development (Homepage → Plant Catalog → Shop)

Jeste li spremni početi? 🚀🌿
