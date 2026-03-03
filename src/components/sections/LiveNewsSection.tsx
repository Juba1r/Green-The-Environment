"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  ArrowRight,
  Calendar,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string;
  source: string;
}

export function LiveNewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchNews() {
    try {
      setLoading(true);
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setArticles(data.articles || []);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  const getRelativeDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

      if (diffInHours < 24) return "Today";
      if (diffInHours < 48) return "Yesterday";

      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background/50 border-y border-primary/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-red-600 rounded-full relative" />
              </div>
              <span className="text-sm font-bold tracking-widest text-primary uppercase flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                Live News Portals
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter text-foreground mb-6">
              Green & Community <span className="text-primary">Insights</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground font-sans leading-relaxed">
              Stay updated with the latest headlines and environmental stories
              across Bangladesh. Real-time updates from trusted sources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Button
              variant="outline"
              onClick={() => fetchNews()}
              className="rounded-full border-primary/20 hover:bg-primary/5 transition-all group"
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500 ${loading ? "animate-spin" : ""}`}
              />
              Refresh Source
            </Button>
          </motion.div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl bg-white/5 border border-white/10 h-[400px] animate-pulse overflow-hidden"
              >
                <div className="w-full h-48 bg-white/5" />
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">Could not fetch news</h3>
            <p className="text-muted-foreground mb-8">
              Please check your connection or try again later.
            </p>
            <Button
              onClick={fetchNews}
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: { transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {articles.map((article, idx) => (
                <motion.div
                  key={article.link || idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-[10px] uppercase font-black rounded-full">
                        {article.source}
                      </span>
                      {getRelativeDate(article.pubDate) === "Today" && (
                        <span className="px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-[10px] uppercase font-black rounded-full animate-pulse">
                          Live
                        </span>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {getRelativeDate(article.pubDate)}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-8 font-sans leading-relaxed flex-grow">
                      {article.description}
                    </p>
                    <Link
                      href={article.link}
                      target="_blank"
                      className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-widest gap-2 group/btn"
                    >
                      Read Full Article
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-6 px-6 sm:px-10 py-6 sm:py-8 glass rounded-3xl sm:rounded-full border-primary/20 w-full sm:w-auto">
            <span className="text-muted-foreground font-semibold text-xs sm:text-sm uppercase tracking-widest">
              Top Portals Covered:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="font-heading font-black tracking-tighter text-base sm:text-xl hover:text-primary transition-colors">
                PROTHOM ALO
              </span>
              <span className="font-heading font-black tracking-tighter text-base sm:text-xl hover:text-primary transition-colors">
                DAILY STAR
              </span>
              <span className="font-heading font-black tracking-tighter text-base sm:text-xl hover:text-primary transition-colors">
                DHAKA TRIBUNE
              </span>
              <span className="font-heading font-black tracking-tighter text-base sm:text-xl hover:text-primary transition-colors">
                BDNEWS24
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
