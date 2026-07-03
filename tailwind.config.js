/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F1F2F5',
        paper2: '#FFFFFF',
        ink: '#14171F',
        muted: '#6B7280',
        line: '#DBDEE4',
        term: '#12141B',
        termLine: '#262A36',
        termText: '#D7DAE2',
        type: {
          DEFAULT: '#2F5DE3',
          soft: '#5E82EE',
        },
        verified: '#1F9D63',
        pending: '#C97A1D',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
