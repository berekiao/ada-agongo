import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import { axes, projectSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: "Domaines d'intervention — ADA",
};

export default function ActionsPage() {
  return (
    <>
      <PageBanner
        kicker="Domaines prioritaires"
        title="Cinq axes au service du quartier"
        description="Cinq champs d'action qui traduisent la mission de l'ADA en activités concrètes au bénéfice d'Agongo."
      />
      <section className="py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 lg:px-8">
          {axes.map((axis, index) => (
            <article
              id={axis.id}
              key={axis.id}
              className="scroll-mt-32 grid items-center gap-8 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={axis.image}
                  alt=""
                  className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-80"
                />
              </div>
              <div>
                <p className="font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay">
                  0{index + 1}
                </p>
                <h2 className="mt-2 font-poppins text-3xl font-bold text-brand-ink">{axis.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{axis.description}</p>
                <h3 className="mt-6 font-poppins text-sm font-bold uppercase tracking-wide text-brand-navy">
                  Exemples d’actions menées
                </h3>
                <ul className="mt-3 space-y-2">
                  {axis.actions.map((action) => (
                    <li key={action} className="flex gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-clay" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-brand-ink">
            Comment un projet naît à l’ADA
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Le circuit suivi entre l’identification d’un besoin et la publication du rapport final.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectSteps.map((item) => (
              <article key={item.step} className="rounded-2xl bg-brand-ivory p-6">
                <p className="font-poppins text-2xl font-bold text-brand-clay">{item.step}</p>
                <h3 className="mt-2 font-poppins text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
