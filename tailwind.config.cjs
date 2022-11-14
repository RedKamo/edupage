/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freeSans: ["FreeSans", "sans-serif"]
      },
      backgroundImage: {
        'backedu': "url('/bgedu.png')",

      },
      colors: {
        'pink-custom': "#FE90E7",
        'yellow-custom': "#FEC900",
        'marine-custom': "#3FBBB0",
        'blue-custom': "#009CFF",
        'green-custom': "#7FBC8C",
        'red-custom': "#FF005C",
        'skin-1': "#F3CEB4",
        'text-shadow': "#676767",
        'change-back': '#FFFAE9',
      }
    },
  },
  plugins: [],
}
