'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Volunteers', path: '/volunteers' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center mt-4 px-4"
    >
      <nav className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-7xl relative mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">Green The Environment</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/transparency">Transparency</Link>
          </Button>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 inset-x-4 glass-card p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-white/10 my-2" />
          <Button asChild variant="outline" className="w-full justify-center">
            <Link href="/transparency">Transparency</Link>
          </Button>
          <Button asChild className="w-full justify-center bg-primary hover:bg-primary/90 text-white">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
