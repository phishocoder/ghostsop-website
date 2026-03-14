import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GhostSOP Lead System Review",
  description:
    "Your GhostSOP Lead System Review is booked. Here's what to expect on the call.",
  alternates: {
    canonical: "/pre-call",
  },
  openGraph: {
    title: "GhostSOP Lead System Review",
    description:
      "Your GhostSOP Lead System Review is booked. Here's what to expect on the call.",
    url: "/pre-call",
  },
  twitter: {
    title: "GhostSOP Lead System Review",
    description:
      "Your GhostSOP Lead System Review is booked. Here's what to expect on the call.",
  },
};

const checklistItems = {
  cover: [
    "How your business currently handles inbound leads",
    "Where opportunities may be slipping through",
    "The simple system that captures and responds to leads automatically",
  ],
  ready: [
    "How leads currently reach you (DMs, forms, email, etc.)",
    "Rough estimate of how many leads you receive each week",
    "How you currently respond to them",
  ],
} as const;

type PreCallPageProps = {
  searchParams?: {
    event_type_name?: string;
    event_start_time?: string;
    event_end_time?: string;
    assigned_to?: string;
  };
};

function formatGoogleCalendarDate(dateString: string) {
  const parsedDate = new Date(dateString);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function buildGoogleCalendarUrl({
  eventTypeName,
  eventStartTime,
  eventEndTime,
  assignedTo,
}: {
  eventTypeName: string;
  eventStartTime: string;
  eventEndTime: string;
  assignedTo?: string;
}) {
  const startDate = formatGoogleCalendarDate(eventStartTime);
  const endDate = formatGoogleCalendarDate(eventEndTime);

  if (!startDate || !endDate) {
    return null;
  }

  const details = assignedTo
    ? `GhostSOP Lead System Review with ${assignedTo}. This is a working session focused on how your business currently handles inbound leads and where opportunities may be slipping through.`
    : "GhostSOP Lead System Review. This is a working session focused on how your business currently handles inbound leads and where opportunities may be slipping through.";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: eventTypeName,
    dates: `${startDate}/${endDate}`,
    details,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-200">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function PreCallPage({ searchParams }: PreCallPageProps) {
  const eventTypeName = searchParams?.event_type_name || "GhostSOP Lead System Review";
  const calendarUrl =
    searchParams?.event_start_time && searchParams?.event_end_time
      ? buildGoogleCalendarUrl({
          eventTypeName,
          eventStartTime: searchParams.event_start_time,
          eventEndTime: searchParams.event_end_time,
          assignedTo: searchParams.assigned_to,
        })
      : null;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#040816_0%,#08101a_100%)] px-6 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[700px] [font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
            {eventTypeName}
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border border-sky-400/20 bg-sky-500/[0.08] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-8">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Your call is booked.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              You should receive a calendar invite and confirmation email shortly.
              If you don&apos;t see it, check spam or promotions.
            </p>
          </section>

          <Section title="What we'll cover in 20 minutes">
            <BulletList items={checklistItems.cover} />
            <p className="mt-6 text-base font-medium text-sky-100">
              This is a working session — not a sales presentation.
            </p>
          </Section>

          <Section title="To make the call useful, have this ready:">
            <BulletList items={checklistItems.ready} />
          </Section>

          <Section title="Quick reminder">
            <p className="text-base leading-7 text-slate-200">
              This review is designed for businesses that already receive inbound leads but want
              to stop losing them due to slow follow-up or messy workflows.
            </p>
          </Section>

          <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">That&apos;s it.</h2>
            <p className="mt-5 text-base leading-7 text-slate-200">
              Show up on time and we&apos;ll get straight to work.
            </p>
            {calendarUrl ? (
              <>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-slate-200 transition hover:border-sky-300/40 hover:bg-white/10 hover:text-white"
                >
                  Add to Google Calendar
                </a>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Your confirmation email should also include calendar options.
                </p>
              </>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
