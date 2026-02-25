import { DonateForm } from '@/components/forms/DonateForm';

export const metadata = {
  title: 'Donate | Green The Environment Platform',
  description: 'Make a donation to help us secure a sustainable future.',
};

export default function DonatePage() {
  return (
    <div className="py-32 px-6 flex flex-col pt-40 min-h-screen bg-muted/30">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-center text-foreground mb-6">
          Support Our Mission
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Your giving helps us plant more trees, protect the oceans, and provide clean water to those in need. Choose an amount to give today.
        </p>
        
        <div className="bg-card shadow-2xl shadow-primary/5 rounded-3xl p-8 border border-border">
          <DonateForm />
        </div>
      </div>
    </div>
  );
}
