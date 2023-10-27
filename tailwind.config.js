/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightcyan: "#dffcfc",
        royalblue: "#3e80ff",
        dodgerblue: "#5c93fe",
        cornflowerblue: "#00a3ff",
        gainsboro: "#d9d9d9",
        whitesmoke: "#e9f3f3",
        gray: "#030303",
        blanchedalmond: "#f5e5c8",
        darkslateblue: "#224b8d",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        sm: "14px",
      },
    },
    fontSize: {
      "31xl": "50px",
      "13xl": "32px",
      "5xl": "24px",
      "21xl": "40px",
      "11xl": "30px",
      "77xl": "96px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
