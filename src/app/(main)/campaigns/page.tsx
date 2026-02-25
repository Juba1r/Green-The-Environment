import Link from 'next/link';
import Image from 'next/image';
import { getCampaigns } from '@/lib/cms/api';
import { Button } from '@/components/ui/button';
import { AlertCircle, Clock } from 'lucide-react';

export const metadata = {
  title: 'Urgent Campaigns | Green The Environment',
  description: 'Urgent action campaigns to respond to active environmental crises.',
};

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-black mb-6 tracking-tight text-foreground flex items-center gap-4">
          Urgent Campaigns <AlertCircle className="w-10 h-10 text-destructive" />
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed balance-text">
          Crisis requires immediate action. These campaigns represent our rapid-response efforts to natural disasters, habitat destruction, and critical tipping points.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="flex flex-col md:flex-row bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow">
            <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto relative">
              <Image 
                src={campaign.image.src} 
                alt={campaign.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {campaign.urgency === 'high' && (
                <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> High Urgency
                </div>
              )}
            </div>
            
            <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold mb-4">{campaign.title}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {campaign.excerpt}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-primary font-bold">
                    ${(campaign.raised).toLocaleString()} Raised
                  </span>
                  <span className="text-muted-foreground">
                    Goal: ${(campaign.goal).toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Clock className="w-4 h-4" /> 
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white w-full sm:w-auto h-12">
                  <Link href={`/campaigns/${campaign.slug}`}>Act Now</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
