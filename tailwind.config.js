/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fef3e6', // Very light orange
          200: '#fee4cc',
          300: '#fdce99',
          400: '#fdb366',
          500: '#eb9036', // Default orange
          600: '#d9771b',
          700: '#b06014',
          800: '#8f4b10',
        },
        secondary: {
          100: '#e6f7f5', // Very light teal
          200: '#b8ebe8',
          300: '#8cdedb',
          400: '#5fcfcf',
          500: '#0d9488', // Default teal
          600: '#0a7c73',
          700: '#07605b',
          800: '#054844',
        },
        buttonColor: '#eb9036',
        textColor: '#000000',
        textColorDark: '#ffffff',
      },
      width: {
        700: '700px',
      },
      height: {
        700: '700px',
      },
      minHeight: {
        550: '550px',
        650: '650px',
      },
      backgroundImage: {
        'footer': "url('https://thumbs.dreamstime.com/b/background-city-skyline-silhouette-cityscape-landscape-footer-312086496.jpg')",
      }
    },
  },
  plugins: [],
}