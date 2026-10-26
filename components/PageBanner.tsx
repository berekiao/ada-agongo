export default function PageBanner({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <p className="mb-3 font-lexend text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">
          {kicker}
        </p>
        <h1 className="max-w-3xl font-poppins text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
