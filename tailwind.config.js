/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      blueMagenta: {
        100: '#F2F0FF',
        200: '#D9D4FF',
        300: '#BFB8FF',
        400: '#A59CFF',
        500: '#8B80FF',
        600: '#7164FF',
        700: '#5748FF',
        800: '#3D2CFF',
        900: '#2310FF',
      },
      greyPink: {
        100: '#FFFFFF',
        200: '#FBF9FA',
        300: '#F7F3F5',
        400: '#F3F1F2',
        500: '#EFEFF0',
        600: '#E5E3E4',
        700: '#DBD7D8',
        800: '#D1CBCD',
        900: '#C7BFC2',
      }
    }
  },
  plugins: [],
}

