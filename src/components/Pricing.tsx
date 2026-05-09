const PLANS = [
  { tier: "Pay-as-you-fix", price: "Free", period: "to use", blurb: "No subscription. Pay flat-rate per job, only when you book.", features: ["AI diagnosis · always free", "Flat-rate quotes upfront", "Background-checked pros", "30-day re-fix guarantee"], cta: "Open the app", highlighted: false },
  { tier: "Home Plus", price: "₹299", period: "per month", blurb: "Priority slots and 10% off every fix.", features: ["10% off all jobs", "Priority booking", "Free annual safety check", "Two saved addresses", "Family member access"], cta: "Choose Home Plus", highlighted: true },
  { tier: "Property Pro", price: "Custom", period: "per portfolio", blurb: "For landlords and apartment managers.", features: ["Multi-property dashboard", "Tenant-direct logging", "Single monthly invoice", "SLA + dedicated rep", "Audit logs + reporting"], cta: "Talk to sales", highlighted: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-brand-bright">Pricing</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Pay for fixes. Not for the platform.</h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-2xl border p-7 ${p.highlighted ? "border-brand bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft shadow-2xl shadow-brand/15" : "border-border bg-bg-soft"}`}>
              {p.highlighted && (<span className="absolute right-5 top-5 rounded-full border border-brand/40 bg-brand-soft px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-bright">Most picked</span>)}
              <div className="text-[14px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{p.tier}</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[42px] font-semibold tracking-tight">{p.price}</span>
                <span className="text-[13px] text-ink-muted">{p.period}</span>
              </div>
              <p className="mt-2.5 text-[14.5px] text-ink-muted">{p.blurb}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-none text-brand-bright"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-medium transition-transform hover:scale-[1.01] ${p.highlighted ? "bg-brand text-white" : "border border-border-strong bg-surface text-ink"}`}>
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
