import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        surface: "rgba(15, 23, 42, 0.72)",
        glow: "#06B6D4",
        accent: "#7C3AED",
      },
      boxShadow: {
        glow: "0 20px 120px rgba(99, 102, 241, 0.18)",
        card: "0 25px 80px rgba(15, 23, 42, 0.18)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 32%), radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.17), transparent 18%), linear-gradient(135deg, #020617 0%, #0f172a 42%, #111827 100%)",
        section: "linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.78))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
