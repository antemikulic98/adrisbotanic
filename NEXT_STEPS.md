# 🚀 Sljedeći Koraci - Adrisbotanic.com

## ✅ Što Smo Napravili

- [x] Definirali smo poslovni model (Prezentacijski katalog + E-Commerce)
- [x] Razgraničili masline/palme/vanjske biljke (prezentacijski) vs pitari/oprema (e-commerce)
- [x] Kreirali sveobuhvatan projektni plan sa fazama
- [x] Definirali URL strukturu i navigaciju
- [x] Postavili prioritete za MVP

---

## 📝 Što Trebamo Prije Početka Razvoja

### 1. Sadržaj za Biljke (Prezentacijski Katalog)

**Trebamo definirati:**

#### Masline

- [ ] Koliko sorta? (npr. Oblica, Leccino, Pendolino, Istarska Bjelica, etc.)
- [ ] Za svaku sortu:
  - Fotografije (minimum 3-4 po sorti)
  - Opis karakteristika
  - Veličine koje nudite (npr. 50cm, 1m, 1.5m, 2m+)
  - Savjeti za njegu

#### Palme

- [ ] Koliko vrsta? (npr. Washingtonia, Phoenix canariensis, Trachycarpus, Chamaerops)
- [ ] Za svaku vrstu:
  - Fotografije (minimum 3-4 po vrsti)
  - Opis karakteristika
  - Veličine koje nudite
  - Otpornost na zimu (USDA zona)
  - Savjeti za njegu

#### Vanjske Biljke

- [ ] Lista vrsta (lovor, bor, čempres, mediteranske...)
- [ ] Fotografije
- [ ] Opisi
- [ ] Veličine

**MVP Minimum:** 10-15 biljaka ukupno (možemo početi sa manje i dodavati)

---

### 2. E-Commerce Proizvodi

#### Pitari

- [ ] Koliko različitih pitara? (15-25 za MVP)
- [ ] Materijali: Terracotta, Keramika, Beton, Plastika?
- [ ] Veličine/Kapaciteti: 5L, 10L, 20L, 50L, 100L, 150L+?
- [ ] Za svaki pitar:
  - Fotografije (minimum 2-3)
  - Cijena (sa i bez PDV-a)
  - Dimenzije (visina, promjer)
  - Kapacitet (litri)
  - Težina
  - Materijal
  - Za vanjske/unutarnje
  - Stock quantity

#### Oprema

- [ ] Što točno nudite? (vrtne makaze, lopatice, rukavice, alati...)
- [ ] Fotografije
- [ ] Cijene
- [ ] Stock

#### Supstrati

- [ ] Vrste supstrata (mediteranski, univerzalni, za palme, za masline...)
- [ ] Pakiranje (vreće - 10L, 20L, 50L?)
- [ ] Fotografije
- [ ] Cijene

#### Gnojiva i Dodaci

- [ ] Što nudite?
- [ ] Detalji proizvoda

---

### 3. Tehničke Odluke

#### Payment Gateway

- [ ] **Stripe** (međunarodni, jednostavan setup)
- [ ] **PayPal**
- [ ] **Lokalni hrvatski gateway** (WSPay, CorvusPay, Monri?)
- [ ] **Plaćanje prilikom dostave** (cash/card on delivery)

**Preporuka za MVP:** Stripe (kartica) + Plaćanje pri dostavi

#### Email Service

- [ ] **SendGrid** (free tier 100 email/dan)
- [ ] **Mailchimp** (newsletter + transactional)
- [ ] Vaš postojeći email server?

**Preporuka:** SendGrid za transactional emails + Mailchimp za newsletter

#### Image Hosting

- [ ] **Cloudinary** (free tier 25GB storage, optimizacija)
- [ ] **Vercel** (Next.js integration)
- [ ] Vaš server?

**Preporuka:** Cloudinary (automatska optimizacija, CDN)

#### Database

- [ ] **PostgreSQL** (Vercel Postgres, Supabase)
- [ ] **MongoDB** (Atlas free tier)
- [ ] **Prisma** kao ORM

**Preporuka za MVP:** Možemo početi bez backend database - static content u JSON fileovima
**Za production:** PostgreSQL sa Prisma ORM

---

### 4. Informacije o Poslovanju

#### Dostava

