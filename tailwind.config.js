/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,vue,js,jsx,ts,tsx}'],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-blue': '#00f3ff',
        'tech-blue-dim': 'rgba(0, 243, 255, 0.1)',
        'metal-dark': '#1a1b1e',
        'metal-mid': '#2c2e33',
        'metal-light': '#4a4d55',
        'neon-alert': '#ff2a6d',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      backgroundImage: {
        'brushed-metal':
          'repeating-linear-gradient(90deg, hsla(0,0%,100%,0) 0, hsla(0,0%,100%,0.03) 1px, hsla(0,0%,0%,0) 2px, hsla(0,0%,0%,0.03) 3px), radial-gradient(circle at center, #4b5563 0%, #111827 100%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
