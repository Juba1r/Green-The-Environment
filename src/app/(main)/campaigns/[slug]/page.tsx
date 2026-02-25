import { notFound } from 'next/navigation';
import { getCampaignBySlug, getCampaigns } from '@/lib/cms/api';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const campaigns = await getCampaigns();
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const campaign = await getCampaignBySlug(params.slug);
  if (!campaign) return { title: 'Not Found | Green The Environment' };
  
  return {
    title: campaign.seo.title,
    description: campaign.seo.description,
  };
}

export default async function CampaignDetailPage({ params }: { params: { slug: string } }) {
  const campaign = await getCampaignBySlug(params.slug);

  if (!campaign) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-32">
      {/* Hero Header */}
      <header className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center -mt-24 pt-24">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image 
            src={campaign.image.src} 
            alt={campaign.image.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-destructive/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex py-1 px-4 rounded-full bg-destructive text-white mb-6 text-xs font-bold uppercase tracking-wider shadow-sm">
            URGENT CAMPAIGN
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            {campaign.title}
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 relative z-20 -mt-16">
        <div className="bg-card border-none shadow-2xl rounded-3xl p-8 lg:p-12 mb-16 ring-1 ring-border">
          <div className="bg-muted p-6 rounded-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-border">
            <div className="flex-1 w-full">
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-4xl font-heading font-black text-destructive">
                  ${campaign.raised.toLocaleString()}
                </span>
                <span className="text-muted-foreground font-medium">
                  Goal: ${campaign.goal.toLocaleString()}
                </span>
              </div>
              <div className="h-4 w-full bg-background rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-destructive rounded-full transition-all duration-1000" 
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                />
              </div>
              <p className="text-right text-xs mt-2 text-muted-foreground">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto h-16 px-10 text-lg bg-destructive hover:bg-destructive/90 text-white rounded-2xl shadow-xl shadow-destructive/20 shrink-0">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-10 text-balance">
            {campaign.excerpt}
          </p>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-p:leading-relaxed prose-a:text-destructive max-w-none"
               dangerouslySetInnerHTML={{ __html: campaign.content }} />
        </div>
      </div>
    </article>
  );
}
