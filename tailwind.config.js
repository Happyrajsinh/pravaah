/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
          light: '#F3F4F6',
          dark: '#1F2937'
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