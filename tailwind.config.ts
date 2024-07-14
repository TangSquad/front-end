/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
      letterSpacing: {
        lt: '-0.3px',
        rg: '-0.3px',
        md: '-0.2px',
        bd: '-0.1px',
      },
      fontSize: {
        xxsm: '12px',
        xsm: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xlg: '28px',
        xxlg: '32px',
      },
      lineHeight: {
        xxsm: '28px',
        xsm: '32px',
        sm: '35px',
        md: '45px',
        lg: '45px',
        xlg: '50px',
        xxlg: '50px',
      },
      spacing: {  // paragraph spacing
        xxlg: '5px',
      },
    },
  },
  plugins: [],
};

export default config;