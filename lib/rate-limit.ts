import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Reads UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN from the
// environment. These are server-only credentials — never prefix them with
// NEXT_PUBLIC_, and never commit real values.
const redis = Redis.fromEnv();

// 3 submissions per 10 minutes per IP. Generous enough for a genuine
// visitor who mistypes and resubmits, tight enough to blunt scripted abuse.
export const contactFormRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
  prefix: "ratelimit:contact-form",
});
