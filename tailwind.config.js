module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
        gray: { 400: "#dac7b4", 900: "#252525" },
        teal: { 900: "#074f4b" },
        indigo: { 50: "#e0dffe", "50_7e": "#e0dffe7e" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", ranade: "Ranade", ranadevariable: "Ranade Variable" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #00000000,#000000,#000000)",
        gradient1: "linear-gradient(180deg, #074f4b,#252525)",
      },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
