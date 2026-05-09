type Icon = "ai" | "shield" | "tag" | "calendar" | "card" | "star";

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  { icon: "ai", title: "AI diagnosis", body: "Snap a photo, describe the problem. FixHoma narrows the cause and likely fix before a pro shows up." },
  { icon: "shield", title: "Verified pros", body: "Background-checked, ID-verified, insured. Every pro is rated by real customers — and we re-check ratings monthly." },
  { icon: "tag", title: "Transparent pricing", body: "Flat-rate quotes for common jobs. No surprise bills. If it's complex, you'll see the breakdown before approving." },
  { icon: "calendar", title: "Instant booking", body: "Pick a slot — today, tomorrow, weekend morning. The pro arrives within a 30-minute window. Live ETA included." },
  { icon: "card", title: "In-app payments", body: "Pay through FixHoma — UPI, card, wallet. Receipts saved for warranty and taxes. No cash hassle, ever." },
  { icon: "star", title: "Satisfaction guarantee", body: "Issue not fully fixed? We send a pro back, free. No re-paying for the same problem within 30 days." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-brand-bright">What it does</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Six promises. Every fix.</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-7 transition-all hover:border-brand/40 hover:bg-bg-elev">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-bright ring-1 ring-inset ring-brand/30">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: Icon }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "ai": return (<svg {...props}><path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /><circle cx="12" cy="12" r="4" /></svg>);
    case "shield": return (<svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "tag": return (<svg {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>);
    case "calendar": return (<svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);
    case "card": return (<svg {...props}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>);
    case "star": return (<svg {...props}><polygon points="12 2 15 8.6 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.6 12 2" /></svg>);
  }
}
