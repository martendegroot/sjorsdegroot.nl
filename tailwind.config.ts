import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#ed7d31",
      },
      fontFamily: {
        sans: "var(--font-quicksand)",
        logo: "var(--font-yi-baiti)",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
export default config;
