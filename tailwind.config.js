module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { white: { A700: "#ffffff" }, black: { 900: "#000000" } },
      boxShadow: {},
      fontFamily: {
        calibri: "Calibri",
        arial: "Arial",
        inriaserif: "Inria Serif",
        inter: "Inter",
        berlinsansfbdemi: "Berlin Sans FB Demi",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
