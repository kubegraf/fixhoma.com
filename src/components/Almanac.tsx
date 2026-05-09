const ENTRIES = [
  { mo: "MAY", title: "Pre-summer", things: ["Service ACs · gas + filter", "Test geyser thermostats", "Re-grout shower walls", "Mosquito mesh top-up"] },
  { mo: "JUN", title: "Monsoon prep", things: ["Roof + gutter sweep", "Window sealant top-up", "Earthing test · MCB box", "Sump-pump check"] },
  { mo: "OCT", title: "Festive ready", things: ["Deep clean · 2 rooms", "Repaint trims", "Light fixture polish", "Sofa shampoo"] },
  { mo: "JAN", title: "Annual visit", things: ["Whole-house safety pass", "Wiring + earthing", "Plumbing pressure test", "Gas geyser flue"] },
];

export default function Almanac() {
  return (
    <section id="almanac" className="relative border-b-2 border-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid items-baseline gap-3 md:grid-cols-[auto_1fr] md:gap-10">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[42px] font-semibold leading-[1.0] tracking-[-0.02em] sm:text-[64px]">
            The home<br />
            <span style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="text-leaf">almanac.</span>
          </h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            A small, sensible calendar of the things that earn a fix when. Subscribers receive it as a printed card every January.
          </p>
        </div>

        <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {ENTRIES.map((e) => (
            <article key={e.mo} className="border-2 border-ink bg-paper-2 p-6">
              <div className="flex items-baseline justify-between">
                <span style={{ fontFamily: "var(--font-display)" }} className="text-[44px] font-semibold leading-none text-burnt">{e.mo}</span>
                <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">2026</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-3 text-[20px] text-ink">
                {e.title}
              </h3>
              <ul className="mt-4 space-y-1.5 text-[13px]">
                {e.things.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-burnt">✿</span>
                    <span>{t}</span>
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
