/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fffef9",
          "200": "#8d8d8d",
          "300": "#808080",
        },
        burlywood: "#ecbc76",
        indianred: "#c6553b",
        black: "#000",
        white: "#fff",
        oldlace: "#fff4e3",
        antiquewhite: "#e6dbc9",
        darkgoldenrod: "#b87514",
        darkgray: {
          "100": "#adadad",
          "200": "#ababab",
        },
        darkorange: "#e48700",
        chocolate: {
          "100": "#cc6e00",
          "200": "#c96e00",
        },
        firebrick: "#ad3113",
        dodgerblue: "#4285f4",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      borderRadius: {
        "21xl": "40px",
        "4xs": "9px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      smi: "13px",
      sm: "14px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
