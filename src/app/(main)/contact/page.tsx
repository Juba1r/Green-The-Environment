'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-heading text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
        Have questions about our initiatives, or want to partner with us? Our global team is ready to connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-2xl border shadow-sm h-fit">
          <form className="space-y-6" onSubmit={(e) => void e}>
            <div className="space-y-2">
              <Label>Name</Label>
              <Input placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <textarea 
                className="w-full min-h-[150px] p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                placeholder="How can we help?"
              />
            </div>
            <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Head Office</h3>
            <p className="text-muted-foreground">
              House# 14, Road# 12, PC Culture Housing Society<br/>
              Block: Kha, Shekhertek, Adabor<br/>
              Mohammadpur, Dhaka-1207 Bangladesh
            </p>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Connect</h3>
            <div className="text-muted-foreground space-y-1">
              <p><strong>General Inquiries:</strong> Info@greentheenvironment.org</p>
              <p><strong>Safeguarding:</strong> Safe.gourding@greentheenvironment.org</p>
              <p><strong>Compliance:</strong> Compliance@greentheenvironment.org</p>
              <p><strong>PSEA Focal Point:</strong> psea.focal@greentheenvironment.org</p>
              <p><strong>Phone:</strong> +02222245638</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
