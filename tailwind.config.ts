import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px"
      }
    },
    extend: {
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0F766E",
          dark: "#0B5C55",
          light: "#14B8A6"
        }
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at top, rgba(255,255,255,0.9), rgba(245,246,250,0.85))"
      }
    }
  },
  plugins: []
};

export default config;
