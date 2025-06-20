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
        },
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe7',
          300: '#a9bdd3',
          400: '#7b98bb',
          500: '#5a7aa3',
          600: '#476288',
          700: '#3b4f6f',
          800: '#34445d',
          900: '#2f3b4f',
          950: '#1f2736'
        }
      }
    },
  },
  plugins: [],
};