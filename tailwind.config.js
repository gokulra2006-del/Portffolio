/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#000000',
          dark: '#0a0a0a',
          blue: '#00f0ff',
          green: '#39ff14',
          gray: '#1e1e1e',
          lightgray: '#2a2a2a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
