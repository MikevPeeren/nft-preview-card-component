module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "dark-blue-one": "hsl(217, 54%, 11%)",
        "dark-blue-two": "hsl(216, 50%, 16%)",
        "dark-blue-three": "hsl(215, 32%, 27%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
