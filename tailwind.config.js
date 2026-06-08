/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#f4f2ed',
        'paper-2': '#eceae3',
        line: '#cfccc4',
        'line-dark': '#2a2a2a',
        muted: '#8a8780',
        signal: '#e8480f',
        'signal-dark': '#c43c0c',
        tag: '#dedbd2',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        offset: '6px 6px 0 #0a0a0a',
        'offset-sm': '4px 4px 0 #0a0a0a',
        'offset-signal': '6px 6px 0 #e8480f',
      },
      maxWidth: {
        site: '1180px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        bob: 'bob 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
