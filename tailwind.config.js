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
        RED: '#FF0000',
        LIME: '#00FF00',
        BLUE: '#0000FF',
        YELLOW: '#FFFF00',
        CYAN: '#00FFFF',
        MAGENTA: '#FF00FF',
        SILVER: '#C0C0C0',
        GRAY: '#808080',
        MAROON: '#800000',
        OLIVE: '#808000',
        GREEN: '#008000',
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
