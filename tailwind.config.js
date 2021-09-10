module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Archivo', 'sans-serif'],
      },
      colors: {
        primary: '#4D13D1',
        'primary-100': '#CEC2F8',
        'primary-200': '#CEC3F9',
        'neutral-100': '#E0E0E0',
        'neutral-200': '#F3F3F4',
        'neutral-300': '#595959',
        white: '#FEFEFE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