- [ ] Koje regije dostavljate? (cijela Hrvatska, regije, samo lokalno?)
- [ ] Cijene dostave:
  - Za pitare (po težini/veličini?)
  - Za opremu
  - Besplatna dostava iznad X €?
- [ ] Vrijeme dostave (5-7 radnih dana?)

#### Povrat Robe

- [ ] Politika povrata (14 dana, 30 dana?)
- [ ] Tko snosi troškove povrata?
- [ ] Za koje proizvode je moguć povrat?

#### Poslovanje

- [ ] Naziv tvrtke (za footer, invoices)
- [ ] OIB
- [ ] Adresa
- [ ] Telefon
- [ ] Email
- [ ] Radno vrijeme
- [ ] Instagram/Facebook links

---

### 5. Branding & Dizajn

#### Logo

- [ ] Imate li logo?
- [ ] Trebate li pomoć sa kreacijom?

#### Fotografije

- [ ] Profesionalne fotografije biljaka (imate/trebate?)
- [ ] Fotografije pitara (imate/trebate?)
- [ ] Hero slike za homepage (lifestyle fotografije vrta, terasa?)

**Bez fotografija možemo:**

- Koristiti placeholder slike za development
- Dodati prave fotografije kasnije

---

## 🎯 Odluke za Nastavak

### Opcija A: Start Development Sada (Sa Placeholder Contentom)

**Trajanje:** 2-3 tjedna za MVP
**Što radimo:**

1. Kreiramo strukturu stranice
2. Implementiramo prezentacijski katalog (sa demo biljkama)
3. Implementiramo e-commerce shop (sa demo pitarima)
4. Postavimo formu za upite
5. Vi kasnije dodajete pravi sadržaj kroz admin panel

**Prednosti:**

- Brzi start
- Možete vidjeti kako funkcionira
- Sadržaj dodajete postepeno

**Potrebno sada:**

- ✅ Ništa posebno, možemo krenuti!

---

### Opcija B: Prvo Pripremimo Sadržaj, Pa Development

**Trajanje:** 1-2 tjedna priprema + 2-3 tjedna development
**Što radimo:**

1. Vi pripremate liste proizvoda, fotografije, opise
2. Mi dizajniramo mockupe (Figma)
3. Vi aprovate dizajn
4. Mi razvijamo sa pravim contentom

**Prednosti:**

- Launch sa kompletnim sadržajem
- Profesionalniji prvi dojam

**Potrebno sada:**

- Sve iz sekcije "Što Trebamo" gore

---

## 💡 Moja Preporuka

**Hybrid Pristup:**

1. **Ovaj tjedan:**

   - Vi počnete prikupljati sadržaj (liste proizvoda, fotografije)
   - Ja kreiram homepage i osnovnu strukturu sa demo contentom

2. **Sljedeći tjedan:**

   - Implementiram prezentacijski katalog
   - Implementiram e-commerce za pitare
   - Vi nastavljate prikupljati sadržaj

3. **Treći tjedan:**

   - Vi unosite pravi sadržaj kroz admin
   - Testiramo sve zajedno
   - Fine-tuning

4. **Četvrti tjedan:**
   - Beta testing
   - Bug fixing
   - Soft launch

**Timeline:** ~3-4 tjedna do soft launch

---

## 📞 Sljedeće Što Trebam od Vas

**Za nastavak trebam odluku o:**

1. **Pristup:** Opcija A, B ili Hybrid?

2. **Payment:** Koje payment metode želite za MVP?

   - Stripe + Plaćanje pri dostavi? ✅ (preporuka)
   - Nešto drugo?

3. **Content Status:**

   - Imate li već fotografije biljaka i pitara?
   - Možete li poslati barem nekoliko primjera da vidim kakav je materijal?

4. **Start Date:**
   - Mogu početi odmah ako ste za to
   - Ili čekamo da pripremite sadržaj?

---

## 🚦 Trenutni Status: ⏸️ ČEKA SE VAŠ FEEDBACK

Recite mi:

- Što mislite o Hybrid pristupu?
- Koji payment gateway preferirate?
- Imate li fotografije spremne ili ne?
- Želite li da krenem sa strukturom odmah ili čekamo?

Čim dobim feedback, krećem sa razvojem! 🚀

---

**Kontakt Info za Development:**

- Push updates na GitHub
- Daily updates o napretku
- Screen sharing sessions za feedback (ako želite)
