/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface': 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        'green-dark': 'var(--color-green-dark)',
        'green-primary': 'var(--color-green-primary)',
        'green-light': 'var(--color-green-light)',
        'yellow-safety': 'var(--color-yellow-safety)',
        'yellow-dark': 'var(--color-yellow-dark)',
        'yellow-light': 'var(--color-yellow-light)',
        'ink': 'var(--color-ink)',
        'border-base': 'var(--color-border)',
        'panel-feature': 'var(--color-panel-feature)',
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Barlow"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};
