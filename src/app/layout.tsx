import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SmoothScrollProvider } from '@/components/motion/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  openGraph: SEO_CONFIG.openGraph as Metadata['openGraph'],
  twitter: SEO_CONFIG.twitter as Metadata['twitter'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          inter.variable,
          outfit.variable,
          playfair.variable
        )}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
