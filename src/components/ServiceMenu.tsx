interface Item { name: string; sub: string; price: string; emoji?: string }
interface Course { name: string; bullet: string; items: Item[] }

const COURSES: Course[] = [
  {
    name: "I. Plumbing", bullet: "₊", items: [
      { name: "Tap leak · single", sub: "valve, washer, head — done in 25 min", price: "₹220" },
      { name: "Geyser service", sub: "descaling, anode rod, pressure test", price: "₹620" },
      { name: "Block clear · sink/toilet", sub: "no chemicals · honest tools", price: "₹380" },
      { name: "RO + filter setup", sub: "install, sanitise, taste-test", price: "₹999" },
    ],
  },
  {
    name: "II. Electric", bullet: "✦", items: [
      { name: "Fan / fixture install", sub: "wiring, switching, balance", price: "₹399" },
      { name: "MCB & earthing audit", sub: "annual safety pass", price: "₹599" },
      { name: "Fan speed regulator", sub: "modern, quiet, dimmable", price: "₹449" },
      { name: "Smart-switch set-up", sub: "Alexa / Google / Apple Home", price: "₹1,299" },
    ],
  },
  {
    name: "III. Cooling", bullet: "❀", items: [
      { name: "AC general service", sub: "filter, condenser, gas check", price: "₹499" },
      { name: "AC deep clean", sub: "two-room, jet wash, sanitise", price: "₹1,499" },
      { name: "AC install", sub: "split or window · same-day", price: "from ₹1,799" },
      { name: "Refrigerator service", sub: "thermostat, gasket, defrost", price: "₹699" },
    ],
  },
  {
    name: "IV. Carpentry & Tiles", bullet: "✚", items: [
      { name: "Hinge / handle fix", sub: "kitchen, wardrobe, doors", price: "₹220" },
      { name: "Re-grout · 1 wall", sub: "anti-fungal, fresh joints", price: "₹999" },
      { name: "Curtain rod / shelf", sub: "level, plug, anchor", price: "₹380" },
      { name: "Door trim & lock", sub: "old wood, new lock, no chips", price: "₹580" },
    ],
  },
];

export default function ServiceMenu() {
  return (
    <section id="menu" className="relative border-b-2 border-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-burnt">Section M</span>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-[42px] font-semibold leading-[1.0] tracking-[-0.02em] sm:text-[64px]">
              The service menu.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-muted">
            All prices are flat-rate, all-inclusive, all on the receipt. If a job needs more, the pro tells you before they touch a tool.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {COURSES.map((c) => (
            <article key={c.name} className="border-2 border-ink bg-paper p-6 sm:p-8">
              <div className="flex items-baseline justify-between border-b-2 border-ink pb-3">
                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-[26px] font-semibold tracking-[-0.01em]">
                  {c.name}
                </h3>
                <span className="text-[20px] text-burnt">{c.bullet}</span>
              </div>
              <ul>
                {c.items.map((it, i) => (
                  <li key={it.name} className={`grid grid-cols-[1fr_auto] items-baseline gap-3 ${i > 0 ? "border-t border-rule" : ""} py-3`}>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span style={{ fontFamily: "var(--font-display)" }} className="text-[17px] font-medium">{it.name}</span>
                        <span className="flex-1 border-b border-dotted border-rule-strong" aria-hidden="true" />
                        <span style={{ fontFamily: "var(--font-display)" }} className="text-[17px] font-semibold text-burnt">{it.price}</span>
                      </div>
                      <div className="text-[13px] text-ink-muted">{it.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[12.5px] italic text-ink-dim" style={{ fontFamily: "var(--font-italic)" }}>
          A footnote: parts billed at MRP. Major items (geysers, ACs, taps) are pre-quoted. Tea, when offered, is free.
        </p>
      </div>
    </section>
  );
}
