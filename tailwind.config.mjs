/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: '#FBFBF7',
        ivory: '#F4F4ED',
        ink: '#0E120E',
        'ink-soft': '#3A413A',
        'ink-faint': '#737A72',
        line: '#E4E5DC',
        green: '#27B529',
        'green-deep': '#1A8C1C',
        'green-bright': '#34CF36',
        'green-tint': '#EAF7EA',
        lime: '#D6F25A',
        'lime-soft': '#F0F8D4',
        glass: 'rgba(255, 255, 255, 0.12)',
        'glass-strong': 'rgba(255, 255, 255, 0.22)',
        'glass-border': 'rgba(255, 255, 255, 0.35)',
        'glass-border-strong': 'rgba(255, 255, 255, 0.55)',
      },
      fontFamily: {
        sans: ["'Familjen Grotesk'", 'system-ui', 'sans-serif'],
        display: ["'Bricolage Grotesque'", 'system-ui', 'sans-serif'],
        hand: ["'Caveat'", 'cursive'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.2s ease-in-out infinite',
        'marquee': 'marquee 42s linear infinite',
        'marquee-rev': 'marqueeRev 50s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.45', transform: 'scale(.72)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};