/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'toto-som-ja': "url('/src/ja.jpg')"
      }
    },
  },
  plugins: [],
}

