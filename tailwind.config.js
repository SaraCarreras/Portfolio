/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSansRegular: ["OpenSansRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
