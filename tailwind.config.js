/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: "hsl(14, 45%, 36%)",
          darkraspberry: "hsl(332, 51%, 32%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          rosewhite: "hsl(330, 100%, 98%)",
          eggshell: "hsl(30, 54%, 90%)",
          lightgrey: "hsl(30, 18%, 87%)",
          wengebrown: "hsl(30, 10%, 34%)",
          darkcharcoal: "hsl(24, 5%, 18%)",
        },
      },
    },
    fontFamily: {
      youngSerif: ["Young Serif", "serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    fontSize: {
      paragraph: "16px",
    },
    screens: {
      sm: "375px",
      md: "640px",
      lg: "748px",
      xl: "1024px",
      "2xl": "1280px",
      "4xl": "1440px",
    },
  },
  plugins: [],
};
