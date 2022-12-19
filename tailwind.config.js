/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        inherit: "inherit",
        "general-sans": "'General Sans'",
      },
    },
    colors: {
      white: "#fff",
      green: "#068d03",
      black: "#000",
      gray: {
        "100": "#fdfdfd",
        "200": "#fcfdff",
        "300": "#f1f1f1",
        "400": "#737373",
        "500": "#105798",
        "600": "#374151",
        "700": "#252b42",
        "800": "#032f63",
        "900": "#111827",
        "1000": "#1a1717",
        "1100": "#151616",
        "1200": "#141414",
        "1300": "#121213",
        "1400": "#121010",
        "1500": "#0d0e0e",
        "1600": "rgba(0, 0, 0, 0.37)",
      },
      indigo: {
        "100": "#1877f2",
        "200": "#0751b0",
        "300": "rgba(24, 119, 242, 0.8)",
      },
      teal: { "100": "#2dbbda", "200": "#077092" },
      cyan: "#08feef",
      red: {
        "200": " rgb(220 38 38)"
      }
    },
    fontSize: {
      base: "16px",
      lg: "16.63px",
      xl: "20px",
      "2xl": "21.55px",
      "3xl": "24.94px",
      "4xl": "28.65px",
      "5xl": "28px",
      "6xl": "30px",
      "7xl": "32.33px",
      "8xl": "40px",
      "9xl": "46.04px",
      "10xl": "50px",
      "11xl": "63px",
      "12xl": "75px",
    },
  },
  corePlugins: { preflight: false },
};
