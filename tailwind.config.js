/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "kelly-slab":["'Kelly Slab'","sans-serif"]
      }
    },
    colors:{
    "text-primary":"#0D3167"
    }
  },
  plugins: [],
}