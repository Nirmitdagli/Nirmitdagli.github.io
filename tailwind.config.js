export default {
        content: ['./index.html', './src/**/*.{js,jsx}'],
        theme: {
          extend: {
            colors: {
              paper: {
                50: '#0b1422',
                100: '#101c2e',
                200: '#0b1422',
                300: '#1a2a40',
                400: '#283b54',
                500: '#405573',
              },
              ink: {
                900: '#f2f6fc',
                800: '#dce5f1',
                700: '#b5c2d5',
                600: '#a0b0c6',
                500: '#8da0bb',
                400: '#778ca7',
              },
              teal: {
                50:  '#f0fdfa',
                100: '#ccfbf1',
                200: '#99f6e4',
                300: '#5eead4',
                400: '#2dd4bf',
                500: '#14b8a6',
                600: '#0d9488',
                700: '#0f766e',
                800: '#115e59',
                900: '#134e4a',
              },
              amber: {
                50:  '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
                700: '#b45309',
              },
            },
            fontFamily: {
              display: ['"Space Grotesk"', 'Manrope', 'sans-serif'],
              sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
              mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            boxShadow: {
              soft: '0 1px 2px rgba(20,20,20,0.04), 0 4px 16px rgba(20,20,20,0.04)',
              lift: '0 2px 4px rgba(20,20,20,0.04), 0 12px 32px rgba(20,20,20,0.06)',
              glow: '0 0 0 1px rgba(13,148,136,0.08), 0 8px 32px rgba(13,148,136,0.10)',
            },
            backgroundImage: {
              'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.045 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            },
            keyframes: {
              blink: {
                '0%, 50%': { opacity: '1' },
                '51%, 100%': { opacity: '0' },
              },
            },
            animation: {
              blink: 'blink 1s step-end infinite',
            },
          },
        },
      };
