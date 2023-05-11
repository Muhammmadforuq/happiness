/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'spartan':['League Spartan', 'sans-serif'],
        'fjalla-one':['Fjalla One', 'sans-serif']
      },
      fontSize:{
        'xsx':"0.6897rem",
        'small':"0.8125rem",
        '4xs':"2rem",
        '3xs':"2.0862rem"
      },
      colors:{
        brand:{
          "dark":"#09112E",
          "gray":"#4B4C75",
          "sky-blue":"#32B2C1",
          "dark-gray":"#E8EEFA",
          "stone":"#EAEFFD"

        }
      },
      backgroundImage:{
        'increa-box':"linear-gradient(332.52deg, rgb(177 195 255 / 20%) 1.43%, rgb(82 243 229 / 20%) 99.44%)",
        'boy': "url('../image/boy.png')",
      },
      boxShadow:{
        base:"0px 8px 33px rgba(31, 65, 106, 0.09)",
        smaile:"0px 4.70588px 18.2353px rgba(49, 199, 191, 0.46)"
      },
      dropShadow:{
        boy:"0px 4px 29px rgba(12, 37, 66, 0.12)"
      }
    },
  },
  plugins: [],
}

