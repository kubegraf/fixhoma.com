const CASES = [
  { title: "Families", body: "From a leaky tap to a tantrum-causing AC, FixHoma handles the home so you can handle life.", items: ["One number for every fix", "Family slots & reminders", "Gentle, vetted pros for kids' homes"] },
  { title: "Busy professionals", body: "No phone tag. No vague quotes. Book on the train, fix in the evening, pay in the app.", items: ["Evening + weekend slots", "Live ETA tracking", "Auto-receipts for taxes"] },
  { title: "Landlords & owners", body: "Tenants log issues directly. You approve, FixHoma dispatches, you get the paperwork.", items: ["Multi-property dashboard", "Tenant-direct logging", "Single monthly invoice"] },
  { title: "Apartment managers", body: "From 12 flats to 1,200 — close maintenance tickets 3× faster with full audit trails.", items: ["Bulk SLA pricing", "Audit & accountability", "Vendor neutrality"] },
];

export default function UseCases() {
  return (
    <section id="use" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">Who it serves</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Built for every kind of home.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-8 transition-all hover:border-accent/40">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/0 via-brand/60 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-[22px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{c.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13.5px] text-ink-muted">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />{it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
