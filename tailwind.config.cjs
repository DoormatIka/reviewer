const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
        "IBM": ['IBM Plex Mono', "monospace"],
        "hattonb": ["Hatton B", "serif"]
      },
      transitionTimingFunction: {
        "snap": "cubic-bezier(.3,.82,0,1.5)"
      }
    },
    colors: Object.assign({
      "midnight": "#231f20",
      "milk": "#fbfaf9",
    }, colors)
  },
  plugins: [],
}
