/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0c',
          soft: '#0d0d10',
        },
        surface: {
          DEFAULT: '#131316',
          2: '#1a1a1f',
          3: '#202027',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.14)',
        },
        ink: {
          DEFAULT: '#edeef0',
          muted: '#9a9ba3',
          faint: '#606169',
        },
        signal: {
          DEFAULT: '#6c8cff',
          soft: '#8fa5ff',
          dim: '#3d4b8f',
        },
        retrieval: {
          DEFAULT: '#2dd4bf',
          soft: '#5fe6d4',
        },
        agent: {
          DEFAULT: '#f5b95a',
          soft: '#f8cd85',
        },
        mern: {
          DEFAULT: '#c084fc',
          soft: '#d8a9fd',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,10,12,0) 0%, #0a0a0c 100%)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
