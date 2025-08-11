import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000', // Custom red color
        },
        orange: {
          DEFAULT: '#FF7F00', // Custom orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});