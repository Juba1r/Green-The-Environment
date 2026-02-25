export default function DonorDashboardPage() {
  return (
    <div className="p-10 font-sans">
      <h1 className="font-heading text-4xl font-bold mb-4">Welcome back, Donor!</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Your contributions have helped plant 150 trees this year. Thank you for making an impact.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold mb-2">Total Given</h2>
          <p className="text-3xl text-primary font-bold">$1,250</p>
        </div>
        <div className="bg-card border p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold mb-2">Active Subscriptions</h2>
          <p className="text-3xl font-bold">1 <span className="text-sm font-normal text-muted-foreground">($50/mo)</span></p>
        </div>
        <div className="bg-card border p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold mb-2">Tax Receipts</h2>
          <p className="text-primary hover:underline cursor-pointer font-semibold mt-2">Download 2025 Summary</p>
        </div>
      </div>
    </div>
  );
}
