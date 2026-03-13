import { NextResponse } from "next/server";
import { siteContent } from "@/content/site";
import {
  ContactFormValues,
  hasContactFormErrors,
  normalizeContactForm,
  validateContactForm,
} from "@/lib/contact";

function getConfiguredDelivery() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!resendApiKey || !to || !from) {
    return null;
  }

  return { resendApiKey, to, from };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactFormValues;
    const normalized = normalizeContactForm(payload);
    const errors = validateContactForm(normalized);

    if (hasContactFormErrors(errors)) {
      return NextResponse.json(
        { message: "Please complete the required fields.", errors },
        { status: 400 },
      );
    }

    const configuredDelivery = getConfiguredDelivery();

    if (!configuredDelivery) {
      console.info("GhostSOP contact submission captured without email delivery.", normalized);
      return NextResponse.json(
        { message: siteContent.contact.successFallback, delivery: "fallback" },
        { status: 202 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${configuredDelivery.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: configuredDelivery.from,
        to: [configuredDelivery.to],
        reply_to: normalized.email,
        subject: `New GhostSOP lead from ${normalized.name}`,
        text: [
          `Name: ${normalized.name}`,
          `Email: ${normalized.email}`,
          `Business Type: ${normalized.businessType}`,
          `Website or Instagram: ${normalized.websiteOrInstagram || "Not provided"}`,
          `Biggest Lead Handling Problem:`,
          normalized.biggestProblem,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      const details = await emailResponse.text();
      console.error("Resend submission failed.", details);
      return NextResponse.json({ message: siteContent.contact.error }, { status: 502 });
    }

    return NextResponse.json(
      { message: siteContent.contact.successConfigured, delivery: "configured" },
      { status: 200 },
    );
  } catch (error) {
    console.error("GhostSOP contact route failed.", error);
    return NextResponse.json({ message: siteContent.contact.error }, { status: 500 });
  }
}
