import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090b0f",
          900: "#10141a",
          800: "#171d25",
          700: "#202834",
        },
        chalk: {
          100: "#f2f5ee",
          200: "#dfe7d6",
          400: "#9eaa97",
        },
        circuit: {
          300: "#73f0d4",
          400: "#2dd4bf",
          500: "#14b8a6",
        },
        theorem: {
          300: "#f8cf72",
          400: "#f5b84b",
        },
        proof: {
          300: "#b6a4ff",
          400: "#9381ff",
        },
      },
      boxShadow: {
        "panel": "0 18px 50px rgba(0, 0, 0, 0.28)",
        "line": "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        heading: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
