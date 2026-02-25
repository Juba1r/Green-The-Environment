import Link from 'next/link';
import { Leaf, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t mt-32 relative overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Green The Environment</span>
            </Link>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Green The Environment (GTE) is a non-profit organization dedicated to building a sustainable future. Empowering communities, protecting nature.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full text-foreground hover:text-primary" asChild>
                <a href="https://x.com/greente1999" target="_blank" rel="noopener noreferrer"><Twitter className="w-4 h-4" /></a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-foreground hover:text-primary" asChild>
                <a href="https://www.instagram.com/green19992024" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4" /></a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-foreground hover:text-primary" asChild>
                <a href="https://www.facebook.com/profile.php?id=61567323064238" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground pt-4 border-t space-y-2">
              <p>House# 14, Road# 12, PC Culture Housing Society, Block: Kha, Shekhertek, Adabor, Mohammadpur, Dhaka-1207 Bangladesh</p>
              <p>Email: Info@greentheenvironment.org</p>
            </div>
          </div>

          <div className="md:col-span-1 space-y-4">
            <h4 className="font-heading font-semibold text-lg">Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="/campaigns" className="hover:text-primary transition-colors">Campaigns</Link></li>
              <li><Link href="/transparency" className="hover:text-primary transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1 space-y-4">
            <h4 className="font-heading font-semibold text-lg">Involve</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/donate" className="hover:text-hope transition-colors font-medium">Donate Now</Link></li>
              <li><Link href="/volunteers" className="hover:text-primary transition-colors">Become a Volunteer</Link></li>
              <li><Link href="/media" className="hover:text-primary transition-colors">Media Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1 space-y-4">
            <h4 className="font-heading font-semibold text-lg">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Get updates on our latest projects and impact.</p>
            <form className="flex gap-2" action="/api/newsletter" method="POST">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-muted px-4 py-2 rounded-xl text-sm w-full outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-border" 
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Green The Environment NGO. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
