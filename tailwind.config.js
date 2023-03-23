/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize:{
      xs:'0.75rem',
      sm:'1rem',
      base:'1.2rem',
      lg:'1.125rem',
      xl:'1.25rem',
      xxl:'1.5rem',
      xxxl:'1.875rem',

    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightred:'hsl(12,88%,59%)',
        lightred:'hsl(12,88%,69%)',
        brightredsublight:'hsl(12,88%,95%)',
        darkblue:'hsl(228,39%,23%)',
        darkgrayishblue:'hsl(227,12%,67%)',
        varydarkblue:'hsl(233,12%,13%)',
        verypalered:'hsl(13,100%,96)',
        verylightgray:'hsl(0,0%,98%)',
        textgray:'#777',
        textblack:'#000',
        textwhite:'#fff'
      },
    },
  },
  plugins: [],
}
