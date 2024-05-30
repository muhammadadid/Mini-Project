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
          "400": "rgba(0, 0, 0, 0.8)",
          "500": "rgba(0, 0, 0, 0.4)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        white: "#fff",
        oldlace: "#fff4e3",
        antiquewhite: "#e6dbc9",
        darkgoldenrod: "#b87514",
        darkgray: {
          "100": "#adadad",
          "200": "#ababab",
          "300": "#ada7a7",
        },
        darkorange: "#e48700",
        chocolate: {
          "100": "#cc6e00",
          "200": "#c96e00",
        },
        firebrick: "#ad3113",
        black: "#000",
        dodgerblue: {
          "100": "#4a85f6",
          "200": "#4285f4",
          "300": "#0095ff",
          "400": "rgba(65, 130, 249, 0.1)",
        },
        burlywood: "#ecbc76",
        indianred: "#c6553b",
        "neutral-20": "#f5f5f5",
        dimgray: "#717171",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f7f7f7",
        },
        aliceblue: "#eff4fa",
        darkslategray: {
          "100": "#3e435d",
          "200": "#404040",
          "300": "#222b45",
        },
        lightslategray: "#8f9bb3",
        deepskyblue: "#1aadff",
        "neutral-70": "#757575",
        "neutral-100": "#0a0a0a",
        peru: "#ba8a42",
        "text-3-": "#86909c",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "body-2-regular": "'Open Sans'",
        "hachi-maru-pop": "'Hachi Maru Pop'",
      },
      borderRadius: {
        "21xl": "40px",
        "4xs": "9px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      sm: "14px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      xl: "20px",
      "2xs-8": "10.8px",
      xs: "12px",
      mini: "15px",
      mid: "17px",
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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