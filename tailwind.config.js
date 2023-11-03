/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            '8xl': '6rem',
            '6xl': '3.75rem',
            '5xl': '3rem',
            '3xl': '1.875rem',
            '2xl': '1.5rem',
            'xl' : '1.25rem',
            'xxs': '0.625rem',
            '3xs': '0.5rem',
            '5xs': '0.1rem',
        },
        colors: {
          theme: {
              background: '#18181B',
              font: '#474747',
          },
          primary: {
              yellow: '#FFE247',
              hotpink: '#FF3C76',
              teal: '#00ECC1',
              blue: '#1753F1',
              purple: '#946AFE',
              darkgray: '#18181B',
              whitegray: '#D9D9D9',
              logo: '#27334B',
              bg: '#474747',
              orange: '#E3834D',
              gray:'#747474'
          },
      },
    },
},
  plugins: [],
}

