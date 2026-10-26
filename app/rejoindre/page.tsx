import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import MembershipForm from '@/components/MembershipForm';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Adhérer — ADA',
};

export default function JoinPage() {
  return (
    <>
      <PageBanner
        kicker="Contact et adhésion"
        title="Rejoindre l’ADA"
        description="Toute personne physique ou morale qui adhère aux statuts peut devenir membre. La demande se remplit en ligne, ou se dépose au siège."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="space-y-4">
            <article className="rounded-2xl bg-brand-navy p-6 text-white">
              <h2 className="font-poppins text-xl font-bold">Coordonnées</h2>
              <div className="mt-5 space-y-4 text-sm text-white/85">
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                  {siteConfig.address}
                </p>
              </div>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="font-poppins text-lg font-bold text-brand-navy">
                Ce que la demande contient
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                <li>Identité et moyen de vous joindre</li>
                <li>Quartier</li>
                <li>Motif : adhésion, information ou partenariat</li>
                <li>Un message libre</li>
              </ul>
            </article>
          </aside>
          <MembershipForm />
        </div>
      </section>
    </>
  );
}
