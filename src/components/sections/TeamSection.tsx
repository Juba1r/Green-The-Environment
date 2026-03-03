"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Globe } from "lucide-react";

const team = [
  {
    name: "Eleanor Vance",
    role: "Executive Director",
    bio: "With over 25 years in silviculture and forest management, Eleanor leads our global strategy for woodland preservation and ecosystem resilience.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Silas Thorne",
    role: "Conservation Director",
    bio: "A veteran field ecologist specializing in old-growth restoration. Silas oversees our land acquisition and biodiversity monitoring programs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Julian Rivers",
    role: "Operations Manager",
    bio: "Expert in sustainable logistics and resource allocation. Julian ensures our field teams are equipped and nurseries are thriving across all regions.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Jenkins",
    role: "Field Program Lead",
    bio: "Specialist in riparian buffers and native species propagation. Sarah leads our on-the-ground reforestation efforts and community workshops.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Marcus Woods",
    role: "Community Outreach",
    bio: "Connecting people with nature. Marcus designs our educational curricula and fosters partnerships with local indigenous guardians.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Clara Moss",
    role: "Finance & Admin",
    bio: "Ensuring radical transparency in conservation funding. Clara manages our donation impact reports and sustainable audit processes.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4"
        >
          Our{" "}
          <span className="text-primary underline decoration-primary/30 underline-offset-8">
            Leadership
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          A dedicated team of activists, administrators, and experts working
          together to drive systemic change.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card rounded-2xl p-6 border transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transition-all group-hover:bg-primary/10" />

            <div className="relative z-10">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-primary/20 p-1 group-hover:border-primary transition-colors">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider underline underline-offset-4 decoration-primary/20">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                &ldquo;{member.bio}&rdquo;
              </p>

              <div className="flex gap-4">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
