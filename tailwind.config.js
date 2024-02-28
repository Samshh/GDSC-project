/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainbg: "#ffffff",
        blue: "#4285F4",
        green: "#34A853",
        yellow: "#FBBC05",
        red: "#EA4335",
        graygoogle: "#374151",
        black: "#161616",
      }
    },
  },
  plugins: [
    function ({addBase}) {
      addBase({
        'body::-webkit-scrollbar': { display: 'none', overflow: 'hidden' },
      });
    },
  ],
};
