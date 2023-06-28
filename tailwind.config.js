/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['pretendard'],
        BRBA_B: ['BRBA_B'],
        NeoDunggeunmoPro: ['NeoDunggeunmoPro'],
      },
    },
  },
  plugins: [],
};
