module.exports = {
  theme: {
    extend: {
      keyframes: {
        ziggle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(5deg) scale(1.05)' },
          '50%': { transform: 'rotate(-5deg) scale(1.05)' },
          '75%': { transform: 'rotate(3deg) scale(1.03)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
      },
      animation: {
        ziggle: 'ziggle 0.6s ease-in-out',
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};