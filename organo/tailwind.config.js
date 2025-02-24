/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-blue": "#6278F7",
        "light-gray": "#F2F2F2",
        "cyan-hover": "#95FFD4",
        "dark-color": "#212121",
      },
      fontFamily: {
        prata: ["Prata", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "h-sm": { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [],
};
