export default function AdminDashboardPage() {
  return (
    <div className="p-10 font-sans">
      <h1 className="font-heading text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Manage donations, oversee projects, and coordinate campaigns globally.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border p-6 rounded-2xl shadow-sm col-span-1 md:col-span-2">
          <h2 className="text-lg font-bold mb-2">Total Funds Raised</h2>
          <p className="text-4xl text-primary font-bold">$12,450,900</p>
          <p className="text-sm text-hope mt-2">+14% this month</p>
        </div>
        <div className="bg-card border p-6 rounded-2xl shadow-sm col-span-1 md:col-span-2">
          <h2 className="text-lg font-bold mb-2">Active Volunteers</h2>
          <p className="text-4xl font-bold">12,430</p>
          <p className="text-sm text-hope mt-2">+50 this week</p>
        </div>
        <div className="bg-card border p-6 rounded-2xl shadow-sm col-span-1 md:col-span-4">
          <h2 className="text-lg font-bold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>New $50/mo subscription from John D.</span>
              <span className="text-muted-foreground text-sm">2 mins ago</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Rainforest project reached milestone 3</span>
              <span className="text-muted-foreground text-sm">1 hour ago</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Volunteer registration: Alice Smith in Brazil</span>
              <span className="text-muted-foreground text-sm">3 hours ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
