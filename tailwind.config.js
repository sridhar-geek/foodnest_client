/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          800: "#E76F0A",
        },
        footer: "#f9f9f9",
      },
    },
  },
  plugins: [],
};

