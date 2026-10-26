import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { about, siteConfig } from '@/lib/data';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-block rounded-full bg-brand-navy px-4 py-1.5">
              <span className="font-lexend text-xs font-bold uppercase tracking-wider text-white">
                L’association
              </span>
            </div>
            <h2 className="mb-6 font-poppins text-3xl font-bold leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
              <span className="text-gradient-brand">{siteConfig.fullName}</span>
            </h2>
            <p className="mb-3 text-sm font-medium italic text-brand-sage">{siteConfig.slogan}</p>
            <p className="mb-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              {about.mission}
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              {about.history}
            </p>
            <Link
              href="/association"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-navy px-6 font-poppins text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-brand-navy-dark"
            >
              Qui sommes-nous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Rencontre associative, visuel d’illustration"
                className="h-[20rem] w-full object-cover sm:h-[24rem] lg:h-[28rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden max-w-xs rounded-xl bg-white p-5 shadow-xl lg:block">
              <p className="font-lexend text-xs font-bold uppercase tracking-wider text-brand-clay">
                Devise
              </p>
              <p className="mt-1 font-poppins text-lg font-bold leading-snug text-brand-navy">
                {siteConfig.motto}
              </p>
            </div>
            <div className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-tr-2xl border-r-4 border-t-4 border-brand-clay/40 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
