/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#121212",
        "surface-highlight": "#1c1c1c",
        "surface-container": "#2B2930",
        primary: "#b7eab9",
        "primary-dark": "#2e7d32",
        secondary: "#a8c7fa",
        "secondary-dark": "#003158",
        tertiary: "#fde293",
        "tertiary-dark": "#3e2723",
        "tonal-blue": "#c2e7ff",
        "tonal-pink": "#ffd8e4",
        "tonal-grey": "#232a31",
        divider: "#333333",
        "text-primary": "#e3e3e3",
        "text-secondary": "#c4c7c5",
        "success": "#4CAF50",
        "error": "#B00020",
      },
      fontFamily: {
        sans: ["System", "sans-serif"],
      },
      borderRadius: {
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
