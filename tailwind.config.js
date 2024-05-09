/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: "repeat(auto-fill, minmax(140px, 1fr))",
      },
    },
  },
  plugins: [],
};
