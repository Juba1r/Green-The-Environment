"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useDonationStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { mockProjects } from "@/lib/cms/mock-data";

export function FeaturedProjects() {
  const setDonation = useDonationStore((state) => state.setDonation);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleProjectClick = (title: string, slug: string) => {
    setDonation(50, "one-time", title);
    router.push(`/projects/${slug}`);
  };

  return (
    <section
      ref={containerRef}
      className="py-32 bg-background relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Urgent Actions, Real Results.
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our ongoing campaigns turning crisis into hope globally.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="ml-1 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {mockProjects.slice(0, 3).map((project, idx) => {
            const yTransform = isMobile ? 0 : idx % 2 === 0 ? y1 : y2;

            return (
              <motion.div
                key={project.id}
                style={{ y: yTransform }}
                onClick={() => handleProjectClick(project.title, project.slug)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-muted shadow-lg cursor-pointer transform-gpu"
              >
                <Image
                  src={project.image.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col justify-end">
                  <span className="text-hope text-sm font-semibold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <div className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                    Read Story
                    <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
