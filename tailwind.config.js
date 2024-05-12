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
    },
  },
  plugins: [],
};
