'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { id: 1, value: 500, suffix: 'K+', label: 'Households Helped', text: 'Empowering families with education and food security.' },
  { id: 2, value: 25, suffix: 'K+', label: 'Students Integrated', text: 'Pathways back to formal education for working children.' },
  { id: 3, value: 5000, suffix: '+', label: 'Tons Food Distributed', text: 'Delivering bio-fortified high zinc rice to communities.' },
  { id: 4, value: 10000, suffix: '+', label: 'Hectares Protected', text: 'Coastal and rainforest restoration initiatives.' },
];

function Counter({ from = 0, to, suffix }: { from?: number; to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (value) => {
        node.textContent = Math.round(value) + suffix;
      },
    });

    return controls.stop;
  }, [from, to, inView, suffix]);

  return <span ref={ref} className="font-heading font-bold text-5xl md:text-6xl text-hope mb-2 block">{from}{suffix}</span>;
}

export function ImpactSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Soft gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-4"
          >
            Our Impact
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground"
          >
            Measurable change, driven by unity.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Counter to={stat.value} suffix={stat.suffix} />
              <h3 className="text-xl font-bold font-heading text-foreground mb-2 mt-4">{stat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
