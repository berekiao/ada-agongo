import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import { ProjectCard } from '@/components/ProjectsSection';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Nos projets — ADA',
};

const groups = [
  { key: 'En cours', label: 'En cours' },
  { key: 'Planifié', label: 'En planification' },
  { key: 'Réalisé', label: 'Exécutés' },
] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        kicker="Nos projets"
        title="Planifiés, en cours, réalisés"
        description="La vitrine distingue déjà les trois états demandés. Les fiches visibles sont des exemples, en attendant la liste validée par le Bureau Exécutif."
      />
      <section className="py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 lg:px-8">
          {groups.map((group) => (
            <div key={group.key}>
              <h2 className="mb-6 font-poppins text-2xl font-bold text-brand-navy">{group.label}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {projects
                  .filter((project) => project.status === group.key)
                  .map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
