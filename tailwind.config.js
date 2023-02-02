/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f80331",
          secondary: "#ffbb00",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#3d4451",
        },
      },
      "dark",
      "cupcake",
    ],
  },
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }

