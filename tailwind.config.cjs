/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightRed: "hsl(0, 100%, 67%)",
      lightRedBg: "hsla(0, 100%, 67%, 0.1)",
      orangeyYellow: "hsl(39, 100%, 56%)",
      orangeyYellowBg: "hsla(39, 100%, 56%, 0.1)",
      greenTeal: "hsl(166, 100%, 37%)",
      greenTealBg: "hsla(166, 100%, 37%, 0.1)",
      cobaltBlue: "hsl(234, 85%, 45%)",
      cobaltBlueBg: "hsla(234, 85%, 45%, 0.1)",
      lightSlateBlue: "hsl(252, 100%, 67%)",
      lightRoyalBlue: "hsl(241, 81%, 54%)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
      white: "hsl(0, 0%, 100%)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
    },
    extend: {
      fontSize: {
        fontSizeParagraph: "18px",
      },
      fontFamily: {
        hankenGroteskFont: ["Hanken Grotesk"],
      },
    },
  },
  plugins: [],
};
