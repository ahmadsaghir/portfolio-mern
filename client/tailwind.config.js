/** @type {import('tailwindcss').Config} */
import tailwindscrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['inter', 'sans-serif'],
      },
      transitionProperty: {
        'filter': 'filter',
      },
    },
  },
  plugins: [tailwindscrollbar()],
}