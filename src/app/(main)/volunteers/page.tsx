'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function VolunteersPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-heading text-5xl font-bold mb-6">Become a Volunteer</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Join our global network of changemakers. Lend your skills to local and international efforts.
      </p>

      <div className="max-w-2xl bg-card p-8 rounded-2xl border shadow-sm">
        <form className="space-y-6" onSubmit={(e) => void e /* mock submit */}>
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Skills or Profession</Label>
            <Input placeholder="e.g. Wildlife Biology, Logistics, Media" />
          </div>
          <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white">
            Register as Volunteer
          </Button>
        </form>
      </div>
    </div>
  );
}
