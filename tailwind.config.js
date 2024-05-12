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
          // ajout des guillemets autour du nom de la keyframe
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "pulse-dot":
          "pulse-dot 2s cubic-bezier(.455, 0.03, 0.515, 0.955) -0.4s infinite",
        "pulse-ring":
          "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        fadeIn: {
          // ajout des guillemets autour du nom de l'animation
          duration: 0.5, // utiliser la propriété duration au lieu de animation-duration
          delay: 0.5, // utiliser la propriété delay au lieu de animation-delay
        },
      },
    },
  },
  plugins: [],
};
