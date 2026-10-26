import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { documents } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Textes fondamentaux — ADA',
};

export default function TextesPage() {
  const textes = documents.filter((doc) => doc.kind === 'Texte fondamental');

  return (
    <>
      <PageBanner
        kicker="Textes fondamentaux"
        title="Statuts et règlement intérieur"
        description="Les textes qui régissent l'association. Les fichiers PDF seront téléchargeables dès leur validation et publication."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {textes.map((doc) => (
              <article
                key={doc.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-clay-light text-brand-clay-dark">
                  <FileText className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-poppins text-lg font-bold text-brand-ink">{doc.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{doc.note}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Téléchargement après mise en ligne du PDF
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
