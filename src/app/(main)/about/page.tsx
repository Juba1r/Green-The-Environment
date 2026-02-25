import { TeamSection } from '@/components/sections/TeamSection';
import { AboutHero } from '@/components/sections/AboutHero';
import { Shield, Heart, Flag } from 'lucide-react';

export const metadata = {
  title: 'About Us | Green The Environment',
  description: 'Our vision, mission, history, and governance.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 flex flex-col w-full">
      <AboutHero />


      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-4xl font-bold italic underline decoration-primary/30 underline-offset-8">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To protect and restore the natural world while empowering marginalized communities 
              through innovative education, sustainable livelihood programs, and climate-smart solutions. 
              We believe in action over promises.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-hope/20 rounded-2xl flex items-center justify-center">
              <Flag className="w-6 h-6 text-hope" />
            </div>
            <h2 className="font-heading text-4xl font-bold italic underline decoration-hope/30 underline-offset-8">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A world where nature and humanity exist in equitable harmony, where every person 
              has the opportunity to thrive in a clean, healthy, and resilient environment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-16 text-center italic underline decoration-primary/30 underline-offset-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Transparency', desc: 'Real-time updates and open-ledger policy for all major programs.', icon: Shield },
              { title: 'Empowerment', desc: 'Focusing on community-led solutions and grassroots leadership.', icon: Heart },
              { title: 'Action', desc: 'Prioritizing immediate impact in high-urgency environmental crises.', icon: Flag },
            ].map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-black rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-sm border group-hover:bg-primary group-hover:text-white transition-all">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}
