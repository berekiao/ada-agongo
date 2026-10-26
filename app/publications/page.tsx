import type { Metadata } from 'next';
import { FileText, Play } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { documents, events, gallery, newsItems, videos } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Publications — ADA',
};

export default function PublicationsPage() {
  return (
    <>
      <PageBanner
        kicker="Espace médias"
        title="Actualités, événements, documents, images"
        description="Le fil que le Responsable de la Communication pourra alimenter : communiqués, avis de réunion, rapports, galerie et vidéos. Le flux Facebook et TikTok prendra place ici quand les pages existeront."
      />

      <section id="actualites" className="scroll-mt-32 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Actualités</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="font-lexend text-xs font-semibold uppercase tracking-wider text-brand-clay">
                    {item.category} · {item.date}
                  </p>
                  <h3 className="mt-2 font-poppins text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="evenements" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Événements et avis</h2>
          <div className="mt-8 grid gap-4">
            {events.map((event) => (
              <article key={event.title} className="grid gap-3 rounded-2xl bg-brand-ivory p-5 sm:grid-cols-[10rem_1fr] sm:items-center">
                <p className="font-poppins text-sm font-bold uppercase tracking-wide text-brand-clay">
                  {event.date}
                </p>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-brand-ink">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {event.place} — {event.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="scroll-mt-32 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Documents</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Statuts, règlement intérieur, rapports d’activités et rapports financiers. Les boutons de téléchargement s’activeront avec les fichiers validés.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <article key={doc.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-brand-clay" />
                <div>
                  <p className="font-lexend text-xs font-bold uppercase tracking-wider text-brand-navy">
                    {doc.kind}
                  </p>
                  <h3 className="mt-1 font-poppins font-bold text-brand-ink">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{doc.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Galerie</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((photo) => (
              <figure key={photo.caption} className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.caption} className="h-48 w-full object-cover sm:h-56" />
                <figcaption className="bg-brand-ivory px-3 py-2 text-xs text-gray-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <h2 className="mt-14 font-poppins text-3xl font-bold text-brand-ink">Vidéos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {videos.map((video) => (
              <article key={video.title} className="flex items-center gap-4 rounded-2xl bg-brand-navy p-6 text-white">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <Play className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-poppins text-lg font-bold">{video.title}</h3>
                  <p className="text-sm text-white/70">{video.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
