import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import { about, board, siteConfig, values } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Qui sommes-nous ? — ADA',
};

export default function AssociationPage() {
  return (
    <>
      <PageBanner
        kicker="Qui sommes-nous ?"
        title="Histoire, vision, devise et gouvernance"
        description="L'Association de Développement d'Agongo : une association de quartier, laïque, apolitique et à but non lucratif."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8">
          {[
            { title: 'Mission', text: about.mission },
            { title: 'Vision', text: about.vision },
            { title: 'Devise', text: siteConfig.motto },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h2 className="font-poppins text-lg font-bold text-brand-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-poppins text-3xl font-bold text-brand-ink">Notre histoire</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{about.history}</p>
            <p className="mt-4 text-sm text-gray-500">
              Enregistrement {siteConfig.registration} depuis {siteConfig.founded}. Siège :{' '}
              {siteConfig.address}.
            </p>
            <p className="mt-6 text-sm font-medium italic text-brand-sage">{siteConfig.slogan}</p>
          </div>
          <blockquote className="rounded-2xl bg-brand-navy p-8 text-white">
            <p className="font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
              Mot du Président
            </p>
            <div className="mt-4 space-y-4 font-poppins text-lg font-medium leading-relaxed">
              {about.presidentMessage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <footer className="mt-6 text-sm text-white/70">
              Le Président de l’ADA — Association de Développement d’Agongo
            </footer>
            <p className="mt-3 text-xs text-white/50">
              Nom, photo et signature à insérer par l’administrateur du site.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Nos valeurs</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Elles orientent la sélection des projets et la conduite des activités.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-brand-navy/10 bg-brand-ivory p-6">
                <h3 className="font-poppins text-lg font-bold text-brand-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bureau" className="scroll-mt-32 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">Organisation et gouvernance</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Les organes prévus par les statuts et le règlement intérieur de l’association.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {board.map((member) => (
              <article key={member.role} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy font-poppins text-sm font-bold text-white">
                  ADA
                </div>
                <h3 className="font-poppins text-lg font-bold text-brand-navy">{member.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.duty}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
