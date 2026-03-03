import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { LiveNewsSection } from "@/components/sections/LiveNewsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Forestry Reserve & Conservation | Preserving Our Living Legacy",
  description:
    "Dedicated to preserving the world's forests, rehabilitating ecosystems, and fostering a deep connection between humanity and the woods.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ImpactSection />
      <LiveNewsSection />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
}
