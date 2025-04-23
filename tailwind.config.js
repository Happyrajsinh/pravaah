/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2647',
          light: '#144272',
          dark: '#051A35'
        },
        accent: {
          DEFAULT: '#FFB800',
          light: '#FFD000',
          dark: '#CC9200'
        }
      }
    },
  },
  plugins: [],
};