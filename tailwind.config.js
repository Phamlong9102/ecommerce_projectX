
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js', 
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    backgroundImage: {
      'test': "url('../src/images/BannerImages/banner00.jpg')", 
    },
    screens: {
      '2xs': '375px', 
      'xs': '480px', 
      'sm': '640px', 
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px',
    }, 
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin'), ('flowbite/plugin')], 
}