/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {},
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'pc': '769px',
      'lg': '1024px',
      'xl': '1280px',
      'pc2': '1440px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
  },
}
