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
        },
        script: {
          200: '#2f8ebd'
        }
      },
      fontFamily: {
        pixelcraft: ['PIXEL-CRAFT', 'sans-serif'],
        presstart: ['PRESS-START-2P', 'sans-serif']
      }
    }
  },
  plugins: []
}
