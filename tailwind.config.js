/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "kelly-slab": ['"Kelly Slab"', "cursive"],
        mako: ["Mako", "sans-serif"],
      },
      colors: {
        "text-primary": "#0D3167",
        "primary-dark":"#00E5A0"
      },
    },
  },
  plugins: [],
};
