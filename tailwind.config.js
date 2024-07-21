/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            './src/*.{js,jsx,ts,tsx}', './public/index.html',
            './src/components/*.{js,jsx,ts,tsx}',
            './src/pages/*.{js,jsx,ts,tsx}'

          ],
  theme : {
    extend : {
      colors : {
        'powdery_pink' : '#F9F5F6',
        'light_pink' : '#F2BED1',
        'smokey_purple' : '#8A8AAA',
        'prompt_dark_purple' : '#985277',
        'prompt_light_purple' : '#CE6A85',
        'prompt_light_orange' : '#FAA275',
        'prompt_dark_orange' : '#FF8C61',
        'white_pink' : '#FCF2FA',
        'gold_rose' : '#D97E96',
        'dark_bg' : '#242633',
        'gray_bg' : '#434454'
      },
      borderRadius : {
        'outer' : '50px',
        'inner' : '45px',
      }
    },

  },
  plugins : [],
}
