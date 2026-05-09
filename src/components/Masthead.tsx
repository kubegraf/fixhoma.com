export default function Masthead() {
  return (
    <header className="border-b-2 border-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:px-10">
        <span>Vol. XII · No. 5</span>
        <span className="hidden sm:inline">May 2026 · Subscribers' Edition</span>
        <span>Cover price · ₹0</span>
      </div>
      <div className="border-y-2 border-ink py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 sm:px-10">
          <div className="flex w-full items-end justify-between">
            <div className="hidden flex-1 text-[12px] uppercase tracking-[0.18em] text-ink-muted sm:block">
              <p>A monthly journal of</p>
              <p>well-kept homes</p>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-center text-[64px] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-[120px] lg:text-[160px]">
              FixHoma
            </h1>
            <div className="hidden flex-1 text-right text-[12px] uppercase tracking-[0.18em] text-ink-muted sm:block">
              <p>Diagnose. Book.</p>
              <p>Done — by Friday.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-10">
        <nav className="hidden flex-wrap items-center gap-x-7 gap-y-2 text-[12.5px] font-medium md:flex">
          <a href="#feature" className="hover:text-burnt">Feature</a>
          <a href="#rooms" className="hover:text-burnt">Rooms</a>
          <a href="#menu" className="hover:text-burnt">Service menu</a>
          <a href="#visits" className="hover:text-burnt">Visit notes</a>
          <a href="#almanac" className="hover:text-burnt">Almanac</a>
          <a href="#subscribe" className="hover:text-burnt">Subscribe</a>
        </nav>
        <a href="#subscribe" className="inline-flex items-center gap-2 rounded-none border-2 border-ink bg-ink px-5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-paper hover:bg-burnt hover:border-burnt">
          Read the issue →
        </a>
      </div>
    </header>
  );
}
