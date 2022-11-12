/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
      extend: {
        container: {
          center: true,
        },
        colors: {
          primary: "#0078C2",
          secondary: "#1D242A",
          offwhite: "#E5F7FF",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          libre: ["'Libre Baskerville'", "serif"],
          code: ["Source Code Pro", "monospace"],
        },
        animation: {
          marquee: "move-to-left 32s linear infinite",
        },
        keyframes: {
          "move-to-left": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        },
      },
    },
    plugins: [],
  };
  