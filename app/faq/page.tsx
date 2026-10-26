import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ — ADA',
};

export default function FaqPage() {
  return (
    <>
      <PageBanner
        kicker="Foire aux questions"
        title="Les réponses utiles avant d’écrire"
        description="Adhésion, documents, publications et réseaux. Cette liste sert la présentation et pourra être complétée avec les questions que l’association reçoit vraiment."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-3 px-4 lg:px-8">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 open:ring-brand-clay/40"
            >
              <summary className="cursor-pointer list-none font-poppins font-semibold text-brand-ink marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-brand-clay transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
