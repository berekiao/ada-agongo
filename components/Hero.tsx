'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, siteConfig } from '@/lib/data';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy-dark">
      <div className="relative min-h-[32rem] w-full sm:min-h-[36rem] lg:min-h-[40rem]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/90 via-brand-navy/75 to-brand-navy/30" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 backdrop-blur-sm">
                <span className="font-lexend text-xs font-medium uppercase tracking-wider text-white">
                  {siteConfig.motto}
                </span>
              </div>
              <h1
                key={heroSlides[current].title}
                className="mb-4 font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]"
              >
                {heroSlides[current].title}
              </h1>
              <p
                key={heroSlides[current].description}
                className="mb-6 max-w-xl text-base text-white/90 sm:text-lg"
              >
                {heroSlides[current].description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/association"
                  className="rounded-lg bg-brand-clay px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-brand-clay-dark"
                >
                  Qui sommes-nous
                </Link>
                <Link
                  href="/rejoindre"
                  className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-navy"
                >
                  Devenir membre
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute bottom-5 left-4 hidden h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute bottom-5 right-4 hidden h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              aria-label={`Diapositive ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-brand-clay' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
