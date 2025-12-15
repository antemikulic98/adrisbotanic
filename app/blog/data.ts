import { Droplets, Wind, Leaf, Sun, LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  icon: LucideIcon;
  content: string;
}

export const categories = [
  { id: 'all', label: 'Svi Savjeti' },
  { id: 'njega', label: 'Njega Biljaka' },
  { id: 'sadnja', label: 'Sadnja & Presađivanje' },
  { id: 'sezona', label: 'Sezonski Savjeti' },
];

export const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'kako-pravilno-zalijevati-masline-i-palme',
    title: 'Kako pravilno zalijevati masline i palme',
    excerpt:
      'Zalijevanje mediteranskih biljaka zahtijeva posebnu pažnju. Saznaj kako pravilno zalijevati masline i palme kroz sve sezone.',
    category: 'njega',
    readTime: '5 min',
    date: '15. Listopad 2024',
    image: '/img/palme.jpeg',
    icon: Droplets,
    content: `
## Uvod

Zalijevanje mediteranskih biljaka poput maslina i palmi jedan je od najvažnijih aspekata njihove njege. Iako su ove biljke prilagođene sušnim uvjetima, pravilno zalijevanje ključno je za njihov zdrav rast i dugovječnost.

## Osnovna pravila zalijevanja

### Maslina (Olea europaea)

Maslina je iznimno otporna biljka koja može preživjeti duga sušna razdoblja. Međutim, za optimalan rast i plodonošenje, potrebno je pridržavati se nekoliko osnovnih pravila:

**Ljeto:**
- Zalijevajte jednom tjedno obilno, radije nego često i površinski
- Najbolje vrijeme za zalijevanje je rano ujutro ili kasno navečer
- Izbjegavajte zalijevanje po najvećoj vrućini

**Zima:**
- Smanjite zalijevanje na minimum
- Provjerite vlažnost tla prije zalijevanja - tlo mora biti suho 5-7 cm u dubinu
- Pretjerano zalijevanje zimi može uzrokovati truljenje korijena

### Palme

Palme zahtijevaju nešto više vode od maslina, posebno tijekom vegetacijske sezone:

**Proljeće i ljeto:**
- Zalijevajte 2-3 puta tjedno, ovisno o temperaturi
- Osigurajte dobru drenažu - palme ne podnose stajaću vodu
- Raspršite vodu i po lišću za dodatnu vlagu

**Jesen i zima:**
- Postupno smanjujte učestalost zalijevanja
- Jednom tjedno je dovoljno za većinu vrsta palmi

## Znakovi nepravilnog zalijevanja

### Premalo vode:
- Suhi, smeđi vrhovi listova
- Uvijanje listova
- Usporen rast

### Previše vode:
- Žuti listovi
- Mekani, truljivi korijen
- Gljivične bolesti

## Savjeti stručnjaka

1. **Koristite kišnicu** - mediteranske biljke preferiraju meku vodu
2. **Malčirajte tlo** - zadržava vlagu i regulira temperaturu
3. **Investirajte u sustav navodnjavanja** - osigurava konstantnu opskrbu vodom
4. **Testirajte tlo prstom** - najjednostavniji način provjere vlažnosti

## Zaključak

Pravilno zalijevanje mediteranskih biljaka nije komplicirano, ali zahtijeva razumijevanje njihovih potreba. Zapamtite - bolje je zalijevati rjeđe i obilnije nego često i površinski. Vaše masline i palme će vam zahvaliti zdravim rastom i bujnim zelenilom.
    `,
  },
  {
    id: '2',
    slug: 'priprema-mediteranskih-biljaka-za-zimu',
    title: 'Priprema mediteranskih biljaka za zimu',
    excerpt:
      'Zima dolazi! Nauči kako zaštititi svoje masline, palme i druge mediteranske biljke od hladnoće i mraza.',
    category: 'sezona',
    readTime: '8 min',
    date: '10. Listopad 2024',
    image: '/img/palme.jpeg',
    icon: Wind,
    content: `
## Zašto je priprema za zimu važna?

Mediteranske biljke prirodno rastu u blagoj klimi s minimalnim mrazevima. Kada ih uzgajamo u kontinentalnoj Hrvatskoj ili drugim hladnijim područjima, moramo im pomoći da prežive zimske uvjete.

## Kada započeti s pripremom?

Idealno vrijeme za početak pripreme je **sredina do kraja listopada**, prije prvih mrazeva. Pratite vremensku prognozu i reagirajte na vrijeme.

## Zaštita maslina

### Mlade masline (do 5 godina)

Mlade masline su posebno osjetljive na mraz. Evo kako ih zaštititi:

1. **Omotajte deblo** jutom ili agrotekstilom
2. **Malčirajte korijen** slojem slame ili lišća (15-20 cm)
3. **Napravite zaštitnu konstrukciju** oko krošnje kod jačih mrazeva

### Odrasle masline

Odrasla stabla su otpornija, ali i dalje trebaju zaštitu:

- Malčiranje korijena
- Zaštita debla kod temperatura ispod -10°C
- Izbjegavajte rezidbu prije zime

## Zaštita palmi

Palme su osjetljivije od maslina i zahtijevaju posebnu pažnju:

### Korak po korak zaštita:

1. **Povežite listove prema gore** - zaštitite srce palme
2. **Omotajte krunu** prozračnim materijalom
3. **Zaštitite deblo** jutom ili slamom
4. **Dodajte malč oko baze** stabla

### Koje palme su najotpornije?

- **Trachycarpus fortunei** - podnosi do -15°C
- **Chamaerops humilis** - podnosi do -12°C
- **Phoenix canariensis** - osjetljivija, do -8°C

## Biljke u posudama

Biljke u posudama su posebno ranjive jer korijen nije zaštićen zemljom:

- **Premjestite ih na zaštićeno mjesto** (uz zid, pod nadstrešnicu)
- **Omotajte posudu** izolacijskim materijalom
- **Podignite posudu** od hladnog tla (stiropor, drveni podložak)

## Što izbjegavati?

❌ Prekomjerno zalijevanje prije zime
❌ Gnojenje kasno u sezoni
❌ Korištenje plastične folije direktno na biljci (uzrokuje kondenzaciju)
❌ Prekasno uklanjanje zaštite u proljeće

## Kada ukloniti zaštitu?

Zaštitu uklanjajte postupno u proljeće, kada prođe opasnost od kasnih mrazeva - obično sredinom travnja. Pratite prognozu i ne žurite!

## Zaključak

Pravilna priprema za zimu može značiti razliku između zdrave biljke i one koja je oštećena mrazom. Uložite malo vremena u jesen, a vaše mediteranske biljke će vas nagraditi bujnim rastom u proljeće.
    `,
  },
  {
    id: '3',
    slug: 'najbolje-vrijeme-za-sadnju-maslina',
    title: 'Najbolje vrijeme za sadnju maslina',
    excerpt:
      'Proljeće ili jesen? Saznaj koje je optimalno vrijeme za sadnju maslinovog stabla i kako osigurati najbolji rezultat.',
    category: 'sadnja',
    readTime: '6 min',
    date: '5. Listopad 2024',
    image: '/img/palme.jpeg',
    icon: Leaf,
    content: `
## Proljeće ili jesen?

Ovo je najčešće pitanje koje dobivamo od kupaca. Kratki odgovor: **oboje može funkcionirati**, ali svako doba ima svoje prednosti.

## Jesenska sadnja (Listopad - Studeni)

### Prednosti:
- Tlo je još toplo, korijen se brzo ukorjenjuje
- Biljka ima cijelu zimu za prilagodbu
- Manje stresa zbog vrućine
- U proljeće kreće s već razvijenim korijenom

### Nedostaci:
- Rizik od ranog mraza za mlade biljke
- Potrebna zimska zaštita

**Idealno za:** Primorje, Dalmaciju i područja s blagim zimama

## Proljetna sadnja (Ožujak - Svibanj)

### Prednosti:
- Nema opasnosti od mraza
- Dugo vegetacijsko razdoblje za razvoj
- Lakše praćenje prilagodbe

### Nedostaci:
- Toplije vrijeme = više stresa
- Potrebno redovito zalijevanje
- Sporije ukorjenjivanje

**Idealno za:** Kontinentalnu Hrvatsku i hladnija područja

## Kako odabrati pravo mjesto?

### Sunce
Maslina treba **minimalno 6 sati direktnog sunca** dnevno. Odaberite najsunčanije mjesto u vrtu.

### Tlo
- Dobra drenaža je ključna
- pH tla između 6.0 i 8.0
- Izbjegavajte teška glinena tla

### Zaštita od vjetra
Mlada stabla trebaju zaštitu od jakih vjetrova. Postavite vjetrobransku zaštitu ili sadite uz zid.

## Korak po korak sadnja

### 1. Priprema rupe
- Iskopajte rupu 2x veću od korijenovog busa
- Dubina: gornji dio korijena u razini tla

### 2. Priprema tla
- Pomiješajte iskopanu zemlju s kompostom (30%)
- Dodajte pijesak ako je tlo teško

### 3. Sadnja
- Izvadite biljku iz posude
- Blago raširite korijen ako je jako zbit
- Postavite u rupu i zasipajte

### 4. Zalijevanje
- Obilno zalijte odmah nakon sadnje
- Formirajte "bazen" oko stabla za zadržavanje vode

### 5. Malčiranje
- Nanesite sloj malča 5-10 cm
- Ostavite prostor oko debla (ne uz samo deblo)

## Što nakon sadnje?

**Prvih mjesec dana:**
- Zalijevajte 2-3 puta tjedno
- Pratite znakove stresa

**Prva godina:**
- Redovito zalijevanje tijekom sušnih razdoblja
- Bez rezidbe
- Bez gnojenja prve godine

## Naš savjet

Ako kupujete maslinu u rasadniku Adris Botanic, rado ćemo vam pomoći s odabirom pravog vremena za sadnju i dati personalizirane savjete za vaše specifično područje i uvjete.
    `,
  },
  {
    id: '4',
    slug: 'odabir-pravog-pitara-za-biljke',
    title: 'Odabir pravog pitara za tvoje biljke',
    excerpt:
      'Veličina, materijal, odvodni otvori - sve što trebaš znati pri odabiru savršenog pitara za mediteranske biljke.',
    category: 'njega',
    readTime: '4 min',
    date: '1. Listopad 2024',
    image: '/img/palme.jpeg',
    icon: Droplets,
    content: `
## Zašto je odabir posude važan?

Prava posuda može značiti razliku između bujne, zdrave biljke i one koja jedva preživljava. Mediteranske biljke imaju specifične potrebe koje moramo uzeti u obzir.

## Veličina posude

### Zlatno pravilo
Promjer nove posude trebao bi biti **5-10 cm veći** od trenutne. Prevelika posuda zadržava previše vlage i može uzrokovati truljenje korijena.

### Dubina
- **Masline:** Duboke posude (korijen raste prema dolje)
- **Palme:** Duboke i široke posude
- **Agrumi:** Srednje duboke posude
- **Lavanda, ružmarin:** Pliće posude s odličnom drenažom

## Materijali

### Terakota (glinene posude)

**Prednosti:**
- Prirodan izgled
- Prozračnost - korijen "diše"
- Regulira vlagu
- Teža = stabilnija

**Nedostaci:**
- Može puknuti na mrazu
- Teška za premještanje
- Brže isušuje tlo

**Idealno za:** Lavandu, ružmarin, masline u zaštićenom prostoru

### Plastika

**Prednosti:**
- Lagana
- Ne puca na mrazu
- Zadržava vlagu dulje
- Povoljnija cijena

**Nedostaci:**
- Manja prozračnost
- Može pregrijavati korijen ljeti

**Idealno za:** Biljke koje često premještate, veće palme

### Fiberstone / Kompozit

**Prednosti:**
- Izgled kamena, težina plastike
- Otporan na mraz
- Dugotrajan

**Nedostaci:**
- Skuplje

**Idealno za:** Premium izgled, trajno rješenje

## Odvodni otvori - OBAVEZNO!

Ovo je najvažniji faktor. **Nikada** ne sadite mediteranske biljke u posude bez odvodnih otvora!

### Savjeti za drenažu:
1. Stavite sloj šljunka ili keramzita na dno (3-5 cm)
2. Prekrijte geotekstilom da zemlja ne začepi otvore
3. Posuda mora biti podignuta - koristite nožice ili podloške

## Boja posude

Možda vam se čini nevažnim, ali boja utječe na temperaturu:

- **Tamne posude:** Apsorbiraju toplinu - mogu pregrijati korijen ljeti
- **Svijetle posude:** Reflektiraju sunce - bolje za vruća područja

## Praktični savjeti

### Za balkone:
- Koristite lakše materijale
- Osigurajte da postolje može nositi težinu
- Razmislite o sustavu navodnjavanja

### Za terase i vrtove:
- Veće posude = stabilnije i ljepše
- Grupirajte biljke različitih visina
- Koristite podloške s kotačićima za lakše premještanje

## Naša preporuka

Za mediteranske biljke preporučujemo:
- **Terakota** za manje biljke i sušnija područja
- **Kvalitetna plastika** za veće biljke i lakše održavanje
- **Uvijek s odvodnim otvorima** i slojem drenaže

Posjetite nas u rasadniku - imamo veliki izbor posuda svih veličina i materijala!
    `,
  },
  {
    id: '5',
    slug: 'presadivanje-palmi-korak-po-korak',
    title: 'Presađivanje palmi: Korak po korak vodič',
    excerpt:
      'Detaljne upute za uspješno presađivanje palmi. Od pripreme tla do završnog zalijevanja.',
    category: 'sadnja',
    readTime: '10 min',
    date: '28. Rujan 2024',
    image: '/img/palme.jpeg',
    icon: Leaf,
    content: `
## Kada presađivati palme?

Najbolje vrijeme za presađivanje palmi je **proljeće (travanj-svibanj)** kada temperature postanu stabilno tople. Izbjegavajte presađivanje:
- Tijekom vrućih ljetnih mjeseci
- Kasno u jesen
- Tijekom zime

## Znakovi da palma treba presađivanje

- Korijen izlazi kroz odvodne otvore
- Voda se ne upija, nego otječe po površini
- Biljka je postala nestabilna
- Rast je usporen unatoč pravilnoj njezi
- Prošlo je 2-3 godine od zadnjeg presađivanja

## Što vam treba?

- Nova posuda (5-10 cm veća od trenutne)
- Kvalitetna zemlja za mediteranske biljke
- Šljunak ili keramzit za drenažu
- Rukavice
- Vrtlarske škare
- Voda

## Korak po korak

### Korak 1: Priprema nove posude

1. Provjerite odvodne otvore
2. Stavite sloj šljunka ili keramzita (5-7 cm)
3. Dodajte tanki sloj zemlje preko drenaže

### Korak 2: Vađenje palme

1. **Dan prije:** Obilno zalijte palmu
2. Položite posudu na bok
3. Lagano udarajte po posudi da olabavite korijen
4. Pažljivo izvucite biljku - nikada ne vucite za deblo!

### Korak 3: Pregled korijena

1. Lagano otresite višak stare zemlje
2. Pregledajte korijen - uklonite mrtve ili trule dijelove
3. Ako je korijen jako zbit, lagano ga raširite prstima

**Važno:** Palme ne vole da im se dira korijen, budite nježni!

### Korak 4: Sadnja u novu posudu

1. Postavite palmu u novu posudu
2. Gornji dio korijena treba biti 2-3 cm ispod ruba posude
3. Dodavajte zemlju oko korijena
4. Lagano pritišćite zemlju da uklonite zračne džepove
5. Ostavite 3-4 cm prostora do ruba za zalijevanje

### Korak 5: Završno zalijevanje

1. Obilno zalijte - voda treba isteći kroz odvodne otvore
2. Dodajte još zemlje ako se slegne
3. Po želji, dodajte sloj malča

## Njega nakon presađivanja

### Prva 2 tjedna (kritično razdoblje):

- **Držite palmu u polusjeni** - izbjegavajte direktno sunce
- **Zalijevajte redovito** - tlo mora biti vlažno, ali ne mokro
- **Ne gnoite** - korijen je osjetljiv
- **Izbjegavajte premještanje**

### Nakon 2 tjedna:

- Postupno vraćajte na sunčano mjesto
- Nastavite s redovitim zalijevanjem
- Pratite znakove stresa (žuti listovi, smeđi vrhovi)

### Nakon mjesec dana:

- Biljka bi trebala pokazati znakove novog rasta
- Možete početi s blagim gnojenjem

## Česte greške

❌ **Presađivanje u preveliku posudu**
Korijen "pliva" u vlazi i može istrunuti.

❌ **Presađivanje tijekom vrućine**
Stres + vrućina = problemi.

❌ **Duboko zakopavanje debla**
Deblo mora ostati na istoj razini kao prije.

❌ **Gnojenje odmah nakon presađivanja**
Može "spaliti" osjetljiv korijen.

❌ **Premalo zalijevanja nakon presađivanja**
Korijen treba konstantnu vlagu dok se ukorijeni.

## Specijalni slučajevi

### Velike palme
- Potrebna pomoć druge osobe
- Koristite kolica za transport
- Razmislite o profesionalnoj usluzi

### Palme u vrtu (iz zemlje u zemlju)
- Iskopajte što veći korjenov bus
- Transportirajte s zemljom oko korijena
- Sadite odmah - ne ostavljajte korijen izložen

## Zaključak

Presađivanje palmi nije komplicirano, ali zahtijeva pažnju i strpljenje. Slijedite ove korake i vaša palma će uspješno nastaviti rasti u novom domu. Ako imate bilo kakvih pitanja, slobodno nas kontaktirajte!
    `,
  },
  {
    id: '6',
    slug: 'ljetna-njega-mediteranskog-vrta',
    title: 'Ljetna njega mediteranskog vrta',
    excerpt:
      'Vruća ljeta mogu biti izazov. Saznaj kako održati svoj vrt svježim i zdravim tijekom najtoplijih mjeseci.',
    category: 'sezona',
    readTime: '7 min',
    date: '25. Rujan 2024',
    image: '/img/palme.jpeg',
    icon: Sun,
    content: `
## Ljeto i mediteranske biljke

Mediteranske biljke su prilagođene vrućim, sušnim ljetima - ali to ne znači da ih možemo zanemariti! Pravilna ljetna njega osigurava zdrave biljke i prekrasan vrt.

## Zalijevanje - najvažniji zadatak

### Zlatna pravila ljetnog zalijevanja:

1. **Zalijevajte rano ujutro (5-8h)** ili kasno navečer (nakon 19h)
2. **Nikada ne zalijevajte po vrućini** - voda brzo isparava, a kapljice mogu "spaliti" lišće
3. **Zalijevajte u korijen**, ne po lišću
4. **Bolje rjeđe i obilnije** nego često i površinski

### Koliko često?

| Biljka | Učestalost |
|--------|------------|
| Maslina | 1x tjedno |
| Palme | 2-3x tjedno |
| Agrumi | 2x tjedno |
| Lavanda | 1x u 10 dana |
| Ružmarin | 1x u 10 dana |

**Napomena:** Ovo su okvirne smjernice. Provjerite tlo prstom - ako je suho 5 cm u dubinu, vrijeme je za zalijevanje.

## Malčiranje - vaš najbolji prijatelj

Malč je sloj organskog materijala koji pokriva tlo oko biljaka. Ljeti je neprocjenjiv!

### Prednosti malča:
- Zadržava vlagu u tlu
- Regulira temperaturu korijena
- Sprječava rast korova
- Postupno obogaćuje tlo

### Vrste malča za mediteranski vrt:
- **Kora drveta** - estetski privlačna, dugotrajna
- **Šljunak** - idealno za lavandu i ružmarin
- **Slama** - jeftina, odlično zadržava vlagu

**Debljina sloja:** 5-10 cm, ali ne uz samo deblo biljke!

## Zaštita od sunca

Čak i mediteranske biljke mogu patiti od prekomjernog sunca, posebno:
- Mlade biljke
- Novoposađene biljke
- Biljke u posudama

### Kako zaštititi?

- **Zasjenjujuće mreže** - smanjuju intenzitet sunca za 30-50%
- **Grupiranje posuda** - stvara mikroklimu
- **Premještanje** osjetljivih biljaka u polusjenu tijekom najtoplijih dana

## Gnojidba ljeti

### Da ili ne?

Lagana gnojidba je ok, ali oprezno:
- Koristite **tekuća gnojiva** razrijeđena na pola doze
- Gnojite **ujutro ili navečer**
- **Nikada ne gnoite suho tlo** - prvo zalijte

### Kada prestati?

Prestanite s gnojenjem krajem srpnja/početkom kolovoza - biljke se trebaju pripremiti za jesen.

## Kontrola štetnika

Vrućina pogoduje nekim štetnicima:

### Najčešći ljetni štetnici:

**Lisne uši**
- Znak: Ljepljivi listovi, deformirani novi izdanci
- Rješenje: Ispiranje vodom, sapunasti sprej

**Grinje (crveni pauk)**
- Znak: Sitne točkice na listovima, paučina
- Rješenje: Povećanje vlažnosti, prskanje vodom

**Štitaste uši**
- Znak: Smeđe "ljuskice" na listovima i granama
- Rješenje: Ručno uklanjanje, uljni preparati

## Rezidba ljeti

Ljeto **nije** vrijeme za jaku rezidbu, ali:
- Uklanjajte suhe i oštećene grane
- Pinciranje mladih izdanaka je ok
- Oblikujte lagano ako je potrebno

**Važno:** Svaki rez je stres za biljku. Ljeti je biljka već pod stresom od vrućine.

## Biljke u posudama - posebna pažnja

Posude se brže zagrijavaju i isušuju:

1. **Koristite svijetle posude** - manje apsorbiraju toplinu
2. **Grupiranje posuda** stvara hlad i mikroklimu
3. **Podlošci s vodom** povećavaju vlažnost (ali ne ostavljajte biljke da stoje u vodi)
4. **Premještanje** na zasjenjeno mjesto tijekom toplinskih valova

## Tjedni raspored njege

**Ponedjeljak:** Zalijevanje + provjera štetnika
**Srijeda:** Zalijevanje
**Petak:** Zalijevanje + lagana gnojidba (svaka 2 tjedna)
**Nedjelja:** Zalijevanje + uklanjanje suhog lišća

## Zaključak

Ljetna njega mediteranskog vrta svodi se na tri ključne stvari: **pravilno zalijevanje, malčiranje i pažljivo promatranje**. Vaše biljke će vam zahvaliti bujnim zelenilom i zdravim rastom!

Trebate pomoć ili savjet? Posjetite nas u rasadniku Adris Botanic - uvijek smo tu za vas!
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}

