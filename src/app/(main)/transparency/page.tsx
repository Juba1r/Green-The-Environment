export default function TransparencyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-heading text-5xl font-bold mb-6">Transparency</h1>
      <p className="text-xl text-muted-foreground mb-16">
        Detailed financial reports and audits ensuring your donations go
        directly to impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card p-8 rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Financial Efficiency</h3>
          <p className="text-muted-foreground mb-6">
            92% of all donations go directly to our field programs, with only 8%
            allocated to administrative and fundraising costs.
          </p>
          <div className="h-4 w-full bg-muted rounded-full overflow-hidden mb-2">
            <div className="h-full bg-primary" style={{ width: "92%" }} />
          </div>
          <p className="text-sm font-semibold">92% Program Impact</p>
        </div>
        <div className="bg-card p-8 rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Audited Accountability</h3>
          <p className="text-muted-foreground mb-6">
            We are audited annually by certified global firms. You can download
            our latest full reports below.
          </p>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-muted rounded-lg flex justify-between items-center group transition-colors hover:bg-muted/80 cursor-not-allowed">
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                Safeguarding & Ethics Policy
              </span>
              <span className="text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-full">
                DEMO
              </span>
            </div>
            <div className="p-4 bg-muted rounded-lg flex justify-between items-center group transition-colors hover:bg-muted/80 cursor-not-allowed">
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                Anti-Corruption Framework
              </span>
              <span className="text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-full">
                DEMO
              </span>
            </div>
            <div className="p-4 bg-muted rounded-lg flex justify-between items-center group transition-colors hover:bg-muted/80 cursor-not-allowed">
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                Diversity & Inclusion Standards
              </span>
              <span className="text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-full">
                DEMO
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Our Commitment to Integrity</h2>
        <p>
          Forestry Reserve believes that trust is built on radical transparency
          and strict adherence to global compliance standards. We have
          established robust policies covering safeguarding, anti-corruption,
          and diversity to ensure our operations maintain the highest ethical
          standards across all forest environments.
        </p>
      </div>
    </div>
  );
}
