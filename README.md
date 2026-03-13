# GhostSOP Website

High-converting single-page marketing site for GhostSOP, built with Next.js 14 App Router and Tailwind CSS.

## Project Overview

GhostSOP is positioned as a one-time lead handling system install for service businesses that already get inquiries but lose them because their intake and response process is broken.

This site is intentionally focused on:

- lead handling, not lead generation
- one-time system install, not ongoing marketing retainers
- concrete deliverables, not vague AI or agency language

## Tech Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- TypeScript

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need.

```bash
cp .env.example .env.local
```

### Required for metadata / canonical URLs

- `NEXT_PUBLIC_SITE_URL`
  - Example: `https://ghostsop.com`

### Optional for Calendly redirect after form submission

- `NEXT_PUBLIC_CALENDLY_URL`
  - Booking URL used after a successful form submit
  - Example: `https://calendly.com/your-handle/ghostsop-lead-system-review`

### Optional for contact form email delivery

- `RESEND_API_KEY`
  - Resend API key used by the `/api/contact` route
- `CONTACT_EMAIL_TO`
  - Destination inbox for form submissions
- `CONTACT_EMAIL_FROM`
  - Verified sender used by Resend, for example `GhostSOP <leads@yourdomain.com>`

If the email env vars are missing, the form still submits successfully and degrades gracefully by returning a fallback success message instead of failing.
If `NEXT_PUBLIC_CALENDLY_URL` is missing, the form still submits but the booking redirect is skipped and the success state explains that booking is not configured yet.

## Content Editing

All landing page copy and section data live in:

- `src/content/site.ts`

Edit that file to update headings, CTA labels, audience lists, FAQ items, or deliverables without touching layout code.

## Form Handling

- Frontend form component: `src/components/contact-form.tsx`
- Server route: `src/app/api/contact/route.ts`

Validation runs on both the client and the server. When email delivery is configured, the route sends submissions through Resend. When it is not configured, submissions are logged server-side and the UI still shows a clear success state. When Calendly is configured, successful submissions redirect the user to booking automatically.

## Deployment

### Vercel CLI

```bash
vercel --prod
```

### Recommended Vercel Environment Variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM`

## Structure

- `src/app/page.tsx` - main landing page
- `src/app/layout.tsx` - metadata and global shell
- `src/app/opengraph-image.tsx` - generated OG image
- `src/components/hero-diagram.tsx` - hero system visual
- `src/components/contact-form.tsx` - lead capture form
- `src/content/site.ts` - editable marketing copy
- `AUDIT.md` - live site audit that informed the rebuild
