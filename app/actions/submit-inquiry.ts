"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { inquirySchema } from "@/lib/schemas";
import { contactFormRateLimit } from "@/lib/rate-limit";

export type SubmitInquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(
  _prevState: SubmitInquiryState,
  formData: FormData
): Promise<SubmitInquiryState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  };

  const parsed = inquirySchema.safeParse(raw);

  if (!parsed.success) {
    // If the honeypot field is filled, this is almost certainly a bot.
    // Return a normal-looking success response without sending an email
    // or consuming rate-limit quota, so automated submitters get no
    // signal that anything was detected.
    if (typeof raw.company === "string" && raw.company.length > 0) {
      return { status: "success" };
    }

    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Rate-limit by IP, after validation (so malformed junk doesn't burn a
  // legitimate visitor's quota) and before sending (so we never send more
  // than the allowed number of emails per IP per window).
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const { success: withinLimit } = await contactFormRateLimit.limit(ip);

  if (!withinLimit) {
    return {
      status: "error",
      message: "Too many submissions from this connection. Please try again in a few minutes.",
    };
  }

  const { name, email, phone, projectType, message } = parsed.data;

  try {
    await resend.emails.send({
      // TODO: replace with a verified sending domain in your Resend
      // account before launch — onboarding@resend.dev is a test-only sender.
      from: "ArchiVerse Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO ?? "",
      replyTo: email,
      subject: `New inquiry from ${name} (${projectType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Project type: ${projectType}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (error) {
    // Log full detail server-side only; never leak internals to the client.
    console.error("Resend send failed:", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again, or email us directly in the meantime.",
    };
  }

  return { status: "success" };
}
