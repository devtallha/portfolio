import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                },
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                'roboto-flex': ['var(--font-roboto-flex)'],
            },
            fontSize: {
                /* Editorial display sizes */
                'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
                'display-lg': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
                'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
            },
            spacing: {
                section: '7rem',
                'section-sm': '4rem',
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    xl: '1200px',
                    '2xl': '1200px',
                },
            },
            transitionDuration: {
                '7000': '7s',
            },
            screens: {
                xs: '420px',
            },
            letterSpacing: {
                widest: '0.2em',
                editorial: '0.08em',
            },
        },
    },
    plugins: [
        tailwindAnimate,
        require('@tailwindcss/typography')({
            className: 'prose',
        }),
    ],
} satisfies Config;
