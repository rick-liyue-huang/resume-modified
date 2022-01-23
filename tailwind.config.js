module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'rick-font': ['Righteous',],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b1e',
          200: '#16181d',
          500: '#0f1115',
          700: '#1B1E20'
        }
      }
    },
    boxShadow: {
      'custom-light': '0 0 10px #515151',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c'
    }
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  }
}
