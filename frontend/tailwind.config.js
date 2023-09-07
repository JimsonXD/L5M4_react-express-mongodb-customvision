/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        turners: ["Lato"],
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   turnersblue: "#0073cf",
    //   turnersgrey: "#9a9b9c",
    //   turnersred: "#b71234",
    //   lightgrey: "#d1d5db",
    //   darkgrey: "#363636",
    //   black: "#000000",
    //   white: "#ffffff",
    // },
  },
  plugins: [require("daisyui")],
};
