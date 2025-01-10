/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f1fa",
          100: "#f0eaf8",
          200: "#e0d3f0",
          300: "#9b72cf",
          400: "#8c67ba",
          500: "#7c5ba6",
          600: "#74569b",
          700: "#5d447c",
          800: "#46335d",
          900: "#362848"
        },

        Danger: {
          50: "#FF6868",
          100: "#FF3434"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
