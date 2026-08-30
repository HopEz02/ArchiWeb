import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navy: "var(--color-navy-900)",
        onyx: "var(--color-onyx-900)",
        cream: "var(--color-cream-50)",
        charcoal: "var(--color-charcoal-600)",
        gold: "var(--color-gold-500)",
        success: "var(--color-success-600)",
        warning: "var(--color-warning-600)",
        error: "var(--color-error-600)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "96px",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "0px",
      },
      maxWidth: {
        content: "1200px",
        prose: "680px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
