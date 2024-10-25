/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlueElements: "hsl(209, 23%, 22%)", // Dark Mode Elements
        veryDarkBlueBg: "hsl(207, 26%, 17%)", // Dark Mode Background
        veryDarkBlueText: "hsl(200, 15%, 8%)", // Light Mode Text
        darkGrayInput: "hsl(0, 0%, 52%)", // Light Mode Input
        veryLightGrayBg: "hsl(0, 0%, 98%)", // Light Mode Background
        whiteText: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'bg': 'background-color',
        'text': 'color',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '10000' : '10000ms'
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
        'ease': 'ease',
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        bottom: "0 3px 3px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
