import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Green The Environment | A Global NGO Platform',
  description: 'Join us in our mission to secure a sustainable future. Empowering communities, protecting nature.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ImpactSection />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
}
