"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  // Stable random values for particles to prevent recalculation on render
  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50 + "%",
      y: Math.random() * 100 - 50 + "%",
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y, translateZ: 0 }}
          className="w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2813&ixlib=rb-4.0.3"
            alt="Cinematic nature landscape"
            fill
            priority
            className="object-cover object-center scale-110"
            sizes="100vw"
          />
          {/* Enhanced Greenish Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        </motion.div>
      </div>

      {/* Floating Particles/Elements for interactivity */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: p.x,
              y: p.y,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            className={`absolute w-64 h-64 bg-primary/20 rounded-full blur-[120px] will-change-transform ${
              i > 2 ? "hidden md:block" : ""
            }`}
            style={{
              left: i * 15 + "%",
              top: i * 10 + "%",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white/90 uppercase tracking-widest">
            Global Nature Conservation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9] max-w-6xl text-balance"
        >
          Your contribution today can{" "}
          <span className="text-gradient from-primary via-green-300 to-primary select-none">
            change life tomorrow
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed"
        >
          Green The Environment (GTE) is a non-profit organization dedicated to
          building a sustainable future. Empowering communities and protecting
          the natural world through innovative climate and social programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button
            size="lg"
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-16 text-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:scale-105"
          >
            <Link href="/projects">
              Our Impact
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full bg-white/5 hover:bg-white/10 text-primary border-white/20 h-16 px-10 text-xl backdrop-blur-md transition-all hover:scale-105"
          >
            <Link href="/donate" className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Support Now
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-[5]" />
    </section>
  );
}
