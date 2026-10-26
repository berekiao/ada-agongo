import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AxesSection from '@/components/AxesSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import NewsSection from '@/components/NewsSection';
import JoinBanner from '@/components/JoinBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <AxesSection />
      <StatsSection />
      <ProjectsSection />
      <NewsSection />
      <JoinBanner />
    </>
  );
}
