/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            './src/**/*.{js,jsx,ts,tsx}',
          ],
  theme : {
    extend: {
      borderRadius: {
        'outer': '50px',
        'inner': '45px',
      }
    },
    
  },
  plugins : [],
}
