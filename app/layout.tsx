import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adrisbotanic - Masline, Palme & Hortikultira',
  description:
    'Vaš pouzdani partner za mediteranske biljke i vrtne proizvode. Kvaliteta, stručnost i tradicija.',
  keywords: 'masline, palme, hortikultira, vrtni centar, pitari, vrtna oprema',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hr' className={plusJakarta.variable}>
      <body className={`flex flex-col min-h-screen ${plusJakarta.className}`}>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
