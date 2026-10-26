import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { documents } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rapports — ADA',
};

export default function RapportsPage() {
  const rapports = documents.filter((doc) => doc.kind === 'Rapport annuel');

  return (
    <>
      <PageBanner
        kicker="Transparence"
        title="Rapports d'activités et rapports financiers"
        description="Les rapports validés par l'assemblée générale sont publiés ici, en téléchargement libre, conformément aux textes de l'association."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {rapports.map((doc) => (
              <article
                key={doc.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy-light text-brand-navy">
                  <FileText className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-lexend text-xs font-bold uppercase tracking-wider text-brand-clay">
                    {doc.kind}
                  </p>
                  <h2 className="mt-1 font-poppins text-lg font-bold text-brand-ink">{doc.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{doc.note}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-gray-500">
            Dès qu’un rapport est validé, le Responsable de la Communication pourra remplacer cette
            fiche par le fichier PDF officiel.
          </p>
        </div>
      </section>
    </>
  );
}
