module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1142px',
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#12022F',
      indigo: '#594D6D',
      yellow: '#FFDDA9',
      gray: '#E7E5EA',
      violet: '#391484',
    },
    extend: {},
  },
  plugins: [],
}
