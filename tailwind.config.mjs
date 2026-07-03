/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        deep: '#0E2732',
        'deep-2': '#0A1E27',
        mist: '#7FA6A0',
        foam: '#EFF3EE',
        amber: '#F2A73B',
        'amber-light': '#FFC369',
        coral: '#E1594F',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Literata', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'pulse-beacon': 'pulseBeacon 2.6s ease-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
      keyframes: {
        pulseBeacon: {
          '0%': { boxShadow: '0 0 0 0 rgba(242,167,59,0.45)' },
          '70%': { boxShadow: '0 0 0 9px rgba(242,167,59,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(242,167,59,0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
