/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "var(--font-raleway)",
        montserrat: "var(--font-montserrat)",
      },
      colors: {
        customGreen: "#34E89E",
        customBlue: "#0F3443",
      },
    },
  },
  plugins: [],
};
