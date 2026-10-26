import Link from 'next/link';

export default function JoinBanner() {
  return (
    <section className="pb-24 pt-4">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-brand-clay-light">
          <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <p className="font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay-dark">
                Adhésion
              </p>
              <h2 className="mt-3 font-poppins text-3xl font-bold text-brand-navy sm:text-4xl">
                Rejoindre l’ADA
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-700">
                Toute personne physique ou morale qui adhère aux statuts peut devenir membre. La demande se remplit en ligne, ou se dépose au siège.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/rejoindre"
                className="rounded-lg bg-brand-clay px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white shadow-md hover:bg-brand-clay-dark"
              >
                Devenir membre
              </Link>
              <Link
                href="/faq"
                className="rounded-lg border-2 border-brand-navy px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-brand-navy hover:bg-brand-navy hover:text-white"
              >
                Lire la FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
