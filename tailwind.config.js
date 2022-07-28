module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : "#08A4A6",
        'light-green' : "#E2E7FE",
        'dark-blue' : "#091353",
        'light-brown' : "#A78364",
      },
      fontFamily : {
        'poppins' : ['Poppins'],
        'montserrat' : ['Montserrat'],
      },
      fontWeight : {
        'superbold' : 1000,
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ],
}