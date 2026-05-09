const STATS = [
  { v: "180,000+", k: "fixes completed" },
  { v: "4.9★", k: "avg pro rating" },
  { v: "92%", k: "fixed first visit" },
  { v: "30 days", k: "satisfaction window" },
];

const QUOTES = [
  { quote: "Booked a plumber at 9am, fixed by noon, ₹600 flat. Old me would've called five numbers and lost a Saturday.", name: "Anjali M.", role: "Marketing lead · Bengaluru" },
  { quote: "We manage 24 flats. FixHoma is now our default for every tenant call. Tickets close 3× faster.", name: "Vikas T.", role: "Apartment manager · Mumbai" },
  { quote: "The AI diagnosed our AC issue before the tech arrived. He came with the right part. Magic.", name: "Sara H.", role: "Founder · Dubai" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft p-8 sm:grid-cols-4 sm:p-10">
          {STATS.map((s) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="text-[34px] font-semibold tracking-tight text-ink sm:text-[40px]">{s.v}</div>
              <div className="mt-1 text-[12.5px] font-medium uppercase tracking-[0.16em] text-ink-dim">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-border bg-bg-soft p-7">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-bright/70"><path d="M9.4 7H5a3 3 0 0 0-3 3v6h6v-6H5a4 4 0 0 1 4.4-3zm10 0H15a3 3 0 0 0-3 3v6h6v-6h-3a4 4 0 0 1 4.4-3z" /></svg>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">"{q.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-accent text-[12px] font-semibold text-white">{q.name.charAt(0)}</span>
                <div>
                  <div className="text-[13.5px] font-medium text-ink">{q.name}</div>
                  <div className="text-[12px] text-ink-dim">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[12.5px] uppercase tracking-[0.16em] text-ink-dim">
          <Badge label="Background-checked pros" />
          <Badge label="Fully insured" />
          <Badge label="GST-compliant" />
          <Badge label="In-app payments" />
        </div>
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  );
}
