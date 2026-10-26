import { facts } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="bg-brand-navy py-14 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-poppins text-2xl font-bold sm:text-3xl">L’ADA en repères</h2>
          <p className="max-w-md text-sm text-white/70">
            L’association en bref. Les indicateurs de terrain pourront être enrichis au fil des rapports validés.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="font-poppins text-3xl font-bold text-brand-amber sm:text-4xl">{fact.value}</p>
              <p className="mt-2 text-sm leading-snug text-white/80">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
