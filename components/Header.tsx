'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MapPin, Menu, Phone, X, ChevronDown } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 font-lexend text-xs lg:gap-5">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-2 transition-opacity hover:opacity-80 sm:flex"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="hidden items-center gap-2 md:flex">
              <MapPin className="h-3.5 w-3.5" />
              <span>{siteConfig.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <SocialLinks />
            </div>
            <span className="font-lexend text-xs font-medium">FR</span>
            <span className="text-base" aria-hidden>
              🇧🇯
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-8">
          <Link href="/" aria-label="Accueil ADA">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-4 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap font-poppins text-[13px] font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-clay'
                    : 'text-brand-ink hover:text-brand-clay'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-clay transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/rejoindre"
              className="hidden rounded-lg bg-brand-clay px-4 py-2.5 font-poppins text-xs font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-brand-clay-dark hover:shadow-lg sm:inline-block"
            >
              Adhérer
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white shadow-md xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] animate-slide-in flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <span className="font-poppins text-lg font-bold text-brand-ink">Menu</span>
              <button
                aria-label="Fermer"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 font-poppins text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand-clay-light text-brand-clay-dark'
                      : 'text-brand-ink hover:bg-brand-navy-light'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 text-gray-400" />
                </Link>
              ))}
              <Link
                href="/rejoindre"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-lg bg-brand-clay px-6 py-3 text-center font-poppins text-sm font-bold uppercase tracking-wide text-white shadow-md"
              >
                Adhérer
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
