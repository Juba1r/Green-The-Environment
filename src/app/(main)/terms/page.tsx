export const metadata = {
  title: 'Terms of Service | Green The Environment',
  description: 'The terms and conditions for using the Green The Environment platform.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-heading text-5xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Last Updated: February 2026</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By using our platform, you agree to these legal terms.</p>
        <h2>2. Donation Refunds</h2>
        <p>Donations are generally non-refundable unless a clerical error occurred.</p>
        <h2>3. Volunteer Conduct</h2>
        <p>Volunteers must adhere to our code of ethics and integrity.</p>
      </div>
    </div>
  );
}
