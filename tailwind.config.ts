/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './constants/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5A8CFF",
          100: "#E4ECFF",
          200: "#B0C8FF",
          300: "#8BAEFE",
          500: "#3371FF",
          600: "#0A54FF",
          700: "#003BC3",
          800: "#00206B",
        },
        secondary: {
          DEFAULT: "#FFD65B",
          100: "#FFF6DB",
          200: "#FFEEBB",
          300: "#FFE188",
          500: "#FFCF3D",
          600: "#FFC105",
        },
        gray: {
          100: "#EEF1F6",
          200: "#E5E9F1",
          300: "#CED4DF",
          400: "#B1B9C9",
          500: "#8991A4",
          600: "#747C8F",
          700: "#575E70",
          800: "#3B414E",
        },
        black: "#151820",
      },
      fontFamily: {
        lt: ['SpoqaHanSansNeo-Light', 'sans-serif'],
        rg: ['SpoqaHanSansNeo-Regular', 'sans-serif'],
        md: ['SpoqaHanSansNeo-Medium', 'sans-serif'],
        bd: ['SpoqaHanSansNeo-Bold', 'sans-serif'],
      },
      letterSpacing: {  // tracking
        lt: '-0.3px',
        rg: '-0.3px',
        md: '-0.2px',
        bd: '-0.1px',
      },
      fontSize: { // text
        xxxsm: '10px',
        xxsm: '12px',
        xsm: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xlg: '28px',
        xxlg: '32px',
      },
      lineHeight: { // leading
        xxxsm: '24px',
        xxsm: '20px',
        xsm: '24px',
        sm: '26px',
        md: '32px',
        lg: '32px',
        xlg: '40px',
        xxlg: '50px',
      },
      spacing: {
        'fit': 'fit-content',
        5: '5px',
        9: '9px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        24: '24px',
        70: '70px',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        30: '20px',
        50: '50px',
        60: '60px',
      },
    },
  },
  plugins: [],
};
