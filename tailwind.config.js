/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "carrot": "#FF785B"
      },
      boxShadow: {
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow
        'custom-heavy': '0 10px 20px rgba(0, 0, 0, 0.25)', // Heavy shadow
      },
    },
  },
  plugins: [],
}