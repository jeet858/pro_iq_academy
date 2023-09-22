// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    darkSelector: ".dark-mode",
    screens: {
      sm: "280px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode based on the "class" attribute
};
