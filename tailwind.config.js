import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-black": "#0F0F0F",
        "neon-green": "#00E676",
        "card-green": "#00E676",
        "light-gray": "#F5F5F7",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "8px",
          medium: "12px",
          large: "16px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#F3F4F7",
            primary: {
              50: "#e6fff0",
              100: "#ccffe1",
              200: "#99ffc3",
              300: "#66ffa5",
              400: "#33ff87",
              500: "#00E676",
              600: "#00b85e",
              700: "#008a47",
              800: "#005c2f",
              900: "#002e18",
              DEFAULT: "#00E676",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
