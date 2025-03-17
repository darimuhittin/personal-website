/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // Keep the old colors for backward compatibility
        first: "#222831",
        second: "#393E46",
        third: "#FFD369",
        fourth: "#EEEEEE",
        // New professional color palette
        primary: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        "fly-cycle": "fly-cycle 1s steps(10) infinite",

        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        orbit: "orbit 20s linear infinite",
      },
      keyframes: {
        "fly-cycle": {
          "100%": { "background-position": "-900px 0" },
        },

        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(200px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(200px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
