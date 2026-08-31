import { z } from "zod";

export const PROJECT_TYPES = ["design", "build", "consulting", "not-sure"] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number looks too long.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details about your project.")
    .max(2000, "Please keep your message under 2000 characters."),
  // Honeypot: a field real visitors never see or fill in (hidden via CSS,
  // removed from the tab order and the accessibility tree). If it has any
  // value, the submission is almost certainly automated.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
