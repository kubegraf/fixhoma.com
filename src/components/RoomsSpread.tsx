interface Room { name: string; sub: string; lead: string; tag: string; pos: string; tone: string }

const ROOMS: Room[] = [
  { name: "Kitchen", sub: "I — Plumbing & Heat", lead: "The dripping tap. The cold water in the wrong line. The dishwasher that hums but never fills. We have a name for each.", tag: "30 services", pos: "rotate-[-1deg]", tone: "bg-paper" },
  { name: "Bath", sub: "II — Tiles & Fittings", lead: "Re-grouting before the moss arrives. The flush that won't. The shower head that whispers when it should sing.", tag: "22 services", pos: "rotate-[0.5deg] mt-6", tone: "bg-paper-2" },
  { name: "Bedroom", sub: "III — Cool & Quiet", lead: "AC services that include the unsung filters. The fan that gathers wisdom. The sleep you finally take.", tag: "12 services", pos: "rotate-[-0.5deg]", tone: "bg-paper-3" },
  { name: "Hall", sub: "IV — Light & Wire", lead: "The fixture that flickers. The plug that earned a black mark. Smart switches you can spell.", tag: "18 services", pos: "rotate-[0.8deg] mt-8", tone: "bg-paper" },
  { name: "Garden", sub: "V — Green & Stone", lead: "The hedge that grew opinions. The drip line that lost the plot. Lawn-care for the small lawn.", tag: "9 services", pos: "rotate-[-0.7deg]", tone: "bg-paper-2" },
  { name: "Whole-house", sub: "VI — A Day's Visit", lead: "The annual: an hour per room, a checklist that's older than us, a pro who carries his own light.", tag: "1 visit", pos: "rotate-[0.4deg] mt-4", tone: "bg-paper-3" },
];

export default function RoomsSpread() {
  return (
    <section id="rooms" className="relative border-b-2 border-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid items-end gap-3 md:grid-cols-[auto_1fr] md:gap-10">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[42px] font-semibold leading-[1.0] tracking-[-0.02em] sm:text-[64px]">
            The rooms,<br />
            <span style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="text-burnt">in six chapters.</span>
          </h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Every fix on FixHoma starts in a room. Browse the columns, name the trouble, and we'll find the right pro for the right floor of your house.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((r, i) => (
            <article key={r.name} className={`relative ${r.tone} ${r.pos} border-2 border-ink p-6 shadow-[5px_5px_0_#1f1a14] transition-transform hover:rotate-0 hover:translate-y-[-2px]`}>
              <span className="absolute -top-3 left-5 inline-flex items-center bg-burnt px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-paper">
                Chapter {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-[11.5px] uppercase tracking-[0.18em] text-ink-muted">{r.sub}</div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-[36px] font-semibold leading-tight tracking-[-0.02em]">
                {r.name}
              </h3>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-3 max-w-xs text-[15px] leading-snug text-ink-muted">
                {r.lead}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-rule-strong pt-3 text-[12px]">
                <span className="font-bold uppercase tracking-[0.16em] text-marigold">{r.tag}</span>
                <a href="#menu" className="font-bold uppercase tracking-[0.18em] text-ink hover:text-burnt">
                  read on →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
