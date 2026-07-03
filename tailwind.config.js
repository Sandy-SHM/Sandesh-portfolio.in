/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0C12',
        surface: '#12151F',
        surface2: '#191D2A',
        line: '#242938',
        ink: '#E7E9F0',
        muted: '#8A90A6',
        indigo: {
          DEFAULT: '#6C6BFF',
          soft: '#9E9DFF',
        },
        amber: {
          DEFAULT: '#F5A524',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,12,18,0) 0%, #0A0C12 85%), radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,107,255,0.15), transparent)',
      },
    },
  },
  plugins: [],
}
