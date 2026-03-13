export const siteContent = {
  nav: {
    logo: "GhostSOP",
    tagline: "The front desk system for businesses without a front desk.",
    ctaLabel: "See How It Works",
    ctaHref: "#contact",
  },
  hero: {
    eyebrow: "One-time lead handling system install for service businesses",
    headline: "You're Not Losing Clients Because of Bad Marketing.",
    subheadline: "You're losing them because you respond too late.",
    body: "GhostSOP installs the intake and response system that captures every lead, sends an instant reply, and guides them toward booking automatically. It fixes the handoff between inquiry and appointment so your leads stop dying in DMs, email, forms, and text while you're busy doing the work.",
    primaryCtaLabel: "Fix My Lead System",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "See What's Included",
    secondaryCtaHref: "#included",
    kicker: "Not lead generation. Lead handling infrastructure.",
  },
  problem: {
    heading: "Leads Are Coming In. You're Just Not Catching Them.",
    items: [
      {
        title: "Slow Response Time",
        body: "When someone reaches out, the clock starts immediately. If they wait too long for a reply, they move on to the next business that answers first.",
      },
      {
        title: "No Clear Intake Path",
        body: "Most inquiries arrive vague and unstructured. Without the right questions and a next step, good leads stall before they ever become bookings.",
      },
      {
        title: "Manual Everything",
        body: "Website forms, Instagram DMs, email, and text all live in different places. When intake lives in your head, follow-up becomes inconsistent and leads slip through the cracks.",
      },
    ],
  },
  solution: {
    heading: "What GhostSOP Installs",
    steps: [
      {
        title: "Smart Intake Form",
        description: "Captures the exact details you need so every lead starts with structure instead of guesswork.",
      },
      {
        title: "Instant Auto-Confirmation",
        description: "Sends an immediate reply so new inquiries know they were received and what happens next.",
      },
      {
        title: "Lead Qualification Routing",
        description: "Sorts and routes leads based on fit, urgency, or service type before they hit your inbox.",
      },
      {
        title: "Booking Integration",
        description: "Connects qualified leads to your calendar or booking flow without the usual back-and-forth.",
      },
      {
        title: "Follow-Up Automation",
        description: "Keeps warm leads moving with reminders and nudges when they do not book right away.",
      },
    ],
  },
  comparison: {
    heading: "Before and After the Install",
    before: ["DM", "Wait", "No response", "Lost client"],
    after: [
      "DM",
      "Instant capture",
      "Auto-response",
      "Booking",
      "You get notified",
    ],
  },
  audiences: {
    heading: "Built for Service Businesses That Already Get Leads",
    qualifier:
      "If inquiries come in but bookings don't follow — this is for you.",
    items: [
      { label: "Dental Clinics", code: "DN" },
      { label: "Med Spa", code: "MS" },
      { label: "Coaches", code: "CH" },
      { label: "Agencies", code: "AG" },
      { label: "Home Services", code: "HS" },
      { label: "Freelancers", code: "FR" },
    ],
  },
  included: {
    heading: "One Setup. Runs Itself.",
    items: [
      "Custom intake form",
      "Automated lead confirmation",
      "CRM/lead tracking setup",
      "Booking integration",
      "Email + SMS notifications",
      "Follow-up sequences",
      "Lead handling SOPs + templates",
    ],
  },
  positioning: {
    heading: "GhostSOP is not a marketing agency.",
    body: "We don't run ads. We don't touch your social media. We install the infrastructure that turns the inquiries you already get into booked clients.",
    subtext:
      "GhostSOP is a one-time system install for businesses that already have lead flow but no reliable front desk process.",
  },
  notFor: {
    heading: "GhostSOP Is Not for Everyone",
    items: [
      "Not for businesses looking for ads or SEO",
      "Not for companies needing a full-time marketing agency",
      "Not for complex enterprise sales teams",
      "Best for small service businesses already getting inquiries but dropping them",
    ],
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        question: "Do I need a CRM already?",
        answer:
          "No. GhostSOP can work with what you already use or set up a simple lead tracking system if you do not have one yet.",
      },
      {
        question: "Does this replace my receptionist?",
        answer:
          "It replaces the repetitive intake and first-response work that usually gets missed. If you already have staff, it gives them a cleaner process to work from.",
      },
      {
        question: "Can this work with my website and booking tool?",
        answer:
          "Yes, as long as your current tools support standard forms, links, calendars, or notifications. The install is designed to fit the stack you already run when possible.",
      },
      {
        question: "What if I only get leads through Instagram or text?",
        answer:
          "That still works. GhostSOP is built for messy real-world intake, including DMs, texts, and leads that do not start on a formal website form.",
      },
      {
        question: "Is this ongoing monthly work?",
        answer:
          "No. The core offer is a one-time setup that runs on its own after installation. Ongoing marketing services are not part of the offer.",
      },
      {
        question: "How fast can this be set up?",
        answer:
          "Setup timing depends on your current tools and how fragmented your intake process is, but the goal is to install quickly and get your front desk flow working without dragging the project out.",
      },
    ],
  },
  contact: {
    heading: "Set It Up Once. Stop Losing Leads Forever.",
    subtext: "Ready to stop leaving clients on the table?",
    buttonLabel: "Get Started at GhostSOP.com",
    formTitle: "Tell us where your lead handling is breaking",
    successConfigured:
      "Thanks. Your request is in and GhostSOP has been notified.",
    successFallback:
      "Thanks. Your request was captured, but email delivery is not configured yet.",
    error:
      "Something went wrong while submitting the form. Please try again or email hello@ghostsop.com.",
    businessTypes: [
      "Dental Clinic",
      "Med Spa",
      "Coach or Consultant",
      "Agency",
      "Home Services",
      "Freelancer",
      "Other Service Business",
    ],
  },
  footer: {
    links: [
      { label: "What GhostSOP Installs", href: "#solution" },
      { label: "What's Included", href: "#included" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "© 2026 GhostSOP. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
