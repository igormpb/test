/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        secondary: "#FF6B35",
        default: "#0B132A",

        primary: "#FFFFFFF"
      },
      backgroundColor: {
        default: "#0B132A",
        secondary: "#FF6B35"
      }
    },
  },
  plugins: [],
}

