type FlowPillProps = {
  label: string;
  active?: boolean;
};

function FlowPill({ label, active = false }: FlowPillProps) {
  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm font-medium tracking-[0.18em] uppercase ${
        active
          ? "border-sky-400/80 bg-sky-500/20 text-sky-100"
          : "border-white/10 bg-white/5 text-slate-300"
      }`}
    >
      {label}
    </div>
  );
}

export function HeroDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.28),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.2),_transparent_38%)]" />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">GhostSOP System</p>
            <p className="mt-1 text-lg font-semibold text-white">Lead Handling Flow</p>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Always on
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Incoming</p>
            <div className="flex flex-wrap gap-3">
              <FlowPill label="Website form" active />
              <FlowPill label="Instagram DM" />
              <FlowPill label="Email" />
              <FlowPill label="Text" />
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 text-slate-500">
            <div className="h-px flex-1 bg-gradient-to-r from-sky-500/0 via-sky-500/60 to-sky-500/0" />
            <span className="text-xs uppercase tracking-[0.26em]">installed flow</span>
            <div className="h-px flex-1 bg-gradient-to-r from-sky-500/0 via-sky-500/60 to-sky-500/0" />
          </div>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capture</p>
                <p className="mt-2 text-base font-semibold text-white">Smart intake + qualification</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Ask the right questions, route the lead, and standardize what comes in.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Response</p>
                <p className="mt-2 text-base font-semibold text-white">Instant confirmation + booking</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reply immediately, offer the next step, and point ready leads toward the calendar.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Outcome</p>
              <p className="mt-2 text-xl font-semibold text-white">No more invisible lost leads</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                The system handles the first move automatically, while you stay focused on clients and delivery.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-6">
              <svg
                aria-hidden="true"
                className="h-28 w-full"
                viewBox="0 0 220 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 88C54 88 60 28 100 28C140 28 146 92 188 92" stroke="url(#line)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="18" cy="88" r="8" fill="#38BDF8" />
                <circle cx="100" cy="28" r="8" fill="#2DD4BF" />
                <circle cx="188" cy="92" r="8" fill="#38BDF8" />
                <defs>
                  <linearGradient id="line" x1="18" y1="28" x2="188" y2="92" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
