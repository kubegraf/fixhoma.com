interface Note { who: string; pro: string; date: string; body: string; rating: number; bookmark: string }

const NOTES: Note[] = [
  { who: "Sangeeta · Block 4", pro: "with Rajiv K., plumber", date: "8 May", body: "Tap leak. Said hello, took off boots, fixed in twenty minutes. Tea was offered. Fix held by morning.", rating: 5, bookmark: "PLUMBING" },
  { who: "Anjali · Hillside", pro: "with Maya R., electrician", date: "5 May", body: "Three fixtures, one regulator, an unpriced bonus: she labelled my MCB box. I have seen better Sundays, but rarely.", rating: 5, bookmark: "ELECTRIC" },
  { who: "Vikas · Riverside", pro: "with Arjun P., AC tech", date: "2 May", body: "Pre-summer service for two ACs. He knew the unit's noise before I described it. Quiet by lunch.", rating: 5, bookmark: "COOLING" },
];

export default function VisitNotes() {
  return (
    <section id="visits" className="relative border-b-2 border-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid items-baseline gap-3 md:grid-cols-[auto_1fr] md:gap-10">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[42px] font-semibold leading-[1.0] tracking-[-0.02em] sm:text-[64px]">
            Visit notes,<br />
            <span style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="text-marigold">in their own words.</span>
          </h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Each FixHoma job ends with a single short paragraph from the customer — typed in their own time, edited by no one. We collect the best in the back of the journal.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {NOTES.map((n, i) => (
            <article key={n.who} className="relative border-2 border-ink bg-paper p-6" style={{ transform: `rotate(${i % 2 === 0 ? -0.4 : 0.4}deg)` }}>
              <span className="absolute -top-3 right-5 inline-flex bg-marigold px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-deep">
                {n.bookmark}
              </span>
              <div className="flex items-baseline justify-between text-[12px] uppercase tracking-[0.18em] text-ink-muted">
                <span>{n.date}</span>
                <span className="text-burnt">{"★".repeat(n.rating)}</span>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-3 text-[18px] leading-relaxed">
                "{n.body}"
              </p>
              <div className="mt-5 border-t border-rule-strong pt-3 text-[13px]">
                <span className="font-semibold">{n.who}</span>
                <span className="text-ink-muted"> &nbsp;·&nbsp; {n.pro}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
