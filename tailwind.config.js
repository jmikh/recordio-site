/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Satoshi', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: 'oklch(0.58 0.19 290)',
                'primary-muted': 'oklch(0.48 0.15 290)',
                'primary-highlighted': 'oklch(0.68 0.21 290)',
                'primary-disabled': 'oklch(0.38 0.12 290)',
                secondary: 'oklch(0.80 0.15 78)',
                'secondary-highlighted': 'oklch(0.85 0.18 78)',
                'surface-body': 'oklch(0.12 0.02 290)',
                'surface': 'oklch(0.16 0.03 290)',
                'surface-raised': 'oklch(0.20 0.04 290)',
                'surface-overlay': 'oklch(0.24 0.05 290)',
                'text-highlighted': 'oklch(0.95 0.01 290)',
                'text-main': 'oklch(0.88 0.02 290)',
                'text-muted': 'oklch(0.65 0.03 290)',
                'text-on-primary': 'oklch(0.98 0.01 290)',
                'text-on-secondary': 'oklch(0.12 0.02 78)',
                'border': 'oklch(0.30 0.05 290)',
                'border-highlighted': 'oklch(0.40 0.08 290)',
            },
        },
    },
    plugins: [],
}
