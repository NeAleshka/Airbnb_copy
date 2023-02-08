/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'mobile-3': 'auto auto auto',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({nocompatible: true})],
};
