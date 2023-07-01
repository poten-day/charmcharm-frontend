/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary500: '#5E31FE',
      primary100: '#EFEBFF',
      gray900: '#1B1B1B',
      gray500: '#AAA',
      gray200: '#F1F1F1',
      black: '#000000',
      white: '#FFFFFF',
      system: '#CD3440',
    },
    fontSize: {
      baseReguler: ['14px', { lineHeight: '140%' }],
      baseMedium: ['14px', { lineHeight: '140%', fontWeight: 500 }],
      baseSemibold: ['14px', { lineHeight: '130%', fontWeight: 600 }],
      lgReguler: ['18px', { lineHeight: '140%' }],
      lgMedium: ['18px', { lineHeight: '140%', fontWeight: 600 }],
      lgSemibold: ['18px', { lineHeight: '130%', fontWeight: 500 }],
      xlReguler: ['20px', { lineHeight: '140%' }],
      xlMedium: ['20px', { lineHeight: '140%', fontWeight: 500 }],
      xlSemibold: ['20px', { lineHeight: '130%', fontWeight: 600 }],
      h1: ['48px', { lineHeight: '110%' }],
      h2: ['32px', { lineHeight: '110%' }],
      h3: ['20px', { lineHeight: '130%' }],
      smTimer: ['16px', { lineHeight: '16px' }],
      lgTimer: ['40px', { lineHeight: '70px' }],
    },
    extend: {
      fontFamily: {
        pretendard: ['pretendard', 'Arial', 'system-ui', 'sans-serif'],
        BRBA_B: ['BRBA_B', 'pretendard', 'Arial', 'system-ui', 'sans-serif'],
        NeoDunggeunmoPro: ['NeoDunggeunmoPro', 'Arial', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.border-1-gray200': {
          border: '1px solid',
          borderColor: theme('colors.gray200'),
        },
        '.border-1-gray900': {
          border: '1px solid',
          borderColor: theme('colors.gray900'),
        },
      });
    }),
  ],
};
