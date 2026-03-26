/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#BF4E24',
        primaryContent: '#591C0E',
        primarySubContent: '#591C0E',
        primaryBase: '#40170E',
        primaryAccent: '#BF5E26',
        primaryBg: '#F2F0D8',
      }
    },
  },
  plugins: [],
}