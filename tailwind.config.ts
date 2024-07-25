import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '.9375rem',
      screens: {
        sm: '40rem',
        md: '48rem',
        lg: '60rem',
        xl: '75rem',
      },
    },
    fontFamily: {
      primary: 'var(--font-jetbrainsMono)',
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
          100: '#efe9fe',
          200: '#e2d6fe',
          300: '#cbb5fd',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
