'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/20"
        >
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold mb-8 text-balance"
        >
          Nurturing the <span className="text-primary">Ecosystems</span> of Tomorrow
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl leading-relaxed"
        >
          Green The Environment (GTE) is a non-profit organization established in Bangladesh, 
          dedicated to securing a sustainable future through radical transparency, 
          direct action, and community resilience.
        </motion.p>
      </div>
    </section>
  );
}
