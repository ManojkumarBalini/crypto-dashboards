/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          gradient: {
            start: '#667eea',
            end: '#764ba2',
          },
          premium: {
            gold: '#fbbf24',
            silver: '#e5e7eb',
            bronze: '#f59e0b',
          },
          positive: "#10b981",
          negative: "#ef4444",
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.6s ease-out',
          'fade-in-down': 'fadeInDown 0.6s ease-out',
          'slide-in-left': 'slideInLeft 0.5s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
          'bounce-in': 'bounceIn 0.8s ease-out',
          'pulse-soft': 'pulseSoft 2s infinite',
          'float': 'float 3s ease-in-out infinite',
          'shimmer': 'shimmer 2s infinite',
          'gradient-shift': 'gradientShift 3s ease infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          bounceIn: {
            '0%': { transform: 'scale(0.3)', opacity: '0' },
            '50%': { transform: 'scale(1.05)' },
            '70%': { transform: 'scale(0.9)' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          pulseSoft: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.7' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200px 0' },
            '100%': { backgroundPosition: '200px 0' },
          },
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'premium-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        },
        boxShadow: {
          'premium': '0 20px 40px rgba(0, 0, 0, 0.1)',
          'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
          'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        }
      },
    },
    plugins: [],
  }