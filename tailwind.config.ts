import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "background": "#F5F5F5F5",
        "blue" : "#4770FF",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
