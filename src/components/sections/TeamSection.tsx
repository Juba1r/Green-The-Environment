'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, Globe } from 'lucide-react';

const team = [
  {
    name: 'Azad Mia',
    role: 'Executive Director',
    bio: 'Masters in Commerce & MBA. Over 30 years of experience in project management, planning, and social movements including Polio eradication and HIV awareness.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', // Placeholder
  },
  {
    name: 'Md Mohsin',
    role: 'Secretary General',
    bio: 'BA & MA from Tejgaon College. Expert in project planning, MEAL, and budgeting. Actively involved in acid survivors support and GBV movements.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Soumendra Debnath',
    role: 'Director of Partnership & Resource',
    bio: 'Climate activist from the Sundarban coastal area. Member of UNESCO Global Youth Community and IUCN Advisory Board.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Kazi Momotaz Zaman',
    role: 'Director',
    bio: 'MA in Sociology. Dedicated leader in female education and climate movements with extensive experience in donor relations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Rowsonara Begum',
    role: 'Director',
    bio: 'Advocate for SRHR and female education. Expert in research, MEAL, and human resource management.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Md. Atikur Rahman Chowdhury',
    role: 'Director',
    bio: 'MBA from Islami University. Specializes in Admin & Finance, software accounting, and climate justice advocacy.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
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
          Our <span className="text-primary underline decoration-primary/30 underline-offset-8">Leadership</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          A dedicated team of activists, administrators, and experts working together to drive systemic change.
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
              <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wider underline underline-offset-4 decoration-primary/20">{member.role}</p>
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
