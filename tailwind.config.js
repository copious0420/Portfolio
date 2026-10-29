/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './main.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#00C896',
          50: '#E6FBF5',
          300: '#4DDBB6',
          400: '#1FD1A3',
          500: '#00C896',
          600: '#00A57C',
          700: '#008262',
        },
        ink: {
          950: '#07090A',
          900: '#0B0E10',
          850: '#101417',
          800: '#151A1E',
          700: '#1F262B',
          600: '#2C353B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        glow: {
          '0%,100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        blink: 'blink 1.1s step-end infinite',
        glow: 'glow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
