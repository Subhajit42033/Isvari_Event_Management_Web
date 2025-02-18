/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F9E0AE",
        btnColor: "#C24914",
        secondary: "#EADBC8",
        head:"#FC8621",
        nav2:"#E2C48E",
        nav1:"#f5ce7f"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        edu:['Edu AU VIC WA NT Pre', 'cursive'],
        merienda:['Merienda', 'cursive'],
        ubuntu:['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

