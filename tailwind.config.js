/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          light: '#1D3E7C',
          dark: '#051A4F'
        },
        secondary: {
          DEFAULT: '#147D9D',
          light: '#1A97BF',
          dark: '#0E6A86'
        },
        accent: {
          DEFAULT: '#FF784F',
          light: '#FF8F6C',
          dark: '#E66A45'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669'
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706'
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626'
        }
      }
    },
  },
  plugins: [],
};