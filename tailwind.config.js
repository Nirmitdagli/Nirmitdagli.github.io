/**
 * NOTE: Tailwind is loaded via CDN in index.html to keep the build toolchain
 * dead-simple (no PostCSS pipeline needed). The theme extension lives inline
 * in index.html inside the `tailwind.config = { ... }` script block.
 *
 * This file mirrors that configuration so contributors can see the intended
 * palette / fonts / tokens in one place. It is not consumed by the current
 * build — if you later swap to compiled Tailwind, rename this to be active
 * and wire up postcss + @tailwindcss/cli, then delete the CDN <script> tag.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50:  '#fefefd',
          100: '#fafaf8',
          200: '#f5f5f0',
          300: '#ededE6',
          400: '#e1e1d8',
          500: '#c9c9bf',
        },
        ink: {
          900: '#1a1a1a',
          800: '#2a2a28',
          700: '#4a4a47',
          600: '#6b6b66',
          500: '#8a8a85',
          400: '#a8a8a3',
        },
        teal: {
          600: '#0d9488',
          700: '#0f766e',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
