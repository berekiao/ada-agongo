import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { projects } from '@/lib/data';

const badge: Record<string, string> = {
  'En cours': 'bg-brand-navy text-white',
  Planifié: 'bg-brand-amber text-brand-ink',
  Réalisé: 'bg-brand-sage text-white',
};

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt="" className="h-full w-full object-cover" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 font-lexend text-xs font-bold uppercase tracking-wide ${badge[project.status]}`}>
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <p className="font-lexend text-xs font-semibold uppercase tracking-wider text-brand-clay">
          {project.domain}
        </p>
        <h3 className="mt-2 font-poppins text-lg font-bold text-brand-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.excerpt}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          {project.place}
        </p>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-brand-clay">
              Projets
            </p>
            <h2 className="font-poppins text-3xl font-bold text-brand-ink sm:text-4xl">
              Projets à la une
            </h2>
          </div>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 font-poppins text-sm font-bold uppercase tracking-wide text-brand-navy"
          >
            Tous les projets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
