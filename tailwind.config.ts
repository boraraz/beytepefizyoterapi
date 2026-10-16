import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141416',
        coal: '#1c1c1f',
        mist: '#f7f6f8',
        lime: '#d3ef80',
        // Soft pink palette
        pink: '#ef8fbc', // primary accent (buttons)
        pinkDeep: '#d9609a', // accent text on light backgrounds
        pinkSoft: '#f8c9dd', // tags / borders
        pinkPale: '#fdeff5', // section tint
        blush: '#fff7fa', // very light bg
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 40px rgba(239, 143, 188, 0.45)',
        soft: '0 20px 60px rgba(20, 20, 22, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config
