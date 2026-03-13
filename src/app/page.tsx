import { ContactForm } from "@/components/contact-form";
import { HeroDiagram } from "@/components/hero-diagram";
import { siteContent } from "@/content/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-200/70">
      {children}
    </p>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>GhostSOP</SectionLabel>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

function Surface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(45,212,191,0.16),_transparent_28%),linear-gradient(180deg,#040816_0%,#07111f_44%,#08101a_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[linear-gradient(180deg,rgba(14,165,233,0.08),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                G
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
                  {siteContent.nav.logo}
                </p>
                <p className="hidden truncate text-sm text-slate-400 sm:block">
                  {siteContent.nav.tagline}
                </p>
              </div>
            </a>

            <a
              href={siteContent.nav.ctaHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 px-5 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-400/20"
            >
              {siteContent.nav.ctaLabel}
            </a>
          </div>
        </header>

        <section
          id="top"
          className="grid items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-16"
        >
          <div>
            <SectionLabel>{siteContent.hero.eyebrow}</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-4 max-w-3xl text-2xl font-medium tracking-[-0.03em] text-sky-200 md:text-4xl">
              {siteContent.hero.subheadline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {siteContent.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={siteContent.hero.primaryCtaHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-7 text-base font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-[0_16px_48px_rgba(56,189,248,0.35)]"
              >
                {siteContent.hero.primaryCtaLabel}
              </a>
              <a
                href={siteContent.hero.secondaryCtaHref}
                className="inline-flex min-h-14 items-center justify-center text-base font-medium text-slate-200 transition hover:text-white"
              >
                {siteContent.hero.secondaryCtaLabel}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {siteContent.hero.kicker}
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
                The front desk system for businesses without a front desk.
              </span>
            </div>
          </div>

          <HeroDiagram />
        </section>

        <section id="problem" className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.problem.heading}
            description="Most businesses do not have a lead volume problem. They have a response and intake problem that quietly kills bookings after the inquiry arrives."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.problem.items.map((item, index) => (
              <Surface key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-lg font-semibold text-sky-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.body}</p>
              </Surface>
            ))}
          </div>
        </section>

        <section id="solution" className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.solution.heading}
            description="GhostSOP installs a simple five-step system that handles the first part of your client journey automatically."
          />
          <div className="mt-10 grid gap-4">
            {siteContent.solution.steps.map((step, index) => (
              <Surface
                key={step.title}
                className="grid items-start gap-6 md:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-500/10 text-2xl font-semibold text-sky-200">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.comparison.heading}
            description="This is the same inquiry flow before the install and after the install. The difference is whether your business has a front desk system doing the first move for you."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Surface className="bg-rose-500/[0.05]">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-rose-200/80">
                Before
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {siteContent.comparison.before.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-rose-300/20 bg-rose-400/10 px-4 py-2 text-sm font-medium text-rose-100">
                      {step}
                    </span>
                    {index < siteContent.comparison.before.length - 1 ? (
                      <span className="text-slate-500">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-slate-300">
                No structured intake. No instant reply. No clear booking path. You may not even know the lead existed until it is already gone.
              </p>
            </Surface>

            <Surface className="border-sky-400/20 bg-sky-500/[0.08]">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-100">
                After
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {siteContent.comparison.after.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100">
                      {step}
                    </span>
                    {index < siteContent.comparison.after.length - 1 ? (
                      <span className="text-slate-500">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-slate-200">
                Every inquiry gets captured, acknowledged, and pointed toward the next step while you stay focused on service delivery.
              </p>
            </Surface>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.audiences.heading}
            description={siteContent.audiences.qualifier}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.audiences.items.map((item) => (
              <Surface key={item.label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">
                  {item.code}
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">Inbound leads are already happening here.</p>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section id="included" className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.included.heading}
            description="GhostSOP is sold as a one-time system install. The deliverables are concrete, operational, and built to keep working after setup."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {siteContent.included.items.map((item) => (
              <Surface key={item} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-200">
                  ✓
                </div>
                <p className="text-lg font-medium text-white">{item}</p>
              </Surface>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.5)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">
              Positioning
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-white md:text-5xl">
              {siteContent.positioning.heading}
            </h2>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-200">
              {siteContent.positioning.body}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              {siteContent.positioning.subtext}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.notFor.heading}
            description="A tighter offer converts better. GhostSOP is intentionally narrow so the site can qualify the right buyers and push the wrong ones away."
          />
          <div className="mt-10 grid gap-4">
            {siteContent.notFor.items.map((item) => (
              <Surface key={item} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-300">
                  ×
                </div>
                <p className="text-lg text-slate-100">{item}</p>
              </Surface>
            ))}
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <SectionHeading
            title={siteContent.faq.heading}
            description="Short answers to the operational questions people usually ask before moving forward."
          />
          <div className="mt-10 grid gap-4">
            {siteContent.faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {item.question}
                  <span className="text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="pt-4">
              <SectionLabel>Call to action</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {siteContent.contact.heading}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                {siteContent.contact.subtext}
              </p>
              <div className="mt-8 grid gap-4">
                <Surface className="bg-white/[0.02]">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What happens next</p>
                  <p className="mt-3 text-lg leading-7 text-slate-200">
                    You describe the leak in your lead process. GhostSOP maps the intake gaps, then installs the form, response flow, booking handoff, and tracking system that closes them.
                  </p>
                </Surface>
                <Surface className="bg-white/[0.02]">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Offer clarity</p>
                  <p className="mt-3 text-lg leading-7 text-slate-200">
                    One-time install. No ads. No SEO. No social media management. No vague monthly marketing retainer.
                  </p>
                </Surface>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <footer className="border-t border-white/10 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">{siteContent.nav.logo}</p>
              <p className="mt-2 text-sm text-slate-400">{siteContent.nav.tagline}</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
              {siteContent.footer.links.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-6 text-sm text-slate-500">{siteContent.footer.copyright}</p>
        </footer>
      </div>
    </main>
  );
}
