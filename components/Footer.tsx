'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, HelpCircle, Mail, MapPin, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

const columns = [
  {
    title: 'L’association',
    links: [
      { label: 'Qui sommes-nous ?', href: '/association' },
      { label: 'Textes fondamentaux', href: '/textes' },
      { label: 'Rapports', href: '/rapports' },
      { label: 'Adhérer', href: '/rejoindre' },
    ],
  },
  {
    title: 'Domaines',
    links: [
      { label: 'Éducation', href: '/actions#education' },
      { label: 'Environnement', href: '/actions#environnement' },
      { label: 'Santé', href: '/actions#sante' },
      { label: 'Solidarité et AGR', href: '/actions#solidarite' },
    ],
  },
  {
    title: 'Publications',
    links: [
      { label: 'Actualités', href: '/publications#actualites' },
      { label: 'Événements', href: '/publications#evenements' },
      { label: 'Galerie et vidéos', href: '/publications#galerie' },
      { label: 'Nos projets', href: '/projets' },
    ],
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative -top-10 z-10 flex flex-col items-start gap-4 rounded-xl bg-gradient-to-r from-brand-navy-dark to-brand-navy p-6 shadow-xl sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-bold text-white sm:text-xl">
              Une question avant d’adhérer ?
            </h3>
            <p className="text-sm text-white/80">
              La foire aux questions reprend l’essentiel. Le formulaire reste ouvert pour le reste.
            </p>
          </div>
          <Link
            href="/faq"
            className="shrink-0 rounded-lg bg-white px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-brand-navy shadow-md transition-all hover:bg-brand-ivory"
          >
            Voir la FAQ
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-t-2xl border-t border-brand-navy/10 bg-white py-12 text-brand-ink">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="mb-2 font-lexend text-xs font-semibold uppercase tracking-wider text-brand-clay-dark">
                {siteConfig.motto}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {siteConfig.slogan}
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
              <div id="reseaux" className="mt-5 flex gap-2 scroll-mt-32">
                <SocialLinks />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Pages Facebook et TikTok à créer avec l’association.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
                <h4 className="mb-4 font-poppins text-sm font-bold uppercase tracking-wider text-brand-navy">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-700 underline-offset-4 transition-colors hover:text-brand-clay-dark hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-12 sm:col-span-4 lg:col-span-2">
              <h4 className="mb-4 font-poppins text-sm font-bold uppercase tracking-wider text-brand-navy">
                Menu
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 underline-offset-4 transition-colors hover:text-brand-clay-dark hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
            <p className="text-center text-sm text-gray-600 sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Maquette de présentation.
            </p>
            <Link href="/faq" className="text-sm text-gray-700 transition-colors hover:text-brand-clay-dark">
              Questions fréquentes
            </Link>
          </div>
        </div>

        <div className="mt-8 flex h-2.5 w-full">
          <div className="flex-1 bg-[#008751]" />
          <div className="flex-1 bg-[#FCD116]" />
          <div className="flex-1 bg-[#E8112D]" />
        </div>
      </div>

      {showTop && (
        <button
          aria-label="Haut de page"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-clay text-white shadow-lg transition-transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
