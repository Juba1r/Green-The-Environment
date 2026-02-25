export const metadata = {
  title: 'Privacy Policy | Green The Environment',
  description: 'How we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-heading text-5xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Last Updated: February 2026</p>
        <h2>1. Information We Collect</h2>
        <p>Personal information you provide to us when you donate, volunteer, or contact us.</p>
        <h2>2. How We Use Information</h2>
        <p>To process donations, coordinate volunteer efforts, and improve our platform.</p>
        <h2>3. Data Security</h2>
        <p>We use industry-standard encryption to protect your financial and personal data.</p>
      </div>
    </div>
  );
}
