"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { siteContent } from "@/content/site";
import {
  ContactFormErrors,
  ContactFormValues,
  hasContactFormErrors,
  normalizeContactForm,
  validateContactForm,
} from "@/lib/contact";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  businessType: "",
};

type SubmissionState =
  | { status: "idle" }
  | { status: "success"; message: string; redirecting: boolean }
  | { status: "error"; message: string };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = useMemo(() => siteContent.contact.businessTypes, []);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  useEffect(() => {
    if (submissionState.status !== "success" || !submissionState.redirecting || !calendlyUrl) {
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.assign(calendlyUrl);
    }, 1200);

    return () => window.clearTimeout(redirectTimer);
  }, [calendlyUrl, submissionState]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (hasContactFormErrors(nextErrors)) {
      setSubmissionState({ status: "error", message: "Fix the highlighted fields and try again." });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState({ status: "idle" });

    try {
      const payload = normalizeContactForm(values);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || siteContent.contact.error);
      }

      setValues(initialValues);
      setErrors({});
      setSubmissionState({
        status: "success",
        message: data.message || siteContent.contact.successConfigured,
        redirecting: Boolean(calendlyUrl),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : siteContent.contact.error;
      setSubmissionState({ status: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const baseFieldClasses =
    "w-full rounded-2xl border bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/70 focus:ring-2 focus:ring-sky-500/20";

  return (
    <form
      id="contact-form"
      className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
      onSubmit={onSubmit}
      noValidate
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Contact form</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{siteContent.contact.formTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{siteContent.contact.helper}</p>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Name</span>
        <input
          className={`${baseFieldClasses} ${errors.name ? "border-rose-400/70" : "border-white/10"}`}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <span id="name-error" className="text-sm text-rose-300">
            {errors.name}
          </span>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Email</span>
        <input
          className={`${baseFieldClasses} ${errors.email ? "border-rose-400/70" : "border-white/10"}`}
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <span id="email-error" className="text-sm text-rose-300">
            {errors.email}
          </span>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Business Type</span>
        <select
          className={`${baseFieldClasses} ${errors.businessType ? "border-rose-400/70" : "border-white/10"}`}
          name="businessType"
          value={values.businessType}
          onChange={(event) => updateField("businessType", event.target.value)}
          aria-invalid={Boolean(errors.businessType)}
          aria-describedby={errors.businessType ? "business-type-error" : undefined}
        >
          <option value="">Select a business type</option>
          {businessTypes.map((businessType) => (
            <option key={businessType} value={businessType}>
              {businessType}
            </option>
          ))}
        </select>
        {errors.businessType ? (
          <span id="business-type-error" className="text-sm text-rose-300">
            {errors.businessType}
          </span>
        ) : null}
      </label>

      <button
        type="submit"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 text-base font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-[0_16px_50px_rgba(56,189,248,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting || (submissionState.status === "success" && submissionState.redirecting)}
      >
        {isSubmitting
          ? "Submitting..."
          : submissionState.status === "success" && submissionState.redirecting
            ? "Redirecting to Booking..."
            : siteContent.contact.buttonLabel}
      </button>

      <div aria-live="polite" className="min-h-6 text-sm">
        {submissionState.status === "success" ? (
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-4 text-emerald-200">
            <p className="font-medium">{submissionState.message}</p>
            {submissionState.redirecting ? (
              <>
                <p className="mt-2 text-sm text-emerald-100">{siteContent.contact.redirecting}</p>
                <a
                  href={calendlyUrl}
                  className="mt-3 inline-flex text-sm font-semibold text-white underline underline-offset-4"
                >
                  Continue to booking now
                </a>
              </>
            ) : (
              <p className="mt-2 text-sm text-emerald-100">{siteContent.contact.fallbackBooking}</p>
            )}
          </div>
        ) : null}
        {submissionState.status === "error" ? (
          <p className="text-rose-300">{submissionState.message}</p>
        ) : null}
      </div>
    </form>
  );
}
