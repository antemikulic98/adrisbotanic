import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Savjeti za Njegu Biljaka - Stručni Vodići za Mediteranske Biljke',
  description:
    'Stručni savjeti za njegu maslina, palmi i mediteranskih biljaka. Vodići za zalijevanje, presađivanje, zimsku zaštitu i sezonsku njegu. Besplatni savjeti od iskusnih vrtlara.',
  keywords: [
    'njega maslina',
    'njega palmi',
    'zalijevanje mediteranskih biljaka',
    'presađivanje palmi',
    'zimska zaštita biljaka',
    'vrtlarski savjeti',
    'savjeti za biljke',
  ],
  alternates: {
    canonical: 'https://adrisbotanic.com/blog',
  },
  openGraph: {
    title: 'Savjeti za Njegu Biljaka | Adris Botanic',
    description:
      'Stručni savjeti za njegu maslina, palmi i mediteranskih biljaka. Besplatni vodići od iskusnih vrtlara.',
    url: 'https://adrisbotanic.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

