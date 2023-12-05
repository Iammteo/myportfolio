/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-darkest': '#010101',
        'custom-dark' :'#727272',
     },
    },
  },
  plugins: [ 
    
  ],
}