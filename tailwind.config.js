
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
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin'), ('flowbite/plugin')], 
}