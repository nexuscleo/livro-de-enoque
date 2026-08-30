/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#fef08a',
          DEFAULT: '#facc15',
          muted: '#ca8a04',
          dark: '#854d0e',
        },
        celestial: {
          bg: '#070a12',
          surface: '#0f172a',
          surfaceHover: '#1e293b',
          elevated: '#162036',
          sidebar: '#0a101f',
          input: '#0b1326',
        },
        mystic: {
          blue: '#38bdf8',
          blueDeep: '#0284c7',
          red: '#ef4444',
        }
      },
      fontFamily: {
        header: ['Cinzel', 'Georgia', 'serif'],
        deco: ['"Cinzel Decorative"', 'Georgia', 'serif'],
        body: ['Spectral', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 20px rgba(234, 179, 8, 0.22)',
        'gold-lg': '0 8px 30px rgba(234, 179, 8, 0.35)',
      },
      borderColor: {
        gold: 'rgba(234, 179, 8, 0.28)',
        'gold-bright': 'rgba(254, 240, 138, 0.55)',
      }
    },
  },
  plugins: [],
}

