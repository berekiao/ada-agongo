import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <p className="font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay">
        Page introuvable
      </p>
      <h1 className="mt-3 font-poppins text-4xl font-bold text-brand-navy">Cette page n’est pas sur le site</h1>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-brand-clay px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
