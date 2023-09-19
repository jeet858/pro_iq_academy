// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    darkSelector: ".dark-mode", // Define the class that triggers dark mode
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode based on the "class" attribute
};
