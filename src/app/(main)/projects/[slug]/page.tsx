import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/cms/api';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: 'Not Found | Green The Environment' };
  
  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-32">
      {/* Hero Header */}
      <header className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] flex items-center justify-center -mt-24 pt-24">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image 
            src={project.image.src} 
            alt={project.image.alt}
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex py-1 px-4 rounded-full glass mb-6 text-xs font-semibold uppercase tracking-wider text-hope">
            {project.category}
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium">
            {project.excerpt}
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative -mt-32 z-20">
        
        {/* Sidebar Status */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-card border shadow-xl rounded-3xl p-8 sticky top-32">
            <h3 className="font-heading text-2xl font-bold mb-6">Project Status</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-muted-foreground">Location</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-muted-foreground">Start Date</span>
                  <span>{new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">Status</span>
                  <span className="capitalize text-primary">{project.status}</span>
                </div>
              </div>

              <div className="h-px bg-border my-6" />

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-3xl font-heading font-black text-primary">
                    ${(project.raisedAmount / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">Raised</span>
                </div>
                
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: `${(project.raisedAmount / project.targetAmount) * 100}%` }}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground text-right font-medium">
                  Goal: ${(project.targetAmount / 1000000).toFixed(1)}M
                </p>
              </div>

              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg">
                <Link href="/donate">Support This Project</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="lg:col-span-8 bg-card rounded-3xl p-8 lg:p-12 shadow-sm border border-border">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-p:leading-relaxed prose-a:text-primary max-w-none"
               dangerouslySetInnerHTML={{ __html: project.content }} />
          
          {/* Key Metrics Grid */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div className="mt-16 border-t pt-12">
              <h3 className="font-heading text-3xl font-bold mb-8 text-foreground">Measurable Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.metrics.treesPlanted && (
                  <div className="bg-primary/10 rounded-2xl p-6 text-center border ring-1 ring-primary/20">
                    <p className="text-4xl font-heading font-bold text-primary mb-2">
                       {(project.metrics.treesPlanted / 1000000).toFixed(1)}M+
                    </p>
                    <p className="text-sm font-semibold uppercase text-primary/80">Trees Planted</p>
                  </div>
                )}
                {project.metrics.peopleHelped && (
                  <div className="bg-hope/10 rounded-2xl p-6 text-center border ring-1 ring-hope/20">
                    <p className="text-4xl font-heading font-bold text-hope mb-2">
                       {project.metrics.peopleHelped.toLocaleString()}
                    </p>
                    <p className="text-sm font-semibold uppercase text-hope/80">People Helped</p>
                  </div>
                )}
                {project.metrics.tonsPlastic && (
                  <div className="bg-accent/10 rounded-2xl p-6 text-center border ring-1 ring-accent/20">
                    <p className="text-4xl font-heading font-bold text-accent mb-2">
                       {project.metrics.tonsPlastic} Tons
                    </p>
                    <p className="text-sm font-semibold uppercase text-accent/80">Marine Plastic</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </article>
  );
}
