export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-bg-elev via-bg-soft to-bg-soft p-10 text-center sm:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl animate-drift" />
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-float-slow" />
          </div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[52px]">
            Your home, fixed.
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-bright to-accent bg-clip-text text-transparent">In a single tap.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">Available on iOS and Android. Free to install. Pay only when you book.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-bg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              <div className="text-left">
                <div className="text-[10px]">Download on the</div>
                <div className="text-[14px] font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-bg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.5l11 10.5-11 10.5c-.4-.3-.6-.7-.6-1.2V2.7c0-.5.2-.9.6-1.2zM14.7 13.6L5.5 22.3l13.7-7.7c.6-.4.6-1.2 0-1.6L14.7 11l-1.1.9-1.1.9 2.2 2.1 1.1-1.3zM5.5 1.7l9.2 9 1.1-.9 1.1-.9 4.6-2.6c.6-.4.6-1.2 0-1.6L5.5 1.7z" /></svg>
              <div className="text-left">
                <div className="text-[10px]">Get it on</div>
                <div className="text-[14px] font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
