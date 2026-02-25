'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useDonate } from '@/hooks/useDonate';
import Link from 'next/link';

export function CTASection() {
  const { donate } = useDonate();
  return (
    <section className="relative py-32 bg-primary/10 overflow-hidden mt-32">
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 70%)',
          backgroundSize: '100% 100%'
        }} 
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="bg-primary/20 p-4 rounded-full mb-8 inline-block shadow-inner ring-1 ring-primary/30">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            Be the change <br/>
            <span className="text-primary">you want to see.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Your contribution isn&apos;t just a donation; it&apos;s a seed planted for a greener, fairer, and more sustainable world. Let&apos;s make it happen together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="h-16 px-10 rounded-full text-lg shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white"
              onClick={() => donate(100, 'one-time')}
            >
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full text-lg border-2 border-primary/20 hover:bg-primary/5" asChild>
              <Link href="/volunteers">Join as Volunteer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
