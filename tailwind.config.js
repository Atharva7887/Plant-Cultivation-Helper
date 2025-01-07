/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'emerald': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          700: '#059669',
          900: '#064E3B',
        },
        'lime': {
          600: '#65A30D',
        }
      }
    },
  },
  plugins: [],
}