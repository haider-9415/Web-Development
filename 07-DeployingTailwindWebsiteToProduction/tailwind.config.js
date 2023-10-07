/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: '400px' //if screen is of 400px or greater than it then it will work
    },
    extend: {
      spacing: {
        13:'3.2rem'
      },
      fontSize: {
        '10xl': '9rem'
      },
    },
  },
  plugins: [],
}

