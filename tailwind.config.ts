import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        secondary: "#FF6B35",
        primary: "#FFFFFFF"
      },
      backgroundColor: {
        default: "#0B132A",
        secondary: "#FF6B35"
      }
    },
  },
  plugins: [],
};
export default config;
