export default function Colophon() {
  return (
    <footer className="bg-paper px-5 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-baseline justify-between">
              <span style={{ fontFamily: "var(--font-display)" }} className="text-[28px] font-semibold tracking-[-0.02em]">FixHoma</span>
              <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">Vol. XII · No. 5</span>
            </div>
            <p style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              A monthly journal of well-kept homes. Established in a small flat in Bandra. Printed digitally for your hallway.
            </p>
          </div>
          {[
            { t: "Departments", l: ["Plumbing", "Electric", "Cooling", "Carpentry", "Gardens"] },
            { t: "About", l: ["Our editors", "Pros' guild", "Press", "Letters"] },
            { t: "Subscribe", l: ["Plans", "Gift a year", "Refer a neighbour", "Help"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">{c.t}</div>
              <ul className="mt-3 space-y-1.5">
                {c.l.map((x) => <li key={x}><a href="#" className="text-[13.5px] hover:text-burnt">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-ink pt-5 text-[12px] text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FixHoma · Bandra · Bengaluru · Mumbai · Dubai</p>
          <p style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }}>Set in Fraunces · printed on light · delivered on wireless.</p>
        </div>
      </div>
    </footer>
  );
}
