export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px] animate-drift" />
        <div className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
        <div className="absolute inset-0 grain opacity-[0.04]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12px] font-medium text-ink-muted backdrop-blur-md">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-brand-bright" />
          </span>
          Live in 12 cities · 4.9★ avg
        </div>
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-[44px] font-semibold leading-[1.05] tracking-tight sm:text-[64px] md:text-[78px]">
          Home services,
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-bright via-brand to-accent bg-clip-text text-transparent">finally trusted.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-muted sm:text-[19px]">
          FixHoma diagnoses your problem with AI, books a vetted local pro, and keeps your home running — without the runaround. Transparent prices. Real ratings. Real fixes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.02]">
            Book a fix
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-[15px] font-medium text-ink backdrop-blur-md transition-colors hover:border-brand/60 hover:bg-brand-soft">
            How it works
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[12.5px] text-ink-dim">
          <Trust label="Background-checked pros" />
          <Trust label="Upfront pricing" />
          <Trust label="Satisfaction guarantee" />
          <Trust label="In-app payments" />
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
        <div className="relative rounded-2xl border border-border-strong bg-bg-elev/70 p-2 backdrop-blur-xl shadow-2xl shadow-brand/10">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand/15 via-transparent to-accent/10 blur-xl" />
          <div className="rounded-xl border border-border bg-bg-soft p-6 sm:p-8">
            <div className="flex items-center gap-2 pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-[11px] text-ink-dim">fixhoma · home</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Tile tone="brand" label="Diagnosed" title="Tap leak · valve" hint="AI confidence 96% · Pro needed" />
              <Tile tone="accent" label="Booked" title="Rajiv · 4.9★" hint="Today · 4:30pm · 0.8 mi" />
              <Tile tone="emerald" label="Quote" title="$48 flat" hint="Parts + labour included" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Wide title="Today's pros nearby" rows={["Plumber · Rajiv K. · 4.9★ · 12 min", "Electrician · Maya R. · 4.8★ · 22 min", "AC technician · Arjun P. · 5.0★ · 18 min"]} />
              <Wide title="Last fixes" rows={["AC service · 2 wks ago · ₹999", "Geyser repair · 6 wks ago · ₹350", "Tap fitting · 3 mo ago · ₹220"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="rgb(251,191,36)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      {label}
    </span>
  );
}

function Tile({ tone, label, title, hint }: { tone: "brand" | "accent" | "emerald"; label: string; title: string; hint: string }) {
  const toneClass = tone === "brand" ? "from-brand/25 to-brand/0 ring-brand/30" : tone === "accent" ? "from-accent/25 to-accent/0 ring-accent/30" : "from-emerald-500/15 to-emerald-500/0 ring-emerald-500/30";
  return (
    <div className={`rounded-xl bg-gradient-to-br ${toneClass} ring-1 ring-inset p-4`}>
      <div className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-dim">{label}</div>
      <div className="mt-2 text-[16px] font-semibold leading-snug text-ink">{title}</div>
      <div className="mt-1 text-[12.5px] text-ink-muted">{hint}</div>
    </div>
  );
}

function Wide({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{title}</div>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li key={r} className="flex items-center gap-2.5 text-[13.5px] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
