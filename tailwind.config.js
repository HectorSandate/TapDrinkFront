// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FBBF24', // Yellow-400
          500: '#F59E0B', // Yellow-500
          600: '#D97706', // Yellow-600
        }
      },
      inset: {
        '1/2': '50%',
      },
      height: {
        '50vh': '50vh',
      },
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        'full': '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
