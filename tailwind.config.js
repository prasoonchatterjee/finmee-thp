/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    // fontSize: {
    //   sm: '0.7rem',
    //   base: '0.9rem',
    //   l: '1rem',
    // },  
    extend: {
      colors: {
        borderColor: '#79828e',
        redOrange: '#ff3a2d'
      },
      
    },
  },
  plugins: [],
};
