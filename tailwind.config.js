// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"', "sans-serif"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("tailwind-scrollbar"),
      // if you want “auto-hiding” out-of-the-box, add the “hide” variant:
      require("tailwind-scrollbar-hide"),
    ],
  },
};
