/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ja,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "55rem",
      },
      colors: {
        header: "#090D26",
      },
    },
  },
  plugins: [],
};
