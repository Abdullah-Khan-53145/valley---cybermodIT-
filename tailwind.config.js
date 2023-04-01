/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ja,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
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
