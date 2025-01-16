/** @type {import('tailwindcss').Config} */

import tailwindscrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'sans': ['inter', 'sans-serif'],
      transitionProperty: {
        'filter': 'filter',  // Add filter to transition
      },
    },
  },
  plugins: [tailwindscrollbar()],
}
