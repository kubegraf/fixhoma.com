interface Tier { name: string; price: string; sub: string; lines: string[]; cta: string; star?: boolean; tone: string }

const TIERS: Tier[] = [
  { name: "Reader", price: "Free", sub: "the journal · the menu · pay-per-fix", lines: ["AI diagnosis on every issue", "Flat-rate booking", "30-day re-fix guarantee", "Email receipts forever"], cta: "Start reading", tone: "bg-paper" },
  { name: "Subscriber", price: "₹299", sub: "/ month · the household plan", lines: ["10% off every fix", "Priority pro slots", "Quarterly safety pass", "Two saved addresses"], cta: "Subscribe", star: true, tone: "bg-burnt text-paper" },
  { name: "Patron", price: "Custom", sub: "for landlords & apartment councils", lines: ["Multi-property dashboard", "Tenant-direct logging", "Single monthly invoice", "Dedicated rep + audits"], cta: "Speak with us", tone: "bg-paper-3" },
];

export default function Subscribe() {
  return (
    <section id="subscribe" className="relative border-b-2 border-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-10 grid items-baseline gap-3 md:grid-cols-[auto_1fr] md:gap-10">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[42px] font-semibold leading-[1.0] tracking-[-0.02em] sm:text-[64px]">
            Subscribe to a<br />
            <span style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="text-burnt">well-kept home.</span>
          </h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Three plans. The middle one is what most readers keep. The first one is free and stays free.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <article key={t.name} className={`relative border-2 border-ink p-7 ${t.tone} ${t.star ? "shadow-[8px_8px_0_#1f1a14]" : "shadow-[4px_4px_0_#1f1a14]"}`}>
              {t.star && (
                <span className="absolute -top-3 left-5 inline-flex bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-burnt border-2 border-burnt">
                  Editor's pick
                </span>
              )}
              <div className="text-[11.5px] font-bold uppercase tracking-[0.18em] opacity-80">{t.name}</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-[44px] font-semibold leading-none tracking-[-0.02em]">
                {t.price}
              </div>
              <p className="mt-2 text-[13px] opacity-80">{t.sub}</p>
              <ul className="mt-5 space-y-2 text-[13.5px]">
                {t.lines.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span>✿</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-[12.5px] font-bold uppercase tracking-[0.18em] ${
                t.star ? "bg-paper text-ink" : "border-2 border-ink bg-ink text-paper"
              }`}>
                {t.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
