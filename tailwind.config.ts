import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-surface2": "var(--color-bg-surface2)",
        "bg-border": "var(--color-bg-border)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        "ink-dim": "var(--color-ink-dim)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
