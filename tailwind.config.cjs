/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
        "quart": ["Quart", "sans-serif"]
      },
      transitionTimingFunction: {
        
      }
    },
  },
  plugins: [],
}
