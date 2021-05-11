module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#111",
        main: "#2222",
        textarea: "#3333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
