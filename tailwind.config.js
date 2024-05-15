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
        gradientBg:
          "radial-gradient(137.45% 110.02% at 98.97% 1.47%, #34383C 0%, #242629 100%)",
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

        //
        appears: "appear 0.9s ease-in-out forwards",
        appearsAzra: "appear 0.3s ease-in-out 1.2s forwards",
        appears1: "appear 0.3s ease-in-out 1.6s forwards",
        appears2: "appear 0.3s ease-in-out 1.9s forwards",
        appears3: "appear 0.3s ease-in-out 2.3s forwards",
        appears4: "appear 0.3s ease-in-out 2.5s forwards",
        appears5: "appear 0.3s ease-in-out 2.6s forwards",
        appears6: "appear 0.3s ease-in-out 2.7s forwards",
        appears7: "appear 0.3s ease-in-out 2.8s forwards",
        appears8: "appear 0.3s ease-in-out 2.9s forwards",
        appears9: "appear 0.3s ease-in-out 3s forwards",
        appears10: "appear 0.3s ease-in-out 3.1s forwards",
        appears11: "appear 0.3s ease-in-out 3.2s forwards",
        appears12: "appear 0.3s ease-in-out 3.3s forwards",
        appears13: "appear 0.3s ease-in-out 3.4s forwards",
        appears14: "appear 0.3s ease-in-out 3.5s forwards",
        appears15: "appear 0.3s ease-in-out 3.6s forwards",
        appears16: "appear 0.3s ease-in-out 3.7s forwards",
        appears17: "appear 0.3s ease-in-out 3.8s forwards",
        appears18: "appear 0.3s ease-in-out 3.9s forwards",
        appears19: "appear 0.3s ease-in-out 4s forwards",
        appears20: "appear 0.3s ease-in-out 4.1s forwards",
        appears21: "appear 0.3s ease-in-out 4.2s forwards",
        appears22: "appear 0.3s ease-in-out 4.3s forwards",
        appears23: "appear 0.3s ease-in-out 4.4s forwards",
        appears24: "appear 0.3s ease-in-out 4.5s forwards",
        appears25: "appear 0.3s ease-in-out 4.6s forwards",
        slideUp1: " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.1s both",
        slideUp2:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.11s both",
        slideUp3:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.15s both",
        slideUp3:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.19s both",
        slideUp4:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.23s both",
        slideUp5:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.27s both",
        slideUp6:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.31s both",
        slideUp7:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.35s both",
        slideUp8:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.39s both",
        slideUp9:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.43s both",
        slideUp10:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.47s both",
        slideUp11:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.51s both",
        slideUp12:
          " slideUp 0.7s cubic-bezier((0.25, 0.46, 0.45, 0.94)0.55s both",
        slideUp13:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.59s both",
        slideUp14:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.63s both",
        slideUp15:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.67s both",
        slideUp16:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.71s both",
        // SLIDE UP ACCUEIL
        slideUps1:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.6s both",
        slideUps2:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.64s both",
        slideUps3:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.68s both",
        slideUps3:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.72s both",
        slideUps4:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.76s both",
        slideUps5:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.80s both",
        slideUps6:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.84s both",
        slideUps7:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.88s both",
        slideUps8:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.92s both",
        slideUps9:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.96s both",
        slideUps10: " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2s both",
        slideUps11:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.04s both",
        slideUps12:
          " slideUp 0.7s cubic-bezier((0.25, 0.46, 0.45, 0.94)2.08s both",
        slideUps13:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.12s both",
        slideUps14:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.16s both",
        slideUps15:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.20s both",
        slideUps16:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.24s both",
        slideUps17:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.28s both",
        slideUps18:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.32s both",
        slideUps19:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.36s both",
        slideUps20:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.40s both",
        slideUps21:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.44s both",
        slideUps22:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.48s both",
        slideUps23:
          " slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)2.52s both",

        // Logo slide up
        slideSlow1:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)0.9s both",
        slideSlow2: " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1s both",
        slideSlow3:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.1s both",
        slideSlow4:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.2s both",
        slideSlow5:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.3s both",
        slideSlow6:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.4s both",
        slideSlow7:
          " slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)1.5s both",
      },
    },
  },
  plugins: [require("tailwindcss-animatecss")],
};
