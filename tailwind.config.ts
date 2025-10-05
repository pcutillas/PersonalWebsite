import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    blue: '#00d4ff',
                    purple: '#b57cff',
                    pink: '#ff6ec7',
                    green: '#00ffa3',
                },
            },
            fontFamily: {
                sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'shimmer': 'shimmer 3s linear infinite',
                'gradient': 'gradient 15s ease infinite',
                'slide-up': 'slideUp 0.8s ease-out',
                'fade-in': 'fadeIn 1s ease-out',
                'spin-slow': 'spin 20s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(5deg)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 60px rgba(181, 124, 255, 0.2)' },
                    '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.5), 0 0 100px rgba(181, 124, 255, 0.3)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
export default config
