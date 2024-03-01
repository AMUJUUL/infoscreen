/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'stiletto': {
          50: '#FFE0E0',
          100: '#FFC2C2',
          200: '#FF8585',
          300: '#FF4747',
          400: '#F31616',
          500: '#CC0000',
          600: '#AD0000',
          700: '#8F0000',
          800: '#700000',
          900: '#520000'
        },
        'rhino': {
          50: '#E2EEF8',
          100: '#C1DAF1',
          200: '#86B8E4',
          300: '#4894D5',
          400: '#276DAA',
          500: '#19476E',
          600: '#143857',
          700: '#0F2B43',
          800: '#0A1D2E',
          900: '#050D15'
        },
        'outer-space': {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cccdce',
          300: '#adafb1',
          400: '#707476',
          500: '#33383b',
          600: '#2e3235',
          700: '#262a2c',
          800: '#1f2223',
          900: '#191b1d'
        }
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'cairo': ['Cairo'],
      },
    },
  },
  plugins: [],
}

