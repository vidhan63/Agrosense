/** @type {import('tailwindcss').Config} */
const colors = {
  cardBg: "#C3EFD1",
  cardBorder: "#A2E7B5",
  heading: "#2A4F0F",
  text: "#82A179",
  textLight: "#82A17940",
};
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
    },
  },
  plugins: [],
};
