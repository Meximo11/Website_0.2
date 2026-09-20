/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ember: '#ff5924',
        blush: '#fff1f1',
        canvas: '#f9fafc',
        ink: '#000000',
        slateDeep: '#3a475a',
        storm: '#4a5465',
        steel: '#717286',
        ash: '#afb5c1',
        sage: '#dde9d3',
        slateBlue: '#e5eaf2',
        parchment: '#f3f0e7',
        mist: '#e2e2e2',
        cobalt: '#1573dd'
      },
      fontFamily: {
        louize: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
