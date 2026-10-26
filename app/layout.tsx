import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Lexend, Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lexend',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ADA — Association de Développement d'Agongo",
  description:
    "Association laïque, apolitique et à but non lucratif à Agongo, Sèmè-Podji. Éducation, environnement, santé, solidarité et activités génératrices de revenus.",
  openGraph: {
    title: "ADA — Association de Développement d'Agongo",
    description:
      'Ensemble pour un développement durable, inclusif et solidaire. Devise : Développement, Solidarité et Labeur.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${lexend.variable} ${openSans.variable}`}>
      <body className="font-opensans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
