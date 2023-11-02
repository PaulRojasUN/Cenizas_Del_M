/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FBBF24',
          600: '#F59E0B'
        }
      },
      fontFamily: {
        pixelcraft: ['PIXEL-CRAFT', 'sans-serif']
      }
    }
  },
  plugins: []
}
