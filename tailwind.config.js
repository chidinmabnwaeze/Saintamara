/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14284D',
          deep: '#0E1E3D',
          soft: '#1E3A66',
        },
        gold: {
          DEFAULT: '#B4863B',
          soft: '#C9A55C',
          pale: '#E7D6AC',
        },
        ivory: '#FAF7F1',
        stone: '#EFE9DD',
        muted: '#5C6270',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Mulish', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      letterSpacing: {
        label: '0.22em',
      },
      maxWidth: {
        content: '72rem',
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawArc: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
