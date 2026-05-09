export default function FeatureArticle() {
  return (
    <section id="feature" className="relative border-b-2 border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:gap-16">
        {/* lead column */}
        <div>
          <span className="inline-block bg-burnt px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.18em] text-paper">
            Feature · 12 min read
          </span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-5 text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[72px] lg:text-[88px]">
            The cult of the<br />
            <span style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }} className="text-burnt">well-kept home.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-5 max-w-xl text-[18px] leading-relaxed text-ink-muted">
            Why we kept calling four numbers, kept getting two callbacks, kept losing Saturdays to dripping taps — and what changed when one app brought back the old ways of fixing things.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-paper-3 text-[14px] font-semibold text-burnt" style={{ fontFamily: "var(--font-display)" }}>R</span>
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-ink-muted">
              <div>By <span className="text-ink">Reema A.</span></div>
              <div>Bandra, Mumbai · May 9</div>
            </div>
            <span className="ml-auto hidden text-[12px] text-ink-dim sm:inline">photos · the editors</span>
          </div>

          <div style={{ columnCount: 2, columnGap: "32px" }} className="col-rule mt-9 max-w-2xl text-[14.5px] leading-relaxed text-ink dropcap">
            <p>The first time the kitchen tap dripped, I called the same number my mother had used for thirty years. Mr. Joseph promised a Tuesday. He arrived a Friday. He fixed the tap and broke the new sink. I thanked him.</p>
            <p className="mt-3">The second time, I tried an app. I typed "tap is leaking" and the app sent me a list of nine pros, none of whom answered. The third time, I tried FixHoma. The diagnosis took 11 seconds. The pro arrived in 18 minutes. The fix was final, and the receipt — a small joy — landed in my email by tea time.</p>
            <p className="mt-3">A small joy is the architectural unit of FixHoma. We are not after disruption. We are after the quiet competence of someone who knew which valve to turn before they came up the stairs.</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#subscribe" className="inline-flex items-center gap-2 rounded-none border-2 border-ink bg-ink px-5 py-3 text-[13px] font-bold uppercase tracking-[0.18em] text-paper hover:bg-burnt hover:border-burnt">
              Subscribe to the issue
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-none border-2 border-ink bg-paper px-5 py-3 text-[13px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-paper-3">
              Browse the menu
            </a>
          </div>
        </div>

        {/* illustrated plate */}
        <aside className="relative">
          <div className="torn relative overflow-hidden rounded-sm border-2 border-ink bg-paper-2 p-3 shadow-[6px_6px_0_#1f1a14]">
            <SceneSVG />
            <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              <span>Plate I — A Tuesday morning</span>
              <span>F. Sketches · 2026</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]">
            <div className="border-l-2 border-burnt pl-3">
              <div className="font-bold uppercase tracking-[0.18em] text-burnt">In numbers</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[28px] leading-tight">180,000+</div>
              <div className="text-ink-muted">jobs completed</div>
            </div>
            <div className="border-l-2 border-marigold pl-3">
              <div className="font-bold uppercase tracking-[0.18em] text-marigold">In time</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[28px] leading-tight">22 min</div>
              <div className="text-ink-muted">median pro arrival</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SceneSVG() {
  return (
    <svg viewBox="0 0 400 320" className="block w-full">
      <defs>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#1f1a14" strokeOpacity="0.18" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="320" fill="#f1ead9" />

      {/* sky */}
      <rect x="0" y="0" width="400" height="180" fill="#ebdfc6" />

      {/* sun */}
      <circle cx="320" cy="60" r="26" fill="#f1b04a" />

      {/* house */}
      <polygon points="80,160 200,80 320,160" fill="#c14a1f" />
      <rect x="100" y="160" width="200" height="120" fill="#f9f3ea" stroke="#1f1a14" strokeWidth="1.4" />
      <rect x="100" y="160" width="200" height="120" fill="url(#hatch)" />
      <rect x="180" y="200" width="40" height="80" fill="#1f1a14" />
      <rect x="120" y="195" width="35" height="35" fill="#5d7a3a" />
      <rect x="245" y="195" width="35" height="35" fill="#5d7a3a" />
      <line x1="180" y1="232" x2="220" y2="232" stroke="#1f1a14" strokeWidth="0.8" />

      {/* plant */}
      <circle cx="60" cy="270" r="18" fill="#5d7a3a" />
      <rect x="55" y="280" width="10" height="20" fill="#2c1d10" />

      {/* van */}
      <g>
        <rect x="220" y="240" width="80" height="32" rx="3" fill="#d8932b" stroke="#1f1a14" strokeWidth="1.2" />
        <rect x="226" y="248" width="22" height="14" fill="#f9f3ea" stroke="#1f1a14" strokeWidth="0.8" />
        <text x="262" y="262" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#1f1a14">FIXHOMA</text>
        <circle cx="240" cy="278" r="5" fill="#1f1a14" />
        <circle cx="290" cy="278" r="5" fill="#1f1a14" />
      </g>

      {/* path */}
      <path d="M 0 300 Q 100 290 220 300 T 400 300" stroke="#1f1a14" strokeOpacity="0.30" strokeWidth="1.2" fill="none" strokeDasharray="6 4" />
    </svg>
  );
}
