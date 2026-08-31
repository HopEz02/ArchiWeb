"use client";

import { useActionState } from "react";
import { submitInquiry, type SubmitInquiryState } from "@/app/actions/submit-inquiry";
import { PROJECT_TYPES } from "@/lib/schemas";

const PROJECT_TYPE_LABELS: Record<(typeof PROJECT_TYPES)[number], string> = {
  design: "Design",
  build: "Build",
  consulting: "Consulting",
  "not-sure": "Not sure yet",
};

const initialState: SubmitInquiryState = { status: "idle" };

const inputStyles =
  "mt-xs w-full border border-charcoal/30 bg-cream px-md py-sm text-[16px] text-charcoal rounded focus-visible:outline-none";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  if (state.status === "success") {
    return (
      <div role="status" className="border border-success bg-successLight p-xl">
        <p className="text-[18px] text-navy">
          Thank you — your message has been sent. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="max-w-prose">
      {state.status === "error" && (
        <p role="alert" className="mb-lg border border-error bg-errorLight p-md text-error">
          {state.message}
        </p>
      )}

      {/* Honeypot field: hidden from sighted users and screen readers,
          removed from tab order. Real visitors never interact with it. */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mb-lg">
        <label htmlFor="name" className="text-[14px] text-charcoal">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className={inputStyles}
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-xs text-[14px] text-error">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="mb-lg">
        <label htmlFor="email" className="text-[14px] text-charcoal">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className={inputStyles}
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-xs text-[14px] text-error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="mb-lg">
        <label htmlFor="phone" className="text-[14px] text-charcoal">
          Phone <span className="text-charcoal/60">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          className={inputStyles}
        />
        {fieldErrors.phone && (
          <p id="phone-error" className="mt-xs text-[14px] text-error">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div className="mb-lg">
        <label htmlFor="projectType" className="text-[14px] text-charcoal">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.projectType)}
          aria-describedby={fieldErrors.projectType ? "projectType-error" : undefined}
          className={inputStyles}
        >
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {PROJECT_TYPE_LABELS[type]}
            </option>
          ))}
        </select>
        {fieldErrors.projectType && (
          <p id="projectType-error" className="mt-xs text-[14px] text-error">
            {fieldErrors.projectType}
          </p>
        )}
      </div>

      <div className="mb-xl">
        <label htmlFor="message" className="text-[14px] text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={inputStyles}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-xs text-[14px] text-error">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className="inline-flex min-h-[44px] items-center justify-center bg-navy px-xl py-md text-[16px] text-cream transition-colors duration-200 hover:bg-onyx focus-visible:bg-onyx disabled:cursor-not-allowed disabled:opacity-60 rounded"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
