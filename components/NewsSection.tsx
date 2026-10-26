import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { events, newsItems } from '@/lib/data';

export default function NewsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay">
              Publications
            </p>
            <h2 className="font-poppins text-3xl font-bold text-brand-ink sm:text-4xl">
              Actualités et rendez-vous
            </h2>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 font-poppins text-sm font-bold uppercase tracking-wide text-brand-navy"
          >
            Espace médias
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {newsItems.slice(0, 2).map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl bg-brand-ivory">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="font-lexend text-xs font-semibold uppercase tracking-wider text-brand-clay">
                    {item.category} · {item.date}
                  </p>
                  <h3 className="mt-2 font-poppins text-lg font-bold leading-snug text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl bg-brand-navy p-6 text-white lg:col-span-2">
            <h3 className="font-poppins text-xl font-bold">Événements</h3>
            <ul className="mt-5 space-y-5">
              {events.map((event) => (
                <li key={event.title} className="border-b border-white/15 pb-5 last:border-0 last:pb-0">
                  <p className="font-lexend text-xs font-bold uppercase tracking-wider text-brand-amber">
                    {event.status} · {event.date}
                  </p>
                  <p className="mt-1 font-poppins font-semibold">{event.title}</p>
                  <p className="mt-1 text-sm text-white/70">{event.place}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/publications#evenements"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Voir le calendrier
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
