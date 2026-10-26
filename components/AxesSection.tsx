import type { ElementType } from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Handshake, HeartPulse, Leaf, Sprout } from 'lucide-react';
import { axes } from '@/lib/data';

const styles: Record<
  string,
  { icon: ElementType; bar: string; chip: string }
> = {
  education: { icon: GraduationCap, bar: 'bg-brand-blue', chip: 'bg-brand-blue/10 text-brand-blue' },
  environnement: { icon: Leaf, bar: 'bg-brand-sage', chip: 'bg-brand-sage/10 text-brand-sage' },
  sante: { icon: HeartPulse, bar: 'bg-brand-coral', chip: 'bg-brand-coral/10 text-brand-coral' },
  solidarite: { icon: Handshake, bar: 'bg-brand-clay', chip: 'bg-brand-clay/10 text-brand-clay-dark' },
  agr: { icon: Sprout, bar: 'bg-brand-amber', chip: 'bg-brand-amber/15 text-[#8A6420]' },
};

export default function AxesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay">
            Domaines prioritaires
          </p>
          <h2 className="font-poppins text-3xl font-bold text-brand-ink sm:text-4xl">
            Cinq domaines pour le quartier
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Cinq champs d’action votés par l’assemblée générale, qui structurent le plan stratégique de l’association.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis) => {
            const style = styles[axis.id];
            const Icon = style.icon;
            return (
              <Link
                key={axis.id}
                href={`/actions#${axis.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-brand-ivory shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`h-1.5 w-full ${style.bar}`} />
                <div className="flex flex-1 flex-col p-6">
                  <span className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${style.chip}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-poppins text-xl font-bold text-brand-ink">{axis.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{axis.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-brand-navy">
                    Voir le domaine
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
