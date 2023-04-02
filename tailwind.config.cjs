/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
        "quart": ["Quart", "sans-serif"],
        "IBM": ['IBM Plex Mono', "monospace"],
      },
      transitionTimingFunction: {
        "snap": "cubic-bezier(.3,.82,0,1.5)"
      }
    }
  },
  plugins: [],
}
