/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1729',
          light: '#1A2744',
        },
        blue: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        yellow: {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#F59E0B',
        },
        'off-white': '#F8FAFC',
        cream: '#FEFCE8',
        'text-primary': '#0F1729',
        'text-secondary': '#64748B',
        'text-muted': '#94A3B8',
        border: '#E2E8F0',
        'border-light': '#F1F5F9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-erode)', 'Erode', 'Georgia', 'serif'],
        display: ['var(--font-erode)', 'Erode', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h2: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['1.75rem', { lineHeight: '1.2' }],
        h4: ['1.25rem', { lineHeight: '1.3' }],
        body: ['1.125rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '8rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
      },
      boxShadow: {
        'blue': '0 10px 40px -10px rgba(37, 99, 235, 0.3)',
        'yellow': '0 10px 40px -10px rgba(251, 191, 36, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};