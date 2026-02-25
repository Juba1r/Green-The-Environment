import Link from 'next/link';
import { Home, Users, Search, List, Settings, LogOut } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card h-screen sticky top-0 flex flex-col items-start px-6 py-8">
        <Link href="/" className="mb-12 font-heading font-black text-2xl tracking-tighter w-full">GTE <span className="text-primary tracking-normal">Portal</span></Link>
        <nav className="flex flex-col gap-2 w-full text-foreground/80 font-medium">
          <Link href="/dashboard/donor" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all text-sm">
            <Home className="w-4 h-4" /> Donor Home
          </Link>
          <Link href="/dashboard/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all text-sm">
            <Search className="w-4 h-4" /> Admin Home
          </Link>
          <Link href="/dashboard/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all text-sm">
            <Users className="w-4 h-4" /> Volunteers
          </Link>
          <Link href="/dashboard/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all text-sm">
            <List className="w-4 h-4" /> Campaigns
          </Link>
        </nav>
        
        <div className="mt-auto flex flex-col gap-2 w-full text-foreground/80 font-medium">
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted hover:text-foreground hover:-translate-y-0.5 transition-all text-sm">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <Link href="/" className="flex items-center gap-3 p-3 rounded-lg text-destructive hover:bg-destructive/10 hover:-translate-y-0.5 transition-all text-sm">
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 w-full bg-background/50">
        {children}
      </main>
    </div>
  );
}
