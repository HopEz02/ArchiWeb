import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CalBooking } from "@/components/CalBooking";

export const metadata: Metadata = {
  title: "Contact",
  description: "TODO: replace with final meta description for the Contact page.",
};

export default function ContactPage() {
  return (
    <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
      <section aria-labelledby="contact-heading" className="mb-5xl">
        <h1 id="contact-heading" className="text-[40px] md:text-[48px]">
          Get in touch
        </h1>
        {/* TODO(content): replace with a real, honest expected-response-time
            statement once you know your actual turnaround — do not guess. */}
        <p className="mt-lg max-w-prose text-[18px] text-charcoal">
          TODO: one line on what happens after you submit (e.g. expected
          response time).
        </p>
        <div className="mt-2xl">
          <ContactForm />
        </div>
      </section>

      <section aria-labelledby="booking-heading">
        <h2 id="booking-heading" className="text-[32px]">
          Book a consultation
        </h2>
        <p className="mt-sm max-w-prose text-charcoal">
          Prefer to talk it through directly? Pick a time that works for you.
        </p>
        <div id="booking" className="mt-2xl">
          <CalBooking />
        </div>
      </section>
    </div>
  );
}
