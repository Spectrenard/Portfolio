/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash),'sans-serif'"],
        brico: ["var(--font-brico),'sans-serif'"],
      },
      colors: {
        backgroundColor: "hsla(210, 7%, 12%, 1);",
        cardbgGray: "hsla(216, 6%, 15%, 1)",
        radiusBgGray: "hsla(210, 7%, 22%, 1)",
        titleGray: "hsla(210, 7%, 42%, 1)",
        textGray: "hsla(210, 7%, 52%, 1)",
        footerDateTitle: "hsla(210, 7%, 62%, 1)",
        textWhite: "hsla(200, 7%, 82%, 1)",
        titleWhite: "hsla(200, 7%, 92%, 1);",
      },
      keyframes: {
        "pulse-dot": {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.33)" },
          "80%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideUp: {
          from: { transform: "translateY(100%)", opacity: "1" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        appear: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "pulse-dot":
          "pulse-dot 2s cubic-bezier(.455, 0.03, 0.515, 0.955) -0.4s infinite",
        "pulse-ring":
          "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInText: "fadeIn 0.5s ease-in-out 2.5s forwards",
        appears: "appear 0.8s ease-in-out forwards",
        appears1: "appear 0.3s ease-in-out 1.6s forwards",
        appears2: "appear 0.3s ease-in-out 1.9s forwards",
        appears3: "appear 0.3s ease-in-out 2.3s forwards",
        appears4: "appear 0.3s ease-in-out 2.5s forwards",
        slideUp1: " slideUp 1s cubic-bezier(0.45, 0.64, 0.12, 1)0s both",
        slideUp2: " slideUp 0.8s cubic-bezier(0.45, 0.64, 0.12, 1)0.3s both",
        slideUp3: " slideUp 0.7s cubic-bezier(0.45, 0.64, 0.12, 1)0.6s both",
      },
    },
  },
  plugins: [require("tailwindcss-animatecss")],
};
