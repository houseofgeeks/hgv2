/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      ss: "700px",
      sm: "780px",
      md: "1024px",
      lg: "1186px",
      xl: "1260px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
  ],
};