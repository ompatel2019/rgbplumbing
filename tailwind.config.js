/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./script/*.js", 
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#00A3E0", // Solid light blue
        color2: "#4D4D4D", // Solid dark gray
        color3: "#A6A6A6", // Solid light gray
      },
      backgroundImage: {
        'color4-gradient': 'linear-gradient(to bottom, #4FA8D8, #FFFFFF)', // Gradient light blue to white
        'color5-gradient': 'linear-gradient(to bottom right, #4F4F4F, #000000)', // Gradient dark gray to black
        'color6-gradient': 'linear-gradient(to bottom right, rgba(77, 77, 77, 0.85), rgba(0, 0, 0, 0.85))', // Gradient dark gray to black with reduced opacity
      },
      backgroundClip: {
        'text': 'text', // For gradient text
      },
      textFillColor: {
        'transparent': 'transparent', // For gradient text
      },
      fontSize: {
        'h1': '89.76px',
        'h2': '67.34px',
        'h3': '50.52px',
        'h4': '37.9px',
        'h5': '28.43px',
        'h6': '21.33px',
        'p': '16px',
        'small': '12px',
        'xs': '9px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
};
