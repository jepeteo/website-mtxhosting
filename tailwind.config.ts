import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080c10",
        surface: "#0d1318",
        accent: "#00e5ff",
        accent2: "#0077ff",
        ink: "#e8edf2",
        muted: "#5a6a7a",
        border: "rgba(255,255,255,0.07)",
        card: "rgba(255,255,255,0.03)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00e5ff, #0077ff)",
        "gradient-text": "linear-gradient(90deg, #00e5ff, #0077ff)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
