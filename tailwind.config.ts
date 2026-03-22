import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E3E",
          light: "#122649",
          dark: "#071526",
          deep: "#050F1F",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C27A",
          dark: "#A8893A",
        },
        gray: {
          soft: "#8A95A3",
          mid: "#6B7685",
          light: "#D4D9E1",
          pale: "#F0F2F5",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #050F1F 0%, #0B1E3E 50%, #071526 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E2C27A 100%)",
        "section-gradient": "linear-gradient(180deg, #050F1F 0%, #0B1E3E 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
