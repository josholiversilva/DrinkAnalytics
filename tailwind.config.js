module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        }
      },
      keyframes: {
        'pulse': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 1
          },
          '50%': {
            opacity: .5
          }
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out'
      }
    },
  },
  plugins: [],
}
