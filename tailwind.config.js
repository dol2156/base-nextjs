/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  /*
  corePlugins: {
    preflight: false,
  },
  */
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        red: '#FF0000',
        lime: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00',
        cyan: '#00FFFF',
        magenta: '#FF00FF',
        silver: '#C0C0C0',
        gray: '#808080',
        maroon: '#800000',
        olive: '#808000',
        green: '#008000',
        purple: '#800080',
        teal: '#008080',
        navy: '#000080',
      },
    },
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      pc: '769px',
      lg: '1024px',
      xl: '1280px',
      pc2: '1440px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.RR': {
          outline: '1px dashed red!important;',
        },
        '.RRR > *': {
          outline: '1px dashed blue !important;',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
