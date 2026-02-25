import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/cms/api';
import { ArrowUpRight, Leaf, Trees, Droplets } from 'lucide-react';

export const metadata = {
  title: 'Our Projects | Green The Environment',
  description: 'Detailed overview of active conservation and local empowerment projects around the globe.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-black mb-6 tracking-tight text-foreground">Global Projects</h1>
        <p className="text-xl text-muted-foreground leading-relaxed balance-text">
          Our conservation efforts span the globe, addressing deforestation, water scarcity, and plastic pollution. We work directly with local communities to ensure long-term, scalable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`}
            className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image 
                src={project.image.src} 
                alt={project.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground flex items-center gap-1 shadow-sm">
                {project.category === 'Conservation' && <Trees className="w-3 h-3 text-primary" />}
                {project.category === 'Community Health' && <Leaf className="w-3 h-3 text-primary" />}
                {project.category === 'Marine Life' && <Droplets className="w-3 h-3 text-accent" />}
                {project.category}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors opacity-50 group-hover:opacity-100 flex-shrink-0" />
              </div>
              
              <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                {project.excerpt}
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: `${(project.raisedAmount / project.targetAmount) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-primary font-bold">
                    ${(project.raisedAmount / 1000000).toFixed(1)}M Raised
                  </span>
                  <span className="text-muted-foreground">
                    ${(project.targetAmount / 1000000).toFixed(1)}M Goal
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
