import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#052C2A",
        jade: "#0B5955",
        gold: "#B08D4F",
        slate: "#2B3A38",
        mist: "#E3EBEA",
        paper: "#FAFAF7",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Libre Baskerville", "Georgia", "serif"],
        editorial: ["Cormorant Garamond", "Georgia", "serif"],
      },
      letterSpacing: { display: "-0.035em" },
      maxWidth: { shell: "1440px" },
      boxShadow: { quiet: "0 16px 40px rgba(5, 44, 42, 0.08)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
